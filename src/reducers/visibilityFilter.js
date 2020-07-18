import { visibilityFilters } from "../actions";

export default function visibilityFilter(filter = visibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return filter;
    }
}