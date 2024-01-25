import { useEffect, useState } from "react";
import Axios from "../Utils/Axios";

const Table = () => {
  const axios = Axios();
  const [appointments, setAppointments] = useState([]);
  console.log(appointments);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get("/api/v1/appointments");
      setAppointments(res.data);
    };
    data();
  }, [axios]);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-[#344054] uppercase bg-[#F0F2F5] border">
            <tr>
              <th></th>
              <th scope="col" className="px-6 py-3">
                <div className="flex justify-between items-center">
                  <p>Name</p>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                service
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              
            </tr>
          </thead>
          <tbody >
            {appointments.map((appointment, idx) => (
              <tr className="bg-white border-b  " key={appointment._id}>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {idx+1}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex  gap-3 items-center">
                    <p>
                      {appointment.firstName} {appointment.lastName}
                    </p>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-moon-14 font-medium text-[#344054]">
                      {appointment.email}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-[#344054] font-medium text-moon-14">
                      {appointment.service}
                    </p>
                    
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-[#344054] font-medium text-moon-14">
                      {appointment.date}
                    </p>
                    <p className="text-[#667185] text-moon-14">time</p>
                  </div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
