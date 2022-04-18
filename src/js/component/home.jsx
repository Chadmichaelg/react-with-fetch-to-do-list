import React, { useSatate, useEffect, useRef } from "react";
import TodoList from "./TodoList";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

function Home() {
	return (
		<div className="todo-app">
			<TodoList />
		</div>
	);
}

// const Home = () => {
// 	const [Todo, setTodos] = useState([{ text: "Do homework", isEdit: false }]);
// 	// useEffect(() => {}, [inputRefs]);

// 	const inputRefs = useRef(null)

// 	const [textValue, setTextValue] = useState("");

// 	const add = () => {
// 		console.log("click");
// 		let newArray = [...Todo];
// 		newArray.push({ text: ref.current.value, isEdit: false });
// 		console.log(ref.current.value);
// 		setTodos(newArray);
// 	};

// 	const handleInput = (event) => {
// 		setTextValue(event.target.value);
// 		console.log(event.target.value);
// 	};

// 	useEffect(() => {}, [inputRefs]);

// 	return (
// 		<div>
// 			<div>
// 				<input
// 					ref={inputRefs}
// 							//  onChange={() => {setTextValue(event.target.value)}}
// 							>
// 							</input>
// 							<button type="button" onclick={add}>
// 								Add
// 							</button>
// 						</div>
// 						{Todo.map((Todo, index) => {
// 						// {Todo.text}
// 						<div>
// 							<button type="button" onclick={""}>
// 								Edit
// 							</button>
// 							<button type="button" onclick={""}>
// 								Delete
// 							</button>
// 						</div>

// 				);
// 			})}
// 		</div>
// 	);
// };

export default Home;
