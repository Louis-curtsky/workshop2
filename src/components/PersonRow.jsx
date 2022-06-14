import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export const PersonRow = props => (
    <tr key={props.id}>
      <td>{props.id}</td>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.email}</td>
      <td>
        <Button variant="primary">Details</Button>
        {' '}
        <Button variant="danger">Delete</Button>
        {' '}       
        <Button variant="warning">Edit</Button>
      </td>
    </tr>
  );