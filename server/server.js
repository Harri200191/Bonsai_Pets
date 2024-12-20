require('dotenv').config({ path: 'backend.env' }); 

const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

const connectDB = require("./config/connectDB");
const user_route = require("./routes/userRoutes");
const ErrorHandler = require("./middleware/Error")
const Protect = require("./middleware/authMiddleware");
 
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000", ""],
    credentials: true
}));

app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use("/api/users", user_route);

app.get("/", (req, resp) => {
    resp.send("Home Page");
});

app.use(ErrorHandler);

const startserver = async () => {
    try{ 
        await connectDB();
        app.listen(PORT, () => {
            console.log("Server running on port: ", PORT);
        });
    }
    catch (error){
        console.warn(error)
    };
};

startserver();