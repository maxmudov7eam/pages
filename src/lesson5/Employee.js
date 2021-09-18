// import React, {Component} from 'react';
// import axios from 'axios';
// import {Modal, ModalHeader,ModalBody, ModalFooter} from 'reactstrap';
// import {AvForm, AvField} from 'availity-reactstrap-validation'

// class Employee extends Component {

//     constructor(props) {
//         super(props);

        
//         console.log('THis is Constructor');

//         this.state = {
//             open: false,
//             employees: []        
//         }
//     }
//     render() {

//         const changeModal = () => {
//             this.setState({
//                 open: !this.state.open,
//             })
//         }

//         const saveEmployee = (event, errors, values) => {

//             console.log(values);

//             axios.post('https://nimadir.herokuapp.com/api/employee', values)
//                 .then((res) => {

//                     console.log(res.data);

//                     // this.setState({
//                     //     employees: res.data
//                     // })

//                 })

//         }

//         return(
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <button onClick={changeModal} type='button' className="btn btn-success my-5">Add</button>
//                     </div>

//                     {/* <div className="row mt-5">
//                         {this.state.employees.map((item, index) => {
//                             return(
//                                 <h5>{item.firstName}</h5>
//                             )
//                         })}
//                     </div> */}
//                 </div>


//                 <Modal isOpen={this.state.open} toggle={changeModal}>
//                     <ModalHeader toggle={changeModal}>Add Employee</ModalHeader>

//                     <AvForm onSubmit={saveEmployee}>
//                         <ModalBody>

//                             <AvField type='text' placeholder='' name='firstName' label='Employee name'/>

//                             <AvField type='text' placeholder='' name='lastName' label='Employee surname'/>

//                             <AvField type='number' name='age' label='Employee age'/>

//                             <AvField type='number' name='salary' label='Employee salary'/>

//                             <AvField type='select' name='posiiton' label='Employee position'>
//                                 <option value="Director">Director</option>
//                                 <option value="Security">Security</option>
//                                 <option value="Driver">Driver</option>
//                                 <option value="Programmer">Programmer</option>
//                             </AvField>

//                         </ModalBody>
//                         <ModalFooter>
//                             <button type="sumbit" className="btn btn-success">Save</button>
//                             <button onClick={changeModal} type="button" className="btn btn-outline-danger">Cancel</button>
//                         </ModalFooter>
//                     </AvForm>

//                 </Modal>
//             </div>
//         )
//     }
// }

// export default Employee;


/**
 * Created by Sherlock on 08.05.2021.
 */

import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import axios from 'axios';
import {BeatLoader} from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';

class Employee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            employees: [],
            deleteOpen: false,
            selectedId: '',
            seletedItem: {},
            isLoading: true,
            saveLoading: false
        }
    }

    componentDidMount() {

        axios.get("https://nimadir.herokuapp.com/api/employee")
            .then((res2) => {

                console.log(res2);

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
            this.setState({
                deleteOpen: !this.state.deleteOpen,
                selectedId: id,
            })
        }

        const saveEmployee = (event, errors, values) => {

            console.log(values);

            this.setState({
                saveLoading: true,
            })

            if(this.state.seletedItem.id) {
                axios.put('https://nimadir.herokuapp.com/api/employee/' + this.state.seletedItem.id, values)
                    .then((res) => {
                        getEmployee();
                        toast.success(res.data.message);
                        changeModal();
                        this.setState({
                            seletedItem: {}
                        })
                    })

                    .catch((error) => {
                        toast.error('Xatolik')
                    })

                    .finally(() => {
                        this.setState({
                            saveLoading: false,
                        })
                    })
                } else {
                    axios.post("https://nimadir.herokuapp.com/api/employee", values)
                        .then((res) => {

                        toast.success(res.data.message);

                        getEmployee();

                        console.log(res);

                        changeModal();
                    })

                    .catch((error) => {
                        toast.error('Xatolik')
                    })
                    
                    .finally(() => {
                        this.setState({
                            saveLoading: false,
                        })
                    })
            }

            
        }

        const deleteEmployee = () => {
            axios.delete('https://nimadir.herokuapp.com/api/employee/' + this.state.selectedId)
                .then((res) => {
                    getEmployee();
                    toast.success(res.data.message);
                })
                .catch((error) => {
                    toast.error('Hatolik')
                });

                changeDeleteModal();
        }

        const getEmployee = () => {

            axios.get("https://nimadir.herokuapp.com/api/employee")
                .then((res2) => {
                    console.log(res2);
                    this.setState({
                        employees: res2.data.object
                    })
                })

        }

        const showEditModal = (item) => {
            console.log(item);

            this.setState({
                seletedItem: item,
            })

            changeModal();
        }

        return (
            <div className="container">

                {this.state.isLoading ? 
                    <div className="loader">
                        <BeatLoader color='#000' loading={this.state.isLoading} />
                    </div> : ''
                }

                <div className="row">
                    <div className="col-12">
                        <button type="button" className="btn btn-success my-5" onClick={changeModal}>Add</button>
                    </div>

                    {this.state.employees.map((item, index) => {
                       return (
                           <div className="col-4 mt-3">
                               <div className="card">
                                   <div className="card-header">
                                       <h5>{item.firstName} {item.lastName}</h5>
                                   </div>
                                   <div className="card-body">
                                       <p>Age: <b>{item.age}</b></p>
                                       <p>Salary: <b>{item.salary}</b></p>
                                       <p>Position: <b>{item.position}</b></p>
                                   </div>
                                   <div className="card-footer d-flex justify-content-between">
                                       <button onClick={() => showEditModal(item)} type="button" className="btn btn-primary">Edit</button>
                                       <button onClick={() => changeDeleteModal(item.id)} type="button" className="btn btn-danger">Delete</button>
                                   </div>
                               </div>
                           </div>
                       )
                    })}
                </div>

                <Modal isOpen={this.state.open} toggle={changeModal}>
                    <ModalHeader toggle={changeModal}>Add Employee</ModalHeader>
                    <AvForm onSubmit={saveEmployee} model={this.state.seletedItem}>
                        <ModalBody>

                            <AvField type="text" name="firstName" label="Employee name"/>

                            <AvField type="text" name="lastName" label="Employee surname"/>

                            <AvField type="number" name="age" label="Employee age"/>

                            <AvField type="number" name="salary" label="Employee salary"/>

                            <AvField type="option" name="position" label="Employee position">
                                <option value="Director">Director</option>
                                <option value="Security">Security</option>
                                <option value="Driver">Driver</option>
                                <option value="Programmer">Programmer</option>
                            </AvField>
                        </ModalBody>
                        <ModalFooter>
                            <button type="submit" disabled={this.state.saveLoading} className="btn btn-success">
                                {this.state.saveLoading ? <span className='spinner-border spinner-border-sm mr-1'></span> : ''} 
                                Save
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={changeModal}>Cancel</button>
                        </ModalFooter>
                    </AvForm>
                </Modal>
           
                <Modal isOpen={this.state.deleteOpen} toggle={changeDeleteModal}>
                    <ModalBody>
                        <h4>Rostdan ham o'chirmoqchimisiz?</h4>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={deleteEmployee} className="btn btn-outline-danger" type='button'>Ha</button>
                        <button className="btn btn-outline-secondary" onClick={changeDeleteModal} type='button'>Yo'q</button>
                    </ModalFooter>
                </Modal>
                
                <ToastContainer/>
            </div>
        );
    }
}

export default Employee;