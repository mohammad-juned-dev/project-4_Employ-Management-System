import React from 'react'

const CreateTask = () => {
  return (
    <div className="bg-[#1C1C1C] h-max w-full px-10 py-2 flex items-start justify-between rounded-xl ">
     <form className="h-full w-full flex items-start justify-between rounded-xl" action="">
         <div className="w-1/2 flex items-start flex-col justify-start gap-2 ">
          <h1 className="text-3xl font-semibold">Create Task</h1>
          <div className="w-[75%]  p-2">
            <h3 className="text-base font-semibold">Task Title</h3>
            <input
              className="text-white placeholder:text-gray-500 bg-transparent w-full placeholder:text-sm text-md py-1 px-3 rounded-md mt-1 outline-none border border-solid border-white"
              type="text"
              placeholder="Create the Design"
            />
          </div>

          <div className="w-[75%]  p-2">
            <h3 className="text-base font-semibold">Date</h3>
            <input
              className="text-white placeholder:text-gray-500 bg-transparent w-full placeholder:text-sm text-md py-1 px-3 rounded-md mt-1 outline-none border border-solid border-white"
              type="date"
              placeholder="Create the Design"
            />
          </div>

          <div className="w-[75%]  p-2">
            <h3 className="text-base font-semibold">Assigned to</h3>
            <input
              className="text-white placeholder:text-gray-500 bg-transparent w-full placeholder:text-sm text-md py-1 px-3 rounded-md mt-1 outline-none border border-solid border-white"
              type="text"
              placeholder="e.g. John"
            />
          </div>
          <div className="w-[75%]  p-2">
            <h3 className="text-base font-semibold">Category</h3>
            <input
              className="text-white placeholder:text-gray-500 bg-transparent w-full placeholder:text-sm text-md py-1 px-3 rounded-md mt-1 outline-none border border-solid border-white"
              type="text"
              placeholder="Design, Bug fixing, deployment, etc. "
            />
          </div>
        </div>

        <div className=" w-1/2 h-max p-10 flex items-start flex-col justify-start gap-2">
          <div>
            {" "}
            <h3 className="text-base font-semibold mt-2">Description</h3>
            <textarea className="text-white placeholder:text-gray-500 bg-transparent w-[37.5em] h-[16em] placeholder:text-sm text-md py-1 px-3 rounded-md mt-1 outline-none border border-solid border-white" name="description" id="" placeholder="Description"></textarea>{" "}
          </div>
          <button className="text-white  bg-emerald-500 w-full placeholder:text-sm text-md py-1 px-3 rounded-md mt-1 outline-none hover:bg-emerald-600 transition-all active:scale-95">Create Task</button>
        </div>
     </form>
      </div>
  )
}

export default CreateTask