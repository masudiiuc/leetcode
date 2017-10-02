 /**
  * Two Sum : https://leetcode.com/problems/two-sum/description/
  *
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
  
// Technique 01
var twoSum = function(nums, target) {
	var map = new Map();
  
	for(var i = 0; i < nums.length; i++) {
    	map.set(nums[i], i);
    }
    
    for(var j = 0; j < nums.length; j++) {
		var anotherNumber = target - nums[j];
        if (map.has(anotherNumber) && map.get(anotherNumber) != j) {
        	return [j, map.get(anotherNumber)];
        }
    }
};

// Technique 02
function twoSum(nums, target) {
		var i, j;
		for(i = 0; i < nums.length; i++) {
    	for(j=0; j < nums.length; j++) {
      	if (nums[i] == target - nums[j]) {
        	return [i, j];
        }
      }
    }
}
