import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fakeData from '../../fakeData/MOCK_DATA (3).json';
import VehicleInfo from '../VehicleInfo/VehicleInfo';



const Vehicle = () => {


    const [vehicles,setVehicles]=useState(fakeData);
     

    return (
        <div style={{display:'flex',margin:"150px"}}>
            {
               
                vehicles.map(vehicle=> <VehicleInfo  vehicle={vehicle}></VehicleInfo>)
            }
          
        </div>
    );
};

export default Vehicle;