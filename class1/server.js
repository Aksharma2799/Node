//initiazation
const express = require("express");
const app = express();

//used to parse req.body in express -> post and put
const bodyParser = require("body-parser");
//specifically parse json data and add  it to the request. body object.
app.use(bodyParser.json());

//activate server on port 5000
app.listen(5000, () => {
  console.log("listening on port no. 5000");
});

//routes
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/api/v1/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(brand, name);
  res.send("cars successfully submitted");
});
