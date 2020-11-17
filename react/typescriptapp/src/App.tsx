import React, {useState} from 'react';
import Student, { IStudent } from "./Student";
import './App.css';
import ProductComponent, {Product} from './Product';

interface IStudent {
  name: string;
  age: number;
  city: string;
  isAlive: boolean;
}

function App() {

  const [student, setStudent] = useState<IStudent>({name: '', age: 0, city:''});

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setStudent({...student, [event.target.name] : event.target.type === "number" ? Number(event.target.value) : event.target.type === "checkbox" ? event.target.checked : event.target.value });
  }

  // const handleAgeChange = (event : React.ChangeEvent<HTMLInputElement>) => {
  //   setStudent({...student, age: Number(event.target.value) });
  // }

  // const handleCityChange = (event : React.ChangeEvent<HTMLInputElement>) => {
  //   setStudent({...student, city: event.target.value});
  // }

  // const students : IStudent[] = [
  // {
  //   name: "Sandra Bullock",
  //   age: 48,
  //   city: "Toronto"
  // }, 
  // {
  //   name: "Mark Wahlberg",
  //   age: 25,
  // }];

  // const products: Product[] = [{name: "Test Product", description: "test"}];

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input type="text" value={student.name} onChange={handleChange} />
          <input type="text" value={student.age} onChange={handleChange} />
          <input type="text" value={student.city} onChange={handleChange} />
          <input type="checkbox" onChange={handleChange} />
        </form>

        <label>Student Name: {student.name}</label>
        <label>Student Age: {student.age}</label>
        <label>Student City: {student.city}</label>
        <label>Student is Alive: {student.isAlive}</label>

        {/* {students.map(student => <Student name={student.name} age={student.age} />)}
        {products.map(product => <ProductComponent name={product.name} description={product.description} />)} */}
      </header>
    </div>
  );
}

export default App;
