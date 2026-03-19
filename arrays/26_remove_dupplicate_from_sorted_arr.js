// initial solution

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      let continuousDuplicateCount = 1;

      for (let j = i + 1; nums[j] == nums[j + 1]; j++) {
        continuousDuplicateCount++;
      }

      for (let k = i + 1; k < nums.length; k++) {
        nums[k] = nums[k + continuousDuplicateCount];
      }

      nums.length -= continuousDuplicateCount;
    }
  }

  return nums.length;
};

console.log(removeDuplicates([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4]));
