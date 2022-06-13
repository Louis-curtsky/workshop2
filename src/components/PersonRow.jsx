export const PersonRow = props => (
    <tr key={props.id}>
      <td>{props.id}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.title}</td>
    </tr>
  );