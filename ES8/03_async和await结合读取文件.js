// 引入fs模块
const fs = require("fs")

// 读取静夜思的内容

function readJingYeSi() {
    return new Promise((resolve, reject) => {
        fs.readFile("../resources/静夜思.md", (err, data) => {
            // 如果读取失败，则reject（err)
            if (err) reject(err);
            // 如果成功，则
            resolve(data);
        })
    })
}
// 读取论语的内容

function readLunYu() {
    return new Promise((resolve, reject) => {
        fs.readFile("../resources/论语.md", (err, data) => {
            // 如果读取失败，则reject（err)
            if (err) reject(err);
            // 如果成功，则
            resolve(data);
        })
    })
}
// 读取滕王阁诗的内容

function readTengWangGeShi() {
    return new Promise((resolve, reject) => {
        fs.readFile("../resources/滕王阁诗.md", (err, data) => {
            // 如果读取失败，则reject（err)
            if (err) reject(err);
            // 如果成功，则
            resolve(data);
        })
    })
}

async function main() {

    // 获取静夜思的内容
    let jingyeSi = await readJingYeSi();
    // 获取论语的内容
    let lunYu = await readLunYu();
    // 获取滕王阁诗的内容
    let tengWangGeShi = await readTengWangGeShi();

    console.log(jingyeSi.toString());
    console.log(lunYu.toString());
    console.log(tengWangGeShi.toString());


}
main();