// inti sol : not optimal because qsn says the arrats are sorted arrays so I should have cashed on it 

var merge = function (nums1, m, nums2, n) {
  // merging
  for (let k = 0; k < nums2.length; k++) {
    nums1[m + k] = nums2[k];
  }

  // sorting
  for (let i = 0; i < nums1.length; i++) {
    for (let j = i+1; j < nums1.length; j++) {
      if (nums1[i] > nums1[j]) {
        const t = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = t;
      }
    }
  }

  return nums1;
};

console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
