function tailspace(TD,PN,PG,PC,CC,TN,YN,YY) {


    let map={};
    if (! TD){
        map['testDate']="原始数据缺失";
    }else{

        map['testDate']=TD;
    }

    if (! PN){
        map['productName']="原始数据缺失";
    }else{
        map['productName']=PN.trim();
    }
    if (! PG){
        map['packagePg']="原始数据缺失";
    }else{
        map['packagePg']=PG.trim();
    }

    if (! PC){
        map['productCode']="原始数据缺失";
    }else{
        map['productCode']=PC;
    }

    if (! CC){
        map['chipCode']="原始数据缺失";
    }else{
        map['chipCode']=CC.trim();
    }

    if (! TN){
        map['totalNumber']=null;
    }else{
        map['totalNumber']=parseInt(TN);
    }
    if (! YN){
        map['yieldNumber']=null;
    }else{
        map['yieldNumber']=parseInt(YN);
    }
    if (! YY){
        map['yieldY']=null;
        map['testDate']=null;
    }else{
        map['yieldY']=parseFloat(YY);
    }
    // for(var prop in map){
    //     if(map.hasOwnProperty(prop)){
    //         console.log('key is ' + prop +' and value is' + map[prop]);
    //     }
    // }
    return map;
}
module.exports={tailspace}