// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// gaps
var gaps = [701, 301, 132, 57, 23, 10, 4, 1];



function shellsort(array) {
  for(var g = 0; g < gaps.length; g++) {
    var gap = gaps[g];
	  //gap = 701
    for(var i = gap;/* i  */i < array.length; i++) {
      var temp = array[i];
		//temp = 9
      for(var j = i /* 701  */; j >= gap /*This is equal to gap*/ && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
  }
  return array;
}


console.log(shellsort(array));