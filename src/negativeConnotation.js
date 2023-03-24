function negativeConnotation(string) {
  let nPositive = 0;
  let nNegative = 0;
  let firstHalfAlphabet = "abcdefghijklm";

  string.split(" ").forEach((element) => {
    if (firstHalfAlphabet.includes(element.toLowerCase().charAt(0))) {
      nPositive++;
    } else {
      nNegative++;
    }
  });

  return nPositive >= nNegative;
}

export default negativeConnotation