import {useState,React} from 'react'

const Create = ({tasks,settasks}) => {
    const [title, settitle] = useState("");
    const submitTaskHandler = (e) => {
        e.preventDefault();
        const copyTasks = [...tasks];
        copyTasks.push({ title, completed: false })
        settasks(copyTasks);
        settitle("");
      };
  return (
    <div id="inputTasks" className="items-center justify-evenly flex mt-5">
        <form onSubmit={submitTaskHandler}  className="flex gap-4">
        <input onChange={(e)=>settitle(e.target.value)} value={title} id="inputTaskField" type="text" placeholder="write your next task" className="w-96 p-1 pl-4 border-none outline-none rounded-xl" />
        <button id="addTasks" className="text-3xl text-white bg-purple-500 p-2 rounded-full w-10 h-10 flex items-center justify-center"><b>+</b></button>
        </form>
      </div>
  )
}

export default Create