import React, { useEffect, useState } from "react";
import "../scss/flight.scss";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faFileEdit} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../Components/PageTitle";
import { NavLink} from "react-router-dom";

const FlightsDetails = () => {
  const [flightData, setFlightData] = useState([]);

  const loadFlightData = async () => {
    try {
      let result = await axios.get("http://localhost:5000/flightsinfo");
      // console.log(result);
      setFlightData(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(flightData);

  useEffect(() => {
    loadFlightData();
  }, []);

  return (
    <div className="container-fluid pad">
    
      <PageTitle pageTitle={"Flight Details"} />
      <div className="row txt-center g-0">
        <NavLink className="btn btn-primary btn-size-l" to="/flight/add/">Add Flight</NavLink>
        </div>
      
      <div className="main-container">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fligh Name</th>
              <th scope="col">Country</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              flightData.map((flight, index) => (
                <tr>
                <th scope="row" key={index}>{ index+1 }</th>
                <td>{ flight.flightname }</td>
                <td>{ flight.country }</td>
                <td>{ flight.status }</td>
                <td className="faIconBox">
                  <NavLink to={`/flight/view/${flight.id}`}>
                     <FontAwesomeIcon className="blue" icon={faEye} />
                  </NavLink>

                  <NavLink to={`/flight/edit/${flight.id}`}>
                  <FontAwesomeIcon className="green" icon={faFileEdit} />
                  </NavLink>

                  <FontAwesomeIcon className="red" icon={faTrash} />
                </td>
              </tr>

              ))
              
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightsDetails;
