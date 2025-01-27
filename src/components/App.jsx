import viteLogo from '/vite.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Input from './input';
import List from './List';


function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true)


	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((data) => {
				const uncompletedTodos = data.filter(todo => !todo.complete)
					.map(todo => todo.title) 
				setTimeout(() => {
					setTodos(uncompletedTodos)
					setLoading(false)
				}, 2000)
			
		})
	}, [])

	const addTodo = () => {
		console.log(todos)
		if (todo !== "")
		setTodos([...todos, todo])
		setTodo("")
	}

	const complete = (text) => {
		const uncompletedTodos = todos.filter((todo) => todo !== text)
		setTodos(uncompletedTodos)
	}

	

	return (
		<div className="App">
			<img className="logo" src="/logo.png" alt="Tasktail" />
			<Input setTodo={setTodo} todo={todo} addTodo={addTodo} />
			{loading ? <h1>Loading</h1> : <List todos={todos} complete={complete} />}			
		</div>
	);
}

export default App;
