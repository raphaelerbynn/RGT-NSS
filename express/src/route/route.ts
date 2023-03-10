
import { Request, Response, Router } from "express";
import { posts } from "../data/posts";
import { comment, post } from "../interfaces/interface";
import { validateComment, validatePost } from "../middlewareFunc";

const router: Router = Router();

const postData = posts;


//--------get requests-----------
//get all posts
router.get("/", (req: Request, res: Response) => {
    res.json(postData);
});

//get single posts
router.get("/:post_id", (req: Request, res: Response) => {
    const id = req.params.post_id;
    const post = postData.find((post) => post.id === parseInt(id));
    if(!post){
        const notFound = {
            msg: `Post with id = ${id} not found`,
            statusCode: 404
        };
        res.json(notFound)
        return;
    }
    res.json(post);
});

//get all comment from a post
router.get("/:post_id/comment", (req: Request, res: Response) => {
    const id = req.params.post_id;
    const post = postData.find((post) => post.id === parseInt(id));
    if(!post){
        const notFound = {
            msg: `Post with id = ${id} not found`,
            statusCode: 404
        };
        res.json(notFound)
        return;
    }
    res.json(post.comments);
});

// get single comment
router.get("/:post_id/comment/:comment_id", (req: Request, res: Response) => {
    const post = postData.find((post) => post.id === parseInt(req.params.post_id));
    if(!post){
        const notFound = {
            msg: `Post with id = ${req.params.post_id} not found`,
            statusCode: 404
        };
        res.json(notFound)
        return;
    }
    const comment = post.comments.find((comment) => comment.id === parseInt(req.params.comment_id));
    if(!comment){
        res.status(404);
        const notFound = {
            msg: `Comment with id = ${req.params.comment_id} not found on post with id = ${req.params.post_id}`,
            statusCode: 404
        }
        res.json(notFound);
        return;
    }
    res.json(comment);
});

//--------post requests-------------
//post to posts
router.post("/", validatePost, (req: Request, res: Response) => {
    // const lastPostID: number = postData.length > 0 ? postData.at(postData.length -1).id : -1;
    const newPost: post = {
        id: postData.length,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        date: new Date(Date.now()),
        comments: []
    };
    postData.push(newPost);

    res.json(postData);
});

//post comment
router.post("/:post_id/comment", validateComment, (req: Request, res: Response) => {
    const id = req.params.post_id;
    const post = postData.find((post) => post.id === parseInt(id));
    if(!post){
        const notFound: object = {
            msg: `Post with id = ${id} not found`,
            statusCode: 404
        };
        res.json(notFound);
        return;
    }
    const newComment: comment = {
        id: post.comments.length,
        comment: req.body.comment,
        author: req.body.author,
        date: new Date(Date.now())
    }
    post.comments.push(newComment);
    
    res.json(postData)
});


//--------delete request--------------
//delete post
router.delete("/:post_id", (req: Request, res: Response) => {
    const postIndex = postData.findIndex((element) => element.id === parseInt(req.params.post_id));
    if(postIndex === -1){
        const notFound: object = {
            msg: `Post with id = ${req.params.post_id} not found`,
            statusCode: 404
        };
        res.status(404).json(notFound);
        return;
    }
    postData.splice(postIndex, 1);
    res.json(postData);
});

//delete comment
router.delete("/:post_id/comment/:comment_id", (req: Request, res: Response) => {
    const id = req.params.post_id;
    const post = postData.find((post) => post.id === parseInt(id));
    if(!post){
        const notFound = {
            msg: `Post with id = ${id} not found`,
            statusCode: 404
        };
        res.json(notFound);
        return;
    }
    const commentIndex: number = post.comments.findIndex((comment) => comment.id === parseInt(req.params.comment_id));
    if(commentIndex === -1){
        res.status(404);
        const notFound: object = {
            msg: `Comment with id = ${req.params.comment_id} not found on post with id = ${req.params.post_id}`,
            statusCode: 404
        }
        res.json(notFound);
        return;
    }
    post.comments.splice(commentIndex, 1);
    res.send(postData);
});

//------------put request-----------
//update with put on post
router.put("/:post_id", (req: Request, res: Response) => {
    const id = req.params.post_id;
    let post = postData.find((post) => post.id === parseInt(id));
    if(!post){
        const notFound: object = {
            msg: `Post with id = ${id} not found`,
            statusCode: 404
        };
        res.json(notFound);
        return;
    }
    post.content = req.body.content;
    post.author = req.body.author;
    post.date = new Date(Date.now());

    res.json(postData);
});

//update with put on comment
router.put("/:post_id/comment/:comment_id", (req: Request, res: Response) => {
    const id = req.params.post_id;
    let post = postData.find((post) => post.id === parseInt(id));
    if(!post){
        const notFound: object = {
            msg: `Post with id = ${id} not found`,
            statusCode: 404
        };
        res.json(notFound);
        return;
    }
    let comment = post.comments.find((comment) => comment.id === parseInt(req.params.comment_id));
    if(!comment){
        const notFound: object = {
            msg: `Comment with id = ${req.params.comment_id} not found on post with id = ${req.params.post_id}`,
            statusCode: 404
        }
        res.status(404).send(notFound);
        return;
    }
    comment.comment = req.body.comment;
    comment.author = req.body.author;
    comment.date = new Date(Date.now());

    res.json(postData);
});

//---------patch request------------
//update with patch on post
router.patch("/:post_id", (req: Request, res: Response) => {
    const id = req.params.post_id;
    let post = postData.find((post) => post.id === parseInt(id));
    if(!post){
        const notFound: object = {
            msg: `Post with id = ${id} not found`,
            statusCode: 404
        };
        res.json(notFound);
        return;
    }
    if(req.body.content) post.content = req.body.content;
    if(req.body.author) post.author = req.body.author;

    res.json(postData);
});

//update with patch on comment
router.put("/:post_id/comment/:comment_id", (req: Request, res: Response) => {
    const id = req.params.post_id;
    let post = postData.find((post) => post.id === parseInt(id));
    if(!post){
        const notFound: {} = {
            msg: `Post with id = ${id} not found`,
            statusCode: 404
        };
        res.json(notFound);
        return;
    }
    let comment = post.comments.find((comment) => comment.id === parseInt(req.params.comment_id));
    if(!comment){
        const notFound: object = {
            msg: `Comment with id = ${req.params.comment_id} not found on post with id = ${req.params.post_id}`,
            statusCode: 404
        }
        res.status(404).send(notFound);
        return;
    }
    if(req.body.comment) comment.comment = req.body.comment;
    if(req.body.author) comment.author = req.body.author;

    res.json(postData);
});

export default router;