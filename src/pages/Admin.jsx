import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const addQuestion = async () => {
    if (!question || !answer) {
      alert("Both fields are required");
      return;
    }

    try {
      await addDoc(collection(db, "questions"), { question, answer });
      alert("Question added successfully");
      setQuestion("");
      setAnswer("");
    } catch {
      alert("Error adding question");
    }
  };

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="card">
      <h2>Admin Panel</h2>

      <input
        placeholder="Question"
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />

      <input
        placeholder="Answer"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      />

      <button onClick={addQuestion}>Add Question</button>
      <button onClick={logout} style={{ marginTop: 10, background: "#ff4d4f", borderColor: "#ff4d4f" }}>
        Logout
      </button>
    </div>
  );
}

export default Admin;
