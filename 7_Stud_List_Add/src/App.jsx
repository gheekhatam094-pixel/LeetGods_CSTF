
import { useState } from 'react';
import Student from '../components/Student';
import './App.css';

function App() {

  const [students, setStudents] = useState([
    {
      name: "Rahul",
      roll: "101",
      department: "Computer",
      email: "rahul@gmail.com"
    },
    {
      name: "Amit",
      roll: "102",
      department: "IT",
      email: "amit@gmail.com"
    }
  ]);

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  function addStudent(e) {
    e.preventDefault();

    setStudents([...students, {
      name: name,
      roll: roll,
      department: department,
      email: email
    }]);

    setName("");
    setRoll("");
    setDepartment("");
    setEmail("");
  }

  return (
    <div>
      <h1>Student Management System</h1>

      <form onSubmit={addStudent}>

        <input
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Enter Roll Number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          required
        />

        <input
          placeholder="Enter Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

        <input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Add Student</button>

      </form>

      <h2>Student List</h2>

      {students.map((student, index) => (
        <Student
          key={index}
          name={student.name}
          roll={student.roll}
          department={student.department}
          email={student.email}
        />
      ))}

    </div>
  );
}

export default App;
