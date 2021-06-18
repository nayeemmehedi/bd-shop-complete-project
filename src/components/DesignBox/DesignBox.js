 import React from 'react';
import { Link } from 'react-router-dom';
 
 const DesignBox = ({newdata}) => {

    const {_id,name,img,price} =newdata





     return (
         <div className ="col-md-4 h-55">
             
                
                 <Link to={`/registration/${_id}`}>

                 
                 <img  className="img-fluid img-thumbnail img-responsive" src={img}  alt="o no"/>

                
                 <h2>Name : {name}</h2>
                 
                 <h3 style ={{color:'red'}}>price: {price} </h3>



                 <br /> <br />
                 
                 
                 </Link>

            
             
            
             
         </div>
     );
 };
 
 export default DesignBox;