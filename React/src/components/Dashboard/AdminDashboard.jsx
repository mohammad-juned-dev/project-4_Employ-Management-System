import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({data, onLogout }) => {
  return (
    <div className="bg-[#0b0b0b] h-screen w-screen px-10 flex flex-col overflow-hidden">
      <Header data={data} onLogout={onLogout} />
     <CreateTask data={data} />
     <AllTask data={data} />
    </div>
  );
};

export default AdminDashboard;
