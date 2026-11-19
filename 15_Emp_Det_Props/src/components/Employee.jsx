
function Employee(props) {
  return (
    <div className="card">

      <h2>Employee Details</h2>

      <p>Name: {props.name}</p>
      <p>Employee ID: {props.id}</p>
      <p>Designation: {props.designation}</p>
      <p>Salary: ₹{props.salary}</p>

    </div>
  );
}

export default Employee;
