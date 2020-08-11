import React from 'react';
import TodoForm from './TodoForm.js'
import './App.css';
class App extends React.Component {
  state = {
    todos: [
      { text: "Learn about React" },
      { text: "Meet friend for lunch" },
      { text: "Build really cool todo app" }
    ]
  }

 setTodos = todos => this.setState({ todos });

 Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

 render() {

   return (
      <div className="app">
        <div>
        My App Component
       </div>
        <div className="todo-list">
          {this.state.todos.map((todo, index) => (
            <this.Todo
              key={index}
              index={index}
              todo={todo}
            />
          ))}
        </div>
        <TodoForm todos={this.state.todos} setTodos = { () => this.setTodos} />
      </div>
    );
 }
}

export default App