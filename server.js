// server.js
const express = require('express');
const bodyParser = require('body-parser');

// Load your proxy logic using a relative path that works for Node.js
// Ensure api/gemini.js is using 'require' (CommonJS) for its dependencies
const proxyHandler = require('./api/gemini.js'); 

const app = express();
const port = 3000;

// Middleware setup
app.use(bodyParser.json());

// 1. Serve index.html and other static assets from the root folder
app.use(express.static(__dirname));

// 2. Map the /api/gemini endpoint to your proxy function
app.post('/api/gemini', async (req, res) => {
    // The proxy function expects the request and response objects
    await proxyHandler(req, res);
});

app.listen(port, () => {
    console.log(`✅ Proxy Server Ready! Access the app at http://localhost:${port}/index.html`);
    console.log(`   (Press Ctrl+C to stop)`);
});