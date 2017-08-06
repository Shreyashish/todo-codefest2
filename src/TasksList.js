import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'

class TasksList extends Component {
    state = {
        query: ''
    };

    handleChange = (query) => {
        this.setState({
            query: query
        });
    };

    render() {
        //console.log(this.props);
        let filteredTasks;
        if(this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query, 'i'));
            // console.log(match.test('clean'));
            filteredTasks = this.props.tasks.filter((task) => match.test(task.content));
        } else {
            filteredTasks = this.props.tasks;
        }

        return (
            <div>
                <input
                    type="text"
                    placeholder="search"
                    value={this.state.query}
                    onChange={(event) => this.handleChange(event.target.value)}
                />
                {/*{this.state.query.length < 6 && (*/}
                    {/*<div>*/}
                        {/*Please write more than {6-this.state.query.length} characters*/}
                    {/*</div>*/}
                {/*)}*/}
                <ul>
                    {filteredTasks.map((task) => (
                        <li key={task.id}>
                            {task.content}
                            <button onClick={() => this.props.onCompletion(task)}>
                                Complete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TasksList