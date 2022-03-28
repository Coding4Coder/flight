import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle';
import "../../scss/flight.scss";

const AddFlight = () => {

    let navigate = useNavigate();

    const[flight, setFlight] = useState({
        flightname: "",
        country: "",
        status: ""
    });

    const{ flightname, country, status } = flight;

    const inputChangeHandler = (e) => {
        setFlight({...flight, [e.target.name]:e.target.value});
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        let result = await axios.post(`http://localhost:5000/flightsinfo`, flight);
        setFlight(result.data);
        navigate("/");

    }

  return (
    <div className="container-fluid pad">
     <PageTitle pageTitle="Add Flight" />

      <div className="main-container text-center">
          <form onSubmit={ formSubmitHandler }>
              <input 
              type="text"
              placeholder="Add Flight Name"
              autoComplete="off"
              required
              name="flightname"
              value={flightname}
              onChange={ inputChangeHandler } />

              <input 
              type="text"
              placeholder="Add Country"
              autoComplete="off"
              required
              name="country"
              value={country}
              onChange={ inputChangeHandler } />

              <input 
              type="text"
              placeholder="Add Status"
              autoComplete="off"
              required
              name="status"
              value={status}
              onChange={ inputChangeHandler } />

              <button className="btn btn-primary btn-size-m"> Add </button>
          </form>
      </div>
      
    </div>
  )
}

export default AddFlight;
