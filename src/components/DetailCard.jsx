
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/DetailCard.css';
export const DetailCard =(item)=>{
    return(
    <div>
      <h2>Person Detail</h2>
      <hr/>
      <style>
        {"table{border:1px solid black; border-collapse: collapse; width: 100%"}
      </style>
      <style>
      {"th, td {text-align: left;padding: 8px;}"}
      </style>
      <style>
      {"tr:nth-child(even){background-color: #f2f2f2}"}
      </style>
      <style>
        {"th {background-color: #042baa;color: white;}"}
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
</tbody>
    {/* <Button variant="primary">Close</Button> */}
</table>
   </div>
);}
export default DetailCard;
