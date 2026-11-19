
function UserCard(props) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>

      <button onClick={props.onEdit}>
        Edit User
      </button>
    </div>
  );
}

export default UserCard;
