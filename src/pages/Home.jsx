import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Home() {
  const [input, setInput] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [page, setPage] = useState(0);

  const { randomTheme } = useContext(ThemeContext);
  const PAGE_SIZE = 5;

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

  const visibleQuestions = questions.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  return (
    <div className="home-container">
      <div className="card">
        <h1>NeoBot</h1>
        <p>Ask questions and get instant answers.</p>
        <p style={{ fontSize: "0.85rem" }}>
          Browse questions below or type one exactly.
        </p>

        <div style={{ width: "100%", marginBottom: 12 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12
            }}
          >
            {visibleQuestions.slice(0, 4).map(q => (
              <div
                key={q.question}
                style={{
                  padding: "10px",
                  fontSize: "0.85rem",
                  border: "1px solid var(--accent)",
                  borderRadius: 10,
                  cursor: "pointer",
                  textAlign: "center",
                  color: "var(--accent)"
                }}
                onClick={() => {
                  setInput(q.question);
                  setAnswer("");
                }}
              >
                {q.question}
              </div>
            ))}
          </div>

          {visibleQuestions[4] && (
            <div
              style={{
                marginTop: 14,
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div
                style={{
                  padding: "10px 18px",
                  fontSize: "0.85rem",
                  border: "1px solid var(--accent)",
                  borderRadius: 10,
                  cursor: "pointer",
                  color: "var(--accent)"
                }}
                onClick={() => {
                  setInput(visibleQuestions[4].question);
                  setAnswer("");
                }}
              >
                {visibleQuestions[4].question}
              </div>
            </div>
          )}
        </div>

        <div style={{  display: "flex", gap: 10, width: "100%", fontSize: "0.85rem"  }}>
          <button disabled={page === 0} onClick={() => setPage(p => p - 1)}>
            Previous
          </button>
          <button
            disabled={(page + 1) * PAGE_SIZE >= questions.length}
            onClick={() => setPage(p => p + 1)}
          >
            Next
          </button>
        </div>

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
