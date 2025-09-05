const express = require("express");
const app = express();
const webpush = require("web-push");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const port = 7000;

const apiKeys = {
  publicKey:
    "BHhhIKiRh-QaGYkFZOD-uPOPTKd63KDN2HICwUiOqLBgJpQEvImPj74YTzbLrph5ctjonFz_izVCT0byTDAUbA0",
  privateKey: "kojLB4gU0uQK0051CyBLTDio4jxKiS8rc74gXT34Uzo",
};

webpush.setVapidDetails(
  "mailto:tobioketade007@gmail.com",
  apiKeys.publicKey,
  apiKeys.privateKey,
);

// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("TMG PUSH NOTIFICATIONS");
});

const subDatabse = [];
const title = JSON.stringify({ title: "THE MOVIE GARDEN" });

app.post("/save-subscription", (req, res) => {
  subDatabse.push(req.body);
  res.json({ status: "Success", message: "Subscription saved!" });
  // res.status(201).json({});
});

app.get("/send-notification", (req, res) => {
  webpush.sendNotification(subDatabse[0], title);
  res.json({ status: "Success", message: "Message sent to push service" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
