import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import DoctorPage from "./DoctorPage";
const Dentist = () => {
  const API_URL = "https://dev-l57z8641631p766.api.raw-labs.com/your/endpoint/3";
  const [loading, setLoading] = useState(false);
  const [doctor, setDoctors] = useState([]);

  async function fetchData() {
    setLoading(true);

    try{
      
      const res = await fetch(API_URL);
      const data = await res.json();

      setDoctors(data.doctors);
    }
    catch(error) {
      console.log("Error in fetching data");
      setDoctors([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  },[])

  return (
    <div>
      {
        loading ? <Spinner />  :
        doctor  ? 
        (<div >
          {
            doctor.filter((doctor)=>doctor.doctorType === "dentist").map( (doctor) => (
            <DoctorPage key = {doctor.id} doctor={doctor}/>
          ) )
          }
        </div>) :
        <div >
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Dentist;
