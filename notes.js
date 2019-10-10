const fs = require('fs');
const chalk = require('chalk');
const getNotes=()=>{
}

const addNote=(title,body)=>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=>{
        return note.title === title;
    });
   console.log(duplicateNotes);

    if(duplicateNotes.length===0){
        notes.push({
            title :title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('Note added!..'));
    }else{
        console.log(chalk.red.inverse('Title already taken!'));
    }
   
}

const saveNotes=(notes)=>{
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}

const loadNotes=()=>{
    try{
            const dataBuffer = fs.readFileSync('notes.json');
            const dataJson = dataBuffer.toString();
            return JSON.parse(dataJson);
    }
    catch(e){
        return [];
    }

}

const removeNote=(title)=>{
    console.log(title);
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title;
    });

    if(notes.length > notesToKeep.length)
    {
        console.log(chalk.inverse.green('Note Removed!..'));
    }else{
        console.log(chalk.red.inverse('Note not Found!..'));
    }
    saveNotes(notesToKeep);
}

const listNotes=()=>{
    console.log(chalk.inverse('Your Notes'));
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title);        
    });

}
module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes
}