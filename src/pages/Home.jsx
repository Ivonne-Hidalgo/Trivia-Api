import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeaderboardTable from "../components/LeaderboardTable";
import { getLeaders, saveLeader } from "../utils/localStorage";

const Home = () => {
  const [nickname, setNickname] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [leaders, setLeaders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLeaders(getLeaders());
  }, []);

  const handlePlay = () => {
    
    if (nickname) {
      saveLeader(nickname, 0,difficulty );
      navigate("/quiz", { state: { nickname, difficulty } });
    } else {
      alert("Por favor ingresa un nickname.");
    }
  };

  return (
    <div>
      <h1>Reto Trivia</h1>
      <LeaderboardTable leaders={leaders} />

      <div>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Ingresa tu nickname"
        />
        <br />
        <br />
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Fácil</option>
          <option value="medium">Intermedio</option>
          <option value="hard">Difícil</option>
        </select>
        <br />
        <br />
        <button onClick={handlePlay}>Jugar</button>
      </div>
    </div>
  );
};

export default Home;
