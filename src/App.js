import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Allevent from "./components/Allevent/Allevent";
import Allregistration from "./components/Allregistration/Allregistration";

import Header from "./components/Header";

import Login from "./components/Login/Login";
import Myevents from "./components/Myevents/Myevents";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Registration from "./components/Registration/Registration";





function App() {
    

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
           

            <Route exact path="/">
              <Header />
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/registration/:id">
              <Registration></Registration>
            </PrivateRoute>

            <PrivateRoute path="/myevent">

              <Myevents></Myevents>
             

            </PrivateRoute>

            <PrivateRoute path="/allregistration">

              <Allregistration></Allregistration>
             

            </PrivateRoute>

            <PrivateRoute path="/allevent">

              <Allevent></Allevent>
             

            </PrivateRoute>


          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
