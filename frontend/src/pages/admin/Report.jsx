import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import ChatWidget from "../../components/ChatWidget";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminCard from "../../components/admin/AdminCard";
import EmptyState from "../../components/admin/EmptyState";

export default function Report() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [units, setUnits] = useState([]);
	const [unitId, setUnitId] = useState("");
	const [loading, setLoading] = useState(false);
	const [pdfUrl, setPdfUrl] = useState("");

	useEffect(() => {
		const token = localStorage.getItem("token");
		axios.get("http://localhost:5000/api/admin/units", {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then(res => setUnits(res.data))
			.catch(() => {});
	}, []);

	async function generateReport(unitIdArg) {
		const targetId = unitIdArg || unitId;
		if (!targetId) return alert(t('admin.reports.selectSchool'));
		setLoading(true);
		try {
			const token = localStorage.getItem("token");
			const res = await axios.get(
				`http://localhost:5000/api/report/class-summary/${targetId}`,
				{
					headers: { Authorization: `Bearer ${token}` },
					responseType: "blob"
				}
			);
			const fileURL = URL.createObjectURL(res.data);
			setPdfUrl(fileURL);
		} catch (err) {
			alert(t('admin.reports.failedGenerate'));
		}
		setLoading(false);
	}

	return (
    <AdminLayout activeSidebarTab="reports">
      <div className="reports-page">
        <AdminCard header={t('admin.reports.generateReport')}>
          <p className="text-muted small mb-4">{t('admin.reports.selectSchoolDescription')}</p>
            <div className="row align-items-end">
              <div className="col-md-6 mb-3 mb-md-0">
                <label className="form-label small fw-bold">{t('admin.reports.selectSchoolLabel')}</label>
                <select className="form-select" value={unitId} onChange={e => setUnitId(e.target.value)}>
                  <option value="">{t('admin.common.select')}</option>
                  {units.map(u => (
                    <option key={u.unit_id} value={u.unit_id}>
                      {u.kendrashala_name || u.name || `Unit ${u.unit_id}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 d-flex gap-2">
                <button className="btn btn-primary flex-fill" onClick={() => generateReport()} disabled={loading || !unitId}>
                  {loading ? <span className="spinner-border spinner-border-sm me-2"></span> : <i className="bi bi-file-earmark-pdf me-2"></i>}
                  {t('admin.reports.generateBtn')}
                </button>
                <button className="btn btn-secondary" onClick={() => navigate("/admin")}>
                  {t('admin.reports.goToDashboard')}
                </button>
              </div>
            </div>
        </AdminCard>

        {units.length === 0 ? (
          <div className="mt-4"><EmptyState title={t('admin.common.noSchools')} description={t('admin.common.noUnitsAvailable')} /></div>
        ) : (
          <div className="row mt-4">
            {units.map(u => (
              <div key={u.unit_id} className="col-md-6 col-lg-4 mb-4">
                <AdminCard className="h-100">
                  <div className="d-flex flex-column h-100">
                    <h5 className="mb-3">{u.kendrashala_name || u.name || `Unit ${u.unit_id}`}</h5>
                    <div className="d-flex gap-3 mb-4">
                      <div className="p-2 bg-light rounded text-center flex-fill">
                        <div className="fw-bold">{u.staff_count ?? u.teacher_count ?? '0'}</div>
                        <div className="small text-muted" style={{ fontSize: '10px' }}>{t('admin.common.staff')}</div>
                      </div>
                      <div className="p-2 bg-light rounded text-center flex-fill">
                        <div className="fw-bold">{u.student_count ?? u.students ?? '0'}</div>
                        <div className="small text-muted" style={{ fontSize: '10px' }}>{t('admin.common.students')}</div>
                      </div>
                    </div>
                    <button className="btn btn-outline-primary btn-sm mt-auto" onClick={() => generateReport(u.unit_id)}>
                      {t('admin.reports.downloadReport')}
                    </button>
                  </div>
                </AdminCard>
              </div>
            ))}
          </div>
        )}

        {pdfUrl && (
          <div className="mt-4">
            <AdminCard header={t('admin.reports.reportPreview')}>
              <iframe
                src={pdfUrl}
                width="100%"
                height="600px"
                title="PDF Preview"
                style={{ border: "1px solid #e2e8f0", borderRadius: '8px' }}
              />
            </AdminCard>
          </div>
        )}
      </div>
      <ChatWidget />
    </AdminLayout>
	);
}
