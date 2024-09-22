const carService = require('../services/carService');

// Controller to fetch all makes
const getMakes = async (req, res) => {
  try {
    const makes = await carService.fetchCarMakes();
    res.status(200).json(makes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch car makes' });
  }
};

// Controller to fetch available years for a selected make
const getYears = async (req, res) => {
  try {
    const years = await carService.fetchCarYears(req.params.makeId);
    res.status(200).json(years);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch years for the selected make' });
  }
};

// Controller to fetch available models for a selected make and year
const getModels = async (req, res) => {
  try {
    const models = await carService.fetchCarModels(req.params.makeId, req.params.year);
    res.status(200).json(models);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch models' });
  }
};

// Controller to fetch available versions for a selected model and year
const getVersions = async (req, res) => {
  try {
    const versions = await carService.fetchCarVersions(req.params.modelId, req.params.year);
    res.status(200).json(versions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch versions' });
  }
};


// Controller to fetch technical details of a selected version
const getTechnicalDetails = async (req, res) => {
  try {
    const details = await carService.fetchTechnicalDetails(req.params.versionId);
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch technical details' });
  }
};

module.exports = {
  getMakes,
  getYears,
  getModels,
  getVersions,
  getTechnicalDetails
};
