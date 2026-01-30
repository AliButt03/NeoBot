import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminRoute from "./routes/AdminRoute";
import Navbar from "./components/Navbar";
import Docs from "./pages/Docs";


function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        "--bg": theme.bg,
        "--surface": theme.surface,
        "--card": theme.card,
        "--text": theme.text,
        "--muted": theme.muted,
        "--accent": theme.accent,
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)"
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/docs" element={<Docs />} />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
