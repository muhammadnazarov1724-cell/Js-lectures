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





function closure() {
  let cnt = 0;
  return () => {
    return cnt += 1;
  }
}
console.log("")
