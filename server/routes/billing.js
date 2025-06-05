const express = require('express');
const CallLog = require('../models/CallLog');
const auth = require('../middleware/auth');
const router = express.Router();

const RATE = 9; // CZK per minute

router.get('/', auth, async (req, res) => {
  const logs = await CallLog.find({ user: req.user });
  const totalMinutes = logs.reduce((sum, log) => sum + log.minutes, 0);
  const cost = totalMinutes * RATE;
  res.json({ totalMinutes, cost });
});

module.exports = router;
