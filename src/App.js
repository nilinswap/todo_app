import React from 'react';
import TodoForm from './TodoForm.js'
import Todo from './Todo.js'
import './App.css';
class App extends React.Component {

 constructor(props){
     super(props);
     this.state = {
        todos: [
          { text: "Learn about React",
            isCompleted: false
          },
          { text: "Meet friend for lunch",
            isCompleted: false
          },
          { text: "Build really cool todo app",
            isCompleted: false
          }
        ]
      };
     this.setTodos = this.setTodos.bind(this);
 }

 setTodos(todos) {
        this.setState({ todos });
    }



 render() {

   return (
      <div className="app">
        <div>
        My App Component
       </div>
        <div className="todo-list">
          {this.state.todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              todos = {this.state.todos}
              setTodos = {this.setTodos}
            />
          ))}
        </div>
        <TodoForm todos={this.state.todos} setTodos = {this.setTodos} />
      </div>
    );
 }
}

export default App