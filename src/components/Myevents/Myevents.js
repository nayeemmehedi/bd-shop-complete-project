import React, { useEffect, useState } from 'react';
import Myeventdesign from './Myeventdesign';

const Myevents = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    const [design, setdesign] = useState([]);


    useEffect(() => {

        fetch(`http://localhost:4540/registrationAll/${user.email}`)

            .then(res => res.json())
            .then(data => setdesign(data))

    }, []);


    





    return (
        <div className='container'>

            <h1>Event <span style={{color:'red'}}>page</span> </h1><h5>All your ordered items added here...</h5>

             

            <div className='row'>


                {
                    design.map(data => <Myeventdesign newdata={data} key={data._id}></Myeventdesign>)

                }


            </div>

        </div>
    );
};

export default Myevents;