import React from 'react'
import Header from '../others/Header.jsx'
import TaskListNumbers from '../others/TaskListNumbers.jsx'
import TaskList from '../TaskList/TaskList.jsx'

const EmployeeDashboard = () => {
  return (
    <div className='h-screen w-screen bg-[#1C1C1C] p-10 '>
   <Header/>
   <TaskListNumbers/>
   <TaskList/>
    </div>
  )
}

export default EmployeeDashboard