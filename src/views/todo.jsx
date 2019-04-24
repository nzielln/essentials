import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

class Todo extends React.Component {
  render() {
    return (
      <div className="alltodo">
        <h2 className="title top">to do</h2>
        <div className="main todo">
          <h3>to do</h3>
        </div>

        <div className="todo-space">
          <ul id="todolist">
            <li />
          </ul>
          <div className="todo-input">
            <input type="text" placeholder="add task" />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
