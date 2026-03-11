const express = require('express');
const router = express.Router();
const {
  registerPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
  searchPatients
} = require('../controllers/patientController');

// Search route must be before :id route to avoid conflict
router.get('/search', searchPatients);

router.route('/')
  .post(registerPatient)
  .get(getAllPatients);

router.route('/:id')
  .get(getPatientById)
  .put(updatePatient)
  .delete(deletePatient);

module.exports = router;
