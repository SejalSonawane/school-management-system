import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AdminUnitImport() {
  const { t } = useTranslation();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleFileChange(e) {
    const f = e.target.files?.[0];
    setFile(f || null);
    setMessage("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    if (!file) {
      setMessage(t('admin.import.selectFile'));
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("file", file); // must match uploadExcel.single('file')

      const res = await fetch("http://localhost:5000/api/units/import", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        let msg = data.message || t('admin.import.failedImport');
        if (Array.isArray(data.missingHeaders) && data.missingHeaders.length) {
          msg += " " + t('admin.import.missingHeaders') + ": " + data.missingHeaders.join(", ");
        }
        throw new Error(msg);
      }

      setMessage(
        data.importedCount != null
          ? t('admin.import.importSuccess', { count: data.importedCount })
          : t('admin.import.importSuccess2')
      );
      setFile(null);
      e.target.reset();
    } catch (err) {
      setMessage(err.message || t('admin.import.failedImport'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-unit-import section-card mt-4">
      <div className="section-card__header">
        <h3 className="section-card__title">{t('admin.import.title')}</h3>
      </div>

      <div className="section-card__body">
        {message && (
          <div className="alert alert-info py-2 mb-3">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row align-items-end">
            <div className="col-md-6 mb-3">
              <label className="form-label">{t('admin.import.excelFile')}</label>
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
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? t('admin.import.importing') : t('admin.import.importBtn')}
              </button>
            </div>
          </div>

          <p className="text-muted" style={{ fontSize: "0.85rem" }}>
  {t('admin.import.columnHeader')}
  <br />
  <strong>
    unit_id, semis_no, dcf_no, nmms_no, scholarship_code,
    first_grant_in_aid_year, type_of_management, school_jurisdiction,
    competent_authority_name, authority_number, authority_zone,
    kendrashala_name, info_authority_name, appellate_authority_name,
    midday_meal_org_name, midday_meal_org_contact, standard_range,
    headmistress_name, headmistress_phone, headmistress_email,
    school_shift
  </strong>
  .
  <br />
  {t('admin.import.optionalColumns')}
  <br />
  <strong>
    budget_fiscal_year, budget_version, budget_income, budget_expenses,
    budget_surplus, case_description, bank_name, bank_purpose,
    payments_fiscal_year, payments_category, payments_amount
  </strong>
  .
</p>

        </form>
      </div>
    </div>
  );
}