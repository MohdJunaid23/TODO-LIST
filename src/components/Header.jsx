import React from 'react'

const Header = (props) => {
    const {tasks} = props
    return (
      <>
    <h1 className="font-bold text-4xl text-purple-500 text-center">THIS IS A TODO LIST APPLICATION</h1>
      <div id="todo" className="flex justify-evenly p-6 items-center gap-10 mt-5 border rounded-3xl border-purple-400">
        <div id="headers" className="text-purple-200">
          <h2 className="text-2xl font-extrabold">Todo Done</h2>
          <h3 className="tracking-widest">Keep it up</h3>
        </div>
        <div id="todo-circle" className="bg-purple-500 text-white rounded-full w-28 h-28 flex items-center justify-center">
          <h1 className="text-2xl text-white font-extrabold">{tasks.filter((t)=>t.completed === true).length}/{tasks.length}</h1>
        </div>
      </div>
      </>
  )
}

export default Header