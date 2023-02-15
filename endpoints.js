const express = require("express"),
    app = express();

//set configurations
app.set("PORT", process.env.PORT || 3000);

//-------get request--------------
app.get("/", (req, res) => {
    res.send("Welcome to the homepage");
});

app.get("/workers", (req, res) => {
    res.send("User requesting all workers resource")
});

//endpoint that takes a parameter
app.get("/workers/:id", (req, res) => {
    const worker_id = req.params.id;
    res.send(`User requesting worker resource with id = ${worker_id}`);
});

//--------post request-------------
app.post("/workers/add", (req, res) => {
    const data = req.body;
    res.send("Data saved successfully...");
});

//--------delete request------------
app.delete("/workers/:id", (req, res) => {
    res.send(`Worker with ID = ${req.params.id} has been deleted`);
});

//--------put request--------------
app.put("/workers/:id", (req, res) => {
   const data = req.body;
   res.send(`Update worker resource with id = ${req.params.id}`); 
});

//--------patch request-------------
app.patch("/workers/:id", (req, res) => {
    const body = req.body;
    res.send(`Update specific feild of worker resource with id = ${req.params.id}`);
});

//--------or request---------------
// app.route("/suggestions")
//     .get((req, res) => {
//         res.send("Suggestions page");
//     })
//     .post((req, res) => {
//         const data = req.body;
//         res.send("You posted to suggestions page");
//     });
    



app.use((req, res) => {
    res.status(404);
    res.send("Page not found")
});


app.listen(app.get("PORT"), () => {
    console.log(`Server start on port ${app.get("PORT")}`);
});


