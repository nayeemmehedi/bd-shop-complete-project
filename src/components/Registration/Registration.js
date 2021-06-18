import React, { useEffect, useState } from 'react';
import {useHistory, useParams } from 'react-router';

const Registration = () => {

    const history = useHistory()

    const user = JSON.parse(localStorage.getItem('user'))

    const [event, setEvent] = useState({})
    
    console.log(user)

    const { id } = useParams()

    const [registration,setregistration] = useState({
        userName :user.name,
        userEmail: user.email,
       
       
    })

   




    useEffect(() => {

        fetch(`http://localhost:4540/event/${id}`)
            .then(res => res.json())
            .then(data =>{

                setEvent(data)

            const newRegistration = {...registration}

            newRegistration.eventName=data.name
            newRegistration.eventDescription = data.description 
            newRegistration.img  = data.img
            newRegistration.price =data.price
           

            setregistration(newRegistration)


               



            } 



            )

    }, []);






    const dateChange = (e) => {

        

        const newRegistration = {...registration}

        newRegistration.date = e.target.value
        
        setregistration(newRegistration)
    }




    const submitRegistration = (e) => {
        e.preventDefault()
        
        if(registration.date){




            fetch(`http://localhost:4540/addRegistration`,{

                method: 'POST',
                body: JSON.stringify(registration),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
    
            })
            .then(response => response.json())
            .then(data => 

                history.replace('/')
            
            
            
            );
              
           
           






        }
        else{
            alert("date please")
        }

    }

   





    return (
        <div class='container '>

            <div className="d-flex justify-content-center">

                <form class='mt-5' onSubmit={submitRegistration}>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Full name</label>
                        <input type="text" className="form-control" id="exampleInput" placeholder="full name" value={event.name} />
                    </div>


                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={user.email} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">date</label>
                        <input type="date" onChange={dateChange} className="form-control" name="data" id="data" placeholder="Enter data" />


                    </div>

                    <div className="form-group">


                        <textarea name="description" id="" cols="30" rows="3" value={event.description}></textarea>


                    </div>


                    <button type="submit" className="btn btn-primary">Register</button>


                </form>



            </div>

        </div>
    );
};

export default Registration;