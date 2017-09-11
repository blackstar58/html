function bubbleSort(arr){
	
	for (var j=0;j<arr.length;j++){
		
		for (var i =0;i <arr.length;i++){
			if (arr[i] > arr[i+1]){
				var temp = arr[i]
				arr[i] = arr[i+1]
				arr[i+1] = temp
			}//end of if statement			
		}//end of second for loop
	}//end of first for loop

	console.log(arr)
	
}//end of function


bubbleSort([3,2,45,6,7,1,9,3,44])