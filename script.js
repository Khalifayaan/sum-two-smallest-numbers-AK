


function sumTwoSmallestNums(nums) {
   
    var smallest = Infinity;
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] < smallest) {
        smallest = nums[i];
      }
    }
  
  
    var secondSmallest = Infinity;
    for (var j = 0; j < nums.length; j++) {
      if (nums[j] < secondSmallest && nums[j] !== smallest) {
        secondSmallest = nums[j];
      }
    }
  
   
    var sum = smallest + secondSmallest;
  
    return sum;
  }
  
  var numbers = [44, 21, 79, 33, 49, 56];
  var result = sumTwoSmallestNums(numbers);
  console.log(result);