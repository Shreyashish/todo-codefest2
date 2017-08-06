import React, {Component} from 'react';
import './App.css';
import TasksList from './TasksList'

const tasks = [
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
];

class App extends Component {
    render() {
        return (
            <div>
                <TasksList tasks={tasks}/>
            </div>
        );
    }
}

export default App;
