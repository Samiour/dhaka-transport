import React from 'react';
import '../Home/Home.css';
import Vehicle from '../Vehicle/Vehicle';
import fakeData from '../../fakeData/MOCK_DATA (3).json';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImage from '../../images/bg.jpg';
import LogIn from '../LogIn/LogIn';
import { Link, useHistory } from 'react-router-dom';


const Home = () => {

    return (
       <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage})`,height:"1000px"}} className={'totalhome-section'}>
         
        <div className='vehicleDiv'>
        
        <Vehicle></Vehicle>
        </div>
        
       </div>
    );
};

export default Home;