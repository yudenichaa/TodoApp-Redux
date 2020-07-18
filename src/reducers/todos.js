export default function todos(todos = [], action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...todos, {
                id: action.id,
                text: action.text,
                completed: action.completed
            }];
        case "TOGGLE_TODO":
            return todos.map(todo =>
                todo.id == action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return todos;
    }
}