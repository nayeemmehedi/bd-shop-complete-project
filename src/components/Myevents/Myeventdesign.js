import React from 'react';
import { useHistory } from 'react-router';


const Myeventdesign = ({ newdata }) => {

    const history = useHistory()

    const handleclick = () => {

        fetch(`http://localhost:4540/delete/${newdata._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('successfully deleted')
                history.replace('/')

            })





    }



    return (
        
           

            <div className="container col-md-4">

                <br />


                <div className="card h-70">
                    <img className="card-img-top img-fluid img-thumbnail img-responsive" src={newdata.img} alt="Card cap" />

                    <div className="card-body">

                        <p className="card-text">{newdata.eventDescription}</p>

                        <h4>{newdata.eventName}</h4>

                        <h3>price : {newdata.price}</h3>
                        

                        <button onClick={handleclick} type="submit">delete</button>

                    </div>
                </div>


           


        </div>
    );
};

export default Myeventdesign;