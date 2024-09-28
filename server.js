const express = require('express');
const Sequelize = require('sequelize');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require("./models");
const app = express()
// Set up middleware
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// API routes
const userRout = require("./routes/user");
const productRout = require("./routes/products")
const refreshToken = require("./routes/refreshToken")
app.use("/", userRout);
app.use("/", refreshToken);
app.use("/", productRout)

// Establish database connection (assuming `db` object is configured correctly in models/index.js)
db.sequelize.sync().then(() => {
    app.listen(2000, () => {
        console.log("Server is running on port 3000");
    });
})
    .catch((error) => {
        console.error("Error connecting to database:", error);
    });