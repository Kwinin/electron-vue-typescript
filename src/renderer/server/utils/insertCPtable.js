

var {sequelize, Sequelize} = require("./../models/db");
const CPProducts = sequelize.import("./../models/CPTable.js");
async function creatCPTable(testDate,productName,productCode,chipCode,yieldNumber,yieldY,testFactory) {
    try {
        await CPProducts.create({
            测试时间: testDate,
            产品名: productName,
            片号: productCode,
            芯片批号: chipCode,
            有效管芯数: yieldNumber,
            合格率: yieldY,
            合格率控制线: "",
            UPH: "",
            流片厂家: "",
            测试厂家: testFactory,
            测试人员: "",
            低良原因分析: "",
            解决对策: "",
            备注: "",
            state:""
        })
    } catch (err) {
       // console.error(err);
    }
}
module.exports={creatCPTable}