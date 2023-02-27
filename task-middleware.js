const express = require("express"),
  compression = require("compression"),
  ipLimit = require("express-rate-limit"),
  Ajv = require("ajv"),
  multer = require("multer"),
  app = express();

const port = 3000;
const schema = {
  type: "object",
  required: ["name", "email"],
  properties: {
    name: { type: "string" },
    email: { type: "string" },
  },
};
const limitRequest = ipLimit({
  windowMs: 60 * 1000,
  max: 20,
  message: "Too many request from this IP addres, try again later",
});

//file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

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
  console.log(
    "Request parameter: " +
      JSON.stringify(req.params) +
      "\nRequest body: " +
      JSON.stringify(req.body)
  );
  next();
});
//set custom headers that incluedes response date & time
app.use((req, res, next) => {
  res.header({
    "x-response-date": new Date().toDateString(),
    "x-response-time": new Date().toTimeString(),
  });
  next();
});
//verify data on specific schema
app.post("/form", (req, res, next) => {
  let valid = validate(req.body);
  if (!valid) {
    return res.status(400).json({ error: "Invalid JSON payload" });
  }
  next();
});
//maximum request limit per ip address
app.use(limitRequest);

//inbuilt middleware to serve static files
app.use(express.static("public"));

//middleware to handle file upload
app.use(upload.single("newFile"));

app.route("/")
  .get((req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  })
  //file upload
  .post((req, res) => {
    if (!req.file) {
      res.status(400).send("No file uploaded.");
      return;
    }
    res.send(`File ${req.file.originalname} uploaded successfully!`);
  });

app
  .route("/:id")
  .get((req, res) => {
    console.log(req.params);
    res.send("Route with id " + req.params.id);
  })
  .post(upload.single("newFile"), (req, res) => {
    res.send("Post in route with post id " + req.params.id);
  });

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("This is a server error");
});

app.listen(port, () => {
  console.log("server start on port " + port);
});
