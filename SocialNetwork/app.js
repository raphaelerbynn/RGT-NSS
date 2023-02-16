const express = require("express"),
    bodyParser = require("body-parser"),
    routes = require("./routes/routes")
    app = express();

app.set("port", 3001);

app.use(bodyParser.json());
app.use("/posts", routes);

app.get("/", (req, res) => {
    res.send("Hi, this is the homepage")
});

app.use((req, res) => {
    const data = {
        msg: "Page requesting not found",
        statusCode: "404"
    };
    res.status(404);
    res.json(data);
});

app.listen(app.get("port"), () => {
    console.log("Server started on port " + app.get("port"));
})