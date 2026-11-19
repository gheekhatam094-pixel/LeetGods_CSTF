
function Student(props) {
  return (
    <div className="card">

      <h2>Student Profile</h2>

      <p>Name: {props.name}</p>
      <p>Roll Number: {props.roll}</p>
      <p>Department: {props.department}</p>
      <p>College: {props.college}</p>

    </div>
  );
}

export default Student;
