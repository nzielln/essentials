import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";
import { TodoItem } from "./todoitem.jsx"

window.id = 0;
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasklist: [],
      item: { text: '', key: '' },
      notList: ''

    }

    this.handleChange = this.handleChange.bind(this);
    this.addToList = this.addToList.bind(this);
    this.toggleCrossOut = this.toggleCrossOut.bind(this);
  }

  handleChange = e => {
    const taskvalue = e.target.value;
    const item = { text: taskvalue, key: Date.now() }
    this.setState({
      item,
    })

  }

  addToList = e => {
    e.preventDefault();
    const newItem = this.state.item;
    const itemlist = [...this.state.tasklist, newItem]
    this.setState({
      tasklist: itemlist,
      item: { text: '', key: '' }
    })

  }

  toggleCrossOut = key => {
    const state = this.state.notList;
    this.setState({
      tasklist: this.state.tasklist.map(item => {
        if (item.key === key) {
          return {
            ...item, tasklist: !state
          };
        } else {
          return item;
        }
      })
    })

  }
  deleteIt = key => {
    const getItem = this.state.tasklist.filter(item => {
      return item.key !== key;
    })
    this.setState({
      tasklist: getItem,
    })

  }

  render() {
    return (
      <div className="alltodo">
        <h2 className="title top">to do</h2>

        <div className="todo-space">
          <div id="listarea">
            <ul id="todolist">
              {this.state.tasklist.map(item => (
                <TodoItem
                  className={this.state.notList ? "cross-out" : "newItem"}
                  onClick={() => this.deleteIt(item.key)}
                  id={this.state.id} innertext={item.text} key={item.key} />
              ))}
            </ul>
          </div>
          <div className="todo-input">
            <form onSubmit={this.addToList}>
              <input type="text" onChange={this.handleChange} value={this.state.item.text} placeholder="add task" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
