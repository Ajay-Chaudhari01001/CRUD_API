// Import the 'express' and 'mongoose' libraries.
const express = require("express");
const mongoose = require("mongoose");

// Define a Mongoose schema for the "MenRanking" collection.
const menSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true,
        trim: true
    },
    event: {
        type: String,
        default: "100m"
    },
});

// Create a Mongoose model based on the defined schema. This model represents the "MenRanking" collection.
const MensRanking = new mongoose.model("MenRanking", menSchema);

// Export the "MensRanking" model to make it available for use in other parts of the application.
module.exports = MensRanking;
