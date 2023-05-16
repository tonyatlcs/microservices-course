const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = { id, title };

  // Call the event-bus about the newly created post
  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  app.post("/events", (req, res) => {
    console.log("Recieved event: ", req.body);

    res.send({});
  });

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
