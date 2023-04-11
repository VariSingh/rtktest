
import { Navigate, Route, Router, Routes, useLocation, useMatch } from 'react-router-dom';
import "./App.css";
import SignIn from "./routes/SignIn";
import AdminAccounts from './routes/AdminAccounts';
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';

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
      <Route path="signin" element={<SignIn/>} />
      <Route path="dashboard/admin-accounts"  element={
            <ProtectedRoute authUser={authUser}>
              <Header></Header>
              <Sidebar></Sidebar>
              <AdminAccounts />
            </ProtectedRoute>
          } />
    </Routes>
  );
};

export default App;
