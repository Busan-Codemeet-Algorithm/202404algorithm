/* 아직은 틀린 코드 예제를 위한 임시 파일*/
const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const arr = input.map(Number)
const dp = [0, 1 ,2]
const hanoi4 = (n) => {
    return dp[n] ? dp[n] : dp[n] = hanoi4(n-2) * 2 + 3
}
for(let i = 0 ; i < arr.length ; i++){
    console.log(`Case ${i+1} : ${hanoi4(arr[i])}`)
}