
import { useState } from 'react';
import UserCard from './components/UserCard';
import './App.css';

function App() {

  // Store users
  const [users, setUsers] = useState([
    {
      name: "Rahul",
      email: "rahul@gmail.com",
      age: 21,
      city: "Pune"
    },
    {
      name: "Amit",
      email: "amit@gmail.com",
      age: 22,
      city: "Mumbai"
    }
  ]);

  // Input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  // Store the index of user being edited
  const [editIndex, setEditIndex] = useState(null);

  // Add or update user
  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
      age: age,
      city: city
    };

    if (editIndex === null) {
      // Add new user
      setUsers([...users, newUser]);
    } else {
      // Update existing user
      const updatedUsers = [...users];
      updatedUsers[editIndex] = newUser;
      setUsers(updatedUsers);
      setEditIndex(null);
    }

    // Clear input fields
    setName("");
    setEmail("");
    setAge("");
    setCity("");
  }

  // Edit user
  function editUser(index) {
    setName(users[index].name);
    setEmail(users[index].email);
    setAge(users[index].age);
    setCity(users[index].city);
    setEditIndex(index);
  }

  return (
    <div className="container">

      <h1>User Profile Management</h1>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Enter Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <input
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <button type="submit">
          {editIndex === null ? "Add User" : "Update User"}
        </button>

      </form>

      <h2>User Profiles</h2>

      <div className="user-list">

        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            age={user.age}
            city={user.city}
            onEdit={() => editUser(index)}
          />
        ))}

      </div>

    </div>
  );
}

export default App;
