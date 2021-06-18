import React, { useEffect, useState } from 'react';
import DesignBox from '../DesignBox/DesignBox';


const Event = () => {

    

    const [logged,setLogged]= useState([])

     useEffect(() => {

        fetch('http://localhost:4540/event')
        .then(res=>res.json())
        .then(data=>

            

              setLogged(data)
            
            )
         
     }, []);
     

    return (
        <div className='container'>

            <div className='row'>
                


                {
                   logged.map(data => <DesignBox newdata={data} key ={data._id}></DesignBox>)

                }


            </div>



        </div>
    );
};

export default Event;