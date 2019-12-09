import React, { Component } from 'react';
import './TaskInput.css'

export default class componentName extends Component {
  state = {
    taskInput: '',
    deadTask: '',
  }
  //stop preload form
  handleSubmit = event => {
    event.preventDefault();
    if ((this.state.taskInput.trim() !== '') && (this.state.deadTask.trim() !== '')) {
      this.props.createTask(this.state.taskInput, this.state.deadTask);
    }
    this.setState({ taskInput: "", deadTask: '' });
  }

  handlChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="custom-forms">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="inputEmail4"><h1 style={{ marginTop: '20px', fontWeight: '300' }}>ADD TASKS</h1></label>
          <div className="custom-form form-row">
            <div className="form-group col-6">
              <input
                name="taskInput"
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Input your task..."
                value={this.state.taskInput}
                onChange={this.handlChange}
              />
            </div>
            <div className="form-group col-6">
              <input
                name="deadTask"
                type="text"
                className="form-control"
                id="inputdate"
                placeholder="Input your deadline..."
                value={this.state.deadTask}
                onChange={this.handlChange}
              />
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Add new</button>
          </div>
        </form>
      </div>
    );
  }
}