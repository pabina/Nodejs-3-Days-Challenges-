let fs=require("fs")

const getNotes=()=>{
    console.log("hello people")
}



//for adding a notes
const addNotes=(title,body)=>{
const notes=loadNotes();

notes.push({
    title:title,
    body:body
})
saveNotes(notes);
}



//for saving a notes

const saveNotes=(notes)=>{
    const DataJSON=JSON.stringify(notes);
    fs.writeFileSync("note.json",DataJSON);
}





//for loading a notes
const loadNotes=()=>{
    try {
        let BufferData= fs.readFileSync("note.json") ;
        let DataJson=BufferData.toString();
      return JSON.parse(DataJson);
        
    } catch (error) {
       return [] 
    }

}



module.exports={getNotes,addNotes}