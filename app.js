const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const htmx = __dirname + "/pages/";

app.get("/", (req, res) => {
  res.sendFile(htmx + "index.html");
});

app.get("/home", (req, res) => {
  res.sendFile(htmx + "home.html");
});

app.get("/destination-a", (req, res) => {
  res.sendFile(htmx + "destination-a.html");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
