let fs = require("fs");
let chalk =require("chalk");


const getNotes = () => {
  console.log("hello people");
};

//for adding a notes
const addNotes = (title, body) => {
  const notes = loadNotes();

  const dublicateNotes = notes.filter((noteis) => {
    return noteis.title === title;
  });

  if (dublicateNotes.length == 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("added successfully"));
  } else {
    console.log(chalk.red.inverse("duplication found"));
  }
};




//for saving a notes
const saveNotes = (notes) => {
  const DataJSON = JSON.stringify(notes);
  fs.writeFileSync("note.json", DataJSON);
};




//for loading a notes
const loadNotes = () => {
  try {
    let BufferData = fs.readFileSync("note.json");
    let DataJson = BufferData.toString();
    return JSON.parse(DataJson);
  } catch (error) {
    return [];
  }
};



//for remove notes
const removeNotes=(title)=>{
let mynotes=loadNotes();

const FilterNotes=mynotes.filter((data)=>{
    return data.title !== title      
})

if(mynotes.length>FilterNotes.length){
    console.log(chalk.green.inverse("Note Removed"))
    saveNotes(FilterNotes)
}else{
    console.log(chalk.red.inverse("No Note Found"))
}



// let newnotesString=JSON.stringify(mynewnotes);
// fs.writeFileSync("note.json",newnotesString)
}





//for listing notes

const listNotes=()=>{
const notes=loadNotes();
console.log(chalk.inverse("yours notes"))
notes.forEach(element => {
  console.log(element.title)
});
}


//reading notes by title
const readNotes=(title)=>{
  let notes=loadNotes();

 let note=notes.find((data)=>data.title===title)
 if(note){
  console.log(chalk.green.inverse.bold(note.title));
  console.log(note.body)
 }else{
  console.log(chalk.red.inverse("no title found"))
 }

}



module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes:removeNotes,
  listNotes:listNotes,
  readNotes:readNotes
  
};
