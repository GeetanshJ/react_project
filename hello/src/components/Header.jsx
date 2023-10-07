import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Header({path}) {
  const [ham,setHam] = useState(false);

  function handleHam(){
    if(ham == true){
      console.log("dsdss");
      setHam(false);
    }
    else{
      console.log("dsdssdgsgfgfdskkks");
      setHam(true);
    }
  }
    return (
    <header id="project-div" class="header-2">
      <div className="nav-bar">
        <div className="logo">digital</div>

        <div className="nav-bar-ham"
        onClick={handleHam}
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
          <ul className={
            "listing"+(ham ? " active" : "")
          }>
          <li><Link style={{color:path=="feature" ? "orange" : "white"}} to="/feature">FEATURES</Link></li>
          {/* <li><Link to="teams">OFFER</Link></li> */}
          <li><Link style={{color:path=="prices" ? "orange" : "white"}} to="/prices">PRICING</Link></li>
          <li><Link style={{color:path=="clients" ? "orange" : "white"}} to="/clients">CLIENTS</Link></li>
          {/* <li><Link to="teams">FACTS</Link></li> */}
          {/* <li><Link to="teams">PROJECTS</Link></li> */}
          <li><Link style={{color:path=="teams" ? "orange" : "white"}} to="/teams">TEAMS</Link></li>
          <li><Link style={{color:path=="contact" ? "orange" : "white"}}  to="/contact">CONTACTS</Link></li>
        </ul>
    </div>

      
    </header>
  );
}

export default Header;
