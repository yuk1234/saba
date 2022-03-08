

/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
const main = () => {
    

    //入力値を座席数＆グループ数用の変数に分ける
    const line = lines[0].split(' ')
    const chair =Number(line[0]) //店内の座席数
    const group = Number(line[1]) //来店したグループ数

    //座席数分の要素をリストに追加
    let arr = [...Array(chair)].map(() => false);

    for(i=0; i<group; i++){
        const line2 = lines[i+1].split(' ')
        const member = Number(line2[0]) //グループの人数
        const memberChair = Number(line2[1]) //グループの最初の人が座る席番号
        console.log("人数" + member)
        console.log("座席番号" + memberChair)

        //座りたい席番の範囲要素を取り出し、空席かどうか確認
        //false:空席　true:着席済み
        const searchArr = arr.slice(memberChair-1,member+memberChair-1)
        console.log(searchArr)

        //座りたい範囲がすべて空席だったら、trueに変える
        if(!searchArr.includes(true)){

            //配列要素をtrueに変更
            for(i=memberChair-1; i<member+memberChair-1; i++){
                arr[i] = true
            // arr.splice(memberChair-1,member,true)
            }
            console.log(arr)
        }
    }
    console.log(arr)
    
    let count = 0
    for (i = 0;  i < arr.length; i++) {
        if(arr[i] == true){
            count++;
        }
    }
    console.log(count)

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
