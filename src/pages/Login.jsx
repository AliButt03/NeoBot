import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const ADMIN_CODE = "SECRET_ADMIN_123";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [error, setError] = useState(""); // <-- new
  const navigate = useNavigate();

  const signup = async () => {
    setError(""); 
    try {
      if (adminCode !== ADMIN_CODE) {
        setError("Invalid admin code");
        return;
      }

      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        email,
        role: "admin"
      });

      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError(err.message || "Signup failed");
    }
  };

  const login = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="card">
      <h2>Admin Access</h2>

      {error && (
        <p style={{ color: "red", marginBottom: "12px", textAlign: "center" }}>
          {error}
        </p>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email} 
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password} 
        onChange={e => setPassword(e.target.value)}
      />

      <input
        type="text"
        placeholder="Admin Code (signup only)"
        value={adminCode} 
        onChange={e => setAdminCode(e.target.value)}
      />

      <button onClick={signup}>Admin Signup</button>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
