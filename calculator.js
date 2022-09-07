const getNumForAlphabet = (str) => {
  return str.charCodeAt(0) - 96;
};

const add = (numbers) => {
  let answer = 0;
  if (numbers.length === 0) {
    return answer;
  }

  const splittedString = numbers.split(",");

  for (let index = 0; index < splittedString.length; index++) {
    if (splittedString[index] <= "z" && splittedString[index] >= "a") {
      answer += getNumForAlphabet(splittedString[index]);
    }

    if (Number.isInteger(parseInt(splittedString[index]))) {
      answer += parseInt(splittedString[index]);
    }
  }
  return answer;
};
module.exports = add;
