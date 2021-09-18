
// import React from 'react';

// class Trello extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             cardShow: false,
//             textarea: '',
//             boards: [],
//             areas: []
//         }
//     }


//     render() {


//     // number1 > number2 ? console.log(number1) : '';

//     const changeCardShow = () => {

//         this.setState({
//             cardShow: !this.state.cardShow
//         })

//     }

//     const changeTitle = (event) => {

//         this.setState({
//             textarea: event.target.value
//         })

//     }

//     const addBoard = () => {

//         let newBoard = {
//             title: this.state.textarea,
//             tasks: []
//         }

//         this.state.boards.push(newBoard);

//         this.setState({
//             boards: this.state.boards,
//             textarea: ''
//         })

//     }

//     const changeAreas = (event, index) => {

//         this.state.areas[index] = event.target.value;

//         this.setState({
//             areas: this.state.areas
//         })

//         console.log(this.state.areas)

//     }

//     const addTask = (index) => {

//         this.state.boards[index].tasks.push(this.state.areas[index]);
//         this.state.areas[index] =''

//         this.setState({
//             boards: this.state.boards,
//             areas: this.state.areas
//         })
//     }

//     const deleteTask = (index1, index2) => {

//         this.state.boards[index1].tasks.splice(index2, 1);

//         this.setState({
//             boards: this.state.boards
//         })

//     }

//     const deleteBoards = (index) => {

//         this.state.boards.splice(index, 1);

//         this.setState({
//             boards: this.state.boards
//         })

//     }

//         return (
//             <>
//                 <div className="container">
//                     <div className="row mt-5">
//                         <div className="col-3">
//                             <button className="btn btn-outline-success btn-block" type='button' onClick={changeCardShow}>Add board</button>

//                             {/* {this.state.cardShow ? 
//                                 <div className="card mt-3">
//                                     <div className="card-body">
//                                         <textarea name='boardTitle' className='form-control' placeholder='Type here...'></textarea>

//                                         <button className="btn btn-primary mt-3 d-block ml-auto" type='button'>+Add</button>
//                                     </div>
//                                 </div> : ''
//                             } */}

//                                 <div className={`card mt-3 ${this.state.cardShow ? '' : 'd-none'}`}>
//                                     <div className="card-body">

//                                         <textarea onChange={changeTitle} value={this.state.textarea} name='boardTitle' className='form-control' placeholder='Type here...'></textarea>

//                                         <button className="btn btn-primary mt-3 d-block ml-auto" type='button' onClick={addBoard}>+Add</button>

//                                     </div>
//                                 </div> 
//                         </div>

//                         <div className="col-9">
//                             <div className="row">
//                                 {this.state.boards.map((item, index) => {
//                                     return (
//                                         <div className="col-4 mb-3">
//                                             <div className="card">
//                                                 <div className="card-header">
//                                                     <h4>{item.title}</h4>
//                                                     <div className="task-close" onClick={() => deleteBoards(index)}>&times;</div>
//                                                 </div>
//                                                 <div className="card-body">
//                                                     {item.tasks.map((item1, index1) => {
//                                                         return (

//                                                             <div className="task"><span onClick={() => deleteTask(index, index1)}> {item1} </span> <div className="task-close">&times;</div></div>

//                                                         )
//                                                     })}
//                                                 </div>
//                                                 <div className="card-footer">

//                                                     <textarea value={this.state.areas[index]} onChange={(event) => changeAreas(event, index)} className='form-control' placeholder='Type here...'></textarea>

//                                                     <button className="btn btn-success mt-3 d-block ml-auto" onClick={() => addTask(index)}>+Add</button>

//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     };
// };

// export default Trello;











// import React, { Component } from 'react';

// class Trello extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             cardShow: false,
//             textarea: "",
//             boards: [],
//             areas: [],
//             selectedIndex: -1,
//         }
//     }


//     render() {

//         const changeCardShow = () => {
//             this.setState({
//                 cardShow: !this.state.cardShow
//             })
//         }

//         // let number1 = 33, number2 = 43;
//         //
//         // if (number1 > number2){
//         //     console.log(number1);
//         // } else {
//         //     console.log(number2);
//         // }
//         //
//         // // ternar
//         // number1 > number2 ? console.log(number1) : console.log(number2);

//         const changeTitle = (event) => {
//             this.setState({
//                 textarea: event.target.value
//             });
//         }

//         const addBoard = () => {

//             let newBoard = {
//                 title: this.state.textarea,
//                 tasks: []
//             }
//             if (this.state.selectedIndex >= 0) {
//                 this.state.boards[this.state.selectedIndex].title = newBoard.title;
//             } else {
//                 this.state.boards.push(newBoard);
//             }


//             this.setState({
//                 boards: this.state.boards,
//                 textarea: "",
//                 selectedIndex: -1,
//                 selectedIndex2: -1,
//             })
//         }

//         const editBoards = (index) => {
//             this.setState({
//                 selectedIndex: index,
//                 textarea: this.state.boards[index].title
//             })
//         }

//         const editTask = (index, index2) => {
//             this.state.areas[index] = this.state.boards[index].tasks[index2];
//             this.setState({
//                 selectedIndex: index,
//                 selectedIndex2: index2,
//                 areas: this.state.areas,
//             })

//         }

//         const changeAreas = (event, index) => {
//             this.state.areas[index] = event.target.value;

//             this.setState({
//                 areas: this.state.areas
//             })

//             console.log(this.state.areas);
//         }

//         const addTask = (index) => {
//             if (this.state.selectedIndex2 >= 0) {
//                 this.state.boards[this.state.selectedIndex].tasks[this.state.selectedIndex2] = this.state.areas[index]
//             } else {
//                 this.state.boards[index].tasks.push(this.state.areas[index]);
//             }

//             this.state.areas[index] = ""

//             this.setState({
//                 boards: this.state.boards,
//                 areas: this.state.areas,
//                 selectedIndex: -1,
//                 selectedIndex2: -1,
//             })
//         }

//         const deleteTask = (index1, index2) => {
//             this.state.boards[index1].tasks.splice(index2, 1)
//             this.setState({
//                 boards: this.state.boards
//             })
//         }

//         const deleteBoards = (index) => {
//             this.state.boards.splice(index, 1)
//             this.setState({
//                 boards: this.state.boards
//             })
//         }

//         return (
//             <div className="container">
//                 <div className="row mt-3">
//                     <div className="col-3">
//                         <button type="button" className="btn btn-success btn-block" onClick={changeCardShow}>Add board
//                         </button>

//                          {/*{this.state.cardShow ? */}
//                          {/*    <div className="card mt-3">*/}
//                          {/*        <div className="card-body">*/}
//                          {/*            <textarea name="boardTitle" className="form-control" placeholder="Type here"/>*/}

//                          {/*            <button type="button" className="btn btn-success mt-3 d-block ml-auto">Add</button>*/}
//                          {/*        </div>*/}
//                          {/*    </div> : ""*/}
//                          {/*}*/}

//                         <div className={`card mt-3 ${this.state.cardShow ? "" : "d-none"}`}>
//                             <div className="card-body">
//                                 <textarea onChange={changeTitle} value={this.state.textarea} name="boardTitle"
//                                     className="form-control" placeholder="Type here" />

//                                 <button type="button" className="btn btn-success mt-3 d-block ml-auto"
//                                     onClick={addBoard}>Add
//                                 </button>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="col-9">
//                         <div className="row">
//                             {this.state.boards.map((item, index) => {
//                                 return (
//                                     <div className="col-4 mb-3">
//                                         <div className="card">
//                                             <div className="card-header">
//                                                 <h4 onClick={() => editBoards(index)}>{item.title}</h4>
//                                                 <div className="task-close"
//                                                     onClick={() => deleteBoards(index)}>&times;</div>
//                                             </div>
//                                             <div className="card-body">
//                                                 {item.tasks.map((item1, index1) => {
//                                                     return (
//                                                         <div className="task" ><span onClick={() => editTask(index, index1)}>{item1}</span>
//                                                             <div className="task-close" onClick={() => deleteTask(index, index1)}>&times;</div>
//                                                         </div>
//                                                     )
//                                                 })}
//                                             </div>
//                                             <div className="card-footer">
//                                                 <textarea value={this.state.areas[index]}
//                                                     onChange={(event) => changeAreas(event, index)}
//                                                     className="form-control" placeholder="Type here" />
//                                                 <button type="button" className="btn btn-success mt-3 d-block ml-auto"
//                                                     onClick={() => addTask(index)}>Add
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         );
//     }
// }

// export default Trello;








import React, { Component } from 'react';
import TrelloSecond from '../homework/Trello';
// import MiniTodo from '../homework/MiniTodo';
// import NavbarColor from '../homework/NavbarColor';
// import BuxgalteriaSecond from '../homework/BuxgalteriaSecond';
import TodoList from '../homework/TodoList';
// import Project from '../lesson5/Project';
import Employee from '../lesson5/Employee'

class Trello extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardShow: true,
            textarea: '',
            boards: [],
            selectedIndex: -1,
            selectedIndex2: -1,
            areas: []
        }
    }
    render() {

        const showBoard = () => {
            this.setState({
                cardShow: !this.state.cardShow
            })
        }

        const changeTitle = (event) => {
            this.setState({
                textarea: event.target.value,
            });
        };

        const addBoard = () => {

            let newBoard = {
                title: this.state.textarea,
                tasks: []
            }

            if (this.state.selectedIndex >= 0) {
                this.state.boards[this.state.selectedIndex].title = newBoard.title
            } else {
                this.state.boards.push(newBoard);
            }

            this.setState({
                boards: this.state.boards,
                textarea: '',
                selectedIndex: -1,
            });

        }

        const editTitle = (index) => {

            this.setState({
                selectedIndex: index,
                textarea: this.state.boards[index].title
            })

        }

        const deleteTitle = (index) => {

            this.state.boards.splice(index, 1);

            this.setState({
                boards: this.state.boards
            })

        }

        const changeAreas = (event, index) => {

            this.state.areas[index] = event.target.value;

            this.setState({
                areas: this.state.areas
            })
            console.log(this.state.areas);

        }

        const addTasks = (index) => {

            if (this.state.selectedIndex2 >= 0) {
                this.state.boards[this.state.selectedIndex].tasks[this.state.selectedIndex2] = this.state.areas[index];
            } else {
                this.state.boards[index].tasks.push(this.state.areas[index]);
            }


            this.state.areas[index] = '';

            this.setState({
                boards: this.state.boards,
                areas: this.state.areas,
                selectedIndex2: -1,
                selectedIndex: -1
            })
        }

        const deleteTask = (index1, index2) => {

            this.state.boards[index1].tasks.splice(index2, 1);

            this.setState({
                boards: this.state.boards
            })

        }

        const editTask = (index1, index2) => {

            this.state.areas[index1] = this.state.boards[index1].tasks[index2];

            this.setState({
                areas: this.state.areas,
                selectedIndex2: index2,
                selectedIndex: index1
            })

        }

        return (
            <>
                {/* <NavbarColor />
                <BuxgalteriaSecond className='mt-5'/>
                <TodoList />

                <MiniTodo /> */}

                {/* <Project /> */}
                <Employee/>
                <TodoList/>

                {/* <div className="container my-5">
                    <div className="row">
                        <div className="col-3">
                            <button className="btn btn-outline-success btn-block mb-3" type='button' onClick={showBoard}>Add board</button>

                            <div className={`card py-3 ${this.state.cardShow ? "cardNone" : ""}`}>
                                <div className="card-body">
                                    <textarea onChange={changeTitle} value={this.state.textarea} name="boardTitle" className='form-control py-3' placeholder='Type here...' />

                                    <button onClick={() => addBoard()} className="btn btn-success d-block mt-3 ml-auto" type='button'>+Add</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="row">
                                {this.state.boards.map((item, index) => {
                                    return (
                                        <>
                                            <div className="col-4 mb-3">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h4 onClick={() => { editTitle(index) }}>{item.title}</h4>
                                                        <div onClick={() => { deleteTitle(index) }} className="task-close" >&times;</div>
                                                    </div>
                                                    <div className="card-body">
                                                        {item.tasks.map((item1, index1) => {
                                                            return (
                                                                <>
                                                                    <div className="task"><span onClick={() => editTask(index, index1)}>{item1}</span>
                                                                        <div className="task-close" onClick={() => deleteTask(index, index1)}>&times;</div>
                                                                    </div>
                                                                </>
                                                            )
                                                        })}
                                                    </div>
                                                    <div className="card-footer">
                                                        <textarea name="addTasks" value={this.state.areas[index]} placeholder='Type here..' className='form-control'
                                                            onChange={(event) => { changeAreas(event, index) }}
                                                        />
                                                        <button className="btn btn-primary mt-3 ml-auto d-block" onClick={() => addTasks(index)}
                                                        >Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <TrelloSecond />
                    </div>
                </div> */}
            </>
        )
    }
}

export default Trello;