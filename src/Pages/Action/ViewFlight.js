import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../Components/PageTitle";
import "../../scss/flight.scss";

const ViewFlight = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [flight, setFlight] = useState({
    flightname: "",
    country: "",
    status: "",
  });

  const { flightname, country, status } = flight;

  const loadFlightData = async () => {
    let result = await axios.get(`http://localhost:5000/flightsinfo/${id}`);
    setFlight(result.data);
  };

  useEffect(() => {
    loadFlightData();
  });

  // back to list
  const backToList = () => {
    navigate("/flights-list")
  }

  return (
    <div className="container-fluid pad">
      <PageTitle pageTitle="View Flight" />

      <div className="main-container text-center min-h">
        <div className="dv-center-h-v">
         
            <strong>Flight Name : </strong> {flightname}
            <br />
            <strong>Country : </strong> {country}
            <br />
            <strong>Status : </strong> {status}  <br />  <br />
            <button className="btn btn-primary btn-size-m" onClick={ backToList }> Back to List </button>
        
        </div>
      </div>
    </div>
  );
};

export default ViewFlight;
