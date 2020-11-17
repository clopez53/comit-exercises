import React from 'react';
import Student, { IStudent } from "./Student";
import './App.css';
import ProductComponent, {Product} from './Product';

function App() {

  const students : IStudent[] = [
  {
    name: "Sandra Bullock",
    age: 48,
    city: "Toronto"
  }, 
  {
    name: "Mark Wahlberg",
    age: 25,
  }];

  const products: Product[] = [{name: "Test Product", description: "test"}];

  return (
    <div className="App">
      <header className="App-header">
        {students.map(student => <Student name={student.name} age={student.age} />)}
        {products.map(product => <ProductComponent name={product.name} description={product.description} />)}
      </header>
    </div>
  );
}

export default App;
