//@ts-check
const express = require("express");
const logger = require("morgan");

const app = express();
//set our logger
app.use(logger("dev"));
//handle json
app.use(express.json());
//handle form data
app.use(express.urlencoded({extended: false}));

module.exports = app;