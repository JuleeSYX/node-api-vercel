const express = require("express");
const app = express();
const mongoose = require("mongoose");

const User = require("./models/user");
const Gps = require("./models/gps");
const TimeLine = require("./models/timeline");
const Sim800l = require("./models/sim800l");

app.use(express.json())


app.get("/users", async (req, res) => {
    const users = await User.find({});

    try {
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/add-user", async (req, res) => {
    let data = req.body;
    const users = await User.create({
        userName: data.userName,
        serialNumber: data.serialNumber,
    });

    res.status(200).json(users)
});

app.delete("/delete-user", async (req, res) => {
    const users = await User.deleteOne({
        where: { _id: "633652f2ee3e9312f95aaa55" }
    });

    res.status(200).json(users)
});


app.get("/gps", async (req, res) => {
    const users = await Gps.find({}).limit(200).sort({ length: -1 });
    try {
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error);
    }
})


app.post("/add-gps", async (req, res) => {
    const data = req.body
    const users = await Gps.create({
        userId: data.userId,
        latitude: data.latitude,
        longitude: data.longitude
    });
    res.send(users)
});


app.get("/gps-timeline", async (req, res) => {
    const timeline = await TimeLine.find({})
    try {
        res.status(200).json(timeline);
    } catch (error) {
        res.status(500).send(error);
    }
})
app.post("/add-timeline", async (req, res) => {

    const data = req.body

    const timeline = await TimeLine.create({
        lat: 17.02931211,
        lg: 120.9920932
    });
    res.status(200).json(timeline)
});

app.get("/add-gggggg", async (req, res) => {

    const data = req.body

    const timeline = [{
        name: "sdsadasd",
    }, {
        name: "FK"
    }]
    res.status(200).json(timeline)
});

app.post("/add-sim800l", async (req, res) => {
    const data = req.body
    console.log(data);
    const timeline = await Sim800l.create({
        lat: 22.222222,
        lng: 11.111111
    });
    res.status(200).send(timeline)
});

app.get("/add-sim800l", async (req, res) => {
    const data = req.body
    console.log(data);
    const timeline = await Sim800l.create({
        lat: 88.8888888,
        lng: 99.9999999
    });
    res.status(200).send(timeline)
});
module.exports = app; 