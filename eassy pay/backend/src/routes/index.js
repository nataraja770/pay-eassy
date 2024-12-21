const express = require('express');
const router = express.Router();

// Import controllers
const userController = require('../controllers/userController');
const transactionController = require('../controllers/transactionController');
const walletController = require('../controllers/walletController');

// User routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Transaction routes
router.post('/transactions', transactionController.createTransaction);
router.get('/transactions/:userId', transactionController.getUserTransactions);

// Wallet routes
router.get('/wallet/:userId', walletController.getWallet);
router.post('/wallet/:userId/add-funds', walletController.addFunds);

module.exports = router;