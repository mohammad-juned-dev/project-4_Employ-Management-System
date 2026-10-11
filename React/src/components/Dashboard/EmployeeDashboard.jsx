import React, { useContext } from 'react'
import Header from '../others/Header.jsx'
import TaskListNumbers from '../others/TaskListNumbers.jsx'
import TaskList from '../TaskList/TaskList.jsx'
import { AuthContext } from '../../context/AuthProvider.jsx'

const EmployeeDashboard = ({ data, onLogout }) => {
  const [, setUserData] = useContext(AuthContext);

  const updateTaskStatus = (taskIndex, status) => {
    if (!data) return;

    setUserData((employees) => {
      const updatedEmployees = employees.map((employee) => {
        if (employee.email !== data.email) return employee;

        const tasks = employee.tasks.map((task, index) =>
          index === taskIndex
            ? {
                ...task,
                new_task: status === 'new_task',
                active: status === 'active',
                completed: status === 'completed',
                failed: status === 'failed',
              }
            : task,
        );

        return {
          ...employee,
          tasks,
          taskcount: {
            new_task: tasks.filter((task) => task.new_task).length,
            active_task_count: tasks.filter((task) => task.active).length,
            completed_task_count: tasks.filter((task) => task.completed).length,
            failed_task_count: tasks.filter((task) => task.failed).length,
          },
        };
      });

      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
      return updatedEmployees;
    });
  };

  
  return (
    <div className='h-screen w-screen bg-[#1C1C1C] p-10 '>

   <Header data={data} onLogout={onLogout} />
   <TaskListNumbers data={data} />
   <TaskList data={data} onTaskStatusChange={updateTaskStatus} />
    </div>
  )
}

export default EmployeeDashboard
