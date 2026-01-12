const express = require('express');
const Spell = require('../models/Spell');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { level, name } = req.query;
    const filter = {};
    if (typeof level !== 'undefined') {
      const lv = parseInt(level, 10);
      if (!isNaN(lv)) filter.level = lv;
    }
    if (name) {
      filter.name = { $regex: name, $options: 'i' };
    }
    const spells = await Spell.find(filter).select('index name level school').limit(200);
    res.json(spells);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:index', async (req, res) => {
  try {
    const { index } = req.params;
    const spell = await Spell.findOne({ index });
    if (!spell) return res.status(404).json({ error: 'Not found' });
    res.json(spell);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
