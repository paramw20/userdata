const mongoose = require('mongoose');

// Define the schema for subscription
const subscriptionSchema = new mongoose.Schema({
  subscriberId: {
    type: String,
    required: true,
    unique: true
  },
  subscriberName: {
    type: String,
    required: true
  },
  subscriberCountry: {
    type: String,
    required: true
  },
  subscriberDuration: {
    type: Number,
    required: true
  },
  subscriptionDate: {
    type: Date,
    default: Date.now
  }
});

// Create a model using the schema
const Subscription = mongoose.model('Subscription', subscriptionSchema);

// Export the model
module.exports = Subscription;
