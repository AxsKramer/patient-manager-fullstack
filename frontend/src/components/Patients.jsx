import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const Patients = ({appointments}) => {

  return ( 
    <Fragment>
      <h1 className="my-5">Patients Manager</h1>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={'/new-appointment'} className='btn btn-success text-uppercase py-2 px-5 font-weight-bold'>
              Create Appointment
            </Link>
          </div>
          <div className="col-md-8 mx-auto">
            <div className="list-group">
              {
                Object.keys(appointments).length !== 0
                  ? (appointments.map(appointment => (
                    <Link 
                      to= {`/appointment/${appointment._id}`}
                      key={appointment._id}
                      className='p-5 list-group-item list-group-item-action flex-column align-items-start'
                    >
                      <div className="d-flex w-100 justify-content-between mb-4">
                        <h3 className='mb-3'>{appointment.name}</h3>
                        <small className='fecha-alta'>{appointment.date} - {appointment.hour}</small>
                      </div>
                      <p className='mb-0'>{appointment.symptoms}</p>
                      <div className="contacto py-3">
                        <p>Owner: {appointment.owner}</p>
                        <p>Phone Number: {appointment.phone}</p>
                      </div>
                    </Link>
                  )))
                  : <h3 className='mb-3 text-center text-white'>No Appointments</h3>
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>  
  );
}
 
export default Patients;