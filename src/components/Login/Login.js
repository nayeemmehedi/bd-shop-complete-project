import React from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import "../test/test.css"
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';





if (!firebase.apps.length) {
    
    firebase.initializeApp(firebaseConfig);

}

const Login = () => {


    let google_provider = new firebase.auth.GoogleAuthProvider();

   

    const history = useHistory()
    const location = useLocation()
    let {from} = location.state|| { from : {pathname: "/"}}

   

    const handleGoogle = () => {

       

    

        firebase.auth()
            .signInWithPopup(google_provider)
            .then((result) => {
                
                let user = result.user;
               
               
                const loggedInUser = {name : user.displayName, email : user.email , img : user.photoURL}
                console.log(loggedInUser)
               
                localStorage.setItem('user',JSON.stringify(loggedInUser))

                history.replace(from)
            
            }).catch((error) => {
               
                let errorMessage = error.message;
              
                console.log(errorMessage)
              
            });


    }




    return (

        

            // forgive me please
            <div className="laddu">

                <div className="guddu">
                    <h2>Login with</h2>

                    <button style={{ backgroundColor: "whitesmoke", borderRadius: '10px' }} className="btn-lg" onClick={handleGoogle}><i className="fab fa-google fa-2x"></i> <span> ... </span>  click me</button>
                    <br /> <br />

                   
                    <p>Don't have an account? <a href="https://www.google.com/">Create an account</a></p>


                </div>

            </div>



        



    )



};

export default Login;