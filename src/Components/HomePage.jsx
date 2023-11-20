import React from "react";
import Dentist from "../Images/dentist.jpg";
import Gync from "../Images/gync.jpg";
import Nutrition from "../Images/nutritionist.jpg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const clickhandler1 = () => {
    navigate("/dentist");
  };
  const clickhandler2 = () => {
    navigate("/gync");
  };
  const clickhandler3 = () => {
    navigate("/nutritionist");
  };
  return (
    <div className="flex flex-col gap-4 ">
      <p className="font-bold text-2xl">Book an appointment for an in-clinic consultation</p>
      <p>Find experienced doctors across all specialities</p>
      <div className="flex flex-row gap-3 ">
        <div onClick={clickhandler1}>
        
        <img src={Dentist} height={300} width={200} className="rounded-md" />
        
          
          <p className="font-semibold">Dentist</p>
          <p>Teething troubles Schedule a dental checkup</p>
        </div>

        <div onClick={clickhandler2}>
          <img src={Gync} height={300} width={200} className="rounded-md" />
          <p className="font-semibold">Gynecologist/Obstetrician</p>
          <p>
            Explore for women's health, pregnancy and infertility treatments
          </p>
        </div>

        <div onClick={clickhandler3}>
          <img src={Nutrition} height={300} width={200} className="rounded-md" />
          <p className="font-semibold">Dietitian/Nutrition</p>
          <p>
            Get guidance on eating right,weight management and sports nutrition
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
