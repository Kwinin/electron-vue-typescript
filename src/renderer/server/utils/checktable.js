/**
 * 检查表的结构
 * ***/


const XLSX = require("xlsx");
const inerror = require("../public/js/inerror");

// 参数:文件名
async function checkTable(filedir, tableRange) {

    const workbook = XLSX.readFile(filedir, {cellDates: true});
    const result = to_json(workbook);
    let row = await writeData(Object.values(result));
    return row;

    function to_json(workbook) {
        const result = {};
        for (let sheetName of workbook.SheetNames) {
            let roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 1, range: tableRange});
            if (roa.length) result[sheetName] = roa;
        }
        return result
    };

    async function writeData(data) {
        //筛选可用数据行数

        let row4 = [];
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                if (data[i][j][0] !== undefined) {
                    row4.push(data[i][j]);
                }
            }

        }
        return row4;
    }


}

module.exports = {checkTable}
