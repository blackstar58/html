function merge_sort(arr){
    temp_arr = arr
    for (var i = 0; i < arr.length;i++){
        
        for(var j = 0; j<arr.length -1;j++){
            
            if (arr[j] > arr[j+1]){
                    var temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                    
                console.log(arr)
            }   
 
        }
                console.log(arr)
        }

}

merge_sort([2,3,1,5,6,88,9,4])