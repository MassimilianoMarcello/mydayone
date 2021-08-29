const { response } = require('express');
const express = require('express');
const app= express();
const PORT =9300;

let student= [
    {
        id:1,
        username:'joe',
        password:'joee123',
        email:'joe@joe.com'

    }
]
app.get('/',function(req,res){
    response.send('Hello Expressjs')
})
app.listen(PORT,()=>{
    console.log(`Server is running.... http//localhost:${PORT}/`)
})