// ** import components:
import Sidebar from "../Components/Sidebar";
import Table from "../Components/Table";
import Title from "../Components/Title";

const Dashboard = () => {
  
  return (
    <div className="flex gap-4 ">
      <div className="border h-[88vh] bg-white w-72 p-5">
        <Sidebar />
      </div>
      <div className="border h-[88vh] w-full  p-10">
        <Title title="All Appointments" />
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
