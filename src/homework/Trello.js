
import React, { Component } from 'react';

class TrelloSecond extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardShow: true,
            textarea: '',
            boards: [],
            selectedIndex: -1,
            areas: [],
            selectedIndex2: -1
        }
    }

    render() {

        const openCard = () => {

            this.setState({
                cardShow: !this.state.cardShow
            })

        }

        const changeTitle = (event) => {
            this.setState({
                textarea: event.target.value,
            })
        }

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
                selectedIndex: -1
            })

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
        }

        const addTasks = (index) => {
            if (this.state.selectedIndex2 >= 0) {
                this.state.boards[this.state.selectedIndex].tasks[this.state.selectedIndex2] = this.state.areas[index]
            } else {
                this.state.boards[index].tasks.push(this.state.areas[index]);
            }

            this.state.areas[index] = ''

            this.setState({
                boards: this.state.boards,
                areas: this.state.areas,
                selectedIndex2: -1,
                selectedIndex: -1
            })
        }

        const deleteTask = (index, index1) => {

            this.state.boards[index].tasks.splice(index1, 1);

            this.setState({
                boards: this.state.boards
            })

        }

        const editTask = (index, index2) => {
            this.state.areas[index] = this.state.boards[index].tasks[index2];

            this.setState({
                areas: this.state.areas,
                selectedIndex: index,
                selectedIndex2: index2
            })
        }

        return (
            <>
                <div className="col-3">
                    <button onClick={openCard} className="btn btn-block btn-outline-success mb-3">Add board</button>

                    <div className={`card ${this.state.cardShow ? 'cardNone' : ''}`}>
                        <div className="card-body">
                            <textarea onChange={changeTitle} value={this.state.textarea} className='form-control' placeholder='Type here..' />

                            <button onClick={addBoard} className="btn btn-success d-block mt-3 ml-auto">+Add</button>
                        </div>
                    </div>
                </div>

                <div className="col-9">
                    <div className="row">
                        {this.state.boards.map((item, index) => {
                            return (
                                <>
                                    <div className="col-4 mb-3">
                                        <div className="card" key={index}>
                                            <div className="card-header">
                                                <h5><span onClick={() => editTitle(index)}>{item.title.toUpperCase()}</span></h5>
                                                <div onClick={() => { deleteTitle(index) }} className="task-close">&times;</div>
                                            </div>
                                            <div className="card-body">
                                                {item.tasks.map((item2, index2) => {
                                                    return (
                                                        <>
                                                            <div className="task" key={index2}>
                                                                <span onClick={() => editTask(index, index2)}>{item2}</span>
                                                                <div onClick={() => deleteTask(index, index2)} className="task-close">&times;</div>
                                                            </div>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                            <div className="card-footer">
                                                <textarea value={this.state.areas[index]} onChange={(event) => { changeAreas(event, index) }} className='form-control' placeholder='Type here...'></textarea>

                                                <button onClick={() => { addTasks(index) }} className="btn btn-outline-success d-block mt-3 ml-auto">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </>
        );
    };
}

export default TrelloSecond;