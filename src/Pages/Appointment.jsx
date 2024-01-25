// ** import core package:
import { useState } from "react";

// ** import components:
import Title from "../Components/Title";

// ** import third party packages:
import Axios from "../Utils/Axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const Appointment = () => {
  const [date, setDate] = useState(() => {
    const defaultTime = new Date();
    defaultTime.setHours(12);
    defaultTime.setMinutes(0);
    return defaultTime;
  });
  console.log(date);

  const [service, setService] = useState("MedConnect Hub");
  const axios = Axios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const email = form.email.value;
    const appointmentData = { firstName, service, lastName, email, date };

    axios.post("api/v1/appointment", appointmentData);

    Swal.fire({
      title: "Successfully Booking Appointment!",
      icon: "success",
    });
  };
  return (
    <div className="">
      <Title title="Booking Appointment" />
      <div className="md:w-3/4 mx-auto px-10 lg:px-20 py-10 mb-10 bg-white rounded-md">
        <form onSubmit={handleSubmit}>
          <div>
            <p className="text-[#475367] text-moon-14 font-medium mb-1">
              Services
            </p>
            <select
              className="p-4 border w-full rounded-md"
              id="service"
              name="service"
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="MedConnect Hub">MedConnect Hub</option>
              <option value="HealthSync Network">HealthSync Network</option>
              <option value="DocCare Solutions">DocCare Solutions</option>
              <option value="TeleMed Pro">TeleMed Pro</option>
              <option value="HealLink Services">HealLink Services</option>
            </select>
          </div>
          <div className="mt-6 grid  md:grid-cols-2 gap-5">
            <div>
              <p className="text-[#475367] text-moon-14 font-medium mb-1">
                First Name
              </p>
              <input
                className="p-4 border w-full rounded-md"
                type="text"
                name="first_name"
                required
                placeholder="First Name"
              />
            </div>
            <div>
              <p className="text-[#475367] text-moon-14 font-medium mb-1">
                Last Name
              </p>
              <input
                className="p-4 border w-full rounded-md"
                type="text"
                placeholder="Last Name"
                name="last_name"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div className="w-full">
              <p className="text-[#475367] text-moon-14 font-medium">Date</p>
              <DatePicker
                className="p-4 border !w-full rounded-md"
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
            <div className="">
              <p className="text-[#475367] text-moon-14 font-medium">Email</p>
              <input
                className="p-4 border w-full rounded-md"
                type="text"
                required
                name="email"
                placeholder="demo@gmail.com"
              />
            </div>
          </div>
          <div className="mt-5 text-center">
            <input
              className="btn-primary w-full !py-3"
              type="submit"
              value="Booking"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
