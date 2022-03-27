
import "../scss/flight.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";


const TopHeader = () => {
    return (

        <div className="row top-header g-0">
            <div className="col-sm-2 text-right"> 
               <FontAwesomeIcon className="logo pad-r" icon={faPlane} />
            </div>
            <div className="col-sm-5"> <h2 className="text-left lh">Flight Center</h2>
           </div>
            <div className="col-sm-5">
                <NavLink className="btn btn-primary" to="/">Home</NavLink>
                <NavLink className="btn btn-primary" to="/about/">About</NavLink>
                <NavLink className="btn btn-primary" to="/contact/">Contact</NavLink>
               
            </div>
        </div>
    );
}

export default TopHeader;