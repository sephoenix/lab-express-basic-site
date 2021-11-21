const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/home', (request, response, next) => 
response.sendFile(__dirname + '/views/home.html'));

app.get('/gallery', (request, response, next) => 
response.sendFile(__dirname + '/views/gallery.html'));

app.get('/travels', (request, response, next) => 
response.sendFile(__dirname + '/views/travels.html'));

app.get('/about', (request, response, next) => 
response.sendFile(__dirname + '/views/about.html'));

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`);
})