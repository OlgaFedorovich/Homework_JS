class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        document.querySelector('#' + this.props.class).classList.add(this.props.class);

        this.state = {
            list: [],
            html: ''
        };

        this.add = this.add.bind(this);
        this.changeStatus = this.changeStatus.bind(this);

    }

    changeStatus(event) {
        const id = event.target.dataset.taskId;
        const list = this.state.list;
        let task = list[id];
        
        if(id >= 0) {
            task.status = !task.status;
            console.log(task);

            list[id] = task;

            this.setState({
                list: list
            })

            this.updateHtml();
        }

    }

    updateHtml() {
        const list = this.state.list;

        const taskList = list.map((task, index) => {

            const taskName = task.status ? 'task completed' : 'task'

            return <li key={index} className={taskName}>
                <input checked={task.status} data-task-id ={index} onChange={this.changeStatus} className="task_status" type="checkbox" />
                <span className = "task_name">{task.name}</span>
            </li>
        })

        if(!taskList) return;

        this.setState({
        html: <ul>{taskList}</ul>
        })

    }

    add() {
        const inputValue = document.querySelector('.todo_form input').value;
        const list = this.state.list;
        if(inputValue.length > 0) list.push({
            name: inputValue,
            status: false
        });

        this.setState({
            list: list
        });

        this.updateHtml();
        console.log(this.state.list);
    }

    render() {
        return (
            <div className= "todo-container">
                <header className ="header">
                    <h1>{this.props.children}</h1>
                </header>
                <main className ="main">
                    <div className="todo_form">
                        <input placeholder="Enter new task" type="text" />
                        <button onClick = {this.add}>Add to do task</button>
                    </div>
                    <div className="todo_list">
                        {this.state.html}

                    </div>
                </main>                
            </div>

        )
    }
}

ReactDOM.render(<ToDoList class="todo">My TO Do List</ToDoList>, document.querySelector('#todo'));