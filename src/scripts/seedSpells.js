require('dotenv').config();
const fetch = require('node-fetch');
const { connectDB, mongoose } = require('../backend/db');
const Spell = require('../backend/models/Spell');

const BASE = 'https://www.dnd5eapi.co';

async function seed() {
  try {
    await connectDB();
    console.log('Fetching spells list...');
    const listRes = await fetch(`${BASE}/api/spells`);
    const list = await listRes.json();
    if (!list.results) {
      console.error('Unexpected response for spells list');
      process.exit(1);
    }

    let count = 0;
    for (const item of list.results) {
      try {
        const detailRes = await fetch(`${BASE}${item.url}`);
        const detail = await detailRes.json();

        await Spell.updateOne(
          { index: detail.index },
          { $set: detail },
          { upsert: true }
        );
        count++;
        if (count % 50 === 0) console.log(`${count} spells processed`);
      } catch (err) {
        console.error('Failed to fetch/save spell', item, err.message);
      }
    }

    console.log(`Done. ${count} spells seeded/updated.`);
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();