// Import the 'express' module and create a router instance.
const express = require("express");
const router = express.Router();

// Import the 'MensRanking' model, presumably representing data about men's rankings.

// Handle POST request for creating a new record.
router.post("/mens", async (req, res) => {
    try {
        // Create a new 'MensRanking' record based on the request body.
        const addingMensRecords = new MensRanking(req.body);

        // Save the new record to the database and send the response.
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    } catch (e) {
        // Handle any errors that occur during the process.
        res.status(400).send(e.message);
    }
});

// Handle GET request to retrieve all men's rankings.
router.get("/mens", async (req, res) => {
    try {
        // Find and retrieve all 'MensRanking' records, sorted by ranking.
        const getMens = await MensRanking.find({}).sort({ "ranking": 1 });

        // Send the retrieved records as a response.
        res.status(201).send(getMens);
    } catch (e) {
        // Handle any errors that occur during the process.
        res.status(400).send(e);
    }
});

// Handle GET request to retrieve a specific person's ranking by their ID.
router.get("/mens/:id", async (req, res) => {
    try {
        // Extract the 'id' parameter from the URL.
        const _id = req.params.id;

        // Find and retrieve a specific 'MensRanking' record by ID.
        const getMen = await MensRanking.findById({ _id });

        // Send the retrieved record as a response.
        res.status(201).send(getMen);
    } catch (e) {
        // Handle any errors that occur during the process.
        res.status(400).send(e.message);
    }
});

// Handle PATCH request to update a specific document by its ID.
router.patch("/mens/:id", async (req, res) => {
    try {
        // Extract the 'id' parameter from the URL.
        const _id = req.params.id;

        // Find and update a specific 'MensRanking' record by ID.
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });

        // Send the updated record as a response.
        res.status(201).send(getMen);
    } catch (e) {
        // Handle any errors that occur during the process.
        res.status(500).send(e.message);
    }
});

// Handle DELETE request to delete a specific document by its ID.
router.delete("/mens/:id", async (req, res) => {
    try {
        // Extract the 'id' parameter from the URL.
        const _id = req.params.id;

        // Find and delete a specific 'MensRanking' record by ID.
        const getMen = await MensRanking.findByIdAndUpdate(_id);

        // Send a response, possibly indicating the success of the deletion.
        res.status(201).send(getMen);
    } catch (e) {
        // Handle any errors that occur during the process.
        res.status(500).send(e.message);
    }
});

// Handle a GET request to the root path ("/") with a simple response.
router.get("/", async (req, res) => {
    res.send("Hello there, server at port 3000");
});

// Export the router module for use in other parts of the application.
module.exports = router;
