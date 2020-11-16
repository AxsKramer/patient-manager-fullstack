import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Patients from '../components/Patients';
import NewAppointment from '../components/NewAppointment';
import Appointment from '../components/Appointment';

const App = () => {

  const [appointments, setApointments] = useState([]);
  const [consult, setConsult] = useState(true);

  useEffect(() => {
    const getDataFromAPI = () => {
      axios.get('http://localhost:4000/patients')
        .then(response => setApointments(response.data))
        .catch(error => console.log(error.message));
    }
    if(consult){
      getDataFromAPI();
      setConsult(false);
    }
  }, [consult]);

  return ( 
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => <Patients appointments={appointments} />} />
        <Route exact path='/new-appointment' component={() => <NewAppointment setConsult={setConsult} />} />
        <Route exact path='/appointment/:id' render={(props) => {
          const appointment = appointments.filter(appoint => appoint._id === props.match.params.id)
          return <Appointment appointment={appointment[0]} setConsult={setConsult} />
        }} />
      </Switch>
    </BrowserRouter>
  );
}
 
export default App;
