
import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firsts: [],
            seconds: []
        }
    }

    render() {

        const addFirst = (event) => {

            event.preventDefault();

            let firstText = event.target.firstName.value;

            let newFirst = {
                text1: firstText
            }
            console.log(event);
            console.log(event.target.childNotes);
            console.log(event.target.myBtn);

            event.target.reset();

            this.state.firsts.push(newFirst);

            this.setState({
                firsts: this.state.firsts
            })

        }

        const addSecond = (event) => {

            event.preventDefault();

            let secondText = event.target.secondName.value;

            let newSecond = {
                text2: secondText
            }

            event.target.reset();

            this.state.seconds.push(newSecond);

            this.setState({
                seconds: this.state.seconds
            })

        }

        return (
            <>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={addFirst}>
                                        <textarea name="firstName" placeholder='Type here...' className='form-control'></textarea>
                                        <button className="btn btn-primary mt-3 d-block ml-auto px-4 py-2" type='submit'>Add</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="row">
                                {this.state.firsts.map((item, index) => {
                                    return (
                                        <>
                                            <div className="col-4 mb-3">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5>{item.text1}</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        {this.state.seconds.map((item2, index2) => {
                                                            return (
                                                                <>
                                                                    <p><span>{item2.text2}</span> <span>&times;</span></p>
                                                                </>
                                                            )
                                                        })}
                                                    </div>
                                                    <div className="card-footer">
                                                        <form onSubmit={addSecond}>
                                                            <textarea name="secondName" placeholder='Type here...' className='form-control'></textarea>
                                                            <button className="btn btn-success mt-3" type='submit' name='myBtn' >Add</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default Todo;