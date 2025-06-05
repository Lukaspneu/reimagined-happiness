const express = require('express');
const Agent = require('../models/Agent');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  const agent = await Agent.findOne({ user: req.user });
  res.json(agent);
});

router.post('/', auth, async (req, res) => {
  const { name, tone, voiceType } = req.body;
  let agent = await Agent.findOne({ user: req.user });
  if (!agent) {
    agent = await Agent.create({ user: req.user, name, tone, voiceType });
  } else {
    agent.name = name;
    agent.tone = tone;
    agent.voiceType = voiceType;
    await agent.save();
  }
  res.json(agent);
});

module.exports = router;
