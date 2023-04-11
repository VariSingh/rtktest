
import { Navigate, Route, Router, Routes, useLocation, useMatch } from 'react-router-dom';
import "./App.css";
import SignIn from "./routes/SignIn";
import NotFound from './routes/404';
import Dashboard from './layouts/Dashboard';

const ProtectedRoute = ({
  authUser,
  redirectPath = '/signin',
  children,
}) => {
  if (!authUser) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

const authUser = true;
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/signin" replace />} />
      <Route path="signin" element={<SignIn />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute authUser={authUser}>
            <Dashboard></Dashboard>
          </ProtectedRoute>
        }
      />
      {/* <Route
        path="dashboard/activity-log"
        element={
          <ProtectedRoute authUser={authUser}>
            <Header></Header>
            <Sidebar></Sidebar>
            <ActivityLog />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard/settings"
        element={
          <ProtectedRoute authUser={authUser}>
            <Header></Header>
            <Sidebar></Sidebar>
            <Settings />
          </ProtectedRoute>
        }
      /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
