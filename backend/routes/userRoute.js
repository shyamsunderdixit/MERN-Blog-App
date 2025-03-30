const express = require('express');
const router = express.Router();
const User = require("../models/userModel.js"); // ✅ Import at the top (used for all routes)

// Create (POST)
router.post("/", async (req, res) => {
    const { name, email, age } = req.body;

    try {
        const userAddedData = await User.create({ name, email, age });
        res.status(201).json(userAddedData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

// Get (GET)
router.get("/", async (req, res) => {
    try {
        const showAll = await User.find();
        res.status(200).json(showAll);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// Get (GET) For Single User
router.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const singleUser = await User.findById({_id: id});
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// Delete user
router.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const singleUser = await User.findByIdAndDelete({_id: id});
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// Update user // put/patch
router.patch("/:id", async (req, res) => {
    const {id} = req.params;
    const {name, email, age} = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).json(updateUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
