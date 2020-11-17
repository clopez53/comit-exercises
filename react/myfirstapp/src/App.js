import logo from './logo.svg';
import './App.css';
import Student from "./Student";

const App = () => {
  const students = [{name:"Tom", age: 23, city: "Winnipeg"}, 
                    {name: "Dick", age: 29, city: "Winnipeg"}, 
                    {name: "Harry", age: 28, city: "Winnipeg"},
                    {name: "Diane", age: 24, city: "Winnipeg"},
                    {name: "Elena", age: 26, city: "Winnipeg"}];

  const student = {
    name: "Sandra Bullock",
    age: 48,
    migratedToCanada: 1998
  };

  const currentYear = new Date().getFullYear();
  const isBornInCanada = currentYear - student.age >= student.migratedToCanada;
  
  return (
    <div className="App">
      <div style={{color:'cyan', textAlign:'center'}}>
      <h3>Sandra Bullock</h3>

      <div>Name: {student.name}</div>
      <div>Age: {student.age}</div>
      <div>Migrated to Canada: {student.migratedToCanada}</div>
      <div>Is Born in Canada: {isBornInCanada ? "YES" : "NO"}</div>
      <div>Is Born in Canada: {isBornInCanada.toString()}</div>
      {/* {students.map(student => 
            <div>
              <div>Name: {student.name}</div>
              <div>Age: {student.age}</div>
              <div>City: {student.city}</div>
            </div>
      )} */}
      {students.map(student => 
          <Student stud={student} isTest={true} />
      )}
      </div>
    </div>
  );
}

export default App;
