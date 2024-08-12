const express = require("express");
const app = express();
const PORT = 8001;


const urlRoute = require("./routes/url");
// Route for user handling
app.use("/url", urlRoute);

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const { connectToMongoDB } = require("./connect");
connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));



app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));



















// const express = require("express");
// const path = require("path"); // In-built module to handle file paths
// const app = express();
// const PORT = 8001;

// // Import routes and models
// const urlRoute = require("./routes/url");
// const staticRouter = require("./routes/staticRouter");
// const userRoute = require("./routes/users");
// const { connectToMongoDB } = require("./connect");
// const URL = require("./models/url"); // URL model


// const { checkForAuthentication, restrictTo} =require("./miiddleware/auth");

// // Middleware to parse JSON and URL-encoded request bodies
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(checkForAuthentication);

// // Set up view engine
// app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views"));

// // Route for URL handling
// app.use("/url" ,restrictTo(["NORMAL","ADMIN"]) , urlRoute);

// // Route for user handling
// app.use("/user", userRoute);

// // Route for static files or views
// app.use("/", staticRouter);

// // Connect to MongoDB
// connectToMongoDB("mongodb://localhost:27017/short-url")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("Failed to connect to MongoDB", err));

// // Route for testing, rendering home with all URLs
// app.get("/test", async (req, res) => {
//   try {
//     const allUrls = await URL.find({});
//     res.render("home", { urls: allUrls });
//   } catch (error) {
//     console.error("Error fetching URLs:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Example route for updating visit history
// app.post("/visit/:shortId", async (req, res) => {
//   const { shortId } = req.params;
//   try {
//     const entry = await URL.findOneAndUpdate(
//       { shortId },
//       {
//         $push: {
//           visitHistory: {
//             timestamp: Date.now(),
//           },
//         },
//       },
//       { new: true } // Option to return the updated document
//     );
//     if (entry) {
//       res.redirect(entry.redirectURL);
//     } else {
//       res.status(404).send("URL not found");
//     }
//   } catch (error) {
//     console.error("Error updating visit history:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Start the server
// app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
