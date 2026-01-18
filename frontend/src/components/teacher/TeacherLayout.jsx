import React from 'react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '../admin/DashboardLayout';

export default function TeacherLayout(props) {
  const { t } = useTranslation();
  const sidebarItems = [
    { key: "dashboard", label: t('admin.layout.dashboard'), icon: "bi-speedometer2", path: "/teacher" },
    { key: "profile", label: t('teacher.profile'), icon: "bi-person", path: "/teacher/profile" },
    { key: "students", label: t('teacher.students'), icon: "bi-people", path: "/teacher/students" },
    { key: "charts", label: t('admin.layout.charts'), icon: "bi-bar-chart", path: "/teacher/charts" },
    { key: "notifications", label: t('admin.layout.notifications'), icon: "bi-bell", path: "/teacher/notifications" }
  ];

  return (
    <DashboardLayout 
      {...props} 
      sidebarItems={sidebarItems} 
      portalName="Teacher Portal"
      portalIcon="bi-person-workspace"
    />
  );
}
