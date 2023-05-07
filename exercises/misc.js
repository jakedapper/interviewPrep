//binary search -- only works on sorted arrays 

function binarySearch (arr, elm) {
    let start = 0
    let end = arr.length -1
    let middle = Math.floor((start + end)/2)

   while(arr[middle] !== elm && start <= end){
    if(elm < arr[middle]){
        end = middle - 1
    }  else {
        start  = middle + 1
    }
    middle = Math.floor ((start + end)/2)
   }

   return arr[middle] === middle ? middle : -1
}

// naive strig search -- does the smaller string exist in the larger string/how many  times

function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")