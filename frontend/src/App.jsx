import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Login from "./pages/admin/Login.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import ProtectedRoute from "./components/admin/ProtectedRoute.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/services/:slug" element={<ServiceDetail/>}/>
      </Route>

      <Route element={
        <ProtectedRoute>
          <AdminLayout/>
        </ProtectedRoute>}>
        <Route path="/admin" element={<Dashboard/>}/>
      </Route>

      <Route path="/login" element={<Login/>}/> 
    </Routes>
  );
}

export default App;