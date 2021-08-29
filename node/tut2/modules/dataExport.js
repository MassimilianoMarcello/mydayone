const fs =require('fs');

function SaveData(filename,data){
    fs.writeFile(filename,JSON.stringify(data),function(err){
        if(err){
            console.log(err)
        }else{console.log('EXPORT DATA TO LOCAL COMPUTER')}
    })
}



module.exports = SaveData