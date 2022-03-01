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
    const N = lines.length
    let max = 0
    for(let i = 0; i < N-1; i++) {
        
        if(parseInt(lines[i]) > parseInt(lines[i+1])){
            max = parseInt(lines[i])
        }else{
            max = parseInt(lines[i+1])
        }
    }

    // 空行
    console.log(max)
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
