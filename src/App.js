import React, { Component } from 'react';
import './App.css';
import ListItem from './components/ListItem/ListItem';
import TaskInput from './components/TaskInput/TaskInput';
import working from './working.png'


class App extends Component {

  state = {
    tasks: [
      // { id: 'task1', title: "Learn HTML", deadline: "01/12/19", done: true }, //task
      // { id: 'task2', title: "Learn CSS", deadline: "01/12/19", done: false },
      // { id: 'task3', title: "Learn JS", deadline: "01/12/19", done: false },
    ]
  };

  updateStatus = id => {
    //sao chep va tao mang moi
    const newTasks = [...this.state.tasks];
    //findeindex find id for update items
    const index = newTasks.findIndex(function (task) {
      return task.id === id;
    })
    // change state true or false add style:textDecoragation:line-through
    newTasks[index].done = !newTasks[index].done;

    newTasks.sort(function (task1, task2) {
      return task1.done - task2.done;
    });
    this.setState({ tasks: newTasks });
  }

  createTask = (title, deadline) => {
    const newTasks = [...this.state.tasks, { id: Math.floor(Math.random() * 10), title: title, deadline: deadline, done: true }];
    this.setState({ tasks: newTasks });
  }

  deleteTask = id => {
    const newTasks = this.state.tasks.filter((task) => {
      return task.id !== id;
    });
    this.setState({ tasks: newTasks });

  }

  updateTitle = (id, value) => {
    const newTasks = [...this.state.tasks];
    const index = newTasks.findIndex(function (task) {
      return task.id === id;
    })
    newTasks[index].title = value;
    this.setState({ tasks: newTasks });
  }

  render() {
    const ListItems = this.state.tasks.map(task => {
      return (
        <ListItem
          key={task.id}
          id={task.id}
          title={task.title}
          deadline={task.deadline}
          done={task.done}
          changeStatus={this.updateStatus}
          deleteTask={this.deleteTask}
          updateTitle={this.updateTitle}
        ></ListItem>)
    })
    return (
      <div className="App">
        <div className="App-header">
          <TaskInput
            createTask={this.createTask}
          ></TaskInput>
          {this.state.tasks.length === 0 ? <div>
            <img style={{ marginTop: '20px' }} height='200px' width='200px' src={working} alt="work" />
            <h2 style={{ marginTop: '20px', fontWeight: '300',textTransform:'uppercase' }}>There are no task</h2>
          </div> : ListItems}
        </div>
      </div>
    );
  }
}

export default App;

