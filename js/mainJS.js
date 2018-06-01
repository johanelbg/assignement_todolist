class List extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this)
        this.doneTask = this.doneTask.bind(this)
        this.undoneTask = this.undoneTask.bind(this)
        this.priorityTask = this.priorityTask.bind(this)
        this.state={
            tepu:'',
            priorityTask: '',
            arrDone:this.props.arrDone,
            arrTask:this.props.arrTask
        }
    }

    deleteTask(event){
        event.target.parentElement.remove()
    }

    priorityTask(event){
        if(event.target.parentElement.classList.contains("priorityTask")){
        var isPriorityTask = event.target.parentElement.classList.remove("priorityTask");
        this.setState({
            prioTask:this.state.isPriorityTask
        })
        }else{
            var priorityTask = event.target.parentElement.classList.add("priorityTask");
            this.setState({
            prioTask:this.state.priorityTask
        })}

    }

    doneTask(event){
        event.target.parentElement.remove()
        var tempString = event.target.parentElement.textContent
        var doneText = tempString.slice(0, -11) 
        this.state.arrDone.push(doneText);
        this.setState({
            doneText: this.state.doneText,
            arrDone : this.state.arrDone
        })
    }

     undoneTask(event){
        event.target.parentElement.remove()
        var tempString = event.target.parentElement.textContent
        var doneText = tempString.slice(0, -12) 
        this.state.arrTask.push(doneText);
        this.setState({
            doneText: this.state.doneText,
            arrTask : this.state.arrTask
        })
    } 

    render() {
    
        return(
        <div>
            <h3>To do</h3>
            <div className='row'> 
                {(this.state.arrTask).map((taskName, i) => <div key={i} className={' toDoText col s12 ' + this.state.priorityTask}>{taskName} 
                    <a className="left waves-effect btn-floating grey darken-3 waves-light btn-small z-depth-0" onClick={this.deleteTask}><i className="material-icons">close</i></a>
                  <a className='doneBtn left btn-floating green btn-small z-depth-0' onClick={this.doneTask}><i className="material-icons">done</i></a>
                  <a className='left waves-effect btn-floating purple lighten-2 waves-light btn-small z-depth-0' onClick={this.priorityTask}><i className="material-icons">star</i></a>
                </div>)}
                
            </div>
            <h3>Done</h3>
            <ul className='row'>
                {(this.state.arrDone).map((taskName, i) => <div key={i} className='doneText col s12'>{taskName}
                <a className="left grey darken-3 btn-floating waves-effect waves-light btn-small z-depth-0" onClick={this.deleteTask}><i className="material-icons">close</i></a>
                 <a className ="left light-blue doneBtn  btn-floating waves-effect waves-light btn-small z-depth-0"  onClick={this.undoneTask}><i class="material-icons">cached</i></a>
                </div>)}
            </ul>
        </div>
        );
    }
}


class App extends React.Component {
      constructor(props) {
        super(props);
        this.enterTask = this.enterTask.bind(this)
        this.state = {
            dynamicSubtitle:"Never froget it !!!",
            arrTask:[],
            arrDone:[]
        };
    }

    enterTask(event){
        if(event.key == 'Enter'){
            if(event.target.value.length>50){
                 this.setState({
                dynamicSubtitle: "This word is too long for my stomach bro",
                color: 'errorMessage'
            })
            }else if(event.target.value.length!==0){
                 this.setState({
                dynamicSubtitle: "Never froget it",
                color: ''
            })
            
            this.state.arrTask.push(event.target.value)
            console.log(this.state.arrTask)
            event.target.value=''
            }else{
                this.setState({
                dynamicSubtitle: 'Feed the frog with some words mate',
                color: 'errorMessage'
            })
            }
        }   
        
    } 

    render() {
        return(
            <div className='container flow-text'>
                    <div className='row'>
                    <div className='frogIcon col s12 offset-l2 l2'></div>
                        <h1 className="title col s12 l5"> <span className="frogLetters">FROG</span>OTTEN</h1>
                        <h1 className={"title subTitle col s12 "+ this.state.color}>{this.state.dynamicSubtitle}</h1>
                    </div>                        
                    <div className='input-field col s8'>
                   <input id='input_text' type='text' onKeyPress={this.enterTask}/>
                   <label for="input_text">Input task</label>
                </div>
                <List arrTask={this.state.arrTask} arrDone={this.state.arrDone}/> 
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root") //TOUT PART DE LA   
);