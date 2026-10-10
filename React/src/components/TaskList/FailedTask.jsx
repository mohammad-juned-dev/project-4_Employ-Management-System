import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="h-full w-[21%] rounded-xl flex-shrink-0 bg-blue-700 p-10">
        <div className="flex justify-between items-center w-full  ">
          <h3 className="bg-red-600 w-max px-3 py-1 rounded-lg text-sm ">
             {data.category}
          </h3>
          <h2 className="text-sm">{data.task_date}</h2>
        </div>
        <h2 className="text-2xl mt-5 font-bold">{data.task_title}</h2>
        <h4 className="text-sm mt-2 w-full h-[35%]">
         {data.task_description}
        </h4>
         <div className="py-3 mt-9 h-max w-full flex flex-col items-center justify-center px-5 gap-2 ">
            <button  className='text-white text-sm px-3 py-1 transition-all active:scale-95 border-2  border-white-700 rounded-lg w-full bg-red-600'>Failed</button>
           
        </div>
      </div>
  )
}

export default FailedTask