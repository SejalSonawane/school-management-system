// import React, { useState } from "react";
// import AdminCard from "../../components/admin/AdminCard";
// import TableContainer from "../../components/admin/TableContainer";
// import Toolbar from "../../components/admin/Toolbar";
// import EmptyState from "../../components/admin/EmptyState";
// import TabNavigation from "../../components/admin/TabNavigation";
// import PageHeader from "../../components/admin/PageHeader";
// import ChatWidget from "../../components/ChatWidget";

// export default function StudentAdd() {
//   const [activeTab, setActiveTab] = useState("add-profile");

//   // ---------------- ADD NEW STUDENT ----------------
//   const [form, setForm] = useState({
//     full_name: "",
//     dob: "",
//     gender: "",
//     address: "",
//     parent_name: "",
//     parent_phone: "",
//     admission_date: "",
//     academic_year: "",
//     standard: "",
//     division: "",
//     roll_number: ""
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setMessage("");
//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:5000/api/clerk/students", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           ...form,
//           roll_number: form.roll_number ? Number(form.roll_number) : null
//         })
//       });

//       if (!res.ok) {
//         const errData = await res.json().catch(() => ({}));
//         throw new Error(errData.error || "Failed to add student");
//       }

//       setMessage("Student added successfully ✅");
//       setForm({
//         full_name: "", dob: "", gender: "", address: "", parent_name: "",
//         parent_phone: "", admission_date: "", academic_year: "",
//         standard: "", division: "", roll_number: ""
//       });
//       setTimeout(() => setMessage(""), 3000);
//     } catch (err) {
//       setMessage(err.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   // ---------------- ALLOCATE STUDENTS (PROMOTION) ----------------
//   const [studYear, setStudYear] = useState("");
//   const [passedStudents, setPassedStudents] = useState([]);
//   const [studAllocMsg, setStudAllocMsg] = useState("");
//   const [studAllocInputs, setStudAllocInputs] = useState({});

//   function handleStudAllocInputChange(student_id, field, value) {
//     setStudAllocInputs((prev) => ({
//       ...prev,
//       [student_id]: { ...(prev[student_id] || {}), [field]: value }
//     }));
//   }

//   async function loadPassedStudents() {
//     setStudAllocMsg("");
//     setPassedStudents([]);
//     if (!studYear) {
//       setStudAllocMsg("Enter academic year first.");
//       return;
//     }
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(
//         `http://localhost:5000/api/clerk/passed-students?academic_year=${encodeURIComponent(studYear)}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Failed to load");
//       setPassedStudents(data);
//       if (data.length === 0) setStudAllocMsg("No passed students found.");
//     } catch (err) {
//       setStudAllocMsg(err.message);
//     }
//   }

//   async function handlePromoteStudent(student) {
//     const inputs = studAllocInputs[student.student_id] || {};
//     if (!inputs.to_academic_year || !inputs.standard || !inputs.division) {
//       alert("Missing required fields for promotion.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:5000/api/clerk/allocate-student-next-year", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         body: JSON.stringify({
//           student_id: student.student_id,
//           from_academic_year: studYear,
//           to_academic_year: inputs.to_academic_year,
//           standard: inputs.standard,
//           division: inputs.division,
//           roll_number: inputs.roll_number ? Number(inputs.roll_number) : null
//         })
//       });
//       if (!res.ok) throw new Error("Promotion failed");
//       alert("Promoted successfully ✅");
//     } catch (err) {
//       alert(err.message);
//     }
//   }

//   // ---------------- ALLOCATE TEACHERS ----------------
//   const [teacherYear, setTeacherYear] = useState("");
//   const [teachers, setTeachers] = useState([]);
//   const [teacherMsg, setTeacherMsg] = useState("");
//   const [teacherAllocInputs, setTeacherAllocInputs] = useState({});

//   function handleTeacherAllocInputChange(staff_id, field, value) {
//     setTeacherAllocInputs((prev) => ({
//       ...prev,
//       [staff_id]: { ...(prev[staff_id] || {}), [field]: value }
//     }));
//   }

//   async function loadTeachers() {
//     setTeacherMsg("");
//     setTeachers([]);
//     if (!teacherYear) {
//       setTeacherMsg("Enter year first.");
//       return;
//     }
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(
//         `http://localhost:5000/api/clerk/teachers-for-allocation?academic_year=${encodeURIComponent(teacherYear)}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       const data = await res.json();
//       setTeachers(data || []);
//       if (data.length === 0) setTeacherMsg("No staff found.");
//     } catch (err) {
//       setTeacherMsg("Failed to load staff.");
//     }
//   }

//   async function handleAllocateTeacher(teacher) {
//     const inputs = teacherAllocInputs[teacher.staff_id] || {};
//     const ay = inputs.academic_year || teacherYear;
//     if (!ay || !inputs.standard || !inputs.division) {
//       alert("Missing allocation details.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:5000/api/clerk/allocate-teacher", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         body: JSON.stringify({
//           staff_id: teacher.staff_id,
//           academic_year: ay,
//           standard: inputs.standard,
//           division: inputs.division
//         })
//       });
//       if (!res.ok) throw new Error("Allocation failed");
//       alert("Staff allocated ✅");
//     } catch (err) {
//       alert(err.message);
//     }
//   }

//   const studentTabs = [
//     { id: "add-profile", label: "Add New Student Profile", icon: "bi-person-plus" },
//     { id: "promotion", label: "Annual Promotion", icon: "bi-arrow-up-circle" },
//     { id: "allocation", label: "Staff Class Allocation", icon: "bi-people" },
//   ];

//   return (
//     <div className="pb-4">
//       <PageHeader 
//         title="Student & Staff Registration" 
//         subtitle="Enroll new students and manage academic year class allocations" 
//       />

//       <TabNavigation
//         tabs={studentTabs}
//         activeTab={activeTab}
//         onTabChange={setActiveTab}
//       />

//       <div className="mt-3">
//         {activeTab === "add-profile" && (
//           <AdminCard header="Register New Student">
//             {message && (
//               <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'} py-2 mb-4 small shadow-sm`}>
//                 {message}
//               </div>
//             )}
//             <form onSubmit={handleSubmit}>
//               <div className="row g-3">
//                 <div className="col-md-6">
//                   <label className="form-label small fw-bold text-muted text-uppercase">Full Name</label>
//                   <input name="full_name" className="form-control border-primary-subtle" value={form.full_name} onChange={handleChange} required placeholder="Enter student's legal name" />
//                 </div>
//                 <div className="col-md-3">
//                   <label className="form-label small fw-bold text-muted text-uppercase">Date of Birth</label>
//                   <input name="dob" type="date" className="form-control border-primary-subtle" value={form.dob} onChange={handleChange} required />
//                 </div>
//                 <div className="col-md-3">
//                   <label className="form-label small fw-bold text-muted text-uppercase">Gender</label>
//                   <select name="gender" className="form-select border-primary-subtle" value={form.gender} onChange={handleChange} required>
//                     <option value="">Select</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//                 <div className="col-md-12">
//                   <label className="form-label small fw-bold text-muted text-uppercase">Residential Address</label>
//                   <input name="address" className="form-control border-primary-subtle" value={form.address} onChange={handleChange} placeholder="House no, Street, City" />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label small fw-bold text-muted text-uppercase">Parent / Guardian Name</label>
//                   <input name="parent_name" className="form-control border-primary-subtle" value={form.parent_name} onChange={handleChange} placeholder="Father or Mother's name" />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label small fw-bold text-muted text-uppercase">Contact Number</label>
//                   <input name="parent_phone" className="form-control border-primary-subtle" value={form.parent_phone} onChange={handleChange} placeholder="+91 00000 00000" />
//                 </div>
//               </div>

//               <div className="mt-4 p-4 bg-light rounded-4 border shadow-sm">
//                 <h6 className="fw-bold text-primary mb-4 d-flex align-items-center gap-2">
//                   <div className="icon-circle bg-primary text-white" style={{ width: '24px', height: '24px', fontSize: '0.75rem' }}>
//                     <i className="bi bi-mortarboard"></i>
//                   </div>
//                   Academic Enrollment Details
//                 </h6>
//                 <div className="row g-3">
//                   <div className="col-md-3">
//                     <label className="form-label small fw-bold text-muted text-uppercase">Academic Year</label>
//                     <input name="academic_year" className="form-control border-primary-subtle" placeholder="e.g. 2025-26" value={form.academic_year} onChange={handleChange} required />
//                   </div>
//                   <div className="col-md-3">
//                     <label className="form-label small fw-bold text-muted text-uppercase">Standard</label>
//                     <input name="standard" className="form-control border-primary-subtle" value={form.standard} onChange={handleChange} required placeholder="e.g. 10" />
//                   </div>
//                   <div className="col-md-2">
//                     <label className="form-label small fw-bold text-muted text-uppercase">Division</label>
//                     <input name="division" className="form-control border-primary-subtle" value={form.division} onChange={handleChange} placeholder="e.g. A" />
//                   </div>
//                   <div className="col-md-2">
//                     <label className="form-label small fw-bold text-muted text-uppercase">Roll No</label>
//                     <input name="roll_number" type="number" className="form-control border-primary-subtle" value={form.roll_number} onChange={handleChange} />
//                   </div>
//                   <div className="col-md-2">
//                     <label className="form-label small fw-bold text-muted text-uppercase">Admission Date</label>
//                     <input name="admission_date" type="date" className="form-control border-primary-subtle" value={form.admission_date} onChange={handleChange} />
//                   </div>
//                 </div>
//               </div>

//               <div className="d-flex justify-content-end mt-4">
//                 <button type="submit" className="btn btn-primary px-5 py-2 shadow-sm fw-bold" disabled={loading}>
//                   {loading ? (
//                     <span className="spinner-border spinner-border-sm me-2"></span>
//                   ) : (
//                     <i className="bi bi-person-check me-2"></i>
//                   )}
//                   {loading ? "Registering..." : "Complete Registration"}
//                 </button>
//               </div>
//             </form>
//           </AdminCard>
//         )}

//         {activeTab === "promotion" && (
//           <AdminCard header="Academic Year Promotion">
//             <div className="bg-light p-3 rounded-4 mb-4 border shadow-sm">
//               <div className="row align-items-center g-3">
//                 <div className="col-auto">
//                   <span className="fw-bold text-muted small text-uppercase">Source Year:</span>
//                 </div>
//                 <div className="col-md-3">
//                   <input
//                     className="form-control border-primary-subtle"
//                     placeholder="e.g. 2024-25"
//                     value={studYear}
//                     onChange={(e) => setStudYear(e.target.value)}
//                   />
//                 </div>
//                 <div className="col-auto">
//                   <button className="btn btn-primary px-4 fw-bold shadow-sm" onClick={loadPassedStudents}>
//                     <i className="bi bi-search me-2"></i>
//                     Load Directory
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {studAllocMsg && <div className="alert alert-info py-2 mb-3 small shadow-sm">{studAllocMsg}</div>}
            
//             {passedStudents.length > 0 ? (
//               <TableContainer title="">
//                 <div className="table-responsive professional-table">
//                   <table className="table align-middle table-hover">
//                     <thead className="table-light">
//                       <tr>
//                         <th className="ps-3">STUDENT NAME</th>
//                         <th>CURRENT</th>
//                         <th>NEXT YEAR</th>
//                         <th>NEXT STD</th>
//                         <th>NEXT DIV</th>
//                         <th>ROLL</th>
//                         <th className="text-end pe-3">ACTION</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {passedStudents.map((s) => {
//                         const inputs = studAllocInputs[s.student_id] || {};
//                         return (
//                           <tr key={s.student_id}>
//                             <td className="ps-3">
//                               <div className="d-flex align-items-center gap-2">
//                                 <div className="avatar-circle student" style={{ width: '28px', height: '28px', fontSize: '0.7rem' }}>
//                                   {s.full_name?.charAt(0)}
//                                 </div>
//                                 <span className="fw-bold text-dark">{s.full_name}</span>
//                               </div>
//                             </td>
//                             <td>
//                               <span className="erp-badge badge-year" style={{ fontSize: '0.7rem' }}>
//                                 STD {s.standard} - {s.division}
//                               </span>
//                             </td>
//                             <td>
//                               <input 
//                                 className="form-control form-control-sm border-primary-subtle" 
//                                 placeholder="2025-26" 
//                                 value={inputs.to_academic_year || ""} 
//                                 onChange={(e) => handleStudAllocInputChange(s.student_id, "to_academic_year", e.target.value)} 
//                                 style={{ maxWidth: '100px' }}
//                               />
//                             </td>
//                             <td>
//                               <input 
//                                 className="form-control form-control-sm border-primary-subtle" 
//                                 style={{ width: 60 }} 
//                                 value={inputs.standard || ""} 
//                                 onChange={(e) => handleStudAllocInputChange(s.student_id, "standard", e.target.value)} 
//                               />
//                             </td>
//                             <td>
//                               <input 
//                                 className="form-control form-control-sm border-primary-subtle" 
//                                 style={{ width: 50 }} 
//                                 value={inputs.division || ""} 
//                                 onChange={(e) => handleStudAllocInputChange(s.student_id, "division", e.target.value)} 
//                               />
//                             </td>
//                             <td>
//                               <input 
//                                 className="form-control form-control-sm border-primary-subtle" 
//                                 style={{ width: 50 }} 
//                                 value={inputs.roll_number || ""} 
//                                 onChange={(e) => handleStudAllocInputChange(s.student_id, "roll_number", e.target.value)} 
//                               />
//                             </td>
//                             <td className="text-end pe-3">
//                               <button className="btn btn-sm btn-success fw-bold px-3 shadow-sm" onClick={() => handlePromoteStudent(s)}>
//                                 Promote
//                               </button>
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               </TableContainer>
//             ) : (
//               !studAllocMsg && <EmptyState title="No Records" description="Enter the source academic year and load the directory to begin promotion." />
//             )}
//           </AdminCard>
//         )}

//         {activeTab === "allocation" && (
//           <AdminCard header="Faculty Assignment Management">
//             <div className="bg-light p-3 rounded-4 mb-4 border shadow-sm">
//               <div className="row align-items-center g-3">
//                 <div className="col-auto">
//                   <span className="fw-bold text-muted small text-uppercase">Target Year:</span>
//                 </div>
//                 <div className="col-md-3">
//                   <input
//                     className="form-control border-primary-subtle"
//                     placeholder="e.g. 2025-26"
//                     value={teacherYear}
//                     onChange={(e) => setTeacherYear(e.target.value)}
//                   />
//                 </div>
//                 <div className="col-auto">
//                   <button className="btn btn-primary px-4 fw-bold shadow-sm" onClick={loadTeachers}>
//                     <i className="bi bi-people me-2"></i>
//                     Fetch Staff List
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {teacherMsg && <div className="alert alert-info py-2 mb-3 small shadow-sm">{teacherMsg}</div>}

//             {teachers.length > 0 ? (
//               <TableContainer title="">
//                 <div className="table-responsive professional-table">
//                   <table className="table align-middle table-hover">
//                     <thead className="table-light">
//                       <tr>
//                         <th className="ps-3">STAFF NAME</th>
//                         <th>CURRENT ROLE</th>
//                         <th>TARGET YEAR</th>
//                         <th>STD</th>
//                         <th>DIV</th>
//                         <th className="text-end pe-3">ACTION</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {teachers.map((t) => {
//                         const inputs = teacherAllocInputs[t.staff_id] || {};
//                         return (
//                           <tr key={t.staff_id}>
//                             <td className="ps-3">
//                               <div className="d-flex align-items-center gap-2">
//                                 <div className="avatar-circle teacher" style={{ width: '28px', height: '28px', fontSize: '0.7rem' }}>
//                                   {t.full_name?.charAt(0)}
//                                 </div>
//                                 <span className="fw-bold text-dark">{t.full_name}</span>
//                               </div>
//                             </td>
//                             <td>
//                               <span className="small text-muted fw-medium">
//                                 {t.standard ? (
//                                   <span className="badge bg-soft-info text-info">
//                                     {t.standard} - {t.division}
//                                   </span>
//                                 ) : (
//                                   "Unassigned"
//                                 )}
//                               </span>
//                             </td>
//                             <td>
//                               <input 
//                                 className="form-control form-control-sm border-primary-subtle" 
//                                 placeholder={teacherYear} 
//                                 value={inputs.academic_year || ""} 
//                                 onChange={(e) => handleTeacherAllocInputChange(t.staff_id, "academic_year", e.target.value)} 
//                                 style={{ maxWidth: '100px' }}
//                               />
//                             </td>
//                             <td>
//                               <input 
//                                 className="form-control form-control-sm border-primary-subtle" 
//                                 style={{ width: 60 }} 
//                                 value={inputs.standard || ""} 
//                                 onChange={(e) => handleTeacherAllocInputChange(t.staff_id, "standard", e.target.value)} 
//                               />
//                             </td>
//                             <td>
//                               <input 
//                                 className="form-control form-control-sm border-primary-subtle" 
//                                 style={{ width: 50 }} 
//                                 value={inputs.division || ""} 
//                                 onChange={(e) => handleTeacherAllocInputChange(t.staff_id, "division", e.target.value)} 
//                               />
//                             </td>
//                             <td className="text-end pe-3">
//                               <button className="btn btn-sm btn-primary fw-bold px-3 shadow-sm" onClick={() => handleAllocateTeacher(t)}>
//                                 Assign Role
//                               </button>
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               </TableContainer>
//             ) : (
//               !teacherMsg && <EmptyState title="No Staff Data" description="Select the target academic year and fetch the staff list to manage class allocations." />
//             )}
//           </AdminCard>
//         )}
//       </div>

//       <ChatWidget />
//     </div>
//   );
// }
import React, { useState } from "react";

export default function StudentAdd() {
  // ---------------- ADD NEW STUDENT ----------------
  const [form, setForm] = useState({
    full_name: "",
    dob: "",
    gender: "",
    address: "",
    parent_name: "",
    parent_phone: "",
    admission_date: "",
    academic_year: "",
    standard: "",
    division: "",
    roll_number: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/clerk/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          full_name: form.full_name,
          dob: form.dob,
          gender: form.gender,
          address: form.address || null,
          parent_name: form.parent_name || null,
          parent_phone: form.parent_phone || null,
          admission_date: form.admission_date || null,
          academic_year: form.academic_year,
          standard: form.standard,
          division: form.division || null,
          roll_number: form.roll_number ? Number(form.roll_number) : null
        })
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to add student");
      }

      setMessage("Student added successfully.");
      setForm({
        full_name: "",
        dob: "",
        gender: "",
        address: "",
        parent_name: "",
        parent_phone: "",
        admission_date: "",
        academic_year: "",
        standard: "",
        division: "",
        roll_number: ""
      });
    } catch (err) {
      setMessage(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  // ---------------- BULK IMPORT (EXCEL) ----------------
  const [importFile, setImportFile] = useState(null);
  const [importLoading, setImportLoading] = useState(false);
  const [importMessage, setImportMessage] = useState("");

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    setImportFile(file || null);
    setImportMessage("");
  }

  async function handleImportSubmit(e) {
    e.preventDefault();
    setImportMessage("");

    if (!importFile) {
      setImportMessage("Please select an Excel file (.xlsx or .xls).");
      return;
    }

    try {
      setImportLoading(true);
      const token = localStorage.getItem("token");
      const formData = new FormData();
      // field name must be "file" to match uploadExcel.single('file')
      formData.append("file", importFile);

      const res = await fetch("http://localhost:5000/api/students/import", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
          // Do NOT set Content-Type manually; browser will set multipart boundary.
        },
        body: formData
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || "Failed to import students.");
      }

      setImportMessage(
        data.importedCount != null
          ? `Imported ${data.importedCount} students successfully.`
          : "Students imported successfully."
      );
      setImportFile(null);
      e.target.reset();
    } catch (err) {
      setImportMessage(err.message || "Failed to import students.");
    } finally {
      setImportLoading(false);
    }
  }

  // ---------------- ALLOCATE STUDENTS (PROMOTION) ----------------
  const [studYear, setStudYear] = useState("");
  const [passedStudents, setPassedStudents] = useState([]);
  const [studAllocMsg, setStudAllocMsg] = useState("");
  const [studAllocInputs, setStudAllocInputs] = useState({});
  // shape: { student_id: { to_academic_year, standard, division, roll_number } }

  function handleStudAllocInputChange(student_id, field, value) {
    setStudAllocInputs((prev) => ({
      ...prev,
      [student_id]: {
        ...(prev[student_id] || {}),
        [field]: value
      }
    }));
  }

  async function loadPassedStudents() {
    setStudAllocMsg("");
    setPassedStudents([]);
    if (!studYear) {
      setStudAllocMsg("Please enter academic year to load passed students.");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `http://localhost:5000/api/clerk/passed-students?academic_year=${encodeURIComponent(
          studYear
        )}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to load passed students.");
      }
      setPassedStudents(data);
      if (data.length === 0) {
        setStudAllocMsg("No passed students found for this year.");
      }
    } catch (err) {
      setStudAllocMsg(err.message || "Failed to load passed students.");
    }
  }

  async function handlePromoteStudent(student) {
    const inputs = studAllocInputs[student.student_id] || {};
    const to_academic_year = inputs.to_academic_year;
    const standard = inputs.standard;
    const division = inputs.division;
    const roll_number = inputs.roll_number;

    if (!to_academic_year || !standard || !division) {
      alert("Enter next academic year, standard and division.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "http://localhost:5000/api/clerk/allocate-student-next-year",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            student_id: student.student_id,
            from_academic_year: studYear,
            to_academic_year,
            standard,
            division,
            roll_number: roll_number ? Number(roll_number) : null
          })
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to allocate student.");
      }
      alert("Student promoted/allocated successfully.");
    } catch (err) {
      alert(err.message || "Failed to allocate student.");
    }
  }

  // ---------------- ALLOCATE TEACHERS ----------------
  const [teacherYear, setTeacherYear] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [teacherMsg, setTeacherMsg] = useState("");
  const [teacherAllocInputs, setTeacherAllocInputs] = useState({});
  // shape: { staff_id: { academic_year, standard, division } }

  function handleTeacherAllocInputChange(staff_id, field, value) {
    setTeacherAllocInputs((prev) => ({
      ...prev,
      [staff_id]: {
        ...(prev[staff_id] || {}),
        [field]: value
      }
    }));
  }

  async function loadTeachers() {
    setTeacherMsg("");
    setTeachers([]);
    if (!teacherYear) {
      setTeacherMsg("Please enter academic year to load teachers.");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `http://localhost:5000/api/clerk/teachers-for-allocation?academic_year=${encodeURIComponent(
          teacherYear
        )}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to load teachers.");
      }
      setTeachers(data);
      if (data.length === 0) {
        setTeacherMsg("No teachers found for this year.");
      }
    } catch (err) {
      setTeacherMsg(err.message || "Failed to load teachers.");
    }
  }

  async function handleAllocateTeacher(teacher) {
    const inputs = teacherAllocInputs[teacher.staff_id] || {};
    const academic_year = inputs.academic_year || teacherYear; // default to selected year
    const standard = inputs.standard;
    const division = inputs.division;

    if (!academic_year || !standard || !division) {
      alert("Enter academic year, standard and division for this teacher.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "http://localhost:5000/api/clerk/allocate-teacher",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            staff_id: teacher.staff_id,
            academic_year,
            standard,
            division
          })
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to allocate teacher.");
      }
      alert("Teacher class allocation saved.");
    } catch (err) {
      alert(err.message || "Failed to allocate teacher.");
    }
  }

  return (
    <div className="teacher-main-inner" style={{ marginBottom: 40 }}>
      {/* ---------- CARD: ADD NEW STUDENT ---------- */}
      <div className="teacher-profile-card">
        <div className="card-header">
          <h3>Add New Student</h3>
        </div>

        <div className="card-body">
          {message && (
            <div className="alert alert-info py-2 mb-3">{message}</div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Basic info */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="full_name"
                  className="form-control"
                  value={form.full_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Date of Birth *</label>
                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  value={form.dob}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Gender *</label>
                <select
                  name="gender"
                  className="form-select"
                  value={form.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Address & parent */}
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                className="form-control"
                rows={2}
                value={form.address}
                onChange={handleChange}
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Parent Name</label>
                <input
                  type="text"
                  name="parent_name"
                  className="form-control"
                  value={form.parent_name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Parent Phone</label>
                <input
                  type="text"
                  name="parent_phone"
                  className="form-control"
                  value={form.parent_phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Enrollment */}
            <hr className="my-4" />
            <h5 className="mb-3">Current Enrollment</h5>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Academic Year *</label>
                <input
                  type="text"
                  name="academic_year"
                  className="form-control"
                  placeholder="2024-25"
                  value={form.academic_year}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Standard *</label>
                <input
                  type="text"
                  name="standard"
                  className="form-control"
                  placeholder="1, 2, 3, LKG..."
                  value={form.standard}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Division</label>
                <input
                  type="text"
                  name="division"
                  className="form-control"
                  placeholder="A, B, C"
                  value={form.division}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Admission Date</label>
                <input
                  type="date"
                  name="admission_date"
                  className="form-control"
                  value={form.admission_date}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Roll Number</label>
                <input
                  type="number"
                  name="roll_number"
                  className="form-control"
                  value={form.roll_number}
                  onChange={handleChange}
                  min="1"
                />
              </div>
            </div>

            <div className="form-actions mt-3">
              <button
                type="submit"
                className="save-btn"
                disabled={loading}
              >
                {loading ? "Saving..." : "Add Student"}
              </button>
            </div>
          </form>

          {/* ---------- BULK IMPORT FROM EXCEL ---------- */}
          <hr className="my-4" />
          <h5 className="mb-3">Bulk Import from Excel</h5>
          {importMessage && (
            <div className="alert alert-info py-2 mb-3">
              {importMessage}
            </div>
          )}
          <form onSubmit={handleImportSubmit}>
            <div className="row align-items-end">
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Excel File (.xlsx or .xls)
                </label>
                <input
                  type="file"
                  className="form-control"
                  accept=".xlsx,.xls"
                  onChange={handleFileChange}
                />
              </div>
              <div className="col-md-3 mb-3">
                <button
                  type="submit"
                  className="save-btn"
                  disabled={importLoading}
                >
                  {importLoading ? "Importing..." : "Import from Excel"}
                </button>
              </div>
            </div>
            <p className="text-muted" style={{ fontSize: "0.85rem" }}>
             Make sure your Excel sheet has headers: unit_id, full_name, dob, gender,
address, parent_name, parent_phone, admission_date, academic_year,
standard, division, roll_number, passed, percentage, fee_paid_amount,
fee_paid_on, fee_clerk_id, fee_remarks.

            </p>
          </form>
        </div>
      </div>

      {/* ---------- CARD: ALLOCATE STUDENTS (PROMOTION) ---------- */}
      <div className="teacher-students-card" style={{ marginTop: 32 }}>
        <div className="card-header">
          <h3>Allocate Students (Promotion)</h3>
          <div className="header-controls">
            <input
              type="text"
              className="form-control"
              placeholder="From Year (e.g. 2024-25)"
              value={studYear}
              onChange={(e) => setStudYear(e.target.value)}
              style={{ maxWidth: 220 }}
            />
            <button
              className="btn btn-primary-custom"
              type="button"
              onClick={loadPassedStudents}
            >
              Load Passed Students
            </button>
          </div>
        </div>

        <div className="card-body">
          {studAllocMsg && (
            <div className="text-muted mb-2">{studAllocMsg}</div>
          )}

          {passedStudents.length > 0 && (
            <div className="table-responsive mb-2">
              <table className="teacher-students-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Prev Std/Div</th>
                    <th>Next Year</th>
                    <th>Next Std</th>
                    <th>Next Div</th>
                    <th>Next Roll</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {passedStudents.map((s) => {
                    const inputs = studAllocInputs[s.student_id] || {};
                    return (
                      <tr key={s.student_id + "-" + s.academic_year}>
                        <td>
                          {s.full_name}
                          <br />
                          <small className="text-muted">
                            {s.parent_name}
                          </small>
                        </td>
                        <td>
                          {s.standard} {s.division && `(${s.division})`}
                        </td>
                        <td>
                          <input
                            className="form-control form-control-sm"
                            placeholder="2025-26"
                            value={inputs.to_academic_year || ""}
                            onChange={(e) =>
                              handleStudAllocInputChange(
                                s.student_id,
                                "to_academic_year",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="form-control form-control-sm"
                            placeholder="Next Std"
                            value={inputs.standard || ""}
                            onChange={(e) =>
                              handleStudAllocInputChange(
                                s.student_id,
                                "standard",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="form-control form-control-sm"
                            placeholder="A/B/C"
                            value={inputs.division || ""}
                            onChange={(e) =>
                              handleStudAllocInputChange(
                                s.student_id,
                                "division",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control form-control-sm"
                            placeholder="Roll"
                            value={inputs.roll_number || ""}
                            onChange={(e) =>
                              handleStudAllocInputChange(
                                s.student_id,
                                "roll_number",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-success"
                            type="button"
                            onClick={() => handlePromoteStudent(s)}
                          >
                            Promote
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* ---------- CARD: ALLOCATE TEACHERS ---------- */}
      <div className="teacher-students-card" style={{ marginTop: 32 }}>
        <div className="card-header">
          <h3>Allocate Teachers to Classes</h3>
          <div className="header-controls">
            <input
              type="text"
              className="form-control"
              placeholder="Year (e.g. 2025-26)"
              value={teacherYear}
              onChange={(e) => setTeacherYear(e.target.value)}
              style={{ maxWidth: 220 }}
            />
            <button
              className="btn btn-primary-custom"
              type="button"
              onClick={loadTeachers}
            >
              Load Teachers
            </button>
          </div>
        </div>

        <div className="card-body">
          {teacherMsg && (
            <div className="text-muted mb-2">{teacherMsg}</div>
          )}

          {teachers.length > 0 && (
            <div className="table-responsive">
              <table className="teacher-students-table">
                <thead>
                  <tr>
                    <th>Teacher</th>
                    <th>Current Assignment ({teacherYear})</th>
                    <th>Assign Year</th>
                    <th>Standard</th>
                    <th>Division</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((t) => {
                    const inputs = teacherAllocInputs[t.staff_id] || {};
                    const currentClass =
                      t.standard && t.division
                        ? `${t.standard} (${t.division})`
                        : t.standard || "-";
                    return (
                      <tr
                        key={t.staff_id + "-" + (t.assignment_id || "none")}
                      >
                        <td>
                          {t.full_name}
                          <br />
                          <small className="text-muted">
                            {t.email}
                          </small>
                        </td>
                        <td>{currentClass || "-"}</td>
                        <td>
                          <input
                            className="form-control form-control-sm"
                            placeholder={teacherYear || "Year"}
                            value={inputs.academic_year || ""}
                            onChange={(e) =>
                              handleTeacherAllocInputChange(
                                t.staff_id,
                                "academic_year",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="form-control form-control-sm"
                            placeholder="Std"
                            value={inputs.standard || ""}
                            onChange={(e) =>
                              handleTeacherAllocInputChange(
                                t.staff_id,
                                "standard",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="form-control form-control-sm"
                            placeholder="A/B/C"
                            value={inputs.division || ""}
                            onChange={(e) =>
                              handleTeacherAllocInputChange(
                                t.staff_id,
                                "division",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-primary"
                            type="button"
                            onClick={() => handleAllocateTeacher(t)}
                          >
                            Save
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}