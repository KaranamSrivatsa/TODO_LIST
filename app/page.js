'use client'
import React, { useState } from 'react'
const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")
    console.log(mainTask);
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No task available</h2>

 if (mainTask.length>0) {
  renderTask = mainTask.map((t,i) => {
    return(
      <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex justify-between  w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button onClick={() => {
          deleteHandler(i)
        }} className='bg-red-400 text-white px-4 py-3 rounded font-bold'>DELETE</button>
      </li>
    )
  })  
 }
  return (
    <div>
      <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>TODO-LIST</h1>
      <form onSubmit={submitHandler}>
        <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Title here'
        value={title}
        onChange={(e) =>{     // e is elem 
          settitle(e.target.value) // e returns object  settitle replicates on the react page (two-way-binding means showing to the use and saying to the react at the same time)
        }}>
        </input>
        <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Description here'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}>
        </input>
        
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>ADD TASK</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
      </>
    </div>
  )
}

export default page
