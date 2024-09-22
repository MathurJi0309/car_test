const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Define routes for car data
router.get('/makes', carController.getMakes); // Fetch all car makes
router.get('/years/:makeId', carController.getYears); // Fetch available years for a selected make
router.get('/models/:makeId/:year', carController.getModels); // Fetch models for a specific make and year
router.get('/versions/:modelId/:year', carController.getVersions); // Fetch available versions for a selected model and year
router.get('/details/:versionId', carController.getTechnicalDetails); // Fetch technical details for a selected version

module.exports = router;
