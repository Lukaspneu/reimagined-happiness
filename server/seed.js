const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Agent = require('./models/Agent');
const CallLog = require('./models/CallLog');

dotenv.config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await User.deleteMany();
  await Agent.deleteMany();
  await CallLog.deleteMany();

  const user = await User.create({ email: 'test@example.com', password: 'password' });
  await Agent.create({ user: user._id, name: 'Demo Agent', tone: 'professional', voiceType: 'male' });
  for (let i = 0; i < 7; i++) {
    await CallLog.create({ user: user._id, date: new Date(Date.now() - i*86400000), minutes: Math.floor(Math.random() * 5) + 1 });
  }
  console.log('Database seeded');
  process.exit();
}

seed();
