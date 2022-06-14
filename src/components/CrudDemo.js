import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { SubmitPerson } from '../components/SubmitPerson';
import {PersonRow} from '../components/PersonRow';
import {Table} from "react-bootstrap";


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
<div>
  <p></p>
<div>
<h3>People List 2022</h3>
<p></p>

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
    </>
)}; 
export default CrudDemo;
