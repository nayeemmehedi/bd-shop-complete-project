import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Allevent = () => {
    const history = useHistory();

    const [event, setevent] = useState({});

    const handlesubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:4540/addlastEvent`, {
            method: "POST",
            body: JSON.stringify(event),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                alert("successfully added");
                history.replace("/");
            });
    };

    const handleblur = (e) => {
        const newEvent = { ...event };
        newEvent[e.target.name] = e.target.value;
        setevent(newEvent);
    };

    return (
        <div>
            <div className="row">
                <div className="container col-3 mt-5 ">
                    <div
                        style={{ border: "1px solid black", height: "700px" }}
                        className="container"
                    >
                        <h2>BD shop ADMIN pannel</h2>

                        <Link to="/allregistration">
                            {" "}
                            <h4>REGISTRATION</h4>
                        </Link>
                        <Link to="/allevent">
                            {" "}
                            <h4>EVENT</h4>
                        </Link>
                    </div>
                </div>

                <div className="col-9">
                    <div className="container mt-5">

                        <h1>Add your Iteam...</h1>



                

                        <form onSubmit={handlesubmit} action="">
                            
                            <input
                                required
                                onBlur={handleblur}
                                type="text"
                                name="name"
                                id=""
                                placeholder="Event name"
                            />{" "}
                            
                            <input 
                                required
                                onBlur={handleblur}
                                type="text"
                                name="img"
                                id=""
                                placeholder="Event img"
                            />{" "}
                           <br />
                            <input
                                required
                                onBlur={handleblur}
                                type="text"
                                name="description"
                                id=""
                                placeholder="Event description"
                            />{" "}
                            
                            <input
                                required
                                onBlur={handleblur}
                                type="text"
                                name="price"
                                id=""
                                placeholder="Event price: 1-1000"
                            />
                            <button type="submit">Add event</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allevent;
