const express = require("express"),
    bodyParser = require("body-parser"),
    posts = require("../jsonData/data.js"),
    commentRouter = require("../routes/commentRouting.js")
    router = express.Router();


const getPostByID = (id) => {
    const post = posts.posts.find((post) => post.id === parseInt(id));
    if(!post){
        const notFound = {
            msg: `Post with id = ${id} does not exist`,
            statusCode: 404
        }
        return notFound;
    }
    return post;
}


router.use(bodyParser.json());

//--------get requests-----------
//get all posts
router.get("/", (req, res) => {
    res.json(posts.posts);
});

//get single posts
router.get("/:post_id", (req, res) => {
    const post = getPostByID(req.params.post_id)
    res.json(post);
});

//get all comment from a post
router.get("/:post_id/comment", (req, res) => {
    let data = getPostByID(req.params.post_id);
    if(posts.posts.includes(data)){
        data = data.comments
    }
    res.json(data);
})






module.exports = router;