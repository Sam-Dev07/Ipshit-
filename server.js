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
