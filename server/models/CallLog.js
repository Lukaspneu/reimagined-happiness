const mongoose = require('mongoose');

const CallLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  minutes: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('CallLog', CallLogSchema);
