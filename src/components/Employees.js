import { useState } from "react";
import "./Employees.css";

const Employees = ({ addEmployee, removeEmployee, employees }) => {
  const emptyEmployee = {
    name: "",
    surname: "",
    gender: "",
    id: "",
  };

  const [newEmployee, setNewEmployee] = useState(emptyEmployee);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newEmployee.name && newEmployee.surname && newEmployee.gender) {
      addEmployee(newEmployee.name, newEmployee.surname, newEmployee.gender);
      setNewEmployee(emptyEmployee);

      const radioButtons = document.querySelectorAll('input[type="radio"]');
      radioButtons.forEach((btn) => (btn.checked = false));
    } else {
      window.alert("Vyplňte všechny položky formuláře.");
    }
  };

  const formChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  return (
    <div className="employees-container">
      <div className="employees-list">
        <ul>
          {employees.map((oneEmployee) => {
            return (
              <li key={oneEmployee.id}>
                {oneEmployee.name} {oneEmployee.surname} - {oneEmployee.gender} <span className="remove-button" onClick={()=>removeEmployee(oneEmployee.id)}>X</span>
              </li>
            );
          })}
        </ul>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="inputs-container">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={formChange}
            value={newEmployee.name}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            onChange={formChange}
            value={newEmployee.surname}
          />
          <div onChange={formChange}>
            <label>
              <input type="radio" name="gender" value="MEN" /> MEN
            </label>
            <label>
              <input type="radio" name="gender" value="WOMEN" /> WOMEN
            </label>
          </div>
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default Employees;
