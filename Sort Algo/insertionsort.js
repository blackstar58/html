
function insertionSort(array) {
	console.log(array)
  for(var i = 0; i < array.length; i++) {
	  //create for loop to iterate over array
    var temp = array[i];
	  //temp = 2
	  //assign value of array[i] into temp
    var j = i - 1;
	  //j = 1 - 1 = 0
	  //make new value j which is 1 less than i
	  while (j >= 0 && array[j] > temp) {
		  
		  //while j greater than or equal to 0 and array[j] greater than temp
      array[j + 1] = array[j];
		  //i = 3
		  console.log(array)
      j--;
    }
    array[j + 1] = temp;
	  //0 = temp
	  console.log("array outside whileloop: "+ array)
  }
  console.log(array)
  return array;
}


insertionSort([3,2,45,6,7,1,9,3,44])