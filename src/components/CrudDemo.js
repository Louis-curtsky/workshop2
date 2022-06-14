import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { SubmitPerson } from '../components/SubmitPerson';
import {PersonRow} from '../components/PersonRow';
import {Card, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Table striped condensed hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <PersonRow {...person} />
            ))}
        </tbody>
      </Table>
    </div>
</div>
    </div>
    </>
)}; 
export default CrudDemo;
