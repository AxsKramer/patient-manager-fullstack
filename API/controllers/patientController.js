const Patient = require('../models/Patient');

const newClient = async (req, res, next) => {

  const patient = new Patient(req.body);

  try{
    await patient.save();
    res.json({message: 'The client was added successfully'});
  }
  catch(error){
    console.log(error);
    next();
  }
}

const getClients = async (req, res, next) => {

  try{
    const patients = await Patient.find({});
    res.json(patients);
  }
  catch(error){
    console.log(error);
    next();
  }
}

const getClientById = async (req, res, next) => {

  try{
    const patient = await Patient.findById(req.params.id);
    res.json(patient);
  }
  catch(error){
    console.log(error);
    next();
  }
}

const updateClient = async (req, res, next) => {
  try{
    const patient = await Patient.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
    res.json(patient);
  }
  catch(error){
    console.log(error);
    next();
  }
}

const deleteClient = async (req, res, next) => {
  try{
    await Patient.findByIdAndDelete({_id: req.params.id});
    res.json({message: 'The client was deleted successfully' })
  }
  catch(error){
    console.log(error);
    next();
  }
}

module.exports = {
  newClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient
}