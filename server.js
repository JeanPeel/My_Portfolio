var express   =     require("express");
var app       =     express();

app.use("./src/pages/Home.js",express.static("home"));
app.use("./src/pages/About.js",express.static("about"));
app.use("./src/pages/Blog.js",express.static("blog"));
app.use("./src/pages/Connect.js",express.static("connect"));
app.use("./src/pages/Portfolio.js",express.static("portfolio"));
app.use("./src/pages/Resume.js",express.static("resume"));