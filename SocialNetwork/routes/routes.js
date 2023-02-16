const express = require("express"),
    bodyParser = require("body-parser"),
    posts = require("../jsonData/data.js"),
    router = express.Router();

router.use(bodyParser.json());

//--------get requests-----------
//get all posts
router.get("/", (req, res) => {
    res.json(posts.posts);
});

//get single posts
router.get("/:post_id", (req, res) => {
    const post = posts.posts.find((post) => post.id == req.params.post_id);
    if(!post){
        const notFound = {
            msg: `Post with id = ${req.params.id} does not exist`,
            statusCode: 404
        }
        res.json(notFound);
    }

    res.json(post);
});



module.exports = router;