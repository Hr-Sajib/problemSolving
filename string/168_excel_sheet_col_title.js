var convertToTitle = function (columnNumber) {
  const letterMap = new Map([
    [1, "A"],
    [2, "B"],
    [3, "C"],
    [4, "D"],
    [5, "E"],
    [6, "F"],
    [7, "G"],
    [8, "H"],
    [9, "I"],
    [10, "J"],
    [11, "K"],
    [12, "L"],
    [13, "M"],
    [14, "N"],
    [15, "O"],
    [16, "P"],
    [17, "Q"],
    [18, "R"],
    [19, "S"],
    [20, "T"],
    [21, "U"],
    [22, "V"],
    [23, "W"],
    [24, "X"],
    [25, "Y"],
    [26, "Z"],
  ]);

  let quotient = columnNumber;

  if (quotient <= 26) return letterMap.get(quotient);

  let resultString = ""

  while (quotient > 26) {
    let reminder = quotient % 26;
    quotient = Math.floor(quotient / 26);

    if (reminder == 0) {
        quotient = quotient - 1
        reminder = reminder + 26
    }

    resultString = letterMap.get(reminder) + resultString;
    
  }

  return letterMap.get(quotient) + resultString;
};

console.log(convertToTitle(52));
