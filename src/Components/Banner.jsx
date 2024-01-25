// ** import core package:
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-[88vh] bg-[url('https://media.istockphoto.com/id/1301652887/photo/medical-care-concept.jpg?s=612x612&w=0&k=20&c=go1OTw32xqriJ8J40k1vZoJymXmbPEoMf5vNSwgEnCY=')] bg-cover bg-no-repeat ">
      <div className="h-full w-full bg-black/60 px-10 flex items-center">
        <div>
        <h1 className="text-white w-3/4 md:w-1/2 text-3xl  lg:text-6xl font-bold">Your Best Medical  Help Center</h1>
        <p className="text-gray-300 w-3/4 text-justify md:w-1/2  mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis reiciendis libero inventore sint expedita illum enim!</p>
        <div className="mt-10">
        <Link to="/appointment" className="btn-primary !py-3">
          <button>Get Appointment</button>
        </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
