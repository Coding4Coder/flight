
import React from 'react';
import "../scss/flight.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <div className="container-fluid pad">
   
    <h2 className="display-6 text-center pad-b"> Contact - Flight Center</h2>
    <div className="main-container">
    <h4 className="display-6 text-center pad-b">  If you have any question please conact us:</h4>
           <div className="row mar-b">
                <div className="col-sm-4 text-right">
                <FontAwesomeIcon className="icon-size-m" icon={faPhone} />
                </div>
                <div className="col-sm-8">
                00 91 9899782200
                </div>
             </div>

             <div className="row  mar-b">
                <div className="col-sm-4 text-right">
                <FontAwesomeIcon className="icon-size-m" icon={faLocationDot} />
                </div>
                <div className="col-sm-8">
                #580, MG Road, 2nd Main, <br />Zero to Hero Street, Bangalore - 560012
                </div>
               
             </div>

             <div className="row">

                <div className="col-sm-4 text-right">
                <FontAwesomeIcon className="icon-size-m" icon={faEnvelope} />
                </div>
                <div className="col-sm-8">
                info@flightCenter.com
                </div>
             </div>
    </div>
      
    </div>
  )
}

export default Contact;
