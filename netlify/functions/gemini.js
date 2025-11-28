// api/gemini.js

// Using require for maximum compatibility in Vercel's Node.js environment
const dotenv = require('dotenv');
dotenv.config();

const MODEL_NAME = 'gemini-2.5-flash-preview-09-2025'; 

// This function must be exported using module.exports when using CommonJS
module.exports = async function handler(req, res) {
    // Set headers to allow cross-origin requests locally
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    // Check for API Key in environment variables
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
        console.error("GEMINI_API_KEY is missing or invalid in .env file.");
        return res.status(500).json({ error: "Server configuration error: GEMINI_API_KEY is not set." });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const googleApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
    
    try {
        // Forward the client's payload
        const geminiResponse = await fetch(googleApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body) 
        });

        // Get data from Gemini response
        const data = await geminiResponse.json();

        // Pass the status and response body back to the client
        res.status(geminiResponse.status).json(data);

    } catch (error) {
        // This catches network issues or JSON parsing failures in the proxy
        console.error('Proxy Function Crash Error:', error);
        res.status(502).json({ error: "Proxy failed to connect to Gemini API or handle response." });
    }
}