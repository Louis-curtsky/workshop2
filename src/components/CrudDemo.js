import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { SubmitPerson } from '../components/SubmitPerson';
import {PersonRow} from '../components/PersonRow';

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
        <h3>
        Crud Demo
        </h3>
        <hr/>
<div>
<h1>People List 2022</h1>
      <SubmitPerson className='form' />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <PersonRow {...person} />
          ))}
        </tbody>
      </table>
</div>
    </div>
    </>
)}; 
export default CrudDemo;
