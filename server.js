const express = require("express"),
    server = express(),
    users = require("./users");

//set port
server.set("port", process.env.PORT || 3000);

//get on route
server.get("/", (resquest, response) => {
    response.sendFile(__dirname+"/index.html");
});

server.get("/users", (request, response) =>{
    response.json(users);
});

//errors
server.use((resquest, response) => {
    response.type("text/plain");
    response.status(404);
    response.send("Page not found");
});

//listen to server
server.listen(3000, () => {
    console.log("Starting server on port 3000:----->");
});

