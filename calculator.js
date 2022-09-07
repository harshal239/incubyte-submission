const getNumForAlphabet = (str) => {
  return str.charCodeAt(0) - 96;
};
const createErrorMessage = (numbers) => {
  let message = "Negatives not allowed ";
  let negativeNumbers = "";

  for (let index = 0; index < numbers.length - 1; index++) {
    negativeNumbers += numbers[index] + " ";
  }
  negativeNumbers += numbers[numbers.length - 1];
  return message + negativeNumbers;
};

const add = (numbers) => {
  let answer = 0;
  if (numbers.length === 0) {
    return answer;
  }

  const splittedString = numbers.split(",");
  const NegativeNumbers = [];
  const ToCalculateAddition = [];

  for (let index = 0; index < splittedString.length; index++) {
    if (splittedString[index] <= "z" && splittedString[index] >= "a") {
      ToCalculateAddition.push(getNumForAlphabet(splittedString[index]));
    }

    if (Number.isInteger(parseInt(splittedString[index]))) {
      let temp = parseInt(splittedString[index]);
      if (temp < 0) {
        NegativeNumbers.push(temp);
      } else if (temp < 1000) {
        ToCalculateAddition.push(temp);
      }
    }
  }

  if (NegativeNumbers.length > 0) {
    throw createErrorMessage(NegativeNumbers);
  }

  for (let index = 0; index < ToCalculateAddition.length; index++) {
    answer += ToCalculateAddition[index];
  }
  return answer;
};
module.exports = add;
