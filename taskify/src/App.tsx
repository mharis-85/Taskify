import React,{useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import  InputField  from './components/InputField';

// let name:string;
// let role:[number, string]; //tuple

// type Person={
//   name:string;
//   age?:number
// }

// let person:Person={
//   name:'Haris'
// }

// let peoples:Person[]; //array of obj

//let printName:(name:string)=>void;

  
const App:React.FC=()=> {

  const [todo, setTodo]=useState<string>('');
  console.log(todo);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
