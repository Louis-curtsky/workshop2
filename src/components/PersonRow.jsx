import {Button} from "react-bootstrap";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import OpenPortal from "./OpenPortal";

export const PersonRow = (props) => {

  const [data, setPerson] = useState(props);
  const clickDetailHandle = (item) => {

    console.log("Detail button pressed", item);
  };
  const clickDelete = (item) => {
    setPerson(item);
    const url= 'https://localhost:44342/People/'+item.id;
    axios.delete(url).then(() => Element.innerHTML = 'item Deleted');
  };
  const [open, setOpen] = useState();
  const clickEdit = (item) => {
    setOpen(true);
    setPerson(item);
    console.log(open);
    
  }
  return(
    <tr key={props.id}>
      <td>{props.id}</td>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.email}</td>
      <td>
        <Button variant="primary"
        type="button"
        onClick={(e) => clickDetailHandle(props)}
        >Details</Button>
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
         {open && <OpenPortal {...data}/>}
      </td>
    </tr>
    
)};
export default PersonRow;