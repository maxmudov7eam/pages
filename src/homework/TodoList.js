import React, {Component} from 'react';
import {Progress} from "reactstrap";
import axios from 'axios';

class TodoList extends Component {

    constructor(props) {
        super(props);

        
        console.log('THis is Constructor')

        this.state = {

            posts: [],
            photos: []

            // tasks: [],
            // done: [],
            // selectedIndex: -1,
            // text: "",
            // prog: 0,
        }
    }
    


    componentDidMount() {
        console.log('THis is componentDidMount method');
        // component sahifaga chiqib bolgandan keyin ishlaydi

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res);

                this.setState({
                    posts: res.data
                })

                axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                    .then((res2) => {
                        this.setState({
                            photos: res2.data
                        })
                    })

            })
    }

   i
    componentWillUnmouth() {
        console.log('Unmounth');
         //componentWillUnmouth - component sahifadan o'chib ketayotganda ishlayd
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        // component da o'zgarish bo'lgandan keyin ishlaydi
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error');
        // component da hatolik bo'lganda ishlaydi
    }

    render() {
        
        console.log('THis is Render')


        const addTask = (event) => {
            event.preventDefault();

            this.state.tasks.push(this.state.text);
            event.target.inputcha.value = "";
            console.log(this.state.tasks);
            this.state.prog =(this.state.done.length * 100) / (this.state.tasks.length + this.state.done.length);
            this.setState({
                    tasks: this.state.tasks,
                    text: "",
                    prog: this.state.prog
                }
            )

        };
        const changeInput = (event) => {
            console.log(event.target.value);
            this.setState({
                text: event.target.value,
            })
        };

        const deletetask = (index) =>{
            this.state.done.splice(index, 1);
            this.setState({
                done: this.state.done,
                prog: this.state.prog
            })
        };

        const done = (index) => {
            this.state.done.push(this.state.tasks[index]);
            this.state.tasks.splice(index, 1);

            this.state.prog =(this.state.done.length * 100) / (this.state.tasks.length + this.state.done.length);

            console.log(this.state.tasks);
            console.log(this.state.done[index]);
            this.setState({
                tasks: this.state.tasks,
                done: this.state.done,
                prog: this.state.prog
            })
        };
        return (
            <>
                <div className="container">
                    <div className="row mt-5 pt-5">
                        {this.state.posts.map((item, index) => {
                            return (
                                <>
                                    <div className="col-4 mt-3">
                                        <div className="card h-100">
                                            <div className="card-header">
                                                <h5>{item.title}</h5>
                                            </div>
                                            <div className="card-body">
                                                <img className='w-100' src={this.state.photos[index]?.url} alt=""/>
                                                {item.body}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </>
            // <div className="container">
            //     <div className="row mt-3">
            //         <div className="col-8 offset-2">
            //             <div className="card border-0">
            //                 <div className="card-body border-0">
            //                     <form onSubmit={addTask}>
            //                         <Progress name="prog" className="mb-4" value={this.state.prog}></Progress>
            //                         <div className="input-group">
            //                             <input onChange={changeInput} name="inputcha" type="text"
            //                                    className="form-control"/>
            //                             <div className="input-group-append">
            //                                 <button type="submit" className="btn btn-outline-success">Enter</button>
            //                             </div>
            //                         </div>
            //                     </form>


            //                     <div className="row mt-3">
            //                         <div className="col-6">
            //                             {this.state.tasks.map((item, index) => {
            //                                 return (
            //                                     <div className="alert alert-primary d-flex justify-content-between align-items-center">
            //                                         <h6>{this.state.tasks[index]}</h6>
            //                                         <button type="button" className="btn btn-outline-success"
            //                                                 onClick={() => done(index)}>Todo
            //                                         </button>
            //                                     </div>
            //                                 )
            //                             })}
            //                         </div>
            //                         <div className="col-6">
            //                             {this.state.done.map((item, index) => {
            //                                 return (
            //                                     <div
            //                                         className="alert alert-primary d-flex justify-content-between align-items-center">
            //                                         <h6>{this.state.done[index]}</h6>
            //                                         <button type="button" className="btn btn-outline-danger" onClick={() =>deletetask(index)}>Done</button>
            //                                     </div>
            //                                 )
            //                             })}
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>

            // </div>
        );
    }
}

export default TodoList;