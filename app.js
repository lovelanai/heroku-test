const express = require("express");
const colors = require("colors");

const app = express();

// middleware
app.use(express.static("public"));

// define route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

// start the server listening
app.listen(process.env.PORT || 3000, () =>
  console.log(`Server is running on port 3000`.bgMagenta)
);
