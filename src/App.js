import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Auth } from "./components/Auth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Auth><Home /></Auth>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
