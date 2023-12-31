const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require('./iife'); // To understand IIFE which works under the hood of the modules in nodejs.
require('./moduleWrapper'); // To understand the 5 parameters in the module.

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/admin", (req, res) => res.send("Bruh, I'm an admin!"));
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
