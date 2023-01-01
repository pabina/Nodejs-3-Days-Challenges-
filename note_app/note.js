let fs=require("fs")

const getNotes=()=>{
    console.log("hello people")
}



//for adding a notes
const addNotes=(title,body)=>{
const notes=loadNotes();

const dublicateNotes=notes.filter((noteis)=>{
 return noteis.title === title
})

if(dublicateNotes.length==0){
notes.push({
    title:title,
    body:body
})
saveNotes(notes);
console.log("added successfully");
}
else{
    console.log("duplication found")
}


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



module.exports={
    getNotes:getNotes,
    addNotes:addNotes
}