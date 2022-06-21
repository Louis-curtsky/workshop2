import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import '../components/UpdatePerson.css';

const UpdatePerson =_=>{
    const { state } = useLocation();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit=(e)=> {
        e.preventDefault();
        
        const { firstName, lastName, email, title } = inputs;
        const body = { 
            firstName, lastName, email, title };
        // const json = JSON.stringify(body);

        const putId = state.DATA.id;
            console.log(body);

        const res= async body => {console.log(body); return await axios.put('https://localhost:44342/People', body).then(res => res);}
    } // End of handleSubmit
return(
    <div>
        <h4>Edit Person</h4><hr/>
    <form onSubmit={handleSubmit}>
    <label><h4>ID</h4>
      <input 
        type="number" 
        name="id" 
        value={state.DATA.id} 
        disabled={true}
        onChange={handleChange}
      ></input>
      </label>
      <label><h4>First Name</h4>
      <input 
        type="text" 
        name="firstName" 
        defaultValue={state.DATA.firstName}  
        onChange={handleChange}
      ></input>
      </label>

      <label><h4>Last Name</h4>
      <input 
        type="text" 
        name="lastName" 
        defaultValue={state.DATA.lastName} 
        onChange={handleChange}
      ></input>
      </label>     

      <label><h4>Email</h4>
        <input 
          type="text" 
          name="email" 
          defaultValue={state.DATA.email} 
          onChange={handleChange}
        ></input>

        </label>
        <label><h4>Title</h4>
        <input 
          type="text" 
          name="title" 
          defaultValue={state.DATA.title} 
          onChange={handleChange}
        ></input>
        </label>
        <input type="submit" />
    </form>
    </div>
)}

export default UpdatePerson;