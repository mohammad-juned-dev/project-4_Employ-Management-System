import React from 'react'
import Header from '../others/Header.jsx'
import TaskListNumbers from '../others/TaskListNumbers.jsx'
import TaskList from '../TaskList/TaskList.jsx'

const EmployeeDashboard = ({data, onLogout}) => {
  
  console.log(data);
  
  return (
    <div className='h-screen w-screen bg-[#1C1C1C] p-10 '>

   <Header data={data} onLogout={onLogout}/>
   <TaskListNumbers data={data} />
   <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard
