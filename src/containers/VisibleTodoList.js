import React from "react";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import { visibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case visibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case visibilityFilters.SHOW_ALL:
            return todos;
        default:
            throw new Error("Unknown filter: " + filter);
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);