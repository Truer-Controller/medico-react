import { Route, Routes } from "react-router-dom";
import LayoutDashboard from "./pages/dashboard";
import HomeDashboard from "./pages/dashboard/Home";
import Home from "./pages/Home";
import Lembrar from "./pages/Login/Lembrar";
import Login from "./pages/Login";
import Cadastro from "./pages/Login/Cadastro";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<LayoutDashboard />}>
        <Route path="/dashboard/" element={<HomeDashboard />} />
      </Route>
      <Route path="/lembrar" element={<Lembrar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}