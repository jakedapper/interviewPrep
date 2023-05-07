// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for( let j = 0; j < (arr.length - i-1); j++){
            if(arr[j] > arr[j+1]){
                const lesser = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = lesser
            }
        }
    }
    return arr
}

//bubbleSort v2
// UNOPTIMIZED VERSION OF BUBBLE SORT
// function bubbleSort(arr){
//     for(var i = arr.length; i > 0; i--){
//       for(var j = 0; j < i - 1; j++){
//         console.log(arr, arr[j], arr[j+1]);
//         if(arr[j] > arr[j+1]){
//           var temp = arr[j];
//           arr[j] = arr[j+1];
//           arr[j+1] = temp;         
//         }
//       }
//     }
//     return arr;
//   }
  
//   // ES2015 Version
//   function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };
  
//     for (let i = arr.length; i > 0; i--) {
//       for (let j = 0; j < i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           swap(arr, j, j + 1);
//         }
//       }
//     }
//     return arr;
//   }
  

// Optimized BubbleSort with noSwaps
// function bubbleSort(arr){
//     var noSwaps;
//     for(var i = arr.length; i > 0; i--){
//       noSwaps = true;
//       for(var j = 0; j < i - 1; j++){
//         if(arr[j] > arr[j+1]){
//           var temp = arr[j];
//           arr[j] = arr[j+1];
//           arr[j+1] = temp;
//           noSwaps = false;         
//         }
//       }
//       if(noSwaps) break;
//     }
//     return arr;
//   }

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[indexOfMin]){
                indexOfMin = j;
            }
        }

    
        if (indexOfMin !== i){
            let lesser = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = lesser
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length ===1){
        return arr;
    }

    const center = Math.floor(arr.length/2)
    const left = arr.slice(0, center)
    const right = arr.slice(center)
    
   return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const results =[]

    while (left.length && right.length) {
        if(left[0] < right[0]){
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }

    return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
