
import React from 'react';
//import './App.css';

class Todo extends React.Component {

     constructor(props) {
        super(props);
        this.completeTodo = this.completeTodo.bind(this);
     }

     completeTodo = index => {
         const newTodos = [...this.props.todos];
         newTodos[index].isCompleted = true;
         this.props.setTodos(newTodos);
      }
     removeTodo = index => {
         const newTodos = [...this.props.todos];
         newTodos.splice(this.props.index, 1);
         this.props.setTodos(newTodos);
       };
     render() {
        return (
                <div
                  className="todo"
                  style={{ textDecoration: this.props.todo.isCompleted ? "line-through" : "" }}
                >
                  {this.props.todo.text}

                  <div>
                    <button onClick={() => this.completeTodo(this.props.index)}>Complete</button>
                    <button onClick={() => this.removeTodo(this.props.index)}>x</button>
                  </div>
                </div>
              );

     }
}
export default Todo;

