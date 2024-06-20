// Sidebar.js

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/custom-style.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log('I was clicked')
  };

  return (
    <div className="sidebar">
      <h2>Topics</h2>
      <nav>
        <ul>
          <li><Link to="/">Topics 1</Link></li>
          <li><Link to="/about">Topics 2</Link></li>
          <li><Link to="/">Topics 3</Link></li>
          <li><Link to="/">Topics 4</Link></li>
          <li>
            <div className="dropdown" onClick={handleClick}>
              <button  className="dropbtn">Dropdown</button>
              {isOpen && (
                <div id="myDropdown" className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
