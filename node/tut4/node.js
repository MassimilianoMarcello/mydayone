const chalk = require('chalk')
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







console.log(yargs.argv);