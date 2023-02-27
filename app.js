const express = require("express"),
    app = express();

const port = 3000;

//------middlewares------
//custom middleware functions
const logRequest = (req, res, next) => {
    console.log(`method: ${req.method}, url: ${req.url}`)
    next();
}

const logRequestBody = (req, res, next) => {
    console.log(`body: ${JSON.stringify(req.body)}`)
    next();
}

const serverErrorHandling = (err, req, res, next) => {
    if (err) {
        next(err)
    }
    console.error(err.message);
    res.status(500).send("Something went wrong with the server");
}
   
//inbuilt middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logRequest);
app.use(logRequestBody);

//  app.get('/', function (req, res) {
//     throw new Error('Something broke!');
// });

//using try and catch
app.get('/', function (req, res) {
    try {
        //intentionally threw an error
      throw new Error('Something broke!');
    } catch (error) {
        next(error);
    }
});

app.use(serverErrorHandling);


 app.listen(port, () => { 
    console.log("Server running on port " + port);
});