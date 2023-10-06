const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");
const { getItems, createItem } = require("../controllers/tracks");

//TODO http://localhost/tracks GET, POST, PUT, DELETE

router.get("/", getItems);

router.post("/", validatorCreateItem, customHeader, createItem);

module.exports = router;
