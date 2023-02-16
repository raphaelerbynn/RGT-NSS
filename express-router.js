const express = require("express"),
    router = express.Router();

const callBack1 = (req, res, next) => {
    console.log("Sent from 1st callback in array");
    next();
}
const callBack2 = (req, res, next) => {
    console.log("Sent from 2nd callback in array");
    next();
}
const callBack3 = (req, res) => {
    // console.log("Sent from 3rd callback in array");
    res.send("Last callback in array")
}

router.get("/", (req, res) => {
    res.send("Homepage of books");
});

//------  router paths using regular expressions (),?,*,+  -------

//this works when k exists or not
router.get("/book?s", (req, res) => {
    res.send("This works for boos or books route path")
})

//works when a is 1 or more in the same position... eg math, maath, maaath, etc
router.get("/ma+th", (req, res) => {
    res.send("Works for path with a or more a in the location of a")
})

//[random]science... eg intscience, testscience, kscience, etc
router.get("/*science", (req, res) => {
    res.send("Route works for path which takes word character infront of science")
})

//using ()... eg tech, te
router.get("/te(ch)?", (req, res) => {
    res.send("Using () with ? on route path")
})

//------route handlers----------
//with multiple call backs
router.get("/english", (req, res, next) => {
    res.download("sent from 1st call back function");
    next()
}, (req, res) => {
    res.send("Send from 2nd call back");
});

//with callbacks in array
router.get("/history", [callBack1, callBack2, callBack3]);

//router path taking parameters
router.get("/:bookID", (req, res) => {
    res.send(`Book with ID of ${req.params.bookID}`)
});




module.exports = router