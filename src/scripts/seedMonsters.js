require('dotenv').config();
const fetch = require('node-fetch');
const { connectDB, mongoose } = require('../backend/db');
const Monster = require('../backend/models/Monster');

const BASE = 'https://www.dnd5eapi.co';

async function seed() {
  try {
    await connectDB();
    console.log('Fetching monsters list...');
    const listRes = await fetch(`${BASE}/api/monsters`);
    const list = await listRes.json();
    if (!list.results) {
      console.error('Unexpected response for monsters list');
      process.exit(1);
    }

    let count = 0;
    for (const item of list.results) {
      try {
        const detailRes = await fetch(`${BASE}${item.url}`);
        const detail = await detailRes.json();

        await Monster.updateOne(
          { index: detail.index },
          { $set: detail },
          { upsert: true }
        );
        count++;
        if (count % 50 === 0) console.log(`${count} monsters processed`);
      } catch (err) {
        console.error('Failed to fetch/save monster', item, err.message);
      }
    }

    console.log(`Done. ${count} monsters seeded/updated.`);
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
