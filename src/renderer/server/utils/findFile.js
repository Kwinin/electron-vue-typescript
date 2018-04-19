const fs = require('fs-extra');
const path = require('path');

async function findFile(filePath) {

    let findMap = {}
    let i = 0;
    const files = await fs.readdir(filePath);
    for (const file of files) {
        //获取当前文件的绝对路径
        let filedir = path.join(filePath, file);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        const stats = await fs.stat(filedir);

        let isFile = stats.isFile();//是文件
        let isDir = stats.isDirectory();//是文件夹
        if (isFile) {
            let index = i++;
            findMap["原始文件表" + index + ""] = filedir;
            if (filedir.indexOf('FT基础信息表') > 0 && filedir.indexOf('~$') < 0) {
                findMap["FT基础信息表"] = filedir;
            }
            if (filedir.indexOf('CP基础信息表') > 0 && filedir.indexOf('~$') < 0) {
                findMap["CP基础信息表"] = filedir;
            }

        }
        if (isDir) {
            if (filedir.indexOf("基础信息表") > 0 && filedir.indexOf('~$') < 0) {
                findMap["基础信息文件夹"] = filedir;
            }
            if (filedir.indexOf("汇总表") > 0 && filedir.indexOf('~$') < 0) {
                findMap["汇总文件夹"] = filedir;
            }

            let index = i++;
            findMap["原始文件夹" + index + ""] = filedir;
            //拼接对象
            findMap = Object.assign(findMap, await findFile(findMap["原始文件夹" + index + ""]));
        }
    }
    return findMap;
}

module.exports = {findFile}

