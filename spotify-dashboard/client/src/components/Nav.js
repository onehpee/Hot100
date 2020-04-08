import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';


function Nav() {
    return (
      <nav>
        <h2> Discover </h2>
            <ul className="nav-Links">
                <Link to="/">
                    <li><button> Home </button></li>
                </Link>
                <Link to="/Chart">
                    <li><button> Chart </button></li>
                </Link>
                <Link to="/Polar">
                    <li><button> Polar </button></li>
                </Link>
                <Link to="/Help">
                    <li><button>Help</button></li>
                </Link>
                <Link to="/web">
                    <li><button>Web</button></li>
                </Link>
            </ul>
      </nav> 
    )
  }
  
  export default Nav
