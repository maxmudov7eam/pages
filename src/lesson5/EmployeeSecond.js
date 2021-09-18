
import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import axios from 'axios';
import {BeatLoader} from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';

class EmployeeSecond extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            employees: [],
            deleteModal: false,
            selectedId: '',
            selectedItem: {},
            isLoading: true,
            saveLoading: false
        }
    }

    componentDidMount() {

        axios.get('https://nimadir.herokuapp.com/api/employee')
            .then((res2) => {
                this.setState({
                    employees: res2.data.object,
                    isLoading: false
                })
            })

    }
    


     
    render() {

        const changeModal = () => {
            this.setState({
                open: !this.state.open
            })
        }

        const changeDeleteModal = (id) => {
            // console.log(id);

            this.setState({
                deleteModal: !this.state.deleteModal,
                selectedId: id
            })
        }

        const saveEmployee = (event, error, values) => {
            // console.log(event);

            this.setState({
                saveLoading: true
            })

            if(this.state.selectedItem.id) {

                axios.put("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedItem.id , values)
                    .then((res) => {
                        getEmployee();
                        toast.success(res.data.message);
                        changeModal();
                        this.setState({
                            selectedItem: {}
                        })
                    })

                    .catch((error) => {
                        toast.error("Hatolik internetni tekshirib ko'ring")
                    })

                    .finally(() => {
                        this.setState({
                            saveLoading: false
                        })
                    })
            } else {
                
                axios.post("https://nimadir.herokuapp.com/api/employee", values) 
                .then((res) => {
                    toast.success(res.data.message)

                    getEmployee()

                    // console.log(res);

                    changeModal()
                })

                .catch((err) => {
                    toast.err("Hatolik internetni tekshirib ko'ring")
                })

                .finally(() => {
                    this.setState({
                        saveLoading: false
                    })
                })
            }
        }

        const deleteEmployee = () => {

            axios.delete("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedId)
                .then((res) => {
                    getEmployee();
                    toast.success(res.data.message)
                })
                .catch((error) => {
                    toast.error('Hatolik')
                })

                changeDeleteModal()

        }
        
        const getEmployee = () => {

            axios.get("https://nimadir.herokuapp.com/api/employee")
                .then((res2) => {
                    console.log(res2.data.object);
                    this.setState({
                        employees: res2.data.object
                    })
                })
                .catch((error) => {
                    toast.error('Xatolik')
                })
        }

        const showEditModal = (item) => {
            // console.log(item);

            this.setState({
                selectedItem: item
            });

            changeModal();
        }

        return(
            <>
                <div className="container">

                {/* {this.state.isLoading ? 
                    <div className="loader"> 
                        <BeatLoader color='gray' loading={this.state.isLoading} />
                    </div>
                 : ''} */}

                    <div className="row mt-5">
                        <div className="col-12">
                            <button onClick={changeModal} type='button' className="btn btn-success my-5 d-block">+Add</button>
                        </div>

                        {this.state.employees.map((item, index) => {
                            return(
                                <div className="col-4 mb-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>{item.firstName} {item.lastName} </h5>
                                        </div>
                                        <div className="card-body">
                                            <p>Age: <b>{item.age}</b></p>
                                            <p>Salary: <b>{item.salary}</b></p>
                                            <p>Position: <b>{item.position}</b></p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between">

                                            <button onClick={() => showEditModal(item)} type='button' 
                                            className="btn btn-primary">Edit</button>

                                            <button onClick={() => changeDeleteModal(item.id)} type='button' 
                                            className="btn btn-outline-danger">Delete</button>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                    <Modal isOpen={this.state.open} toggle={changeModal}>
                        <ModalHeader toggle={changeModal}>Add employee</ModalHeader>
                        <AvForm onSubmit={saveEmployee} model={this.state.selectedItem} >

                            <ModalBody>

                                <AvField type='text'  name='firstName' label='Employee name'/>

                                <AvField type='text' name='lastName' label='Employee surname' />

                                <AvField type='number' name='age' label='Employee age' />

                                <AvField type='number' name='salary' label='Employee salary' />

                                <AvField type='select' name='position' label='Employee position' >
                                    <option value="Director">Director</option>
                                    <option value="Prorector">Prorector</option>
                                    <option value="Driver">Driver</option>
                                    <option value="Biznesmen">Biznesmen</option>
                                </AvField>

                            </ModalBody>

                            <ModalFooter>
                                <button type='submit' disabled={this.state.saveLoading} className="btn btn-success">
                                {this.state.saveLoading ? <span className='spinner-border spinner-border-sm mr-1'></span> : '' }
                                    Save</button>

                                <button onClick={changeModal} type='button' className="btn btn-outline-danger">Cancel</button>
                            </ModalFooter>

                        </AvForm>
                        
                    </Modal>

                    <Modal isOpen={this.state.deleteModal} toggle={changeDeleteModal}>
                        <ModalBody>
                            <h4>Rostdanham o'chirmoqchimisiz?</h4>
                        </ModalBody>
                        <ModalFooter>
                            <button type='button' onClick={deleteEmployee} className="btn btn-outline-danger">Ha</button>
                            <button type='button' onClick={changeDeleteModal} className="btn btn-outline-secondary">Yo'q</button>
                        </ModalFooter>
                    </Modal>

                    <ToastContainer/>
                </div>
            </>
        )
    }
};

export default EmployeeSecond;