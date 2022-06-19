import {Button} from "react-bootstrap";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import OpenPortal from "./OpenPortal";
import {useNavigate} from 'react-router-dom';


export const PersonRow = (props) => {
  const navigate = useNavigate();
  const [data, setPerson] = useState(props);
  const clickDetailHandle = (item) => {
    setOpen(true);
    setPerson(item);
    console.log(data);
  };
  const clickDelete = (item) => {
    setPerson(item);
    const url= 'https://localhost:44342/People/'+item.id;
    axios.delete(url).then(() => Element.innerHTML = 'item Deleted');
  };
  const [open, setOpen] = useState();
  const clickEdit = (item) => {
    setPerson(item);

    console.log('Update:'+data.id
    +data.firstName
    +data.lastName
    +data.email
    );
    navigate('/update/', {replace: true,
      state: { DATA: data },
    });
  }
  return(
   <>
      <tr>
      <td>{props.id}</td>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.email}</td>
      <td>
        <Button variant="primary"
        type="button"
        onClick={(e) => clickDetailHandle(props)}
        >Details
        {open && <OpenPortal {...data}/>}
        </Button>
        {' '}
        
        <Button variant="danger"
        type="button"
        onClick={(e)=>clickDelete(props)} 
        >Delete</Button>
        {' '}       
        <Button variant="warning"
        type="button"
        onClick={(e)=>clickEdit(props)}         
        >Edit</Button>
      </td>
      </tr>
      </>
)}
export default PersonRow;