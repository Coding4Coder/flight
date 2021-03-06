import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle';
import "../../scss/flight.scss";
import Breadcrumb from '../../Components/Breadcrumb';

const EditFlight = () => {

    let navigate = useNavigate();
    const { id } = useParams();

    const[flight, setFlight] = useState({
        flightname: "",
        country: "",
        status: ""
    });

    const{ flightname, country, status } = flight;

    const inputChangeHandler = (e) => {
        setFlight({...flight, [e.target.name]:e.target.value});
    }

    //update the data on submit 
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/flightsinfo/${id}`, flight);
        navigate("/")
    }
   
    // first load the perticular data associated with the ID on the edit btn click
  const loadFlightData = async () => {
      let result = await axios.get(`http://localhost:5000/flightsinfo/${id}`);
      setFlight(result.data);
  }

    useEffect(() => {
        loadFlightData();
    },[]);

  return (
    <div className="container-fluid pad">
     <Breadcrumb root={"Home"} parent={"Flight"} children={"Update Flight"} slash={"/"} /> 
     <PageTitle pageTitle="Update Flight" />

      <div className="main-container text-center">
          <form onSubmit={ onSubmitHandler }>
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

              <button className="btn btn-primary btn-size-m"> Update </button>
          </form>
      </div>
      
    </div>
  )
}

export default EditFlight;
