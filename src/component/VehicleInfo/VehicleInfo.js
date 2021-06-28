import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext, VehicleContext } from '../../App';
import '../VehicleInfo/VehicleInfo.css';



const VehicleInfo = (props) => {
    let history = useHistory();
    let location = useLocation();
    
  
    let { from } = location.state || { from: { pathname: "/" } };
    const [vehicle,setVehicle]=useContext(VehicleContext);

    const {Image,name}=props.vehicle;

   

    const handleSelection=(name)=>{
        
        if(props.vehicle.name===name){
            console.log(props.vehicle.name);
            console.log(props.vehicle);

          setVehicle(props.vehicle);
         
        }
        // history.replace(from);
        <Link to="/searchSection"></Link>
    }

    
   
    return (
        
        <div onClick={()=>handleSelection(name)}>
            <Link to="/searchSection">
           <div className='vehicle-container'>
            <img src={Image} alt="" />
           <h3>{name}</h3>

            </div>
            </Link>
            
        </div>
    );
};

export default VehicleInfo;