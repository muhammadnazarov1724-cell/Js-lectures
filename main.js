// function solution (n){ 
//  let res = ""
//  for (let i = 9; i >= 1; i-- ) {
//     for (let j = n; j > 0; j = ~~ (j / 10)) {
//         let k = j % 10;
//         if (i === k)
//             res += k;
//     }
//  }
//  return res;
// }
// console.log(solution(478678631));




// let solution = (str) => {
//     let maxCnt = -Infinity;
//     let maxChar = "";
//     for (let i = 0; i < str.length; i++) {
//         let cnt = 0;
//         for (let j = 0; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 cnt++;
//             }
//         }
//     if (maxCnt < cnt) {
//         maxCnt = cnt;
//         maxChar = str[i]; 
//     }
//     }
//     return maxCnt;
// }
// console.log(solution("aabbbbccccdd"));





// function solution(str) {
//   let res = "";
//   for (let elem of str) {
//     let cnt = 0;
//     if (res.includes(elem)) {
//       continue;
//     }
//     for (let elem2 of str) {
//      if (elem === elem2) {
//       cnt ++;
//      } 
//     }
//     res += elem + cnt;
//   }
//   return res
// }
// console.log(solution("abbcccddddeeeee"))

// function main (str) {
//  if (str.length === 1) {
//   return true;
//  }
//  if (str == "") {
//   return false;
//  }
//  if (str.at(0) !== str.at(-1)) {
//   return false;
//  }
//  return main(str.slice(1, -1))
// }
// console.log(main("madam"));

//  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]


// function main (arr) {
//   if (arr.length === 1) {
//     return arr[0]
//   }
//   let res = main(arr.slice(1))

//   if (arr[0] > res) {
//     return arr[0];
//   }
//   else {
//     return res;
//   }
// }
// console.log(main([10,5,8,9]));


// function main (n) {
//   if (n < 10) {
//     return 1;
//   }
//   return 1 + main(~~(n / 10))
// }
// console.log(main(88488));


// function solution(str) {
//   let res = 0;
//   let aphUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   for (let elem of str) {
//     if (aphUpper.includes(elem))
//      res ++;
//   }
//    return res;
// }
//  console.log(solution("are you ready"));   



 
// function main (str) {
//   let cnt = 0;
//   let spl = str.split(" ")
//   let vow = "aeuioAEUIO"
//   for (let elem of spl) {
//     if (vow.includes(elem.at(0))) {
//       cnt ++;
//     }
//   }
//   return cnt;
// }
// console.log(main("is this yousr"));

// function solution (str) {
//   let cnt = 0
//   let vow = "aeuioAEUIO" 
//   let spl = str.split(" ")
//   let res = "";
//  for (let elem of spl) {
//     res += elem.at(0).toUpperCase() + elem.slice(1).toLowerCase() + " ";
//   }
//   return res + " "
// }
// console.log(solution("softCLub iS aWeSome"));



// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false
//     }
//   }
//   return true
// }

//  function isPrimeArray(arr) {
//     let cnt = 0;
//     for (let elem of arr) {
//         if (isPrime(elem)) {
//             cnt ++
//         }
//     }
//     return cnt
//  }

// console.log(isPrimeArray([7,13,2,6,4]))
                                           
// function solution(arr) {
//   let uniqueWords = arr.filter((word) => arr.indexOf(word) === arr.lastIndexOf(word));
  
//   if (uniqueWords.length === 0) return 0;

//   let lengths = uniqueWords.map((word) => word.length);

//   return Math.max(...lengths);
// }
// console.log(solution("dog", "elephanr", "cat", "lion"));



function solution (obj) {
  let res = {}
  for (let key in obj) {
    res[key.toUpperCase()] = obj[key]    
  }                                  
  return res
}
console.log(solution({aue: 1, bib: 2}));

