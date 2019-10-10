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
    builder:{
        title:{
            description:'note title',
            type:'string',
            require:true
        }
    },  
    // Below can't be an arrow function....instead it can be a standard es6 function
    handler(argv){
        rootNotes.removeNote(argv.title);
    }
});

//create list commands
yargs.command({
    command:'list',
    description:'To retrieve all notes',
    handler(){
        rootNotes.listNotes();
    }
});

//create read command
yargs.command({
    command:'read',
    description:'To read the tasks',
    handler(){
        console.log('To read the notes')
    }
})


yargs.parse()
//console.log(yargs.argv); either this or above