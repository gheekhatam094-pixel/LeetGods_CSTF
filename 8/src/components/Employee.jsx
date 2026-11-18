
function Employee(props) {
  return (
    <div className="employee">
      <h3>{props.name}</h3>
      <p>Employee ID: {props.id}</p>
      <p>Designation: {props.designation}</p>
      <p>Department: {props.department}</p>
    </div>
  );
}

export default Employee;
