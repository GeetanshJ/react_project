import React from 'react';

function Header() {
  return (
    <header id="project-div">
      <div className="nav-bar">
        <div className="logo">digital</div>

        <div className="nav-bar-ham">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <ul className="listing">
          <li><a href="#feature-div">FEATURES</a></li>
          <li><a href="#offer-div">OFFER</a></li>
          <li><a href="#pricing-div">PRICING</a></li>
          <li><a href="#client-div">CLIENTS</a></li>
          <li><a href="#fact-div">FACTS</a></li>
          <li><a href="#project-div">PROJECTS</a></li>
          <li><a href="#team-div">TEAMS</a></li>
          <li><a href="#contact-div">CONTACTS</a></li>
        </ul>
      </div>

      <h1>Simply the Best</h1>
      <p>Reasons for Choosing Us</p>
      <div className="content-header">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
        dolores?
      </div>
      <div className="content-header-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
        dolores?
      </div>
      <button className="btn">READ MORE</button>
    </header>
  );
}

export default Header;
