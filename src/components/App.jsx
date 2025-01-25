import viteLogo from '/vite.svg';
import './App.css';
import { useState } from 'react';
import Input from './input';


function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	const addTodo = () => {
		setTodos([...todos, todo])
	}

	return (
		<div className="App">
			<img className="logo" src="/logo.png" alt="Tasktail" />
			<Input setTodo={setTodo} todo={todo} addtodo={addTodo} />
			<ul>
				{todos.map((todo, i) => (
					<li key={i}>{todo}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
