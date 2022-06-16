import {Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const DetailCard =({item})=>{
    return(
    <div>
    <Card>
    <Card.Header>{item.id}</Card.Header>
    <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
    With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </div>
);}
export default DetailCard;
