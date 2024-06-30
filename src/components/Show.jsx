import React from 'react'

const Show = ({tasks,settasks}) => {
    const CompleteTaskToggle = (e, i) => {
        const copyTasks = [...tasks];
        copyTasks[i].completed = !tasks[i].completed;
        settasks(copyTasks);
        e.target.classList.toggle("bg-green-500");
        e.target.classList.toggle("border-purple-400")
        e.target.classList.toggle("border-green-500")
        e.target.nextSibling.classList.toggle("line-through")
      };
    
      const DeleteHandler = (i) => {
        const copyTasks = [...tasks];
        let isValid = false;
        if (!copyTasks[i].completed) {
          isValid = confirm("Do you really want to delete this task?");
        }
        if (isValid || copyTasks[i].completed) {
          copyTasks.splice(i, 1);
          settasks(copyTasks);
        }
      };
      
      let noTasks = <h1 className="text-green-500 font-2xl">No Pending Tasks...</h1>
      if (tasks.length > 0) {
        noTasks = tasks.map((task, index) => {
          return <div id="task" key={index} className="flex items-center justify-between mt-6 w-full border border-purple-400 p-2 rounded-xl">
          <div id="left" className="flex items-center justify-center gap-2">
            <div id="completedCircle" onClick={(e)=>CompleteTaskToggle(e,index)} className="w-7 h-7 border-purple-400 border-2 rounded-full "></div>
            <h1 className="text-purple-200 text-2xl font-bold">{task.title}</h1>
          </div>
          <div id="right" className="text-purple-400 text-2xl font-thin flex items-center justify-center gap-4">
            <i className="ri-edit-2-fill"></i>
            <i onClick={()=>DeleteHandler(index)} className="ri-delete-bin-7-fill"></i>
          </div>
        </div>
        })
      }
  return (
      <>
      <div id="tasks" className="flex flex-col justify-evenly items-center">
        {noTasks}
      </div>
      </>
  )
}

export default Show