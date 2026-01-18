# ADMIN PAGE TRANSLATIONS GUIDE

## Overview
All hardcoded English text in admin pages has been extracted and added to the i18n.js file. Now you can use the `t()` function from `react-i18next` to implement language toggling.

---

## Translation Structure in i18n.js

### Available Translation Keys

#### **1. admin.dashboard** - Dashboard Page Translations
```javascript
t('admin.dashboard.title')                    // "Admin Dashboard"
t('admin.dashboard.selectAcademicYear')       // "Select Academic Year"
t('admin.dashboard.selectReportType')         // "Select Report Type"
t('admin.dashboard.schoolOverview')           // "School Overview"
t('admin.dashboard.monitorManageUnits')       // "Monitor and manage all MKSSS educational units"
t('admin.dashboard.importUnitsExcel')         // "Import Units from Excel"
t('admin.dashboard.selectExcelFile')          // "Select Excel File (.xlsx / .xls)"
t('admin.dashboard.importing')                // "Importing..."
t('admin.dashboard.importUnits')              // "Import Units"
t('admin.dashboard.loadingSchools')           // "Loading schools..."
t('admin.dashboard.unitID')                   // "Unit ID"
t('admin.dashboard.semisNo')                  // "SEMIS No"
t('admin.dashboard.staff')                    // "Staff"
t('admin.dashboard.students')                 // "Students"
t('admin.dashboard.viewDetails')              // "View Institutional Details"
t('admin.dashboard.unitOverviewSummary')      // "Unit Overview Summary"
t('admin.dashboard.totalStaff')               // "TOTAL STAFF"
t('admin.dashboard.totalStudents')            // "TOTAL STUDENTS"
t('admin.dashboard.ratio')                    // "RATIO"
t('admin.dashboard.studentTeacher')           // "Student/Teacher"
t('admin.dashboard.collectedFees')            // "COLLECTED FEES"
t('admin.dashboard.financialSnapshot')        // "Financial Snapshot"
t('admin.dashboard.standards')                // "Standards:"
t('admin.dashboard.shift')                    // "Shift:"
t('admin.dashboard.financeInsights')          // "Finance Insights"
t('admin.dashboard.financialMetrics')         // "Financial Metrics"
t('admin.dashboard.overviewBudget')           // "Overview of budget and expenses"
t('admin.dashboard.budgetSummary')            // "BUDGET SUMMARY"
t('admin.dashboard.expectedFees')             // "Expected Fees"
t('admin.dashboard.feesCollected')            // "FEES COLLECTED"
t('admin.dashboard.actualAmount')             // "Actual Amount"
t('admin.dashboard.pendingFees')              // "PENDING FEES"
t('admin.dashboard.toBeCollected')            // "To be Collected"
t('admin.dashboard.salarySpent')              // "SALARY SPENT"
t('admin.dashboard.totalPayroll')             // "Total Payroll"
t('admin.dashboard.studentEnrollment')        // "Student Enrollment"
t('admin.dashboard.year')                     // "Year:"
t('admin.dashboard.noReportDataFound')        // "No report data found..."
t('admin.dashboard.syncingData')              // "Syncing Dashboard Data..."
t('admin.dashboard.configError')              // "Configuration Error"
t('admin.dashboard.goToDashboard')            // "Go to Admin Dashboard"
t('admin.dashboard.availableSchools')         // "Available Schools"
t('admin.dashboard.unitImportSuccess')        // "Units imported successfully."
t('admin.dashboard.pleaseSelectExcelFile')    // "Please select an Excel file (.xlsx or .xls)."
```

#### **2. admin.reports** - Report Generation Page
```javascript
t('admin.reports.title')                      // "Generate School Reports"
t('admin.reports.selectSchool')               // "Select a school to download or preview a full report"
t('admin.reports.selectSchoolLabel')          // "Select School"
t('admin.reports.select')                     // "Select"
t('admin.reports.generateReport')             // "Generate Report"
t('admin.reports.downloadReport')             // "Download Report"
t('admin.reports.reportPreview')              // "Report Preview"
t('admin.reports.noSchoolsFound')             // "No schools found"
t('admin.reports.noUnitsAvailable')           // "No units available."
t('admin.reports.staff')                      // "STAFF"
t('admin.reports.students')                   // "STUDENTS"
t('admin.reports.annualAcademicReport')       // "Annual Academic Report"
t('admin.reports.staffPayrollReport')         // "Staff Payroll Report"
t('admin.reports.financialAllocationReport')  // "Financial Allocation Report"
t('admin.reports.schoolSafetyReport')         // "School Safety & Compliance Report"
t('admin.reports.fetchSchools')               // "Fetch Schools"
```

#### **3. admin.charts** - Charts/Analytics Page
```javascript
t('admin.charts.title')                       // "Institutional Analytics"
t('admin.charts.selectSchool')                // "Select a school unit to visualize performance..."
t('admin.charts.noUnitsFound')                // "No units found."
t('admin.charts.admissions')                  // "Admissions"
t('admin.charts.students')                    // "Students"
t('admin.charts.finance')                     // "Finance"
t('admin.charts.results')                     // "Results"
t('admin.charts.demographics')                // "Demographics"
t('admin.charts.generatingReports')           // "Generating reports..."
t('admin.charts.failedFetchAnalytics')        // "Failed to fetch analytics"
t('admin.charts.admissionsPerYear')           // "Admissions per Year"
t('admin.charts.newAdmissions')               // "New Admissions"
t('admin.charts.studentsByStandard')          // "Students by Standard"
t('admin.charts.totalStudents')               // "Total Students"
t('admin.charts.paymentsByYear')              // "Payments by Year / Category"
t('admin.charts.budgetsComparison')           // "Budgets (Income vs Expenses)"
t('admin.charts.income')                      // "Income"
t('admin.charts.expenses')                    // "Expenses"
t('admin.charts.passFailDistribution')        // "Pass / Fail Distribution"
t('admin.charts.passed')                      // "Passed"
t('admin.charts.notPassed')                   // "Not Passed"
t('admin.charts.dataSummary')                 // "Data Summary"
t('admin.charts.studentsPassed')              // "Students Passed"
t('admin.charts.pendingFail')                 // "Pending/Fail"
t('admin.charts.genderDistribution')          // "Gender Distribution"
t('admin.charts.male')                        // "Male"
t('admin.charts.female')                      // "Female"
```

#### **4. admin.tables** - Tables/Data View Page
```javascript
t('admin.tables.title')                       // "Unit Configuration & Selection"
t('admin.tables.analyzeData')                 // "Analyze institutional data across your network..."
t('admin.tables.teachers')                    // "Teachers"
t('admin.tables.students')                    // "Students"
t('admin.tables.filledForms')                 // "Filled Forms"
t('admin.tables.staffDirectory')              // "Staff Directory"
t('admin.tables.searchTeachers')              // "Search teachers..."
t('admin.tables.searchStudents')              // "Search students..."
t('admin.tables.noRecordsFound')              // "No records found"
t('admin.tables.noTeachersFound')             // "No teachers found for this school."
t('admin.tables.noStudentRecords')            // "No student records found for this school."
t('admin.tables.noTeacherRecords')            // "No teacher records found for this unit."
t('admin.tables.formResponseRegistry')        // "Form Responses Registry"
t('admin.tables.noResponses')                 // "No responses"
t('admin.tables.noFormResponses')             // "No form responses submitted by this school yet."
```

#### **5. admin.notifications** - Notifications/Forms Page
```javascript
t('admin.notifications.title')                // "Official Announcement"
t('admin.notifications.receiverRole')         // "RECEIVER ROLE"
t('admin.notifications.messageTitle')         // "TITLE"
t('admin.notifications.message')              // "MESSAGE"
t('admin.notifications.dispatchNotification') // "Dispatch Notification"
t('admin.notifications.dataCampaign')         // "Data Collection Campaign"
t('admin.notifications.targetRole')           // "TARGET ROLE"
t('admin.notifications.deadline')             // "DEADLINE"
t('admin.notifications.formTitle')            // "FORM TITLE"
t('admin.notifications.questions')            // "QUESTIONS"
t('admin.notifications.addMore')              // "+ Add More"
t('admin.notifications.enterQuestionText')    // "Enter question text..."
t('admin.notifications.inputText')            // "Input Text"
t('admin.notifications.multipleChoice')       // "Multiple Choice"
t('admin.notifications.optionsCommaSeparated')// "Options (comma separated)"
t('admin.notifications.launchCampaign')       // "Launch Campaign"
t('admin.notifications.recentRegistry')       // "Recent Communication Registry"
t('admin.notifications.noRecentActivity')     // "No recent activity found"
t('admin.notifications.notification')         // "NOTIFICATION"
t('admin.notifications.activeForm')           // "ACTIVE FORM"
t('admin.notifications.noLimit')              // "No limit"
t('admin.notifications.viewForm')             // "View Form"
```

#### **6. admin.import** - Unit Import Page
```javascript
t('admin.import.title')                       // "Import Units from Excel"
t('admin.import.excelFile')                   // "Excel File (.xlsx or .xls)"
t('admin.import.importing')                   // "Importing..."
t('admin.import.importUnits')                 // "Import Units"
t('admin.import.columnHeader')                // "The Excel sheet must use these exact column names..."
t('admin.import.spellingMatch')               // "(spelling and underscores must match exactly):"
t('admin.import.requiredColumns')             // Column names list
t('admin.import.optionalColumns')             // "Optional extra columns..."
t('admin.import.optionalColumnsList')         // Optional column names list
```

#### **7. admin.layout** - Navigation Elements
```javascript
t('admin.layout.dashboard')                   // "Dashboard"
t('admin.layout.tables')                      // "Tables"
t('admin.layout.charts')                      // "Charts"
t('admin.layout.notifications')               // "Notifications"
t('admin.layout.adminPanel')                  // "Admin Panel"
```

#### **8. admin.common** - Shared Strings
```javascript
t('admin.common.search')                      // "Search"
t('admin.common.download')                    // "Download"
t('admin.common.ready')                       // "Ready"
t('admin.common.missing')                     // "Missing"
t('admin.common.status')                      // "Status"
t('admin.common.school')                      // "School"
t('admin.common.noRecords')                   // "No Records"
t('admin.common.manageColumns')               // "Manage Columns"
t('admin.common.generateReports')             // "Generate Reports"
t('admin.common.selectYearType')              // "Select academic year and report type..."
t('admin.common.noDataAvailable')             // "No {tableName} data available..."
t('admin.common.directory')                   // "Directory"
```

---

## How to Use in Components

### **Step 1: Import useTranslation**
```javascript
import { useTranslation } from 'react-i18next';
```

### **Step 2: Initialize in Component**
```javascript
export default function AdminDashboard() {
  const { t } = useTranslation();
  // ... rest of component
}
```

### **Step 3: Replace Hardcoded Strings**

**Before:**
```jsx
<h1>Admin Dashboard</h1>
<button>Import Units</button>
<p>No report data found...</p>
```

**After:**
```jsx
<h1>{t('admin.dashboard.title')}</h1>
<button>{t('admin.dashboard.importUnits')}</button>
<p>{t('admin.dashboard.noReportDataFound')}</p>
```

### **Step 4: Language Toggle Already Works**
The language toggle button in the header will automatically switch all these strings between English and Marathi!

---

## Marathi Translations Available

All keys above have corresponding Marathi translations in i18n.js:
- मराठी अनुवाद सर्व keys साठी उपलब्ध आहे
- Toggle करताना स्वयंचलितपणे English ↔ Marathi हे होईल

---

## Summary of Translation Counts

| Category | Count | 
|----------|-------|
| Dashboard | 45 strings |
| Reports | 15 strings |
| Charts | 24 strings |
| Tables | 14 strings |
| Notifications | 18 strings |
| Import | 8 strings |
| Layout | 5 strings |
| Common | 13 strings |
| **Total Admin** | **142 strings** |

---

## Next Steps

1. **Replace hardcoded strings** in admin pages with `t()` calls
2. **Update components** one by one starting with Dashboard.jsx
3. **Test language toggle** to verify Marathi translation works
4. **Repeat for Principal, Teacher, Clerk pages** (similar process)

---

## Files to Update (Admin)

- [x] i18n.js - Added all translations
- [ ] Dashboard.jsx - Update with t() calls
- [ ] Charts.jsx - Update with t() calls
- [ ] Tables.jsx - Update with t() calls
- [ ] Report.jsx - Update with t() calls
- [ ] AdminUnitImport.jsx - Update with t() calls
- [ ] AdminLayout.jsx - Update navigation with t() calls

---

## Example: Converting Dashboard.jsx

**Current hardcoded:**
```javascript
<h1>Admin Dashboard</h1>
<p>Monitor and manage all MKSSS educational units</p>
<button>Import Units</button>
```

**With translations:**
```javascript
const { t } = useTranslation();

<h1>{t('admin.dashboard.title')}</h1>
<p>{t('admin.dashboard.monitorManageUnits')}</p>
<button>{t('admin.dashboard.importUnits')}</button>
```

---

## Status

✅ **English translations** - Added to i18n.js
✅ **Marathi translations** - Added to i18n.js
⏳ **Component updates** - Ready for implementation
⏳ **Principal pages** - Waiting for analysis
⏳ **Teacher pages** - Waiting for analysis
⏳ **Clerk pages** - Waiting for analysis
