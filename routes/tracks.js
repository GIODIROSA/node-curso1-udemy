const express = require("express");
const router = express.Router();
const { getItems, createItem } = require("../controllers/tracks");

//TODO http://localhost/tracks GET, POST, PUT, DELETE

router.get("/", getItems);

router.post("/", createItem);

module.exports = router;
