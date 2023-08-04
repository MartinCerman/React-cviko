import { useRef, useState } from "react";
import Employees from "./components/Employees";
import Task from "./components/Task";

const App = () => {
  const [activeButton, setActiveButton] = useState("list");
  const [employees, setEmployees] = useState([]);
  const menTotal = useRef(0);
  const womenTotal = useRef(0);

  const setActive = (e) => {
    document.querySelector(`button[name="${activeButton}"]`).classList.remove("active-button");
    setActiveButton(e.target.name);
    document.querySelector(`button[name="${e.target.name}"]`).classList.add("active-button");
  };

  const addEmployee = (name, surname, gender) => {
    setEmployees([
      ...employees,
      { name, surname, gender, id: new Date().getTime() },
    ]);

    if (gender === "MEN") {
      menTotal.current++;
    } else {
      womenTotal.current++;
    }
  };

  const removeEmployee = (id) => {
    const tempEmployees = employees.filter((oneEmployee) => {
      if(oneEmployee.id === id){
        if (oneEmployee.gender === "MEN") {
          menTotal.current--;
        } else {
          womenTotal.current--;
        }
        return false;
      }
      return true;
    });
    setEmployees(tempEmployees);
  };

  return (
    <div className="app-container">
      <div className="top-menu">
        <button className="active-button" name="list" onClick={setActive}>
          List of Employees
        </button>
        <button name="task" onClick={setActive}>
          Task
        </button>
      </div>
      {activeButton === "list" ? (
        <Employees
          addEmployee={addEmployee}
          removeEmployee={removeEmployee}
          employees={employees}
        />
      ) : (
        <Task menTotal={menTotal.current} womenTotal={womenTotal.current} />
      )}
    </div>
  );
};

export default App;
