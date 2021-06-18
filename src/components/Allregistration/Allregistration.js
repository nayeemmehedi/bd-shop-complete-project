import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tablebody from './Tablebody';

const Allregistration = () => {

    const [design1, setdesign1] = useState([]);


  useEffect(() => {

      fetch(`http://localhost:4540/registrationAll/`)

          .then(res => res.json())
          .then(data => setdesign1(data))

  }, []);




    return (
        <div>

            <div className="row">
                <div className="container col-3 mt-5 ">

                    <div style={{ border: '1px solid black', height: '700px' }} className="container">
                        <h2>BD shop ADMIN pannel</h2>

                        <Link to="/allregistration"> <h4>REGISTRATION</h4></Link>
                        <Link to="/allevent"> <h4>EVENT</h4></Link>



                    </div>


                </div>




                <div className="col-9">

                    <div class='container mt-5'>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Registrating date</th>
                                    <th scope="col">LiST</th>
                                    <th scope="col">DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                {

                                    design1.map(data=>

                                        <Tablebody newdata={data} key={data._id}></Tablebody>
                                        
                                        )
                                }
                                
                            </tbody>
                        </table>





                    </div>











                </div>
            </div>





        </div>
    );
};

export default Allregistration;