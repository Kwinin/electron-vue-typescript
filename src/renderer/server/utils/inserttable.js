

var {sequelize, Sequelize} = require("./../models/db");
const TFProducts = sequelize.import("./../models/TFTable.js");
async function creatTable(testDate,productName,packagePg,productCode,chipCode,totalNumber,yieldNumber,yieldY,testFactory) {
    try {
        await TFProducts.create({
            测试日期: testDate,
            产品名称: productName,
            封装: packagePg,
            成品批号: productCode,
            芯片批号: chipCode,
            总数量: totalNumber,
            良品数: yieldNumber,
            合格率: yieldY,
            合格率控制线: "",
            UPH: "",
            封装厂: "",
            测试厂: testFactory,
            TE: "",
            低良原因: "",
            进展: "",
            解决对策: "",
            发布时间: "",
            规定达标: "",
            扣分情况: "",
            状态: "",
            state:""
        })
    } catch (err) {
        //console.error(err);
    }
}
module.exports={creatTable}