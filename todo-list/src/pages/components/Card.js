import React, { useState } from 'react'

function Card(props) {

  const [editable,seteditable]=useState(false)

  const edit=()=>{
    seteditable(true)
  }
  return (

    <div className="max-w-sm h-[30vh] w-[20vw] p-6 bg-white border border-ay-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">



<a href="#" >
        <h5 id="todo" contentEditable={editable} onClick={edit} onInput={props.editFun} name="todo" className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.todo}</h5>
    </a>
<p type='date' contentEditable={editable}  id="date" onInput={props.editFun} name="date" className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.date}</p>

<p type='completed'  id="date"  name="date" className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.completed}</p>

<p type='completed'  id="date"  name="date" className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.timer}</p>

 <a href="#" className="inline-flex m-2  items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-Red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={props.delFun}>
        Delete
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>

    <a href="#" className="inline-flex m-2  items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-Red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={props.editFun}>
      Edit
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>

    </div>
  )
}

export default Card

    
