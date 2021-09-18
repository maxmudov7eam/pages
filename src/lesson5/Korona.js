
import React, {Component} from 'react';
// import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
// import {AvForm, AvField} from 'availity-reactstrap-validation';
import axios from 'axios';
// import TodoList from '../homework/TodoList'
import CountUp from 'react-countup';
import Employee from '../lesson5/Employee';
import EmployeeSecond from '../lesson5/EmployeeSecond';
import EmployeeThird from '../lesson5/EmloyeeThird';
import AboutStudents from '../lesson5/AboutStudents'

class Korona extends Component {

    constructor(props) {
        super(props);

        this.state = {

            all: [],
            countries: []
            
        }
    }

    componentDidMount() {

        axios.get('https://api.covid19api.com/summary')
            .then((res) => {
                console.log(res);
                this.setState({
                    countries: res.data.Countries,
                });
            })
    }


    render() {
        return(

            <div className="container">
                <div className="row mt-5">

                    <EmployeeSecond />
                    
                    {/* <Employee/> */}

                    {/* <EmployeeThird/> */}

                    <AboutStudents/>
{/* 
                    <div className="col-10 offset-1  ">
                        <div className="my-5 text-center">
                            <h1 className='text-danger'>
                                <CountUp end={352415} duration={7} />
                            </h1>
                            <h3>requests served by the API</h3>
                        </div>
                        <table className="table table-hover">
                            <thead className=''>
                                <tr>
                                    <th>No</th>
                                    <th>Country</th>
                                    <th>New confirmed</th>
                                    <th>Total confirmed</th>
                                    <th>New recovered</th>
                                    <th>Total recovered</th>
                                    <th>New deaths</th>
                                    <th>Total deaths</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.countries.map((item, index) => {
                                    return(
                                        <>
                                            <tr>
                                                <th>{index + 1}</th>
                                                <th>{item.Country}</th>
                                                <th>{item.NewConfirmed}</th>
                                                <th>{item.TotalConfirmed}</th>
                                                <th>{item.NewRecovered}</th>
                                                <th>{item.TotalRecovered}</th>
                                                <th>{item.NewDeaths}</th>
                                                <th>{item.TotalDeaths}</th>
                                            </tr>
                                        </>
                                    )
                                }) }
                            </tbody>
                        </table>
                   
                    </div>
                     */}
                </div>
            </div>
        )
    };
}

export default Korona;