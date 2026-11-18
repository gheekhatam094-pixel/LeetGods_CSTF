
function Student(props) {
  return (
    <div className="student">
      <h2>Student Details</h2>
      <p>Name: {props.name}</p>
      <p>Roll Number: {props.roll}</p>
      <p>Department: {props.department}</p>
    </div>
  );
}

export default Student;
