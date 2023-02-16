const express = require("express"),
    router = require("./express-router");
    app = express();


app.set("port", process.env.PORT || 5000);

app.use("/books", router);

app.listen(app.get("port"), () => {
    console.log(`Server starting at port ${app.get("port")}`)
});