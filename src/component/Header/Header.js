import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom"; 
import { UserContext } from '../../App';


const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const history=useHistory();

    const handleLogIn=()=>{
        history.push('/login');
    }

    const handleHomeClicked=()=>{
        history.push('/home');
    }

    const handleDestinationClicked=()=>{
        history.push('/destination');
    }

    const handleBlogClicked=()=>{
        history.push('/blog');
    }

    console.log(loggedInUser.displayName);
    return (
        <div>
               <div  className={"header-section"}>
          
          <div  className={'title-section'}>
          <h2>Dhaka Transport</h2>
          <p>{loggedInUser.email}</p>
          </div>
          
          <div>
          <nav className={'nav-bar'}>
             <ul>
             <li onClick={handleHomeClicked}><strong>Home</strong></li>
                 {/* <li><Link to="/home"><strong>Home</strong></Link></li> */}
                 <li onClick={handleDestinationClicked}><strong>Destination</strong></li>
                 <li onClick={handleBlogClicked}><strong>Blog</strong></li>
                 <li><strong>Contact</strong></li>
                 {
                     loggedInUser.email ? <li>{loggedInUser.displayName || loggedInUser.name || loggedInUser.email}</li> : <li><Button onClick={handleLogIn} variant="info">LogIn</Button>
                   </li> 
                 }
                 
             </ul>
          </nav>
          
          </div>
          
          </div>
        </div>
    );
};

export default Header;