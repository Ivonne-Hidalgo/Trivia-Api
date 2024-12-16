export const getLeaders = () => {
  return JSON.parse(localStorage.getItem("leaders")) || [];
};

export const saveLeader = (nickname, score , difficulty = "easy") => {
  const leaders = getLeaders();
  leaders.push({ nickname, points: score, difficulty });
  leaders.sort((a, b) => b.points - a.points);
  localStorage.setItem("leaders", JSON.stringify(leaders));
};
