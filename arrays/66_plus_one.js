var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      break;
    }
    // if last digit is 9
    digits[i] = 0;
    if (i == 0) {
      digits.length++;
      digits[0] = 1;
      for (let j = 1; j < digits.length; j++) {
        digits[j] = 0;
      }
    }
  }

  return digits;
};

console.log(plusOne([1,9, 9, 9, 9, 9]));

