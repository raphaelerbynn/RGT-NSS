const express = require("express"),
    compression = require("compression"),
    Ajv = require("ajv"),
    app = express();

const port = 3000;
const schema = {
    type: "object",
    required: ["name", "email"],
    properties: {
        name: { type: "string" },
        email: { type: "string" }
    }
}

const ajv = new Ajv();
const validate = ajv.compile(schema);

//-------middlewares--------
app.use(express.json());
//compress size when size exceeds certain byte
app.use(compression({ threshold: 20 }));
//logs every incoming request
app.use((req, res, next) => {
    console.log(`Incoming request: method - ${req.method} path - ${req.url}`);
    next();
});
//logs every request parameters 
app.use((req, res, next) => {
    console.log("Request parameter: " + JSON.stringify(req.params) + "\nRequest body: " + JSON.stringify(req.body));
    next();
});
//set custom headers that incluedes response date & time
app.use((req, res, next) => {
    res.header({
        "x-response-date": new Date().toDateString(),
        "x-response-time": new Date().toTimeString(),
    });
    next();
})
//verify data on specific schema
app.use((req, res, next) => {
    let valid = validate(req.body);
    if(!valid){
        return res.status(400).json({ error: "Invalid JSON payload" });
    }
    next();
});



app.route("/")
    .get((req, res) => {
        res.send("This is middleware homepage");
    })
    .post((req, res) => {
        res.send("You posted to homepage");
    });

app.route("/:id")
    .get((req, res) => {
        console.log(req.params);
        res.send("Route with id " + req.params.id);
    })
    .post((req, res) => {
        res.send("Post in route with post id " + req.params.id);
    });

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("This is a server error");
});

app.listen(port, () => {
    console.log("server start on port " + port);
});