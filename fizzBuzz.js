/* --------------------------------
input
2
2 5
3 4

-------------------------------- */
/* --------------------------------
output
hello = 2 , world = 5
hello = 3 , world = 4

-------------------------------- */

/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
const main = () => {
    const N = Number(lines[0])
    for(let i = 1; i <= N; i++) {
        const number = N-(N-i)
        if(number%3 === 0 && number%5 === 0){
            console.log("Fizz Buzz")
        }else if(number%3 === 0){
            console.log("Fizz")
        }else if(number%5 === 0){
            console.log("Buzz")
        }else{
            console.log(number)
        }
    }

}

/**
 * 標準入出力のための処理
 */
const reader = require('readline')

process.stdin.resume()
process.stdin.setEncoding('utf8')
const rl = reader.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = []
rl.on('line', (line) => {
    lines.push(line)
})

rl.on('close', main)
