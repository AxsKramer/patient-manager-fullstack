import React, {Fragment, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';

const NewAppointment = (props) => {

  const [appointment, setAppointment] = useState({
    name: '',
    owner: '',
    phone: '',
    date: '',
    hour: '',
    symptoms: ''
  });

  const updateState = e => setAppointment({...appointment, [e.target.name]: e.target.value});

  const createNewAppointment = e => {
    e.preventDefault();

    axios.post('http://localhost:4000/patients', appointment)
      .then(response => {
        console.log(response);
        props.setConsult(true);
        props.history.push('/');
      })
      .catch(error => console.log(error));

  }

  return ( 
    <Fragment>
      <h1 className='my-5'>Create New Appointment</h1>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={'/'} className='btn btn-success text-uppercase py-2 px-5 font-weight-bold'>Come back</Link>
          </div>
          <div className="col-md-8 mx-auto">
            <form onSubmit={createNewAppointment} className="bg-white p-5 bordered">
              <div className="form-group">
                <label htmlFor="name">Pet:</label>
                <input
                  onChange={updateState} 
                  type="text" 
                  className="form-control form-control-lg" 
                  id="name" 
                  name="name" 
                  placeholder="Pet's name" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="owner">Owner:</label>
                <input
                  onChange={updateState} 
                  type="text" 
                  className="form-control form-control-lg" 
                  id="owner" 
                  name="owner" 
                  placeholder="Owner's Name" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  onChange={updateState} 
                  type="tel" 
                  className="form-control form-control-lg" 
                  id="phone" 
                  name="phone" 
                  placeholder="Phone Number" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                  onChange={updateState} 
                  type="date" 
                  className="form-control form-control-lg" 
                  id="date" 
                  name="date"  
                />
              </div>
              <div className="form-group">
                <label htmlFor="hour">Hour:</label>
                <input
                  onChange={updateState} 
                  type="time" 
                  className="form-control form-control-lg" 
                  id="hour" 
                  name="hour"  
                />
              </div>
              <div className="form-group">
                <label htmlFor="symptoms">Symptoms:</label>
                <textarea 
                  onChange={updateState} 
                  className="form-control" 
                  name="symptoms" 
                  rows="6"
                ></textarea>
              </div>
              <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Save"  />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
 
export default withRouter(NewAppointment);