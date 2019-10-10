const notes = require('./notes')
const yargs = require('yargs')


//create add command
yargs.command({
    command: 'add',
    description : 'Adding the task to Notes',
    handler : function(){
        console.log('Adding a new note')
    }
});

//create remove command
yargs.command({
    command:'remove',
    description:'Removing the task from notes',
    handler:()=>{
        console.log('Removing a note!')
    }
});

//create list commands
yargs.command({
    command:'list',
    description:'To retrieve all tasks',
    handler:()=>{
        console.log('Listing all the tasks')
    }
});

//create read command
yargs.command({
    command:'read',
    description:'To read the tasks',
    handler:()=>{
        console.log('To read the notes')
    }
})
console.log(yargs.argv);