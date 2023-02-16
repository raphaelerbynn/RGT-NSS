const posts = [
    {
        id: 1,
        content: "This is my first post",
        timePosted: new Date(Date.now()).toString(),
        comments: [
            {
                id: 1,
                comment: "That is great",
                timeCommented: new Date(Date.now()).toString()
            }
        ]
    },
    {
        id: 2,
        content: "Welcome again to my post",
        timePosted: new Date(Date.now()).toString(),
        comments: [
            {
                id: 1,
                comment: "Here again",
                timeCommented: new Date(Date.now()).toString()
            }
        ]
    }
]


module.exports = { posts };
