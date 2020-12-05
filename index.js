const { Console } = require("console");
var express = require ("express");
const router = express.Router();
var app = express()

const path = require("path");


const servicesRouter = require('./services');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

router.get("/", function(req, res, next) {
    res.status(200);
    console.log ("request the home page");
    res.render("index", {});
  });

  router.get('/home', function (req, res) {
    Console.log("request the home page");
    res.status(200);
    res.send("Home Router Test");
  })


app.get('/contact', function (req, res) {
    res.status(200);
    Console.log("requesting the contact page");
    res.render("contact", { title: "contact" });
  })

app.use('/services', servicesRouter);

app.listen(3000, () => {
    console.log('http://localhost:3000')
})
module.exports = app;
module.exports = router;