//Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one. 
//Return null if there are no even-occurrence items.
//Examples


//input:[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]
//output:2
//input:[ "cat", "dog", "dig", "cat" ]
//output:"cat"



function evenOccurrence (arr) {
  var i, l, occ = 0;
  for (i = 0; i < arr.length; i++){
    for(l = 0; l < arr.length; l++){
      if (arr[i] === arr[l]){
        occ++
      }
    }
    if (occ % 2 === 0 && occ !== 0){
      return arr[i]
    } else { occ = 0 }
  } 
  return null
}


