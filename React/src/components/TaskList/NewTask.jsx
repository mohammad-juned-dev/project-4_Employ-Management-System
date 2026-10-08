import React from 'react'

const NewTask = () => {
  return (
   <div className="h-full w-[21%] rounded-xl flex-shrink-0 bg-blue-700 p-10">
        <div className="flex justify-between items-center w-full  ">
          <h3 className="bg-red-600 w-max px-5 py-1 rounded-lg text-sm ">
            High
          </h3>
          <h2 className="text-sm">20Feb 2024</h2>
        </div>
        <h2 className="text-2xl mt-5 font-bold">Make a Website</h2>
        <h4 className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          aliquid aspe siaccusa ntium vero eos blanditiis.
        </h4>
         <div className="py-3 mt-9 h-max w-full flex flex-col items-center justify-center px-5 gap-2 ">
            <button  className='text-white text-sm px-3 py-1 transition-all active:scale-95 border-2  border-white-700 rounded-lg w-full bg-emerald-600'>Accept Task</button>
           
        </div>
      </div>
  )
}

export default NewTask