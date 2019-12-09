import React, { Component } from 'react';
import './ListItem.css'


export default class ListItem extends Component {

  state = {
    isEnable: true,
  }

  handleClick = () => {
    this.props.changeStatus(this.props.id);
  }

  handleDelete = event => {
    event.stopPropagation();
    this.props.deleteTask(this.props.id);
  }

  handleUpdateTitle = (event) => {
    event.stopPropagation();
    this.props.updateTitle(this.props.id, this.refs.valueInput.value);
  }

  showSave = () => (
    <form className="input-group" onSubmit={this.handleUpdateTitle}>
      <input
        type="text"
        ref="valueInput"
        //defaultValue={this.props.title}
        value={this.state.value}
        className="form-control"
        id="inputPassword2"
        placeholder="Edit task here..."
      />
      <button type="submit" className="btn btn-info" onClick={this.toggleShowHide}  >Save</button>
    </form>
  )

  showEdit = () => (
    <button className="btn btn-warning btn-block text-white" onClick={this.toggleShowHide}>Edit</button>
  )

  enableEdit = () => {
    if (this.state.isEnable === true) {
      return this.showEdit();
    }
    else {
      return this.showSave();
    }
  }

  toggleShowHide = event => {
    event.stopPropagation();
    this.setState({ isEnable: !this.state.isEnable });
  }


  render() {
    const { id, title, deadline, done } = this.props;
    return (
      <div className="item">
        <p style={{ cursor: 'pointer', textDecoration: done ? "line-through" : "unset" }}
          onClick={this.handleClick}
        >ID: {id} | Title: {title} | Deadline: {deadline} | done: {done.toString()}
        </p>
        <div className="container-fluid">
          <div className=" row justify-content-center d-flex">
            <div className="col">
              {this.enableEdit()}
            </div>
            <div className="col">
              <div className="">
                <button
                  onClick={this.handleDelete}
                  className="btn btn-danger btn-block"
                >Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
