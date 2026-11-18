
import { useState } from 'react';
import Student from './components/Student';
import SubjectMarks from './components/SubjectMarks';
import './App.css';

function App() {

  // Store marks of five subjects
  const [marks, setMarks] = useState([0, 0, 0, 0, 0]);

  // Subject names
  const subjects = [
    "English",
    "Maths",
    "Science",
    "Computer",
    "Physics"
  ];

  // Update marks
  function updateMarks(index, value) {
    const updatedMarks = [...marks];
    updatedMarks[index] = value;
    setMarks(updatedMarks);
  }

  // Calculate total
  const total = marks.reduce(
    (sum, mark) => sum + Number(mark), 0
  );

  // Calculate percentage
  const percentage = total / 5;

  // Check Pass or Fail (minimum 35 in every subject)
  const result = marks.every(
    (mark) => Number(mark) >= 35
  ) ? "PASS" : "FAIL";

  return (
    <div className="container">

      <h1>Student Examination Result</h1>

      {/* Student component */}
      <Student
        name="Rahul"
        roll="101"
        department="Computer"
      />

      <h2>Enter Subject Marks</h2>

      {/* Display five subjects */}
      {subjects.map((subject, index) => (
        <SubjectMarks
          key={index}
          subject={subject}
          marks={marks[index]}
          onChange={(value) => updateMarks(index, value)}
        />
      ))}

      <h2>Examination Result</h2>

      <div className="result">
        <p>Total Marks: {total} / 500</p>
        <p>Percentage: {percentage}%</p>
        <h2>Result: {result}</h2>
      </div>

    </div>
  );
}

export default App;
