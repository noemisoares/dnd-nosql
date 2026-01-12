const express = require('express');
const Monster = require('../models/Monster');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { cr, type, name } = req.query;
    const filter = {};
    if (cr) {
      filter.$or = [{ challenge_rating: cr }, { challenge_rating: Number(cr) }];
    }
    if (type) {
      filter.type = { $regex: type, $options: 'i' };
    }
    if (name) {
      filter.name = { $regex: name, $options: 'i' };
    }
    const monsters = await Monster.find(filter).select('index name type challenge_rating').limit(200);
    res.json(monsters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:index', async (req, res) => {
  try {
    const { index } = req.params;
    const m = await Monster.findOne({ index });
    if (!m) return res.status(404).json({ error: 'Not found' });
    res.json(m);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
