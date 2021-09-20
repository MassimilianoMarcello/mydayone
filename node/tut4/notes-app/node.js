const chalk = require('chalk');
const notes=require('./notes.js')
const yargs =require('yargs')
// console.log(chalk.green('Success!'));

yargs.command({
    command: "list",
    describe: "list a note",
    handler: function(){
        console.log('kik resp');
    }
})
yargs.command({
    command: "read",
    describe:"read a note",
    handler: function(){
        console.log("read a new note");
    }
})

yargs.command({
command:'add',
describe:'Add a new note',
builder:{
    title:{
        describe:'note title',
        demandOption:true,
        type:'string'
    },
    body:{
        describe:'note body',
        demandOption:true ,
        type:'string'
    }
},
handler:function(argv){
    notes.addNote(argv.title,argv.body)
}
})

// node node.js --title='il mio titolo' --body="il mio body"// questo il commento scritto nella riga di comando

yargs.parse()








console.log(yargs.argv);