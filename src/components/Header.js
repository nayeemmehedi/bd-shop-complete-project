import React from 'react';
import { Link } from 'react-router-dom';
import Event from './Event/Event';

const Header = () => {
    
    return (
        <div>

            <nav style={{ backgroundColor: 'gray' }} className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><span style={{ color: "red", fontWeight: 950 }}>SHOP</span>  BD</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <ul className="nav">
                            <li className="nav-item me-4">
                                <a className=" nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link active" href="/login">Login</a>
                            </li>

                            <li className="nav-item me-4">

                                <Link className="nav-link active" to="/myevent">Event </Link>

                            </li>
                            

                        </ul>


                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ">


                            
                            <li className="nav-item">
                                <Link className="nav-link active" to="/allregistration"><button type="button" className="btn btn-primary">ADMIN</button></Link>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>

            <div style={{ backgroundColor: '#cfcdbe' }}> <br /> <br /> <br />
                <div style={{ height: '60px', }}>
                    <h1 className='text-center'>Fresh and  <span style={{ color: 'red' }}> Delicious</span></h1>
                    <h5 className='text-center'>traditional italian food to delight the whole family...</h5> 
                    <div className='d-flex justify-content-center'> <br />


                        <input type="text" />
                        <button type="button" class="btn btn-secondary">click me</button>


                    </div>

                </div>
                <br /><br /> <br /> <br />

                <div>
                    <Event></Event>


                </div>
            </div>

        </div>
    );
};

export default Header;