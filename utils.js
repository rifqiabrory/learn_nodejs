const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return loadNotes();
};

const removeNote = title => {
  const storage = loadNotes();
  const findNote = storage.filter(note => note.title !== title);
  if (storage.length > findNote.length) {
    saveNote(findNote);
    console.log(chalk.green.inverse("Note has been removed."));
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.filter(note => note.title === title);

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNote(notes);
    console.log("New note added.");
  } else {
    console.log("Note title taken!");
  }
};

const readNote = title => {
  const notes = loadNotes();
  const findNote = notes.filter(note => note.title === title);
  if (findNote.length > 0) {
    console.table(findNote);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("./storage/storage.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

const saveNote = note => {
  const dataJson = JSON.stringify(note);
  fs.writeFileSync("./storage/storage.json", dataJson);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote
};
