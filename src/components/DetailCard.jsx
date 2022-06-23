import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/DetailCard.css';
import { useNavigate } from "react-router-dom";

export const DetailCard =(item)=>{
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate(`/crud/`);
  }
    return(
    <div>
      <h2>Person Detail</h2>
      <hr/>
      <style>
        {"table{border:1px solid black; border-collapse: collapse; width: 100%; font-size: 150%;"}
      </style>
      <style>
      {"th, td {text-align: left;padding: 8px;}"}
        {"th {background-color: #042baa;color: white;}"}
      {"tr:nth-child(even){background-color: #f2f2f2}"}
      </style>
    <table>
      <thead>
        <tr>
      <th>
      ID
    </th>
    <td>{item.id}</td>
    </tr>
    <tr>
      <th></th>
      <td></td>
    </tr>
</thead>
<tbody>
  <tr>
<th>Name</th>
<td>{item.firstName} {item.lastName}</td>
  </tr>
  <tr>
<th>
  Email
</th>
<td>
  {item.email}
</td>
  </tr>
  <tr>
<th>
  Title
</th>
<td>
  {item.title}
</td>
  </tr>
</tbody>
    {/* <Button variant="primary">Close</Button> */}
</table>
<div>
  <div>
    <p> </p>
  </div>
<button className='styles.button'
 onClick={routeChange}
>Close</button>
</div>
   </div>
);}
export default DetailCard;
