const fs =require('fs')


const book= {
    title: 'konken',
    author: 'Pelle di daonae',
}

//transform object in a json file
const bookJson= JSON.stringify(book)
console.log(bookJson)

//trasform json file in a object(essendo un oggetto possiamo usare la value author)
const parsedata = JSON.parse(bookJson)
console.log(parsedata.author);
//writw a new file
fs.writeFileSync('1-json.json',bookJson)

//read a new file

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON=dataBuffer.toString()
const data =JSON.parse(dataJSON)
console.log(data.title)



