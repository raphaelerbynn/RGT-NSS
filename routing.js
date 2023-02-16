const express = require("express"),
    router = require("./express-router");
    app = express();


app.set("port", process.env.PORT || 5000);

app.use("/books", router);
app.use((rq, res) => {
    res.status(404);
    res.send("Page Not Found");
});

app.listen(app.get("port"), () => {
    console.log(`Server starting at port ${app.get("port")}`)
});