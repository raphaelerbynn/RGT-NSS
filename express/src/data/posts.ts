import { post } from "../interfaces/interface"
export const posts: post[] = [
    {
        id: 0,
        title: "The Big Day",
        content: "There is a big day ahead of us",
        author: "Banny Bang",
        date: new Date(),
        comments: [
            {
                id: 0,
                comment: "Good",
                author: "Blay",
                date: new Date()
            }
        ]
    }
]
