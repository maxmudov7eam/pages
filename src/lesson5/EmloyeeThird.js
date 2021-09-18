
import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import axios from 'axios';
import {ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
// import Employee from './Employee';

class EmployeeThird extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            employees: [],
            closeModal: false,
            selectedId: '',
            selectedItem: {},
            isLoading: true,
            saveLoading: false
        }
    }

    componentDidMount() {

        axios.get("https://nimadir.herokuapp.com/api/employee")
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

        const deleteModal = (id) => {
            this.setState({
                closeModal: !this.state.closeModal,
                selectedId: id
            })
        }

        const saveEmployee = (event, error, values) => {

            this.setState({
                saveLoading: true
            })

            if(this.state.selectedItem.id) {
                axios.put("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedItem.id, values)
                    .then((res) => {
                        getEmployee();
                        toast.success(res.data.message);
                        changeModal();
                        
                        this.setState({
                            selectedItem: {}
                        })
                    })

                    .catch((error) => {
                        toast.error(" Hatolik internetni tekshirib ko'ring")
                    })

                    .finally(() => {
                        this.setState({
                            saveLoading: false
                        })
                    })

            } else {

                axios.post("https://nimadir.herokuapp.com/api/employee", values) 
                .then((res) => {
                    toast.success(res.data.message);

                    getEmployee();

                    changeModal();
                })

                .catch((error) => {
                    toast.error(" Hatolik internetni tekshirib ko'ring")
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
                    toast.error("Hatolik internetni tekshirib ko'ring")
                })
            
                deleteModal();
        }

        const getEmployee = () => {

            axios.get("https://nimadir.herokuapp.com/api/employee")
                .then((res2) => {
                    this.setState({
                        employees: res2.data.object
                    })
                })

        }

        const showEditModal = (item) => {
            this.setState({
                selectedItem: item
            });

            changeModal();
        }





        return(
            <div className="container">
{/* 
                { this.state.isLoading ?  <div className="loader">
                    <ClipLoader  loading={this.state.isLoading} />
                </div> : '' } */}

                <div className="row my-5">
                    <div className="col-12">
                        <button onClick={changeModal} type='button' className="btn btn-outline-dark">Add employee</button>
                    </div>
                    
                    <table className="table my-5">
                        <thead>
                            <tr>
                                <th>Full name</th>
                                <th>Age</th>
                                <th>Salary</th>
                                <th>Position</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((item, index) => {
                               return(
                                   <>
                                    <tr>
                                        <th>{item.firstName} {item.lastName}</th>
                                        <th>{item.age}</th>
                                        <th>{item.salary}</th>
                                        <th>{item.position}</th>
                                        <th>
                                            <button onClick={() => showEditModal(item)} className="btn btn-primary mr-2" type='button'>Edit</button>
                                            <button onClick={() => deleteModal(item.id)} className="btn btn-outline-danger" type='button'>Delete</button>
                                        </th>
                                    </tr>
                                   </>
                               )
                            })}
                        </tbody>
                    </table>
                </div>


               

                <Modal isOpen={this.state.open} toggle={changeModal}>
                    <ModalHeader toggle={changeModal}><h4>Add Employee</h4></ModalHeader>

                    <AvForm onSubmit={saveEmployee} model={this.state.selectedItem} >
                        <ModalBody>

                            <AvField type='text' label='Employee name' name='firstName' />
                            <AvField type='text' label='Employee Employee surname' name='lastName' />
                            <AvField type='number' label='Employee age' name='age' />
                            <AvField type='number' label='Employee salary' name='salary' />

                            <AvField type='option' name='position' label='Employee position' >
                                <option value="worker">Worker</option>
                                <option value="driver">Driver</option>
                                <option value="accountOfficer">Account officer</option>
                                <option value="director">Director</option>
                            </AvField>

                        </ModalBody>

                        <ModalFooter>
                            <button className="btn btn-success" disabled={this.state.saveLoading}
                            type='submit'>
                            {this.state.saveLoading ? <span className='spinner-border spinner-border-sm mr-1'></span> : ''}
                            Save</button>
                            <button onClick={changeModal} className="btn btn-outline-danger" type='button'>Cancel</button>
                        </ModalFooter>

                    </AvForm>

                </Modal>

                <Modal isOpen={this.state.closeModal} toggle={deleteModal}>
                    <ModalBody>
                        <h5 color='red'>Are you sure to delete?</h5>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={deleteEmployee} disabled={this.state.saveLoading} className="btn btn-danger" type='button'>
                        {this.state.saveLoading ? <span className='spinner-border spinner-border-sm mr-1'></span> : ''}
                            Yes</button>
                        <button onClick={deleteModal} className="btn btn-outline-dark" type='button'>No</button>
                    </ModalFooter>
                </Modal>


                <ToastContainer/>
            </div>
        );
    };
}

export default EmployeeThird;