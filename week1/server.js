// imports (packages first, then your files ie router)
const express = require('express');
const bodyParser = require('body-parser');
const professionalRoutes = require('./routes/professionalRoute');

// intialize the app
const app = express();

// middleware (must come before routes)
app.use(bodyParser.json());
app.use(express.static('public'));

// routes (must come after middleware)
// Access-Control-Allow-Origin: *: This is a manual way of doing CORS. It tells the browser, "It's okay for any website (like your local HTML file) to ask this server for data."
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

// app.use('/professional', ...): This means your data is now located at http://localhost:8080/professional
app.use('/professional', professionalRoutes);

app.listen(8080);