const add = (numbers) => {
  let answer = 0;
  if (numbers.length === 0) {
    return answer;
  }

  const splittedString = numbers.split(",");

  for (let index = 0; index < splittedString.length; index++) {
    answer += parseInt(splittedString[index]);
  }
  return answer;
};
module.exports = add;
