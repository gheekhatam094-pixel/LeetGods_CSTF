
import Employee from './components/Employee';
import './App.css';

function App() {
  return (
    <div>

      <h1>Employee Management System</h1>

      <Employee
        name="Rahul"
        id="101"
        designation="Software Developer"
        salary="40000"
      />

      <Employee
        name="Amit"
        id="102"
        designation="Manager"
        salary="50000"
      />

      <Employee
        name="Karan"
        id="103"
        designation="Designer"
        salary="35000"
      />

    </div>
  );
}

export default App;
