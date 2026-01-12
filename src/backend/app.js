const express = require('express');
const cors = require('cors');
const spellsRouter = require('./routes/spells');
const monstersRouter = require('./routes/monsters');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/api/spells', spellsRouter);
app.use('/api/monsters', monstersRouter);

module.exports = app;
