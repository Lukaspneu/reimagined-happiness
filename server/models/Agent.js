const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, default: 'Zenet Agent' },
  tone: { type: String, default: 'friendly' },
  voiceType: { type: String, default: 'female' },
}, { timestamps: true });

module.exports = mongoose.model('Agent', AgentSchema);
