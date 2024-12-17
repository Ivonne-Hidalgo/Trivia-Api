import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeaderboardTable from "../components/LeaderboardTable";
import { getLeaders, saveLeader } from "../utils/localStorage";

const Home = () => {
  const [nickname, setNickname] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [leaders, setLeaders] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedLeaders = getLeaders();
    setLeaders(fetchedLeaders);
  }, []);

  const handlePlay = () => {
    if (nickname) {
      saveLeader(nickname, 0, difficulty);
      navigate("/Questions", { state: { nickname, difficulty } });
    } else {
      setError("Por favor ingresa un nickname.");
    }
  };

  return (
    <div>
      <header style={{ backgroundColor: "orange", padding: "20px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5em" }}>Trivia Game</h1>
      </header>

      <main style={{ padding: "20px", textAlign: "center" }}>
        <LeaderboardTable leaders={leaders} />

        <div style={{ margin: "20px 0" }}>
          <input
            type="text"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
              setError(""); 
            }}
            placeholder="Ingresa tu nickname"
            style={{ fontSize: "1 em", padding: "10px", width: "300px" }} 
          />
          {error && <p style={{ color: "red" }}>{error}</p>} {/* Mensaje de error */}
          <br />
          <br />
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{ fontSize: "1 em", padding: "10px", width: "150px" }} 
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <br />
          <br />
          <button
            onClick={handlePlay}
            style={{ fontSize: "1 em", padding: "10px 20px" }} 
          >
            Jugar
          </button>
        </div>
      </main>

      <footer style={{ backgroundColor: "orange", padding: "20px", color: "white", textAlign: "center" }}>
        <p>© 2024 Reto Trivia. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;