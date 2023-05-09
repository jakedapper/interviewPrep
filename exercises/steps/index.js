// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (var i = 0; i < n; i++) {
        let stair = ""
        for (var j = 0; j < n; j++) {
            if (j<= i) {
                stair += "#"
            } else {
                stair += " "
            }
        }
    
        console.log(stair)
    }

    // for (let i=0; i < n; i++) {
    //     let stairs = ""
    //     for (let j=0; j < i+1; j++){
    //         stairs += "#"
    //     }
    //     for (let k=0; k < n-i-1; k++){
    //         stairs += " "
    //     }

    //     console.log(stairs)
    // }
}

module.exports = steps;


/*
"#    "
"##   "
"###  "
"#### "
"#####"
*/