
export const visibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
};

let id = 0;

export const addTodo = (text) => ({
    type: "ADD_TODO",
    text: text,
    completed: false,
    id: id++
});

export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id: id
});

export const setVisibilityFilter = (filter) => ({
    type: "SET_VISIBILITY_FILTER",
    filter: filter
});