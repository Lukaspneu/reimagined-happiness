const express = require('express');
const CallLog = require('../models/CallLog');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  const logs = await CallLog.find({ user: req.user });
  res.json(logs);
});

module.exports = router;
