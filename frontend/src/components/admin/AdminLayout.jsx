import React from 'react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from './DashboardLayout';

export default function AdminLayout(props) {
  const { t } = useTranslation();
  const sidebarItems = [
    { key: "dashboard", label: t('admin.layout.dashboard'), icon: "bi-speedometer2", path: "/admin" },
    { key: "tables", label: t('admin.layout.tables'), icon: "bi-table", path: "/admin/tables" },
    { key: "charts", label: t('admin.layout.charts'), icon: "bi-bar-chart-fill", path: "/admin/charts" },
    { key: "notifications", label: t('admin.layout.notifications'), icon: "bi-bell-fill", path: "/admin/notifications" },
  ];

  return (
    <DashboardLayout 
      {...props} 
      sidebarItems={sidebarItems} 
      portalName="Admin Panel"
      portalIcon="bi-buildings-fill"
    />
  );
}
