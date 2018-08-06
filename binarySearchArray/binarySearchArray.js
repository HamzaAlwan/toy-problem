/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 7, 15, 27], 27);
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
    var start = 0, end = array.length, mid;
    function result(array, target, start, end){
      mid = Math.floor((start + end) / 2)
      if (array[mid] === target){
        return mid
      }
      else if (start === end ||((start === mid || end === mid) && array[mid] !== target)){
        return -1
      } else if (array[mid] < target){
        start = mid
        return result(array, target, start, end)
      } else if (array[mid] > target){
        end = mid
        return result(array, target, start, end) 
      }
    }
    return result(array, target, start, end)
};

