const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("fuck that shit");
});

app.listen(8000, () => {
  console.log("App runing on port 8000");
});
