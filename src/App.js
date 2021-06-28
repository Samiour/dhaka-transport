import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import Header from './component/Header/Header';
import Destination from './component/Destination/Destination';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import SearchSection from './component/SearchSection/SearchSection';
import Blog from './component/Blog/Blog';
import createdData from '../src/fakeData/MOCK_DATA (3).json';


export const UserContext=createContext();
export const VehicleContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  const [vehicle,setVehicle]=useState({});

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
       <VehicleContext.Provider value={[vehicle,setVehicle] }>
      
   
    <Router>
    <Header></Header>
       <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
          <Home></Home>
          </Route>

          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute  path="/destination">
              <Destination></Destination>
          </PrivateRoute>

          <PrivateRoute  path="/searchSection">
              <SearchSection></SearchSection>
          </PrivateRoute>

        {/* <Route path="/searchSection">
        <SearchSection></SearchSection>
          </Route> */}

          <PrivateRoute  path="/blog">
              <Blog></Blog>
          </PrivateRoute>

        </Switch>
      
    </Router>
    </VehicleContext.Provider>
    </UserContext.Provider>
    
  );
}

export default App;
