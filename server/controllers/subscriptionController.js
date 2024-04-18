// Import necessary dependencies
const Subscription = require('../models/Subscription');

// Controller methods
const subscriptionController = {
  // Controller method to handle POST request for creating a new subscription
  createSubscription: async (req, res) => {
    try {
      // Extract subscription data from request body
      const { subscriberId, subscriberName, subscriberCountry, subscriberDuration } = req.body;

      // Check if subscriberId already exists
      const existingSubscription = await Subscription.findOne({ subscriberId });
      if (existingSubscription) {
        return res.status(400).json({ error: 'Subscriber ID already exists' });
      }

      // Create a new subscription object
      const newSubscription = new Subscription({
        subscriberId,
        subscriberName,
        subscriberCountry,
        subscriberDuration
      });

      // Save the subscription to the database
      await newSubscription.save();

      // Send success response
      res.status(201).json({ message: 'Subscription created successfully', subscription: newSubscription });
    } catch (error) {
      // Handle errors
      console.error('Error creating subscription:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Controller method to handle GET request for fetching all subscriptions
  getAllSubscriptions: async (req, res) => {
    try {
      // Fetch all subscriptions from the database
      const subscriptions = await Subscription.find();

      // Send success response with subscription data
      res.status(200).json(subscriptions);
    } catch (error) {
      // Handle errors
      console.error('Error fetching subscriptions:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

// Export the controller
module.exports = subscriptionController;
