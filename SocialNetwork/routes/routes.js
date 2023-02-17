const express = require("express"),
    bodyParser = require("body-parser"),
    posts = require("../jsonData/data.js"),
    commentRouter = require("../routes/commentRouting.js")
    router = express.Router();

const postData = posts.posts;

const notFound = (id) => ({
        msg: `Post with id = ${id} not found`,
        statusCode: 404
    });
    
const getPostByID = (id, res) => {
    const post = postData.find((post) => post.id === parseInt(id));
    if(!post){
        res.status(404)
        return notFound(id);
    }
    return post;
};



router.use(bodyParser.json());

//--------get requests-----------
//get all posts
router.get("/", (req, res) => {
    res.json(postData);
});

//get single posts
router.get("/:post_id", (req, res) => {
    const post = getPostByID(req.params.post_id, res)
    res.json(post);
});

//get all comment from a post
router.get("/:post_id/comment", (req, res) => {
    let data = getPostByID(req.params.post_id, res);
    if(postData.includes(data)){
        data = data.comments
    }
    res.json(data);
})

//get single comment
router.get("/:post_id/comment/:comment_id", (req, res) => {
    let data = getPostByID(req.params.post_id, res);
    if(postData.includes(data)){
        comment = data.comments.find((comment) => comment.id === parseInt(req.params.comment_id))
        if(comment){
            data = comment;
        }
        else{
            res.status(404);
            data = {
                msg: `Comment with id = ${req.params.comment_id} not found on post with id = ${req.params.post_id}`,
                statusCode: 404
            }
        }
    }
    res.json(data);
});

//--------post requests-------------
//post to posts
router.post("/add", (req, res) => {
    const lastID = postData.at(postData.length -1).id;
    const newPost = {
        id: lastID + 1,
        content: req.body.content,
        timePosted: new Date(Date.now()).toString(),
        comment: []
    };

    postData.push(newPost);

    const data = postData;
    res.json(data);
});

//post comment
router.post("/:post_id/comment/add", (req, res) => {
    let data = getPostByID(req.params.post_id, res);

    if(postData.includes(data)){
        if(postData.includes(data)){
            
            const newComment = {
                id: data.comments.length + 1,
                comment: req.body.comment,
                timeCommented: new Date(Date.now()).toString()
            }
            data.comments.push(newComment);
            data = postData;
            
        }
    }
    res.json(data)
});


//--------delete request--------------
//delete post
router.delete("/:post_id", (req, res) => {
    const postIndex = postData.findIndex((element) => element.id === parseInt(req.params.post_id));
    let data;
    if(postIndex === -1){
        res.status(404);
        data = notFound(req.params.post_id);
    }else{
        postData.splice(postIndex, 1);
        data = postData;
    }

    res.json(data);
});

//delete comment
router.delete("/:post_id/comment/:comment_id", (req, res) => {
    let data = getPostByID(req.params.post_id, res);
    if(postData.includes(data)){
        commentIndex = data.comments.findIndex((comment) => comment.id === parseInt(req.params.comment_id))
        if(commentIndex === -1){
            res.status(404);
            data = {
                msg: `Comment with id = ${req.params.comment_id} not found on post with id = ${req.params.post_id}`,
                statusCode: 404
            }
        }
        else{
            data.comments.splice(commentIndex, 1);
            data = postData;
        }
    }
    res.send(data);
});





module.exports = router;