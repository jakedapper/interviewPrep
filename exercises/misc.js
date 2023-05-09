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




function maxChar(str){
    let charMap = {}
    let max = 0
    let maxChar = ""

    for(let char of str){
        if(charMap[char]){
            charMap[char] ++
        }else {
            charMap[char] = 1
        }
    }

    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}

function chunk (array, size){
    let arr = []
    let index = 0

    while (index < array.length){
        arr.push(array.slice(index, size))
        index += size
    }
    return  chunked
}
//need to make charMaps
function annagram(strA, strB){
    if(Object.keys(charMapA).length !== Object.keys(charMapB).length){
        return false
    }

    for (let char in charMapA){
        if(charMapA[char] !== bCharMap[char]){
            return false
        }
    }
    return  true
}

function capitalize(str){
    const words =[]

    for (let word of str.split(" ")){
        words.push(word[0].toUpperCase() + word.slice(1))
    }

    return words.join(" ")
}

function steps(n){
    for (let i=0; i < n; i++){
        let stair = ""
        for(let j=0; j < n; j++){
            if(j <= i){
                stair += "#"
            }else {
                stair += " "
            }
        }
        console.log(stair)
    }
}

function vowels(str){
    let count  = 0
    let checker = ["a","e","i","o","u"]

    for (char of str){
        if(checker.includes(char)){
            count ++
        }
    }
    return count
}

function slowFib(n){
    if (n<2){
        return n
    }
    return fib(n-1) + fib(n-2)
}

traverseBF(fn) {
    const arr = [this.root]

    while (arr.length){
        const node = arr.shift()

        arr.push(...node.children)

        fn(node)
    }
}


function  steps(n){
    for (let i = 0; i < n; i++){
        let stair = ""
        for(let j = 0; j , n; j++){
            if (j<=i){
                stair += "#"
            } else {
                stair += " "
            }
        }
        console.log(stair)
    }
}

function steps(n){
    for(let i =0; i < n; i++){
        let stair = ""
        for(j = 0; j< n; j++){
            if (j<=i){
                stair += "#"
            } else {
                stair += " "
            }
        }
        console.log(stair)
    }
}