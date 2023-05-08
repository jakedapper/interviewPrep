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
    if (arr.length === 1){
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


//from other algorithm course

//MERGE SORT - O(n + m)
// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }

// function mergeSort(arr){
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, sright);
// }

//Quick Sort
function swap(array, firstIndex, secondIndex){
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

function pivot(array, pivotIndex  = 0, endIndex = array.length-1){
    let swapIndex = pivotIndex
    for(let i = pivotIndex + 1; i <= endIndex; i++){
        if(array[i] < array[pivotIndex]){
            swapIndex ++
            swap(array, swapIndex, i)
        }
    }
    swap(array, pivotIndex, swapIndex)
    return swapIndex
}

function quickSort(array, left = 0, right = array.length-1){
    let pivotIndex = pivot(array, left, right)
    if(left < right) {
        pivot(array.slice(left, pivotIndex - 1))
        pivot(array.slice(pivotIndex +1, right))
    }
    return array
}


module.exports = { bubbleSort, selectionSort, mergeSort, merge };
