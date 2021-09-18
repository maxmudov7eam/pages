// import React, {Component} from 'react';

// class TodowithCheck extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             todos: [],
//             dones: []
//         }
//     }
//     render() {

//         const addTask = (event) => {

//             event.preventDefault();

//             let text = event.target.text.value;

//             let newTodo = {
//                 task: text,
//             };

//             this.state.todos.push(newTodo);

//             this.setState({
//                 todos: this.state.todos,
//             });

//         }

//         const done = (event, index) => {
//             this.state.dones.push(this.state.todos[index]);
//             this.state.todos.splice(index, 1);

//             this.setState({
//                 todos: this.state.todos,
//                 dones: this.state.dones
//             })
//         }

//         const deleteOne = (index1) => {
//             this.state.dones.splice(index1, 1);

//             this.setState({
//                 dones: this.state.todos,
//             })
//         }

//         return (

//             <>

//                 <div className="container mt-5">
//                     <div className="row">
//                         <div className="col-6 offset-3">
//                             <form onSubmit={addTask}>
//                                 <input type="text" name='text' className='form-control' placeholder='Enter tasks'/>
//                                 <button type='submit' className="btn btn-outline-success mt-3 ml-auto d-block">Save task</button>
//                             </form>
//                         </div>
//                     </div>

//                     <div className="row mt-5">
//                         <div className="col-6">
//                             <div className="card border-0">
//                                 {this.state.todos.map((item, index) => {
//                                     return (
//                                         <>
//                                         <div className="card-body border-bottom">
//                                             <h5 className="mb-3 d-flex align-items-center justify-content-between flex-wrap">{item.task} <span onClick={(event) => done(event, index)} className="d-block ml-auto btn btn-outline-dark">Done</span></h5>
//                                         </div>
//                                         </>
//                                     )
//                                 })}
//                             </div>
//                         </div>
//                         <div className="col-6">
//                             <div className="card border-0">
//                                 {this.state.dones.map((item1, index1) => {
//                                     return (
//                                         <>
//                                         <div className="card-body border-bottom">
//                                             <h5 className="mb-3 d-flex align-items-center justify-content-between flex-wrap">{item1.task} <span onClick={() => deleteOne(index1)} className="d-block ml-auto btn btn-outline-danger">Delete</span></h5>
//                                         </div>
//                                         </>
//                                     )
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

// export default TodowithCheck;





import React, {Component} from 'react';

class TodowithCheck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            text: '',
            dones: [],
            // proges: 0,
        }
    }
    render() {

        const textValue = (event) => {
            this.setState({
                text: event.target.value,
            })
        }

        const addTasks = () => {
            let newTodo = {
                task: this.state.text
            }

            this.state.todos.push(newTodo);

            this.setState({
                todos: this.state.todos,
            })
        }

        const todo = (event, index) => {
            this.state.dones.push(this.state.todos[index]);
            this.state.todos.splice(index, 1);
            console.log(this.state.todos);
            console.log(this.state.dones);

            this.setState({
                todos: this.state.todos,
                dones: this.state.dones,
            })
            console.log(event);
            console.log(event.target);
        }

        const deleteOne = (index) => {
            this.state.dones.splice(index, 1);
            
            console.log( this.state.dones.splice(index, 1));

            this.setState({
                dones: this.state.todos,
                todos: this.state.todos
            });
        }

        // const progressBar = (event) => {

        //     let progress = event.target.value;

        //     console.log(event.target.value);

        //     let progressResult = (this.state.done.length*100) / (this.state.todo.length + this.state.done.length);
        //     progress.style.width = progressResult + '%';

        // }

        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6 offset-3">
                        <div class=" progress d-flex  my-3">
                            <div /*onChange={progressBar}*/ class=" progress-bar" style={{width: '20%'}}></div>
                        </div>

                        <input onChange={textValue} type="text" className='form-control' placeholder='Enter tasks'/>
                        <button type='button' onClick={addTasks} className="btn btn-outline-success d-block ml-auto mt-3">Enter</button>

                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-6">
                        {this.state.todos.map((item, index) => {
                            return(
                                <>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className='d-flex align-items-center'>{item.task} 
                                                <span onClick={(event) => {todo(event, index)}} className="d-block ml-auto btn btn-outline-dark" type='button'>Todo</span></h5>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className="col-6">
                        {this.state.dones.map((item, index) => {
                            return(
                                <>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="d-flex align-items-center">{item.task}
                                                <span onClick={() => {deleteOne(index)}} className="d-block ml-auto btn btn-outline-danger" type='button'>Done</span>
                                            </h5>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    };
};

export default TodowithCheck;