const express = require('express');
const router = express.Router();
const Gym = require('../models/Gyms');

// GETS ALL THE GYMS
router.get('/', async (req, res)=>{
    try {
        const gyms = await Gym.find();
        res.json(gyms);
    } catch {
        res.json({ message: err });
    }
});

// SUBMITS A NEW GYM
router.gym('/', async (req, res) => {
    const gym = new Gym({
        title: req.body.title,
        address: req.body.address
    });
    try {
        const savedGym = await gym.save();
        res.json(savedGym);
    } catch(err) {
        res.json({ message: err });
    }
});

// SPECIFIC GYM
router.get('/:gymId', async (req, res) => {
    try {
        const gym = await Gym.findById(req.params.gymId); 
        res.json(gym);
    } catch(err) {
        res.json ({ message: err });
    }
})

// DELETE SPECIFIC GYM

router.delete('/:gymId', async (req, res) => {
    try {
        const removedGym = await Gym.remove({ _id: req.params.gymId}); 
        res.json(removedGym);
    } catch(err) {
        res.json ({ message: err });
    }
});

// DELETE SPECIFIC GYM

router.patch('/:gymId', async (req, res) => {
    try {
        const updatedGym = await Gym.updateOne(
            { _id: req.params.gymId}, 
            { $set: {title: req.body.title} }
        ); 
        res.json(updatedGym);
    } catch(err) {
        res.json ({ message: err });
    }
});

module.exports = router;