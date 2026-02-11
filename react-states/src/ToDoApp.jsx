import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoApp() {
  // using unique id/key for list items & also objects in array
  const [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(),isDone:false }]);
  const [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(),isDone:false}];
    });
    setNewTodo(""); // emptying input box after adding a task
  };

  let updateNewToDoValue = (event) => {
    setNewTodo(event.target.value);
  };

  // deleting the task from the list
  let deleteTodo = (id) => {
    setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
    // console.log(prevTodo);
  };

  // uppercase all tasks in the list using map
  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      }),
    );
    console.log("alll task are upper cased");
  };

  // to uppercase single task 
  let UpperCaseOne=(id)=>{
             setTodos((prevTodos) =>
      prevTodos.map((todo) => {
    if(todo.id==id){
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      
    }else{
        return todo;
    }}),
  );
    // console.log("ab");
  }

  // is done for all
  let isDoneAll=()=>{
    setTodos((prevTodo)=>
    prevTodo.map((todo)=>{
        return{
            ...todo,isDone:!todo.isDone
        }
    })
    )
  }

  // to toggle isDone for single task
let isDoneOne=(id)=>{
    setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            if(todo.id==id){
            return {
                ...todo,isDone:!todo.isDone
            }
        }else{
            return todo;
        }}))
    console.log("this task is done");
}

  return (
    <div>
      <h1>To Do App</h1>
      <input
        placeholder="add a task"
        type="text"
        value={newTodo}
        onChange={updateNewToDoValue}
      />
      <br />
      <button onClick={addNewTask}>Add</button>
      <br />
      <br />
      <br />
      <br />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{textDecoration:todo.isDone?"line-through":"none"}}>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                     <button onClick={() => UpperCaseOne(todo.id)}>UpperCase Task</button>
                     <button onClick={() => isDoneOne(todo.id)}>isDone Task</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>Uppercase All</button>
      <button onClick={isDoneAll}> All Done</button>
    
    </div>
  );
}
