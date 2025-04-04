const express = require("express");
const Schema = mongoose.Schema;
const mongoose = require("mongoose");

const aboutSchema = new Schema({
    heading: String,
    paragraph: String,
})