const express = require('express');

const Steps = require('../schemes/scheme-model');

const router = express.Router();

// get all steps of all schemes
router.get('', async (req, res) => {
  try {
    const steps = await Steps.findAllSteps();
    res.json(steps);
  }
  catch (err) {
    res.status(500).json({ message: 'Error while getting all steps', err })
  }
})

module.exports = router