export const generateLuckyNumber = () => {
  const luckyNumber = Math.floor(Math.random() * 1000000000);
  return luckyNumber
    .toString()
    .padStart(9, "0")
    .replace(/(\d{2})(\d{2})(\d{4})/, "$1-$2-$3");
};
