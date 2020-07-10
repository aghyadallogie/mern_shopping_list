const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');
// const { model } = require('mongoose');

//*** require('./routes/api/items') ***//

router.get('/', async (req, res) => {
    const items = await Item.find().sort({ date: -1 })
    res.json(items);
});

router.post('/', async (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    try {
        const item = await newItem.save();
        res.json(item);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(400).json({ success: false }))
})

// router.delete('/:id', async (req, res) => {
//     const removed = await Item.findByIdAndDelete(req.params.id);
//     res.json(removed);
// })
router.get('/:id?', async (req, res) => {
    const items = await Item.findById(req.params.id)
    res.json(items);
});

module.exports = router; 