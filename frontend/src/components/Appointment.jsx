import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Appointment = (props) => {

  const deleteAppointment = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText:'Cancel'
    })
      .then((result) => {
        if (result.value) {
        // Alert deleted
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        // Delete in DB
        axios.delete(`http://localhost:4000/patients/${id}`)
          .then(response => {
            props.setConsult(true);
            props.history.push('/');
            console.log(response.data);
          })
          .catch(error => console.log(error))
        }
      })
  }
  const {appointment} = props;

  return ( 
    <Fragment>
      <h1 className='my-5'>Appointment: {appointment.name}</h1>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={'/'} className='btn btn-success text-uppercase py-2 px-5 font-weight-bold'>Come back</Link>
          </div>
          <div className="col-md-8 mx-auto">
            <div className="list-group">
              <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                <div className="d-flex w-100 justify-content-between mb-4">
                  <h3 className='mb-3'>{appointment.name}</h3>
                  <small className='fecha-alta'>{appointment.date} - {appointment.hour}</small>
                </div>
                <p className='mb-0'>{appointment.symptoms}</p>
                <div className="contacto py-3">
                  <p>Owner: {appointment.owner}</p>
                  <p>Phone Number: {appointment.phone}</p>
                </div>
                <div className='d-flex'>
                  <button 
                    onClick={() => deleteAppointment(appointment._id) } 
                    type='button' 
                    className='btn btn-danger col text-uppercase py-2 px-5 font-weight-bold'
                  > Delete &times;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
 
export default withRouter(Appointment);