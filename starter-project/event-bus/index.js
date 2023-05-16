const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log("port 4000", err.message);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log("port 4001", err.message);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log("Port 4002", err.message);
  });

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("listening on port 4005");
});
