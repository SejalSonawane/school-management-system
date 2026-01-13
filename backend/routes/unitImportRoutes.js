// routes/unitImportRoutes.js
const express = require("express");
const router = express.Router();

const { authenticateToken, authorizeRoles } = require("../middleware/auth");
const uploadExcel = require("../middleware/uploadExcel");
const unitImportController = require("../controllers/unitImportController");

// POST /api/units/import
router.post(
  "/import",
  authenticateToken,
  authorizeRoles("admin"),
  uploadExcel.single("file"), // frontend must send field name "file"
  unitImportController.importUnits
);

module.exports = router;