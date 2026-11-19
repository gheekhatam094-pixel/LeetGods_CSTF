
import { useState } from 'react';
import Employee from './components/Employee';
import './App.css';

function App() {

  // Store employee data
  const [employees, setEmployees] = useState([
    {
      name: "Rahul",
      id: "101",
      designation: "Developer",
      department: "IT"
    },
    {
      name: "Amit",
      id: "102",
      designation: "Manager",
      department: "HR"
    }
  ]);

  // Input fields
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");

  // Add employee
  function addEmployee(e) {
    e.preventDefault();

    const newEmployee = {
      name: name,
      id: id,
      designation: designation,
      department: department
    };

    setEmployees([...employees, newEmployee]);

    setName("");
    setId("");
    setDesignation("");
    setDepartment("");
  }

  // Remove employee
  function removeEmployee(index) {
    const updatedEmployees = employees.filter(
      (employee, i) => i !== index
    );

    setEmployees(updatedEmployees);
  }

  return (
    <div className="container">

      <h1>Employee Directory</h1>

      <form onSubmit={addEmployee}>

        <input
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Enter Employee ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <input
          placeholder="Enter Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        />

        <input
          placeholder="Enter Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

        <button type="submit">Add Employee</button>

      </form>

      <h2>Employee List</h2>

      {employees.map((employee, index) => (
        <div key={index}>

          <Employee
            name={employee.name}
            id={employee.id}
            designation={employee.designation}
            department={employee.department}
          />

          <button onClick={() => removeEmployee(index)}>
            Remove
          </button>

        </div>
      ))}

    </div>
  );
}

export default App;
