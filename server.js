const express = require('express');
const app = express();
const path = require('path');
require("dotenv").config();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");

// Require all models
const db = require("./models");

// Parse request body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


// const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-1qm5r.gcp.mongodb.net/paulsbooksdb?retryWrites=true`;
// // Connect to the Mongo DB ATLAS
// mongoose.connect(uri, {
//     useNewUrlParser: true
// });

// Connect to the Mongo DB LOCAL
mongoose.connect("mongodb://localhost:27017/newsscraperdb", {
    useNewUrlParser: true
});

require("./routes/api-books-routes.js")(app);

//Route setup
app.get('/api/user', (req, res) => {
    res.json({
        name: "Paul",
        email: "paul.linck@gmail.com"
    });
})

if (process.env.NODE_ENV === 'production') {
    console.log(`prod mode ${path.join(__dirname, 'client', 'build', 'index.html')}`);
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', function (req, res) {
        const index = path.join(__dirname, 'client', 'build', 'index.html');
        res.sendFile(index);
    });
} else {
    console.log(`dev mode ${path.join(__dirname, '/client/public/index.html')}`);
    //dev mode
    app.use(express.static(path.join(__dirname, 'client', 'public')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/public/index.html'));
    })
}


//Start server
app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`)
});