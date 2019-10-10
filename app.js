const rootNotes = require('./notes')
const yargs = require('yargs')

console.log(rootNotes.getNotes());
//create add command
yargs.command({
    command: 'add',
    description : 'Adding the task to Notes',
    builder:{
        title:{
            description:'Note title',
            require:true,
            type:'string'
        },
        body:{
            description:'Notes Body',
            require:true,
            type:'string'
        }
    },
    handler : (argv)=>{
        rootNotes.addNote(argv.title,argv.body);
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


yargs.parse()
//console.log(yargs.argv); either this or above