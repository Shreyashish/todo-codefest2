import React,{Component} from 'react'

class TasksList extends Component {
    render() {
        //console.log(this.props);
        return(
            <ul>
                {this.props.tasks.map((task) => (
                    <li key={task.id}>{task.content}</li>
                ))}
            </ul>
        )
    }
}

export default TasksList