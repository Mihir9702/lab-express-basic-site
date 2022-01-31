const express = require("express");
const path = require("path");

const app = express();
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('/works', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/works.html'));
});

app.get('/photos', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/photos.html'));
});

app.get('*', (req, res) => {
    res.status(404).send('Error: 404 Page not found.');
});

app.listen(3000);
