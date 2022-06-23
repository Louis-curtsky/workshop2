import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import '../components/UpdatePerson.css';
import OpenPortal from './OpenPortal';

const UpdatePerson =_=>{
    const { state } = useLocation();
    const [inputs, setInputs] = useState({});
    const [open, setOpen] = useState();
    const [data, setPerson] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    } // end handleChange
 
  const handleSubmit=(e)=> 
  {
    e.preventDefault();
    setOpen(true);

      var {id, firstName, lastName, email, title} = state.DATA;
      var body = {id, firstName, lastName, email, title};

      // To fullfil API requirement
      var data=  {id, firstName, lastName, email, title};
      if (inputs.firstName!=null)
      data.firstName=inputs.firstName;
      if (inputs.lastName!=null)
      data.lastName=inputs.lastName;
      if (inputs.email!=null)
      data.email=inputs.email;
      if (inputs.title!=null)
      data.title=inputs.title;
      body = {
        id:state.DATA.id, 
        firstName: data.firstName, 
        lastName: data.lastName, 
        email: data.email, 
        title: data.title
      };
  
      // Can replace with Axios
      
  try{
        const response = fetch(`https://localhost:44342/People/`, {
              method: "put",
              headers: {
                    "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
              });
        
              if (!response.ok) {
                const message = 'Error with Status Code: ' + response.status;
                throw new Error(message);
              }
              const data = response.json();
              console.log(data);
            }
    catch (error)
    {
      console.log(data);
    }
    setPerson(data);
  } // End of handleSubmit
return(
    <div>
        <h4>Edit Person</h4><hr/>
    <form 

        onSubmit={handleSubmit}>
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
    <div>
    {open && <OpenPortal {...data}/>}
    </div>
    </div>
  );
}

export default UpdatePerson;