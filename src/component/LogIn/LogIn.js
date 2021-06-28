import React, { useState } from 'react';
import '../LogIn/LogIn.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { UserContext, VehicleContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

library.add(fab, faCheckSquare, faCoffee)

firebase.initializeApp(firebaseConfig);


const LogIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    
    const [user,setUser]=useState({
      email:'',
     name:'',
    photo:'',
    isSignedIn:false,
    password:'',
    error:'',
    success:false
    })

    const [loggedInUser,setLoggedInUser]=useContext(UserContext);

    const [newUser,setNewUser]=useState(false);

    const [vehicle,setVehicle]=useContext(VehicleContext);
    console.log(vehicle);
    
    const history=useHistory();
    const location=useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
       const handleGoogleSignIn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
      
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          setUser(user);
          setLoggedInUser(user);
          history.replace(from);
          // ...
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });


        }


        const handleBlur=(e)=>{
            
            let isFieldValid;
            if(e.target.name==='name'){
              isFieldValid=true;
               
            }
            if(e.target.name==='email'){
                 isFieldValid=/\S+@\S+\.\S+/.test(e.target.value);
            }

            if(e.target.name==='password'){
                let isPasswordValid=e.target.value.length>4;
                let passwordHasNumber=/\d{1}/.test(e.target.value);
                isFieldValid=isPasswordValid&&passwordHasNumber;
            }

            if(isFieldValid){
                const newUserInfo={...user};
                newUserInfo[e.target.name]=e.target.value;
                setUser(newUserInfo);
                console.log(user.displayName);
            }
        }
 
        const handleSubmit=(e)=>{
            
        
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res=> {
            console.log(res);
                const newUserInfo={...user};
                newUserInfo.error='';
                newUserInfo.success=true;
                setUser(newUserInfo);
                updateUserName(user.name);
                console.log(user.name);
    })
    .catch(error => {

      var errorCode = error.code;
      var errorMessage = error.message;
      const newUserInfo={...user};
      newUserInfo.error=errorMessage;
      newUserInfo.success=false;
      setUser(newUserInfo);
      console.log(user.name);
      console.log(newUserInfo);
      
    });  
}
if(!newUser && user.email && user.password){
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(res => {
    // Signed in
    console.log(res);
    const newUserInfo={...user};
      newUserInfo.error='';
      newUserInfo.success=true;
      setUser(newUserInfo);
      setLoggedInUser(newUserInfo);
      history.replace(from);
      console.log('sign in user info ',res.user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    const newUserInfo={...user};
    newUserInfo.error=errorMessage;
    newUserInfo.success=false;
    setUser(newUserInfo);
    
  });
}
e.preventDefault(); 
}


const updateUserName=(name)=>{

    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      
    })
    .then(res => {
      // Update successful
      // ...
      console.log('User Name updated Successfully');
      
    })
    .catch(error => {
      // An error occurred
      // ...
      console.log(error);
    });

  }
       

    return (
        
     <div style={{textAlign:'center'}}>
        
         {
             newUser ? <h2 style={{textAlign:'center'}}>create account</h2> :
             <h2 style={{textAlign:'center'}}>Welcome</h2>
         }
         
         <div style={{textAlign:'center'}}>

         <input type="checkbox" name="newUser" id="" onChange={()=>setNewUser(!newUser)} />
      <label htmlFor="newUser">New User SignUp</label>

         </div>

         <form onSubmit={handleSubmit} className='input-form'>
             <div className='input-area'>

              <div className='inputField'>
              {
                  newUser &&  <input type="text" name='name' onBlur={handleBlur} placeholder="your name" />
              }
             
              </div>

            
             <div className='inputField'>
                 <input type="email" name='email' placeholder='Enter Your Email Address' required onBlur={handleBlur}/>
             </div>

             <div className='inputField'>
                 <input type="password" name='password' placeholder='Enter Your Password' required onBlur={handleBlur} />
             </div>

            <div className='create-account-button'>

            <input type="submit" value={newUser ? 'Sign Up' : "Sign In"} />
             
            
            </div>

            <p >Already have an account? Login</p>

            <div className='google-signin-section'>
            <button onClick={handleGoogleSignIn}><FontAwesomeIcon icon={['fab', 'google']} /> SignIn with Google</button>
            </div>

             </div>
           
         </form>
        <div style={{textAlign:'center'}}>
        <h2 style={{color:'red'}}>{user.error}</h2>
      {
        user.success &&  <h2 style={{color:'green'}}>user {newUser ?'created':"Logged In"} successfully</h2>
      }

        </div>
         
     </div>
     
      
    );
};

export default LogIn;