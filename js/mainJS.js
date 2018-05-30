class List extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this)
        this.doneTask = this.doneTask.bind(this)
        this.state={
            arrDone:[],
            salope:[] 
        }
    }

    deleteTask(event){
        event.target.parentElement.remove() // Mettre du Fade In
        // on laisse tomber de suppr l'element de l'array pour le moment , au final pas vraiment utile
    }

    doneTask(event){
    
        event.target.parentElement.remove()  //mettre du Fade Out
        var tempString = event.target.parentElement.textContent
        var doneText = tempString.slice(0, -3) // ca permet de suppr le'X D' des boutons dans la string
        this.setState({
            salope : this.state.arrDone.push(doneText) 
        })
        console.log("arrDone :" + this.state.arrDone) 

        // le but maintenant c'est de choper la nouvelle array dans une autre class faire une map et qu'il soit enfant de APP
        // jsp si c'est possible !  jvois pas comment faire le lien entre done et list
    }

    render() {
        return(
        <div>
            <ul> 
                {(this.props.arrTask).map((taskName, i) => <li key={i}>{taskName}
                    <button onClick={this.deleteTask}>X</button> <button onClick={this.doneTask}>D</button>
                </li>)}
            </ul>
            
            <br/>
            <br/>
            <br/>
            {this.state.arrDone} ca il comprend pas
            <br/>
            <br/>
            {this.state.salope} ca il comprend mal
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
            event.target.value=''
        }   
        
    } 

    render() {
        return(
            <div>
                <input onKeyPress={this.enterTask} placeholder='Insert a task' ref={(input) => { this.taskInput = input; }}/>
                <List arrTask={this.state.arrTask}> 
               
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