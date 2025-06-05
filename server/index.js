const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const agentRoutes = require('./routes/agent');
const usageRoutes = require('./routes/usage');
const billingRoutes = require('./routes/billing');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/agent', agentRoutes);
app.use('/api/usage', usageRoutes);
app.use('/api/billing', billingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
