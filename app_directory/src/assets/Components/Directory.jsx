import React, { useState } from 'react';
import './Directory.css';

function App() {
  const [persons, setPersons] = useState(['']);
  const [name, setName] = useState(['']);
  const [dob, setDob] = useState(['']);
  const [aadhar, setAadhar] = useState(['']);
  const [mobile, setMobile] = useState(['']);
  const [age, setAge] = useState(['']);

  const handleSubmit = (event) => {
    event.preventDefault();
    const person = {
      name,
      dob,
      aadhar,
      mobile,
      age
    };
    setPersons([...persons, person]);
    localStorage.setItem('persons', JSON.stringify(persons));
  };

  const handleDelete = (index) => {
    const updatedPersons = persons.filter((person, i) => i !== index);
    setPersons(updatedPersons);
    localStorage.setItem('persons', JSON.stringify(updatedPersons));
  };

  const handleAddRow = () => {
    const row = {
      name: '',
      dob: '',
      aadhar: '',
      mobile: '',
      age: ''
    };
    setPersons([...persons, row]);
  };

  return (
    <div className="App">
      <div className="tab-container">
        <div className="tab-header">
          <button className="tab-button" onClick={() => openTab('add-person')}>
            Add New Person
          </button>
          <button className="tab-button" onClick={() => openTab('retrieve-info')}>
            Retrieve Information
          </button>
        </div>
        <div className="tab-content" id="add-person">
          <table id="person-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Aadhar Number</th>
                <th>Mobile Number</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="table-body">
              {persons.map((person, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={person.name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={person.dob}
                      onChange={(event) =>
                        setDob(event.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={person.aadhar}
                      onChange={(event) =>
                        setAadhar(event.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={person.mobile}
                      onChange={(event) =>
                        setMobile(event.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={person.age}
                      readOnly
                    />
                  </td>
                  <td>
                    <button onClick={() => handleSave(index)}>Save</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button id="add-row-button" onClick={handleAddRow}>
            Add New Row
          </button>
        </div>
        {/* { <div className="tab-content" id="retrieve-info"></div> }  */}
          
          
          
         
      </div>
    </div>
  );
}

export default App;
