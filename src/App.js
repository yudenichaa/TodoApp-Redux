import React from "react";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

const App = () => (
    <div className="container">
        <div className="row mt-3">
            <div className="col">
                <AddTodo />
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <VisibleTodoList />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <Footer />
            </div>
        </div>
    </div>
);

export default App;
