let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

let merge = (nums1, m, nums2, n) => {
  let i = 0;
  let j = 0;
  let maxLength = nums1.length > nums2.length ? nums1.length : nums2.length;
  let selectedElement = maxLength === nums1.length ? i : j;

  if (m > 0 && n > 0) {
    while (selectedElement < maxLength) {
      if (nums1[i] && nums2[j]) {
        console.log(nums1[i], nums2[j]);
      }
      i++;
      j++;
      selectedElement++;
    }
  }
  console.log(nums1);
};

let mergeFromInternet = (nums1, m, nums2, n) => {
    let left = m - 1;
    let right = n - 1;
  
    for (let i = nums1.length - 1; i >= 0; i--) {
      if (right < 0) {
        break;
      }
  
      if (left >= 0 && nums1[left] > nums2[right]) {
        nums1[i] = nums1[left--];
      } else {
        nums1[i] = nums2[right--];
      }
    }
    console.log(nums1);
};

// merge(nums1, m, nums2, n)
mergeFromInternet(nums1, m, nums2, n);
