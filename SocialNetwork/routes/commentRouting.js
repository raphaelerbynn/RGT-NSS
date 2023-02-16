const express = require("express"),
    bodyParser = require("body-parser"),
    posts = require("../jsonData/data.js"),
    router = express.Router();

router.use(bodyParser.json());

//--------get requests for comments-----------
//get all comments for a post
router.get("/", (req, res) => {
    res.json(posts.posts);
});


module.exports = router;