const yargs = require("yargs");
const note = require("./utils");

// ===== defferent between yargs and common argv
// console.log(process.argv);
// console.log(yargs.argv);

// Customize yargs version
yargs.version("1.1.0");

// create add command
yargs.command({
  // yargs.command object from yargs
  command: "add",
  describe: "Add a new note",
  builder: {
    //builder from yargs
    title: {
      describe: "Note title..",
      demandOption: true, // from yargs,required to true, default is false
      type: "string" // from yargs, type input
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    // console.log("adding a new note!", argv);
    // console.log("Title : " + argv.title);
    // console.log("Body : " + argv.body);
    note.addNote(argv.title, argv.body);
  }
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title..",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    note.removeNote(argv.title);
  }
});

// create read command
yargs.command({
  command: "read",
  describe: "Read note",
  builder: {
    title: {
      describe: "Note title..",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    note.readNote(argv.title);
  }
});

// create list command
yargs.command({
  command: "list",
  describe: "list note",
  handler: function() {
    const data = note.getNotes();
    console.table(data);
  }
});

// console.log(yargs.argv);
yargs.parse();
