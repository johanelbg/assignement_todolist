class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return(
            <ul> 
                {(this.props.arrTask).map((taskName, i) => <li key={i}>{taskName}</li>)}
            </ul>
        );
    }
}

class App extends React.Component {
      constructor(props) {
        super(props);
        this.enterTask = this.enterTask.bind(this)
        this.state = {
            dynamicTask:"",
            arrTask:[]
        };
    }

    enterTask(event){
        if(event.key == 'Enter'){
            this.setState({
                dynamicTask: event.target.value,
            })
            this.state.arrTask.push(event.target.value)
            console.log(this.state.arrTask)
        }   
    } 

    render() {
        return(
            <div>
                <input onKeyPress={this.enterTask} placeholder='Insert a task' ref={(input) => { this.taskInput = input; }}/>
                <List arrTask={this.state.arrTask}/>            
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);