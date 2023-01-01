//arrow function challenges



const task={
    task:[
    {
        text:"grocery shopping",
        complete:true
    },
    {
        text:"clean yard",
        complete:false
    },
    {
        text:"film course",
        complete:false
    }
],
 getTaskToDo:function(){
   return  myIncompletetask=this.task.filter(data=>data.complete == false)
    // return myIncompletetask;
 }
}

console.log(task.getTaskToDo())


