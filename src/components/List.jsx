const List = ({ todos }) => {
    if (todos.length === 0) {
        return (
            <div className="empty">
                All tasks completed
            </div>
        )
    }
    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo, i) => (
					<li key={i}>{todo}</li>
				))}
            </ul>     
        </div>
    )
}

export default List