
import Student from './components/Student';
import './App.css';

function App() {
  return (
    <div>

      <h1>Student Information System</h1>

      <Student
        name="Karan"
        roll="101"
        department="Computer Science"
        college="ABC College"
      />

    </div>
  );
}

export default App;
