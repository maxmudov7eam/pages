
// import React, { Component } from 'react';

// class Buxgalteria extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             informations: [],
//             tableInfos: [],
//             textarea: ''
//         }

//     }

//     render() {

//         const addInformation = (event) => {

//             let firstName = event.target.enteringName.value;
//             let enteringMoney = event.target.enteringMoney.value;

//             event.preventDefault();

//             let newInformation = {
//                 name: firstName,
//                 money: enteringMoney
//             }

//             this.state.informations.push(newInformation);

//             this.setState({
//                 informations: this.state.informations
//             });

//             event.target.reset();

//         }

//         const kirim = (event) => {
//             event.preventDefault();

//             let kirimMoney = event.target.kirimMoney.value;
//             let kirimFor = event.target.kirimFor.value;


//             let newKirim = {
//                 kirimSum: kirimMoney,
//                 kirimWhy: kirimFor,
//                 type: 'Kirim'
//             }

//             this.state.tableInfos.push(newKirim);

//             this.setState({
//                 tableInfos: this.state.tableInfos,
//             })
//             event.target.reset();

//         }

        
//         const chiqim = (event) => {
//             event.preventDefault();

//             let kirimMoney = event.target.kirimMoney.value;
//             let kirimFor = event.target.kirimFor.value;

//             let newChiqim = {
//                 kirimSum: kirimMoney,
//                 kirimWhy: kirimFor,
//                 type: 'Chiqim'
//             }

//             this.state.tableInfos.push(newChiqim);

//             this.setState({
//                 tableInfos: this.state.tableInfos
//             })
//             event.target.reset();

//         }

//         return (

//             <>

//                 <div className="section mt-5 pt-5">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-6 offset-3">
//                                 <form onSubmit={addInformation}>

//                                     <input type="text" name='enteringName' className="form-control" placeholder='Enter  name...'/>

//                                     <input type="number" name='enteringMoney' className='form-control mt-3' placeholder='Enter money..'/>

//                                     <button type='submit' className="btn btn-outline-success mt-3 ml-auto d-block">Enter</button>

//                                 </form>  
//                             </div>
//                         </div>

//                         <div className="row mt-5">
//                             <div className="col-6 offset-3 text-center">
//                                 {this.state.informations.map((item, index) => {
//                                     return (
//                                         <>

//                                             <h4>Salom {item.name.toUpperCase()}</h4>
//                                             <p>Hisobingizda <b>{item.money}</b>  bor</p>

//                                             <div className="d-flex mt-3 align-items-center justify-content-center">
//                                                 <button type='button'  className="btn btn-success d-block">Kirim</button>
//                                                 <button  type='button' className="btn btn-outline-danger d-block ml-3">Chiqim</button>
//                                             </div>

//                                         </>
//                                     )
//                                 })}
//                             </div>
//                         </div>

//                         <div className="row my-5">
//                             <div className="col-6 offset-4">
//                                 <form onSubmit={kirim}>
//                                     <input type="number" placeholder='Kirim uchun Enter how much you need' className='form-control' name='kirimMoney'/>
//                                     <input type="text" placeholder='Enter why you need' name='kirimFor' className="form-control my-3"/>
//                                     <button type='submit' className="btn btn-outline-primary  d-block ml-auto">Save</button>
//                                 </form>
//                             </div>
//                         </div>

//                         <div className="row my-5">
//                             <div className="col-6 offset-4">
//                                 <form onSubmit={chiqim}>
//                                     <input type="number" placeholder='Chiqim uchun Enter how much you need' className='form-control' name='kirimMoney'/>
//                                     <input type="text" placeholder='Enter why you need' name='kirimFor' className="form-control my-3"/>
//                                     <button type='submit' className="btn btn-outline-primary d-block ml-auto">Save</button>
//                                 </form>
//                             </div>
//                         </div>

//                         <div className="row mt-5">
//                             <div className="col-8 offset-2">
//                                 <table className="table">
//                                     <thead>
//                                         <tr>
//                                             <th>No</th>
//                                             <th>Why</th>
//                                             <th>How much</th>
//                                             <th>Type of operation</th>
//                                         </tr>
//                                     </thead>
//                                         <tbody>
//                                             {this.state.tableInfos.map((item, index) => {
//                                                 return(
//                                                     <>
//                                                         <tr className='py-4'>
//                                                             <th>{index + 1}</th>
//                                                             <th>{item.kirimWhy}</th>
//                                                             <th>{item.kirimSum}</th>
//                                                             <th >{item.type}</th>
//                                                         </tr>
//                                                     </>
//                                                 )
//                                             })}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>                  
//                 </div>






//                 <div className="section mt-5 pt-5">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-6 offset-3">
//                                 <form onSubmit={addInformation}>

//                                     <input type="text" name='enteringName' className="form-control" placeholder='Enter  name...'/>

//                                     <input type="number" name='enteringMoney' className='form-control mt-3' placeholder='Enter money..'/>

//                                     <button type='submit' className="btn btn-outline-success mt-3 ml-auto d-block">Enter</button>

//                                 </form>  
//                             </div>
//                         </div>

//                         <div className="row mt-5">
//                             <div className="col-6 offset-3 text-center">
//                                 {this.state.informations.map((item, index) => {
//                                     return (
//                                         <>

//                                             <h4>Salom {item.name.toUpperCase()}</h4>
//                                             <p>Hisobingizda <b>{item.money}</b>  bor</p>

//                                             <div className="d-flex mt-3 align-items-center justify-content-center">
//                                                 <button type='button'  className="btn btn-success d-block">Kirim</button>
//                                                 <button  type='button' className="btn btn-outline-danger d-block ml-3">Chiqim</button>
//                                             </div>

//                                         </>
//                                     )
//                                 })}
//                             </div>
//                         </div>

//                         <div className="row my-5">
//                             <div className="col-6 offset-4">
//                                 <form onSubmit={kirim}>
//                                     <input type="number" placeholder='Kirim uchun Enter how much you need' className='form-control' name='kirimMoney'/>
//                                     <input type="text" placeholder='Enter why you need' name='kirimFor' className="form-control my-3"/>
//                                     <button type='submit' className="btn btn-outline-primary  d-block ml-auto">Save</button>
//                                 </form>
//                             </div>
//                         </div>

//                         <div className="row my-5">
//                             <div className="col-6 offset-4">
//                                 <form onSubmit={chiqim}>
//                                     <input type="number" placeholder='Chiqim uchun Enter how much you need' className='form-control' name='kirimMoney'/>
//                                     <input type="text" placeholder='Enter why you need' name='kirimFor' className="form-control my-3"/>
//                                     <button type='submit' className="btn btn-outline-primary d-block ml-auto">Save</button>
//                                 </form>
//                             </div>
//                         </div>

//                         <div className="row mt-5">
//                             <div className="col-8 offset-2">
//                                 <table className="table">
//                                     <thead>
//                                         <tr>
//                                             <th>No</th>
//                                             <th>Why</th>
//                                             <th>How much</th>
//                                             <th>Type of operation</th>
//                                         </tr>
//                                     </thead>
//                                         <tbody>
//                                             {this.state.tableInfos.map((item, index) => {
//                                                 return(
//                                                     <>
//                                                         <tr className='py-4'>
//                                                             <th>{index + 1}</th>
//                                                             <th>{item.kirimWhy}</th>
//                                                             <th>{item.kirimSum}</th>
//                                                             <th >{item.type}</th>
//                                                         </tr>
//                                                     </>
//                                                 )
//                                             })}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>                  
//                 </div>
//             </>

//         )
//     }
// }

// export default Buxgalteria;

