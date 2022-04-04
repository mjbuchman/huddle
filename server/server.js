const path = require('path');
const express = require('express');
const app = express();

// use local host or heroku specified port
const port = process.env.PORT || 5000

// specify path to the build folder and point express app to it
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

// app connected and listening to outputted port
app.listen(port, () => {
    console.log(`App server now listening to port ${port}`);
});
