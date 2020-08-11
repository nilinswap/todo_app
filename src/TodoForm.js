import React from 'react';
//import './App.css';

class TodoForm extends React.Component {

  constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.setState = this.setState.bind(this);
        this.addTodo = this.addTodo.bind(this);
  }



  addTodo = text => {
    console.log("sum", this.props.todos);
    const newTodos = [...this.props.todos, { text }];
    console.log("sum sum", newTodos);
    this.props.setTodos(newTodos);
    };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.value);
    if (!this.state) return;
    console.log('here');
    this.addTodo(this.state.value);
    this.setState({value: ""});
  };


     render() {

       return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="input"
            value={this.state.value}
            onChange={(e) => {console.log(e.target.value);this.setState({value: e.target.value});}}
          />
        </form>
      );
     }
}
export default TodoForm;

