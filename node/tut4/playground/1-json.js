const fs =require('fs')
const dataBuffer = fs.readFileSync('2json.json')
const dataJSON=dataBuffer.toString()
const dataParse=JSON.parse(dataJSON)

// console.log(dataParse);

 dataParse.name='mass'
 dataParse.age=37

 const transfInJson= JSON.stringify(dataParse)
 fs.writeFileSync('2json.json',transfInJson)

 
