//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
// import Todo from "./component/Todo.js";
// import TodoForm from "./component/TodoForm.js";
// import TodoList from "./component/TodoList.js";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
