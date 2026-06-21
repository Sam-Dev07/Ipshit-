const express = require('express');
const app = express();

// Render dynamically assigns a port via process.env.PORT. 
// It falls back to 3000 for local testing in VS Code.
const PORT = process.env.PORT || 3000;

// Trust the Render proxy to pass the correct client IP headers
app.set('trust proxy', true);

// Main route to handle incoming visits
app.get('/', (req, res) => {
    // Read the client's IP address (handles proxies or direct connections)
    const clientIp = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
    // Log the event to the Render dashboard terminal
    console.log(`[LOG] Connection from IP: ${clientIp} at ${new Date().toISOString()}`);
    
    // Simple HTML response displayed to the visitor
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Application Dashboard</title>
            <style>
                body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f0f2f5; margin: 0; }
                .card { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center; }
                h1 { color: #333; }
                p { color: #666; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Service Status: Online</h1>
                <p>Your connection has been successfully established and verified.</p>
            </div>
        </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server successfully started. Listening on port ${PORT}`);
});
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware or route to handle incoming requests
app.get('/', (req, res) => {
    // Read standard headers or connection data for the client's IP
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
    // Log the IP address securely to the console
    console.log(`[LOG] Incoming request from IP: ${clientIp} at ${new Date().toISOString()}`);
    
    // Send a standard response back to the client
    res.send('Request received and logged successfully.');
});

app.listen(PORT, () => {
    console.log(`Server is running locally on http://localhost:${PORT}`);
});
