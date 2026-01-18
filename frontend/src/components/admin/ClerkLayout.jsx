import React from 'react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from './DashboardLayout';

export default function ClerkLayout(props) {
      const { t } = useTranslation();
      const sidebarItems = [
        { key: "dashboard", label: t('admin.layout.dashboard'), icon: "bi-speedometer2" },
        { key: "profile", label: t('clerk.profile'), icon: "bi-person" },
        { key: "fees", label: t('clerk.fees'), icon: "bi-cash-stack" },
        { key: "salaries", label: t('clerk.salaries'), icon: "bi-wallet2" },
        { key: "retirements", label: t('clerk.retirements'), icon: "bi-person-x" },
        { key: "addStudent", label: t('clerk.addStudent'), icon: "bi-person-plus" },
        { key: "capacity", label: t('clerk.capacity'), icon: "bi-building-up" },
        { key: "fire-safety", label: t('clerk.fireSafety'), icon: "bi-fire" },
        { key: "physical-safety", label: t('clerk.physicalSafety'), icon: "bi-shield-check" },
      ];

    return (
      <DashboardLayout 
        {...props} 
        sidebarItems={sidebarItems} 
        portalName="Clerk Portal"
        portalIcon="bi-journal-check"
        customGreeting="Welcome, Clerk 👋"
      />
    );

}
