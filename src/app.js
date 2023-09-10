// Import the 'express' module, which is a popular Node.js web framework.
const express = require("express");

// Import the 'conn' file which likely establishes a connection to a database.
// const MensRanking = require("./models/mens");
require("../src/db/conn");

// Import the 'men' router module.
const router = require("../src/routers/men");

// Create an instance of the Express application.
const app = express();

// Set the port for the server to listen on. It defaults to 3000 if not specified in the environment.
const port = process.env.PORT || 3000;

// Middleware: Parse incoming JSON data.
app.use(express.json());

// Middleware: Use the 'men' router for handling routes.
app.use(router);

// Start the Express server and listen on the specified port.
app.listen(port, () => {
    console.log(`Connection port no ${port}`);
});
