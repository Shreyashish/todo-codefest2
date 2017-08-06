import React, {Component} from 'react';
import './App.css';
import TasksList from './TasksList'

// const tasks = [
//     {
//         "id": 1,
//         "content": "clean house"
//     },
//     {
//         "id": 2,
//         "content": "do puja everyday"
//     },
//     {
//         "id": 3,
//         "content": "watch Rick n Morty"
//     },
// ];

class App extends Component {
    state = {
        tasks: [
            {
                "id": 1,
                "content": "clean house"
            },
            {
                "id": 2,
                "content": "do puja everyday"
            },
            {
                "id": 3,
                "content": "watch Rick n Morty"
            },
        ]
    };

    removeTask = (task) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((oldTask) => oldTask.id !== task.id)
        }))
    };

    render() {
        return (
            <div>
                <TasksList
                    tasks={this.state.tasks}
                    onCompletion={this.removeTask}
                />
            </div>
        );
    }
}

export default App;
