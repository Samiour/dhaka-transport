import React, { useContext, useState } from 'react';
import { UserContext, VehicleContext } from '../../App';
import '../SearchSection/SearchSection.css';
import googleImage from '../../images/googleImage.jpg';


const SearchSection = () => {
    const [showResults, setShowResults] =useState(false);
    
    const [vehicle,setVehicle]=useContext(VehicleContext);

    console.log(vehicle);

    const showVehicles=(e)=>{
        setShowResults(true);
   e.preventDefault();
    }
    return (
        <div>
            <div style={{display:'flex'}}>
                <div className='left-section'>
                    <h1>Search Here</h1>
                    <div>
                    <form action="" className='destination-form'>
                        <input type="name" placeholder='Where You want to go'/>
                        <br />
                        <input type="name" placeholder='Your Current Location'/>
                        <br />
                        <button onClick={showVehicles}>Go</button>
                    </form>
                    </div>
                    <br />
                    <div>
                       <div  style={{display:'flex'}}>

                         {
                             showResults &&
                              <div>
                                  <div className='ordered-vehicle' style={{display:'flex',margin:'15px'}}>
                                   <img style={{width:'170px'}} src={vehicle.Image} alt="" />
                           
                           <p style={{margin:'20px'}}>{vehicle.name}</p>
                           <h3 style={{margin:'20px',marginLeft:'20px'}}>{vehicle.seatNumbers}</h3>
                           <h3 style={{margin:'20px',marginLeft:'20px'}}>${vehicle.amount1}</h3>
                           
                             </div>

                             <div className='ordered-vehicle' style={{display:'flex',margin:'15px'}}>
                                   <img style={{width:'170px'}} src={vehicle.Image} alt="" />
                           
                           <p style={{margin:'20px'}}>{vehicle.name}</p>
                           <h3 style={{margin:'20px',marginLeft:'20px'}}>{vehicle.seatNumbers}</h3>
                           <h3 style={{margin:'20px',marginLeft:'20px'}}>${vehicle.amount2}</h3>
                           
                             </div>

                             <div className='ordered-vehicle' style={{display:'flex',margin:'15px'}}>
                                   <img style={{width:'170px'}} src={vehicle.Image} alt="" />
                           
                           <p style={{margin:'20px'}}>{vehicle.name}</p>
                           <h3 style={{margin:'20px',marginLeft:'20px'}}>{vehicle.seatNumbers}</h3>
                           <h3 style={{margin:'20px',marginLeft:'20px'}}>${vehicle.amount3}</h3>
                           
                             </div>
                              </div>
                         }

                       </div>
                    </div>
                </div>
                <div className='right-section'>
                     <img src={googleImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SearchSection;