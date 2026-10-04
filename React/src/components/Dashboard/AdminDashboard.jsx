import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = () => {
  return (
    <div className="bg-[#0b0b0b] h-screen w-screen px-10 flex flex-col overflow-hidden">
      <Header />
     <CreateTask/>
     <AllTask/>
    </div>
  );
};

export default AdminDashboard;
