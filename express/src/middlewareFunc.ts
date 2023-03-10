import { Request, Response, NextFunction } from "express";
import * as yup from "yup";

const postSchema = yup.object().shape({
    title: yup.string().required("There is no title"),
    content: yup.string().required(),
    author: yup.string().required("There is no author")
});

const commentSchema = yup.object().shape({
    comment: yup.string().required("There is no comment"),
    author: yup.string().required("There is no author")
});


//middleware function
export const validatePost = (req: Request, res: Response, next: NextFunction) => {
    postSchema.validate(req.body)
    .then(() => {
        next()
    })
    .catch((err) => {
        console.log(err);
        next(err);
    });
}

export const validateComment = (req: Request, res: Response, next: NextFunction) => {
    postSchema.validate(req.body)
    .then(() => {
        next()
    })
    .catch((err) => {
        console.log(err);
        next(err);
    });
}
