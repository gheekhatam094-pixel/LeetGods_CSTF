
function Student(props) {
  return (
    <div className="student">

      <h3>{props.name}</h3>

      <p>Roll Number: {props.roll}</p>

      <p>Department: {props.department}</p>

      <p>Email: {props.email}</p>

    </div>
  );
}

export default Student;
