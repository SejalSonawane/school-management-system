const express = require('express');
const router = express.Router();

const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const uploadExcel = require('../middleware/uploadExcel');
const studentImportController = require('../controllers/studentImportController');

// POST /api/students/import
router.post(
  '/import',
  authenticateToken,
  authorizeRoles('clerk'),
  uploadExcel.single('file'), // frontend must send field name "file"
  studentImportController.importStudents
);

module.exports = router;