const key = 'lcds90_quiz_app_ranking';
export const registerUserInRanking = ({ name, points }) => {
  const getRanking = JSON.parse(localStorage.getItem(key)) || [];
  const newRanking = JSON.stringify([...getRanking, { name, points }]);
  localStorage.setItem(key, newRanking);
};

export const getUserRanking = () => {};
