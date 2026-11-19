
function SubjectMarks(props) {
  return (
    <div>
      <label>{props.subject}: </label>

      <input
        type="number"
        min="0"
        max="100"
        value={props.marks}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}

export default SubjectMarks;
