const connection = require('../config/connection');
const { User } = require('../models');
//const { Thought } = require('../models');
const { getRandomName, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  const users = [];

  for (let i = 0; i < 20; i++) {
    const name = getRandomName();
    const username = name.replace(' ', '');

    const last = name.split(' ')[1];
    const email = `${last}${getRandomEmail()}`;

    users.push({
      username,
      email,
    });
  }

  await User.insertMany(users);

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});