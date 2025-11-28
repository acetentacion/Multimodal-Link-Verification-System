// netlify/functions/gemini.js

// 1. Dependencies: We don't need 'dotenv' here as Netlify handles process.env
// 2. Fetch: We rely on Node.js/Netlify's native global 'fetch' function (which is standard now)

const MODEL_NAME = 'gemini-2.5-flash-preview-09-2025'; 

// Netlify uses a standard function handler signature
exports.handler = async function(event, context) {
    
    // Netlify functions use event.body instead of req.body
    let reqBody;
    try {
        // Handle incoming JSON body
        reqBody = JSON.parse(event.body);
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Invalid JSON in request body." })
        };
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
        console.error("GEMINI_API_KEY is not set in Netlify Environment Variables.");
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Server configuration error: GEMINI_API_KEY is missing." })
        };
    }

    const googleApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
    
    try {
        // Use the global fetch function
        const geminiResponse = await fetch(googleApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody) 
        });

        const data = await geminiResponse.json();

        // Return the response in the required Netlify function format
        return {
            statusCode: geminiResponse.status,
            body: JSON.stringify(data),
            headers: {
                // Ensure CORS is allowed for your domain
                'Access-Control-Allow-Origin': '*', 
                'Content-Type': 'application/json'
            }
        };

    } catch (error) {
        console.error('Netlify Function Crash Error:', error);
        return {
            statusCode: 502,
            body: JSON.stringify({ error: "Proxy failed to connect to Gemini API or handle response." })
        };
    }
}