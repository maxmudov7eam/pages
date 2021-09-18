import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import axios from 'axios';
import {BeatLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';

class AboutStudents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            students: [],
            setModal: false,
            selectedId: '',
            selectedItem: {},
            isLoading: true,
            saveLoading: false
        }
    }

    componentDidMount() {

        axios.get("https://60978344e48ec000178729dc.mockapi.io/api/cars")
            .then((res2) => {
            this.setState({
                students: res2.data,
                isLoading: false
            })
        })

    }
         
    render() {

        // const changeModal = () => {
        //     this.setState({
        //         open: !this.state.open,
        //     })
        // }

        const saveStudent = (event, error, values) => {

            this.setState({
                saveLoading: true
            })

            if(this.state.selectedItem.id) {
                axios.put("https://60978344e48ec000178729dc.mockapi.io/api/cars/" + this.state.selectedItem.id, values)
                    .then(() => {
                        getStudent();
                        toast.success('Muavafaqiyatli saqlandi');
                        changeModal();
                        this.setState({
                            selectedItem: {}
                        })
                    })
                    .catch((error) => {
                        toast.error("Hatolik internetingizni tekshirib ko'ring")
                    })

                    .finally(() => {
                        this.setState({
                            saveLoading: false
                        })
                    })
            } else {
                axios.post("https://60978344e48ec000178729dc.mockapi.io/api/cars", values)
                .then((res) => {
                    getStudent();
                    toast.success('Muavafaqiyatli saqlandi');
                    changeModal();
                })
                .catch((error) => {
                    toast.error("Hatolik internetingizni tekshirib ko'ring")
                })
                .finally(() => {
                    this.setState({
                        saveLoading: false
                    })
                })
            }
             
        }

        const getStudent = () => {

            axios.get("https://60978344e48ec000178729dc.mockapi.io/api/cars")
                .then((res2) => {
                    console.log(res2.data.object);
                    this.setState({
                        students: res2.data
                    })
                })
                
        }

        const changeDeleteModal = (id) => {
            this.setState({
                setModal: !this.state.setModal,
                selectedId: id
            })
        }

        const deleteStudent = () => {
            axios.delete("https://60978344e48ec000178729dc.mockapi.io/api/cars/" + this.state.selectedId)
                .then(() => {
                    getStudent();
                    toast.success('Muafaqiyatli ochirildi')
                })
                .catch((error) => {
                    toast.error("Hatolik internetingizni tekshirib ko'ring")
                });

                changeDeleteModal();
        }


        const showEdit = (item) => {
            this.setState({
                selectedItem: item
            });
            changeModal();
        }

        const changeModal = () => {
            this.setState({
                selectedItem: {}
            })
            changeDeleteModal()
        }

        return (

            <div className="container">

                {this.state.isLoading ? 
                    <div className="loader">
                        <BeatLoader color='#000'  loading={this.state.isLoading} />
                    </div> : ''
                }
                
                <div className="row mt-5">
                    <div className="col-12">
                        <button onClick={changeModal} type='button' className="btn btn-outline-secondary">Add student</button>
                    </div>

                    <div className="col-12 my-5 py-5">
                        <table className="table table-hover">
                            <thead>
                                <tr>    
                                    <th>No</th>
                                    <th>Full name</th>
                                    <th>Phone number</th>
                                    <th>Birthday</th>
                                    <th>Type of education</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.students.map((item, index) => {
                                    return (
                                    <>
                                        <tr>
                                            <th>{index + 1}</th>
                                            <th>{item.firstName} {item.lastName}</th>
                                            <th>{item.phoneNumber}</th>
                                            <th>{item.birthday}</th>
                                            <th>{item.typeOfEducation}</th>
                                            <th>
                                                <button onClick={() => showEdit(item)} className="btn btn-primary mr-2" type='button'>Edit</button>
                                                <button onClick={() => changeDeleteModal(item.id)} className="btn btn-outline-danger" type='button'>Delete</button>
                                            </th>
                                        </tr>
                                    </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>


                <Modal toggle={() => {
                    this.setState({
                        selectedItem: {}
                    })
                }} isOpen={this.state.open}>
                    <ModalHeader toggle={changeModal}><h4>Add student's information</h4></ModalHeader>

                    <AvForm onSubmit={saveStudent} model={this.state.selectedItem}>
                        <ModalBody>
                            <AvField type='text' name='firstName' label='First name' />
                            <AvField type='text' name='lastName' label='Last name' />
                            <AvField type='number' name='phoneNumber' label='Phone number' />
                            <AvField type='date' name='birthday' label='Birthday' />

                            <AvField type='select' name='typeOfEducation' label='Type of education'> 
                                <option value="Kontrakt">Kontrakt</option>
                                <option value="Grand">Grand</option>
                            </AvField>

                        </ModalBody>

                        <ModalFooter>
                            <button className="btn btn-success" disabled={this.state.saveLoading} type='submit'>
                            {this.state.saveLoading ? <span className='spinner-border spinner-border-sm mr-1'></span> : ''} 
                                Save</button>
                            <button type='button' onClick={changeModal} className="btn btn-outline-danger">Cancel</button>
                        </ModalFooter>
                    </AvForm>

                </Modal>


                <Modal isOpen={this.state.setModal} toggle={changeDeleteModal}>
                    <ModalBody>
                        <h5>Are you sure to delete?</h5>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={deleteStudent} type='button' className="btn btn-outline-danger">Yes</button>
                        <button onClick={changeDeleteModal} type='button' className="btn btn-secondary">No</button>
                    </ModalFooter>
                </Modal>

                <ToastContainer/>
            </div>
        )
    };
}

export default AboutStudents;