import viteLogo from '/vite.svg';
import './App.css';
import { useState } from 'react';
import Input from './input';
import List from './List';


function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	const addTodo = () => {
		if (todo !== "")
		setTodos([...todos, todo])
		setTodo("")
	}

	return (
		<div className="App">
			<img className="logo" src="/logo.png" alt="Tasktail" />
			<Input setTodo={setTodo} todo={todo} addTodo={addTodo} />
			<List todos={todos} />
			<ul>
				
			</ul>
		</div>
	);
}

export default App;
