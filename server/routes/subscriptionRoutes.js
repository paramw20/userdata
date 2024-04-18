const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Route for creating a new subscription
router.post('/subscriptions', subscriptionController.createSubscription);

// Route for fetching all subscriptions
router.get('/subscriptions', subscriptionController.getAllSubscriptions);

// Export the router
module.exports = router;
