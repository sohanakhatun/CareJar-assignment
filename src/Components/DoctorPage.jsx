import React from "react";
import toast, { Toast } from "react-hot-toast";
const DoctorPage = ({ doctor }) => {
  const clickHandler = () => {
    toast.success("Booking Confirmed");
  };
  return (
    <div className="flex flex-col gap-10 py-8">
      <div className="flex flex-row gap-2">
        <div>
          <img
            src={doctor.picture}
            className="h-[140px] w-[145px] rounded-full"
          />
        </div>
        <div>
          <p className=" text-blue-700 text-lg font-semibold">{doctor.name}</p>
          <p className=" text-gray-500">{doctor.doctorType}</p>
          <p className=" text-gray-500">
            {doctor.experience} years of experience overall
          </p>
          <p className=" font-bold from-neutral-600">
            {doctor.address},{doctor.city} .
            <span className=" font-normal">{doctor.clinic}</span>
          </p>

          <p>
           
            <span>&#8377;</span>
            {doctor.fees} Consultation fee at clinic
          </p>
          <div className="flex flex-row gap-48 py-4">
            <div className="flex flex-row gap-2 items-baseline">
              <div className=" bg-green-500 rounded-md px-2 py-1 h-8 text-white">
                👍 {doctor.rating}%
              </div>
              <p className="underline font-bold">{doctor.patients} Patients Stories</p>
            </div>

            <div className="gap-2">
              <p className=" text-green-600 font-bold"><span>&#128197;</span>Avaliable Today</p>
              <button
                className=" bg-blue-900 text-white py-4 rounded-lg px-2"
                onClick={clickHandler}
              >
                Book Appointment
                <p>No booking Fee</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
