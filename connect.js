const mongoose = require("mongoose");
async function connectToMongoDB(url){
    return mongoose.connect(url);
}

module.exports = {
    connectToMongoDB,
};







// // Set Mongoose to use the new connection logic
// mongoose.set("strictQuery", false); // Typically, false is more common; set as needed

// /**
//  * Connects to the MongoDB database using the provided URL.
//  * @param {string} url - The MongoDB connection URL.
//  * @returns {Promise} - A promise that resolves when the connection is successful.
//  */
// async function connectToMongoDB(url) {
//     try {
//         await mongoose.connect(url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Failed to connect to MongoDB", error);
//         process.exit(1); // Exit the process with a failure code
//     }
// }

// module.exports = {
//     connectToMongoDB,
// };


