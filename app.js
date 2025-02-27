//@ts-check
const express = require("express");
const logger = require("morgan");
const signUpMentorMiddleware = require("./routes/sign_up_mentor");
const applyMentorMiddleware = require("./routes/apply_mentor");
const getMentorMiddleware = require("./routes/get_mentors");

const app = express();
//set our logger
app.use(logger("dev"));
//handle json
app.use(express.json());
//handle form data
app.use(express.urlencoded({extended: false}));

//set up our routes
//Sign up
app.use("/signup", signUpMentorMiddleware);
//Apply as mentor
app.use("/apply-mentor", applyMentorMiddleware);
//Get approved mentors
app.use("/get-mentors", getMentorMiddleware);

module.exports = app;