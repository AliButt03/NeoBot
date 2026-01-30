import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Home() {
  const [input, setInput] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState("");

  const { randomTheme } = useContext(ThemeContext);

  useEffect(() => {
    getDocs(collection(db, "questions")).then(snapshot =>
      setQuestions(snapshot.docs.map(doc => doc.data()))
    );
  }, []);

  const ask = () => {
    const match = questions.find(
      q => q.question.toLowerCase() === input.toLowerCase()
    );
    setAnswer(match ? match.answer : "No answer found.");
  };

  return (
    <div className="home-container">
      <div className="card">
      <h1>NeoBot</h1>
      <p>Ask questions and get instant answers.</p>

      <input
        placeholder="Type your question..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button onClick={ask}>Ask Question</button>

      {answer && <p style={{ marginTop: 10 }}>{answer}</p>}

      <button onClick={randomTheme}>Change Theme</button>

      <p style={{ marginTop: 12 }}>
        <Link to="/login">Admin Login</Link>
      </p>
      </div>
    </div>
  );
}

export default Home;
