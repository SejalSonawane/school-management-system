// import React from "react";

// export default function ManageRetirements() {
//   const container = { padding: '28px', background: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif', color: '#111827' };
//   const title = { fontSize: '20px', fontWeight: 600, marginBottom: '12px' };
//   const sectionLabel = { fontWeight: 600, margin: '6px 0 10px 0' };
//   const pillsRow = { display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' };
//   const pill = { padding: '6px 10px', borderRadius: '8px', background: '#f3f4f6', border: '1px solid #e5e7eb', color: '#111827', fontSize: '13px' };
//   const pillSelected = { ...pill, background: '#eef2ff', borderColor: '#dbeafe' };
//   const info = { color: '#374151', marginBottom: '18px' };
//   const table = { width: '100%', borderCollapse: 'collapse' };
//   const th = { textAlign: 'left', padding: '12px 16px', background: '#eef6ff', color: '#0b3a57', fontWeight: 600, borderBottom: '1px solid #e6eef7' };
//   const td = { padding: '14px 16px', borderBottom: '1px solid #e6e6e6', verticalAlign: 'middle' };
//   const dateWrapper = { display: 'inline-block', position: 'relative', minWidth: '160px' };
//   const dateInput = { padding: '6px 34px 6px 8px', fontSize: '13px' };
//   const placeholder = { position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#6b7280', fontSize: '13px' };
//   const saveBtn = { background: '#0b3a57', color: '#ffffff', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '13px' };

//   // Hardcoded rows exactly in required order
//   const rows = [
//     { name: 'teacher five', value: '2029-06-05', display: '05-06-2029' },
//     { name: 'teacher four', value: '', display: 'dd-mm-yyyy' },
//     { name: 'teacher one', value: '', display: 'dd-mm-yyyy' },
//     { name: 'teacher ten', value: '', display: 'dd-mm-yyyy' },
//     { name: 'teacher three', value: '', display: 'dd-mm-yyyy' }
//   ];

//   return (
//     <div style={container}>
//       <div style={title}>Manage Teacher Retirement Dates</div>

//       <div style={sectionLabel}>Upcoming retirements:</div>

//       <div style={pillsRow}>
//         <div style={pillSelected}>All (5)</div>
//         <div style={pill}>2026: 0</div>
//         <div style={pill}>2027: 0</div>
//         <div style={pill}>2028: 0</div>
//         <div style={pill}>2029: 1</div>
//         <div style={pill}>2030: 0</div>
//       </div>

//       <div style={info}>Showing 5 teacher(s) (total 5)</div>

//       <table style={table}>
//         <thead>
//           <tr>
//             <th style={th}>Name</th>
//             <th style={th}>Retirement Date</th>
//             <th style={th}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((r, i) => (
//             <tr key={i}>
//               <td style={td}>{r.name}</td>
//               <td style={td}>
//                 <div style={dateWrapper}>
//                   <input type="date" value={r.value} onChange={() => {}} style={dateInput} />
//                   <div style={placeholder}>{r.value ? r.display : r.display}</div>
//                 </div>
//               </td>
//               <td style={{ ...td, textAlign: 'right' }}>
//                 <button style={saveBtn}>Save</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// import React from "react";

// export default function ManageRetirements() {
//   const container = { padding: '28px', background: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif', color: '#111827' };
//   const title = { fontSize: '20px', fontWeight: 600, marginBottom: '12px' };
//   const sectionLabel = { fontWeight: 600, margin: '6px 0 10px 0' };
//   const pillsRow = { display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' };
//   const pill = { padding: '6px 10px', borderRadius: '8px', background: '#f3f4f6', border: '1px solid #e5e7eb', color: '#111827', fontSize: '13px' };
//   const pillSelected = { ...pill, background: '#eef2ff', borderColor: '#dbeafe' };
//   const info = { color: '#374151', marginBottom: '18px' };
//   const table = { width: '100%', borderCollapse: 'collapse' };
//   const th = { textAlign: 'left', padding: '12px 16px', background: '#eef6ff', color: '#0b3a57', fontWeight: 600, borderBottom: '1px solid #e6eef7' };
//   const td = { padding: '14px 16px', borderBottom: '1px solid #e6e6e6', verticalAlign: 'middle' };
//   const dateWrapper = { display: 'inline-block', position: 'relative', minWidth: '160px' };
//   const dateInput = { padding: '6px 34px 6px 8px', fontSize: '13px' };
//   const placeholder = { position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#6b7280', fontSize: '13px' };
//   const saveBtn = { background: '#0b3a57', color: '#ffffff', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '13px' };

//   // Hardcoded rows exactly in required order
//   const rows = [
//     { name: 'teacher five', value: '2029-06-05', display: '05-06-2029' },
//     { name: 'teacher four', value: '', display: 'dd-mm-yyyy' },
//     { name: 'teacher one', value: '', display: 'dd-mm-yyyy' },
//     { name: 'teacher ten', value: '', display: 'dd-mm-yyyy' },
//     { name: 'teacher three', value: '', display: 'dd-mm-yyyy' }
//   ];

//   return (
//     <div style={container}>
//       <div style={title}>Manage Teacher Retirement Dates</div>

//       <div style={sectionLabel}>Upcoming retirements:</div>

//       <div style={pillsRow}>
//         <div style={pillSelected}>All (5)</div>
//         <div style={pill}>2026: 0</div>
//         <div style={pill}>2027: 0</div>
//         <div style={pill}>2028: 0</div>
//         <div style={pill}>2029: 1</div>
//         <div style={pill}>2030: 0</div>
//       </div>

//       <div style={info}>Showing 5 teacher(s) (total 5)</div>

//       <table style={table}>
//         <thead>
//           <tr>
//             <th style={th}>Name</th>
//             <th style={th}>Retirement Date</th>
//             <th style={th}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((r, i) => (
//             <tr key={i}>
//               <td style={td}>{r.name}</td>
//               <td style={td}>
//                 <div style={dateWrapper}>
//                   <input type="date" value={r.value} onChange={() => {}} style={dateInput} />
//                   <div style={placeholder}>{r.value ? r.display : r.display}</div>
//                 </div>
//               </td>
//               <td style={{ ...td, textAlign: 'right' }}>
//                 <button style={saveBtn}>Save</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import AdminCard from "../../components/admin/AdminCard";
// import TableContainer from "../../components/admin/TableContainer";
// import EmptyState from "../../components/admin/EmptyState";
// import TabNavigation from "../../components/admin/TabNavigation";

// // Normalize retirement_date to YYYY-MM-DD format and handle multiple formats
// function normalizeDate(dateStr) {
//   if (!dateStr) return null;
//   if (typeof dateStr !== 'string') return null;
  
//   // Already in YYYY-MM-DD format
//   if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) {
//     return dateStr.slice(0, 10);
//   }
  
//   // Try DD-MM-YYYY format
//   const ddmmyyMatch = dateStr.match(/^(\d{2})-(\d{2})-(\d{4})/);
//   if (ddmmyyMatch) {
//     return `${ddmmyyMatch[3]}-${ddmmyyMatch[2]}-${ddmmyyMatch[1]}`;
//   }
  
//   return null;
// }

// // Extract year from retirement_date safely
// function getRetirementYear(dateStr) {
//   const normalized = normalizeDate(dateStr);
//   if (!normalized) return null;
//   const year = new Date(`${normalized}T00:00:00`).getFullYear();
//   return isNaN(year) ? null : year;
// }

// // Decode JWT to inspect claims
// function decodeJWT(token) {
//   if (!token) return null;
//   try {
//     const parts = token.split('.');
//     if (parts.length !== 3) return null;
//     const decoded = JSON.parse(atob(parts[1]));
//     return decoded;
//   } catch (e) {
//     console.error("[AUTH] Failed to decode JWT:", e);
//     return null;
//   }
// }

// // Diagnose authorization issues
// function diagnoseAuth(token) {
//   console.log("\n========== AUTH DIAGNOSIS ==========");
  
//   if (!token) {
//     console.error("[AUTH] ❌ NO TOKEN FOUND in localStorage");
//     return false;
//   }
  
//   console.log("[AUTH] ✓ Token exists (length:", token.length, "chars)");
  
//   const decoded = decodeJWT(token);
//   if (!decoded) {
//     console.error("[AUTH] ❌ Token is invalid/undecodable");
//     return false;
//   }
  
//   console.log("[AUTH] ✓ Token decoded successfully");
//   console.log("[AUTH] Token payload:", {
//     userId: decoded.user_id || decoded.userId || decoded.id,
//     role: decoded.role || decoded.roles || 'NOT FOUND',
//     exp: decoded.exp ? new Date(decoded.exp * 1000).toISOString() : 'NOT FOUND',
//     iat: decoded.iat ? new Date(decoded.iat * 1000).toISOString() : 'NOT FOUND',
//   });
  
//   const role = decoded.role || decoded.roles;
//   if (!role) {
//     console.warn("[AUTH] ⚠️ Role claim NOT found in token");
//   } else if (role !== 'clerk' && role !== 'admin') {
//     console.error("[AUTH] ❌ Role is '", role, "' but should be 'clerk' or 'admin'");
//     return false;
//   } else {
//     console.log("[AUTH] ✓ Role is '", role, "' (expected for this endpoint)");
//   }
  
//   if (decoded.exp) {
//     const expiryMs = decoded.exp * 1000;
//     const nowMs = Date.now();
//     if (nowMs > expiryMs) {
//       console.error("[AUTH] ❌ Token EXPIRED at", new Date(expiryMs).toISOString());
//       return false;
//     } else {
//       const remainingMs = expiryMs - nowMs;
//       import React from "react";

//       export default function ManageRetirements() {
//         const containerStyle = {
//           background: '#ffffff',
//           padding: '24px',
//           fontFamily: 'Arial, Helvetica, sans-serif',
//           color: '#1f2937'
//         };

//         const titleStyle = { fontSize: '20px', fontWeight: 600, marginBottom: '14px' };

//         const labelStyle = { marginTop: '6px', marginBottom: '10px', fontWeight: 600 };

//         const pillsRow = { display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' };

//         const pillBase = {
//           padding: '6px 10px',
//           borderRadius: '8px',
//           background: '#f3f4f6',
//           border: '1px solid #e5e7eb',
//           color: '#111827',
//           fontSize: '13px'
//         };

//         const pillSelected = { ...pillBase, background: '#eef2ff', borderColor: '#dbeafe' };

//         const infoText = { marginTop: '6px', marginBottom: '18px', color: '#374151' };

//         const tableStyle = { width: '100%', borderCollapse: 'collapse', background: '#ffffff' };

//         const thStyle = { textAlign: 'left', padding: '12px 16px', background: '#eef6ff', color: '#0b3a57', fontWeight: 600, borderBottom: '1px solid #e6eef7' };

//         const tdStyle = { padding: '14px 16px', borderBottom: '1px solid #e6e6e6', verticalAlign: 'middle' };

//         const dateWrapper = { display: 'inline-block', position: 'relative', minWidth: '150px' };

//         const dateInputStyle = { padding: '6px 34px 6px 8px', fontSize: '13px' };

//         const placeholderOverlay = {
//           position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#6b7280', fontSize: '13px'
//         };

//         const saveBtn = { background: '#0b3a57', color: '#ffffff', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '13px' };

//         // Hardcoded demo rows (exact order)
//         const rows = [
//           { name: 'teacher five', dateValue: '2029-06-05', displayDate: '05-06-2029' },
//           { name: 'teacher four', dateValue: '', displayDate: 'dd-mm-yyyy' },
//           { name: 'teacher one', dateValue: '', displayDate: 'dd-mm-yyyy' },
//           { name: 'teacher ten', dateValue: '', displayDate: 'dd-mm-yyyy' },
//           { name: 'teacher three', dateValue: '', displayDate: 'dd-mm-yyyy' }
//         ];

//         return (
//           <div style={containerStyle}>
//             <div style={titleStyle}>Manage Teacher Retirement Dates</div>

//             <div style={{ marginBottom: '6px', fontWeight: 600 }}>Upcoming retirements:</div>

//             <div style={pillsRow}>
//               <div style={pillSelected}>All (5)</div>
//               <div style={pillBase}>2026: 0</div>
//               <div style={pillBase}>2027: 0</div>
//               <div style={pillBase}>2028: 0</div>
//               <div style={pillBase}>2029: 1</div>
//               <div style={pillBase}>2030: 0</div>
//             </div>

//             <div style={infoText}>Showing 5 teacher(s) (total 5)</div>

//             <table style={tableStyle}>
//               <thead>
//                 <tr>
//                   <th style={thStyle}>Name</th>
//                   <th style={thStyle}>Retirement Date</th>
//                   <th style={thStyle}>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {rows.map((r, idx) => (
//                   <tr key={idx}>
//                     <td style={tdStyle}>{r.name}</td>
//                     <td style={tdStyle}>
//                       <div style={dateWrapper}>
//                         <input
//                           type="date"
//                           value={r.dateValue}
//                           onChange={() => {}}
//                           style={dateInputStyle}
//                           aria-label={`retirement-${r.name}`}
//                         />
//                         {/* overlay to show dd-mm-yyyy or formatted display */}
//                         <div style={placeholderOverlay}>{r.dateValue ? r.displayDate : r.displayDate}</div>
//                       </div>
//                     </td>
//                     <td style={{ ...tdStyle, textAlign: 'right' }}>
//                       <button style={saveBtn}>Save</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );
//       }
//                         </button>
//                       </div>
//                     ))}
//                     {upcoming.length === 0 && (
//                       <div className="col text-muted small py-4 text-center">
//                         <i className="bi bi-calendar-x d-block mb-2 fs-3 opacity-50"></i>
//                         No upcoming retirement projections found for the next period.
//                       </div>
//                     )}
//                   </div>

//                   <div className="mt-5 p-3 bg-soft-info rounded-3 border-start border-4 border-info d-flex align-items-center gap-3">
//                     <div className="bg-info bg-opacity-10 p-2 rounded-circle">
//                       <i className="bi bi-info-circle-fill text-info fs-5"></i>
//                     </div>
//                     <p className="small text-info mb-0 fw-medium">
//                       Retirement projections are based on service record data and institutional policy. 
//                       Updating service dates in the next tab will automatically refresh these projections.
//                     </p>
//                   </div>
//                 </AdminCard>
//               </div>
//             </div>
//           )}

//           {activeTab === "records" && (
//             <div className="row">
//               <div className="col-12">
//                 <AdminCard header={
//                   <div className="d-flex align-items-center justify-content-between w-100">
//                     <div className="d-flex align-items-center gap-2">
//                       <i className="bi bi-person-badge text-primary"></i>
//                       <span>Institutional Staff Service Records</span>
//                     </div>
//                     <div className="d-flex align-items-center gap-2">
//                       {selectedYear && (
//                         <button 
//                           className="btn btn-sm btn-soft-danger px-2 py-1 rounded-pill small fw-bold"
//                           onClick={() => setSelectedYear(null)}
//                         >
//                           Clear Filter <i className="bi bi-x"></i>
//                         </button>
//                       )}
//                       <span className="badge bg-soft-primary text-primary px-3 py-2">
//                         {selectedYear ? `Projection: ${selectedYear}` : 'Full Faculty Roster'}
//                       </span>
//                     </div>
//                   </div>
//                 }>
//                   <TableContainer title="">
//                     <div className="table-responsive professional-table">
//                       <table className="table align-middle table-hover mb-0">
//                         <thead className="table-light">
//                           <tr>
//                             <th className="ps-3">Staff Member</th>
//                             <th>Staff ID</th>
//                             <th>Designated Retirement Date</th>
//                             <th className="text-end pe-3">Actions</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {filteredTeachers.length > 0 ? (
//                             filteredTeachers.map(t => (
//                               <tr key={t.staff_id}>
//                                 <td className="ps-3">
//                                   <div className="d-flex align-items-center gap-3">
//                                     <div className="avatar-circle-sm bg-soft-primary text-primary fw-bold border border-primary border-opacity-10">
//                                       {t.full_name?.charAt(0)}
//                                     </div>
//                                     <span className="fw-bold text-dark">{t.full_name}</span>
//                                   </div>
//                                 </td>
//                                 <td className="text-muted fw-medium">{t.staff_id}</td>
//                                 <td>
//                                   <div className="input-group input-group-sm" style={{ maxWidth: '180px' }}>
//                                     <span className="input-group-text bg-white border-end-0">
//                                       <i className="bi bi-calendar-event text-muted"></i>
//                                     </span>
//                                     <input
//                                       type="date"
//                                       className="form-control border-start-0 ps-0 bg-light-subtle fw-medium"
//                                       value={normalizeDate(t.retirement_date) || ""}
//                                       onChange={(e) => handleChange(t.staff_id, e.target.value || null)}
//                                     />
//                                   </div>
//                                 </td>
//                                 <td className="text-end pe-3">
//                                   <button
//                                     onClick={() => handleSave(t.staff_id)}
//                                     disabled={savingId === t.staff_id}
//                                     className={`btn btn-sm ${savingId === t.staff_id ? 'btn-light' : 'btn-primary'} px-3 rounded-pill fw-bold shadow-sm`}
//                                   >
//                                     {savingId === t.staff_id ? (
//                                       <><span className="spinner-border spinner-border-sm me-1" role="status"></span>Updating</>
//                                     ) : (
//                                       <><i className="bi bi-check-lg me-1"></i>Commit Change</>
//                                     )}
//                                   </button>
//                                 </td>
//                               </tr>
//                             ))
//                           ) : (
//                             <tr>
//                               <td colSpan="4">
//                                 <EmptyState title="No Records Found" description="No staff members match the current projection filter." />
//                               </td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </TableContainer>
//                 </AdminCard>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import AdminCard from "../../components/admin/AdminCard";
import TableContainer from "../../components/admin/TableContainer";
import EmptyState from "../../components/admin/EmptyState";
import TabNavigation from "../../components/admin/TabNavigation";

/* ---------------- Helper Functions ---------------- */

function normalizeDate(dateStr) {
  if (!dateStr) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
  const match = dateStr.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  return match ? `${match[3]}-${match[2]}-${match[1]}` : "";
}

function getRetirementYear(dateStr) {
  const d = normalizeDate(dateStr);
  if (!d) return null;
  const year = new Date(`${d}T00:00:00`).getFullYear();
  return isNaN(year) ? null : year;
}

/* ---------------- Main Component ---------------- */

export default function ManageRetirements() {
  const [activeTab, setActiveTab] = useState("projections");
  const [savingId, setSavingId] = useState(null);

  const teachers = [
    { staff_id: 1, full_name: "teacher five", retirement_date: "2029-06-05" },
    { staff_id: 2, full_name: "teacher four", retirement_date: null },
    { staff_id: 3, full_name: "teacher one", retirement_date: null },
    { staff_id: 4, full_name: "teacher ten", retirement_date: null },
    { staff_id: 5, full_name: "teacher three", retirement_date: null }
  ];

  const [records, setRecords] = useState(teachers);

  function handleChange(id, value) {
    setRecords(prev =>
      prev.map(t =>
        t.staff_id === id ? { ...t, retirement_date: value } : t
      )
    );
  }

  function handleSave(id) {
    setSavingId(id);
    setTimeout(() => {
      setSavingId(null);
      alert("Retirement date saved (demo)");
    }, 800);
  }

  return (
    <div className="container-fluid py-3">
      <TabNavigation
        tabs={[
          { key: "projections", label: "Retirement Projections" },
          { key: "records", label: "Staff Service Records" }
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === "records" && (
        <AdminCard header="Manage Teacher Retirement Dates">
          <TableContainer>
            <div className="table-responsive">
              <table className="table align-middle table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Staff Name</th>
                    <th>Staff ID</th>
                    <th>Retirement Date</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {records.length > 0 ? (
                    records.map(t => (
                      <tr key={t.staff_id}>
                        <td className="fw-bold">{t.full_name}</td>
                        <td>{t.staff_id}</td>
                        <td style={{ maxWidth: "180px" }}>
                          <input
                            type="date"
                            className="form-control form-control-sm"
                            value={normalizeDate(t.retirement_date)}
                            onChange={e =>
                              handleChange(t.staff_id, e.target.value)
                            }
                          />
                        </td>
                        <td className="text-end">
                          <button
                            className="btn btn-sm btn-primary rounded-pill px-3"
                            onClick={() => handleSave(t.staff_id)}
                            disabled={savingId === t.staff_id}
                          >
                            {savingId === t.staff_id ? "Saving..." : "Save"}
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">
                        <EmptyState
                          title="No Records Found"
                          description="No staff retirement records available."
                        />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </TableContainer>
        </AdminCard>
      )}
    </div>
  );
}
