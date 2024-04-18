const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://paramwaje7:HZS5x0BLdREZxZ1n@cluster0.pojfxmp.mongodb.net/param11?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api', subscriptionRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
