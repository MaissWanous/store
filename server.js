// Import required libraries
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
//const dotenv = require('dotenv');
const app = express();
// Set up middleware
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
const userRout = require("./routes/user")
app.use("/",userRout)

app.listen(3000, () => {

    console.log("server is running")
})
