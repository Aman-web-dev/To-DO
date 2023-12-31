import React, { useEffect, useState } from 'react'
import Card from './Card'

function List() {
    const [timeLeft,setTimeLeft]=useState([])
    const [todo,setTodo]=useState([])
    const [contentEditable,setContentEditable]=useState(false)
    
    const [formData,setForm]=useState({
        todo:"",
        date:"",
        completed:"",
      
    })
const handleSubmit=(event)=>{
  event.preventDefault();
 
  const currentDate = new Date();
  const upcomingDate = new Date(formData.date);
  const timeDifference = upcomingDate - currentDate; // Difference in milliseconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  
  
  console.log(`Time difference: ${days} days, ${hours} hours, ${minutes} minutes`)
  const newTodo = {
    todo: formData.todo,
    date: formData.date,
    completed: formData.completed,
  }

setTimeLeft([...timeLeft,`Time difference: ${days} days, ${hours} hours, ${minutes} minutes`])

handleTimer(timeLeft.length-1,upcomingDate)
  
setTodo([...todo,newTodo])
}

const handleTimer = (index,upcomingDate) => {
  const initialTimeLeft = timeLeft[index]
  console.log("Initila timeya",initialTimeLeft)

setInterval(()=>{
  const currentDate = new Date();

  const timeDifference = upcomingDate - currentDate; // Difference in milliseconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  timeLeft[index]=`Time difference: ${days} days, ${hours} hours, ${minutes} minutes`
  console.log(days,hours,minutes)
},60000)

};

const handleDelete=(index)=>{
const updatedTodos = todo.filter((_, i) => i !== index)
 setTodo(updatedTodos) 

}



const  handleEdit=async(event,index)=>{

  
  todo[index] = {...todo[index],[event.target.id]:event.target.textContent};

}





  return (
    <div className='flex justify-center items-center m-auto'>
    <div className="gap-6  top-4/4 left-3/4 bg-white p-6 shadow-md">


    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form  className="space-y-6" onSubmit={handleSubmit}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add Your Todo</h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Todo</label>
            <input  type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Have To make Food" required name="todo" value={formData.todo} onChange={(e)=>{setForm({...formData, todo: e.target.value})}}/>
        </div>
        <div>
        <input  type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" name="date" value={formData.date} onChange={(e)=>{setForm({...formData, date: e.target.value})}} required/>

        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="completed" value={formData.completed} onChange={(e)=>{setForm({...formData, completed: e.target.value})}}>
  <option defaultValue={""}>Choose</option>
  <option value="true">True</option>
  <option value="false">False</option>

</select>

                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Completed</label>
            </div>
          </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        
    </form>
</div>
</div>



<div className="grid float-left  grid-cols-3 gap-4 w-[60vw] mt-[20px]">


      {
        todo.map((elem,index)=>{

              return(
                  <Card key={index}
                    todo={elem.todo} 
                    date={elem.date} 
                    contentEditable={contentEditable}
                    completed={elem.completed} 
                    delFun={()=>handleDelete(index)}
                    editFun={(event)=>{handleEdit(event,index)}}
                    timer={timeLeft[index]}
                    
                    />
              )
        })
      }

      </div>
    </div>
  )


}

export default List