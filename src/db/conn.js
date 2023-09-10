// Import the 'mongoose' library, which is an Object Data Modeling (ODM) library for MongoDB.
const mongoose = require("mongoose");

// Connect to the MongoDB database at the specified URL (mongodb://127.0.0.1:27017/olympics).
mongoose.connect("mongodb://127.0.0.1:27017/olympics", {
    // MongoDB connection options can be included here (currently commented out).

    // useCreateIndex: true,       // Create an index for performance optimization.
    // useNewUrlParser: true,      // Use the new URL parser for MongoDB connections.
    // useUnifiedTopology: true    // Use the new Server Discover and Monitoring engine.
}).then(() => {
    // If the connection is successful, log a success message.
    console.log("Connection Successful");
}).catch((err) => {
    // If there is an error during the connection process, log an error message.
    console.log("Database Connection Error: ", err.message);
});
