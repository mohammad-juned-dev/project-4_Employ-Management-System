import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data, onTaskStatusChange }) => {

  
  return (
    <div
      id="tasklist"
      className="w-full h-[55%] rounded-xl overflow-x-auto flex items-center justify-start gap-10 flex-nowrap  mt-10 py-5"
    >
     
    {/* <AcceptTask/>
    <NewTask/>
     <CompleteTask/>
     <FailedTask/> */}

     {data?.tasks?.map((elem ,idx)=>{
  
    if(elem.active){
      return <AcceptTask key={idx} data={elem} onComplete={() => onTaskStatusChange(idx, 'completed')} onFail={() => onTaskStatusChange(idx, 'failed')} />
    }else if(elem.new_task){
      return <NewTask key={idx} data={elem} onAccept={() => onTaskStatusChange(idx, 'active')} />
    }else if(elem.completed){
      return <CompleteTask  key={idx} data={elem}/>
    }else if(elem.failed){
      return <FailedTask  key={idx} data={elem}/>
    }
    
      
      
     })}
    </div>
  );
};

export default TaskList;
