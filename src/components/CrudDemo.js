import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { SubmitPerson } from '../components/SubmitPerson';
import {PersonRow} from '../components/PersonRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/CruDemo.css'

export const CrudDemo = () => {

const [persons, setPerson] = useState([]);

const getPersons = async () => {
return await axios.get('https://localhost:44342/People').then(res => res);
};

useEffect(()=> {
    getPersons().then(res => setPerson(res.data));
});

return (
<>
<div className="card">
<div className="card-Header">
  <div className="card-body">
  <h3>
    People List 2022
    <p>
    </p>
  </h3>
      <SubmitPerson className='form' />
      <table>
        <thead>
          <tr>
          <th>Id</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, idx) => (           
             <PersonRow key={idx}{...person}/>
          ))}
        </tbody>
      </table>
    </div>
</div>
    </div>
    </>
)}; 
export default CrudDemo;
