import * as React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Route, Routes } from 'react-router-dom';
import AdminAccounts from '../../routes/AdminAccounts';
import ActivityLog from '../../routes/ActivityLog';
import Settings from '../../routes/Settings';
const Dashboard = () => {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="admin-accounts" element={<AdminAccounts />} />
        <Route path="activity-log" element={<ActivityLog />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default Dashboard;