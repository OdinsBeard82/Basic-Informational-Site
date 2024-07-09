const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // Change the port here

// Middleware to serve static files
app.use(express.static(path.join(__dirname)));

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Route for contact-me page
app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

// Catch-all route for 404 page
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
