class List extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this)
        this.doneTask = this.doneTask.bind(this)
        this.state={
            arrDone:this.props.arrDone,
            arrTask:this.props.arrTask,

        }
    }

    deleteTask(event){
        event.target.parentElement.remove() // Mettre du Fade In
        // on laisse tomber de suppr l'element de l'array pour le moment , au final pas vraiment utile
    }

    doneTask(event){
        event.target.parentElement.remove()  //mettre du Fade Out
        var tempString = event.target.parentElement.textContent
        var doneText = tempString.slice(0, -3) 
        this.state.arrDone.push(doneText);

        this.setState({
            doneText: this.state.doneText,
            arrDone : this.state.arrDone
        })
    }

    render() {
        return(
        <div>
            <ul> 
                {(this.state.arrTask).map((taskName, i) => <li key={i}>{taskName}
                    <button onClick={this.deleteTask}>X</button> <button onClick={this.doneTask}>D</button>
                </li>)}
            </ul>
         
            {(this.state.arrDone).map((taskName, i) => <li key={i}>{taskName}
                    
                </li>)}
            <br/>
       
        </div>
        );
    }
}


// class Done extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return(
//             <ul> 
//                 {(this.props.arrDone).map((test, i) => 
//                 <li key={i}>
//                     {test}
//                 </li>)}
//             </ul>
//         );
//     }
// }

class App extends React.Component {
      constructor(props) {
        super(props);
        this.enterTask = this.enterTask.bind(this)
        this.state = {
            dynamicTask:"",
            arrTask:[],
            arrDone:[]
        };
    }

    enterTask(event){
        if(event.key == 'Enter'){
            this.setState({
                dynamicTask: event.target.value,
            })
            this.state.arrTask.push(event.target.value)
            console.log(this.state.arrTask)
            event.target.value=''
        }   
        
    } 

    render() {
        return(
            <div>
                <input onKeyPress={this.enterTask} placeholder='Insert a task' ref={(input) => { this.taskInput = input; }}/>
                <List arrTask={this.state.arrTask} arrDone={this.state.arrDone}> 
                    
                </List>



                         
                {/* Done class ici  */}
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root") //TOUT PART DE LA
);