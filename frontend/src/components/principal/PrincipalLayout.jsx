import React from 'react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '../admin/DashboardLayout';

export default function PrincipalLayout(props) {
    const { t } = useTranslation();
    const sidebarItems = [
      { key: "dashboard", label: t('admin.layout.dashboard'), icon: "bi-speedometer2" },
      { key: "profile", label: t('principal.profile'), icon: "bi-person" },
      { key: "teachers", label: t('admin.layout.tables'), icon: "bi-people" },
      { key: "students", label: t('admin.layout.tables'), icon: "bi-mortarboard" },
      { key: "charts", label: t('admin.layout.charts'), icon: "bi-bar-chart-fill" },
      { key: "notifications", label: t('admin.layout.notifications'), icon: "bi-bell-fill" },
    ];

  return (
    <DashboardLayout 
      {...props} 
      sidebarItems={sidebarItems} 
      portalName="Principal Portal"
      portalIcon="bi-mortarboard-fill"
      customGreeting="Welcome, Principal 👋"
    />
  );
}
