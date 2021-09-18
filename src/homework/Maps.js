// import React from 'react';


// class Maps extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {

//             users: [
//                 {
//                     name: 'Nizom',
//                     surname: 'Muxammatov',
//                     phoneNumber: '+998934366331',
//                     email: 'nizom702@gmail.com'
//                 },
//                 {
//                     name: 'Abdulaziz',
//                     surname: 'Azizxodjaev',
//                     phoneNumber: '+887899633221',
//                     email: 'abdulaziz@gmail.com',
//                 },
//                 {
//                     name: 'Palonchi',
//                     surname: 'Palonchiev',
//                     phoneNumber: '+998998522114',
//                     email: 'palonchi@gmail.com'
//                 }
//             ],

//             products: [],
//             selectedIndex: -1
//         }
//     }

//     render() {

//         const addProduct = (event) => {

//             // console.log('keldi');

//             event.preventDefault();

//             let productName = event.target.text.value;
//             let productPrice = event.target.number.value;
//             let productColor = event.target.color.value;

//             event.target.reset();

//             let newProduct = {
//                 name: productName,
//                 price: productPrice,
//                 color: productColor
//             };

//             if(this.state.selectedIndex >= 0) {
//                 this.state.products[this.state.selectedIndex] = newProduct;
//             } else {
//                 this.state.products.push(newProduct);
//             }

//             this.setState({
//                 products: this.state.products,
//                 selectedIndex: -1
//             })

//         }

//         const deleteProduct = (index) => {

//             this.state.products.splice(index, 1);

//             this.setState({
//                 products: this.state.products
//             })

//         }

//         const editProduct = (index) => {
//             this.setState({
//                 selectedIndex: index
//             })
//         }


//         return (
//             <div className="maps">
//                 <div className="container">
//                     <div className="row my-5">
//                         {this.state.users.map((item, index) => {
//                             return (
//                                 <div className="col-4" key={index}>
//                                     <div className="card">
//                                         <div className="card-header">
//                                             <h3>{item.name} {item.surname}</h3>
//                                         </div>
//                                         <div className="card-body">
//                                             <p>Phone: <b>{item.phoneNumber}</b></p>
//                                             <p>Email: <b>{item.email}</b></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>

//                     <div className="row mt-5">
//                         <div className="col-3">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <form onSubmit={addProduct}>
//                                         <input type="text" defaultValue={this.state.products[this.state.selectedIndex]?.name} placeholder='Enter text' name='text' className='form-control ' />

//                                         <input type="number"  defaultValue={this.state.products[this.state.selectedIndex]?.price} placeholder='Enter number' name='number' className='form-control my-3' />

//                                         <input type="color"  defaultValue={this.state.products[this.state.selectedIndex]?.color} name='color' className='form-control ' />

//                                         <button className="btn btn-outline-success d-block ml-auto mt-3" type='submit'>+Add</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-9">
//                             <div className="row">
//                                 {this.state.products.map((item, index) => {
//                                     return (
//                                         <div className="col-4 mb-3">
//                                             <div className="card">
//                                                 <div className="card-header">
//                                                     <h5>{item.name}</h5>
//                                                 </div>
//                                                 <div className="card-body">
//                                                     <p>Price: <b>{item.price}</b></p>
//                                                     <p>Color: <b>{item.color}</b></p>
//                                                 </div>
//                                                 <div className="card-footer d-flex justify-content-between">
//                                                     <button className="btn btn-primary" type='button' onClick={() => {editProduct(index)}}>Edit</button>
//                                                     <button className="btn btn-outline-danger" type='button' onClick={() => { deleteProduct(index) }}>Delete</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Maps;






// import React from 'react';

// class Maps extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             products: [],
//             selectedIndex: -1
//         }

//     }
//     render() {

//         const addProduct = (event) => {

//             event.preventDefault();

//             let productName = event.target.name.value;
//             let productPrice = event.target.price.value;
//             let productColor = event.target.color.value;

//             let newProduct = {
//                 name: productName,
//                 price: productPrice,
//                 color: productColor
//             }

//             event.target.reset();

//             if(this.state.selectedIndex >= 0) {
//                 this.state.products[this.state.selectedIndex] = newProduct
//             } else {
//                 this.state.products.push(newProduct);
//             }

//             this.setState({
//                 products: this.state.products,
//                 selectedIndex: -1
//             })

//         }

//         const deleteProduct = (index) => {

//             this.state.products.splice(index, 1);

//             this.setState({
//                 products: this.state.products
//             })

//         }

//         const editProduct = (index) => {
//             this.setState({
//                 selectedIndex: index
//             })
//         }

//         return (
//             <>

//                 <div className="container">
//                     <div className="row mt-5">

//                         <div className="col-3">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <form onSubmit={addProduct}>
//                                         <input type="text" defaultValue={this.state.products[this.state.selectedIndex]?.name} placeholder='Product name: ' className="form-control" name='name'/>
//                                         <input type="number" defaultValue={this.state.products[this.state.selectedIndex]?.price} placeholder='Product price: ' className="form-control my-3" name='price'/>
//                                         <input type="color" defaultValue={this.state.products[this.state.selectedIndex]?.color} className="form-control" name='color'/>

//                                         <button className="btn btn-outline-success d-block ml-auto mt-3" type='submit'>+Add</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-9">
//                             <div className="row">
//                                 {this.state.products.map((item, index) => {

//                                     return (
//                                         <div className="col-4">
//                                             <div className="card">
//                                                 <div className="card-header">
//                                                     <h5>{item.name}</h5>
//                                                 </div>
//                                                 <div className="card-body">
//                                                     <p>Price: <b>{item.price}</b></p>
//                                                     <p>Color: <b>{item.color}</b></p>
//                                                 </div>
//                                                 <div className="card-footer d-flex justify-content-between">
//                                                     <button className="btn btn-primary" type='button' onClick={() => {editProduct(index)}}>Edit</button>
//                                                     <button className="btn btn-outline-danger" type='button' onClick={() => {deleteProduct(index)}}>Delete</button>
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
// }

// export default Maps;










import React from 'react';

class Maps extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            informations: [],
            selectedIndex: -1
        }
    }
    render() {

        const addInformaton = (event) => {

            event.preventDefault();

            let studentName = event.target.name.value;
            let studentSurname = event.target.surname.value;
            let studentDate = event.target.date.value;
            let studentType = event.target.typeOfTeaching.value;

            let newInformation = {
                name: studentName,
                surname: studentSurname,
                date: studentDate,
                typeOfTeaching: studentType
            }

            event.target.reset();

            if(this.state.selectedIndex >= 0) {
                this.state.informations[this.state.selectedIndex] = newInformation;
            } else {
                this.state.informations.push(newInformation);
            }

            this.setState({
                informations: this.state.informations,
                selectedIndex: -1
            })

        }

        const deleteInformation = (index) => {
            this.state.informations.splice(index, 1);

            this.setState({
                informations: this.state.informations
            })
        }

        const editInformation = (index) => {
            this.setState({
                selectedIndex: index
            })
        }

        return (
            <>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={addInformaton}>
                                        
                                        <input type="text" defaultValue={this.state.informations[this.state.selectedIndex]?.name} placeholder='Name: ' name='name' className="form-control"/>
                                        <input type="text" defaultValue={this.state.informations[this.state.selectedIndex]?.surname}  placeholder='Surname: ' name='surname' className="form-control my-3"/>
                                        <input type="date"  defaultValue={this.state.informations[this.state.selectedIndex]?.date} name='date' className="form-control"/>
                                        <select defaultValue={this.state.informations[this.state.selectedIndex]?.typeOfTeaching}  name="typeOfTeaching" className='form-control my-3'>
                                            <option value="Grand">Grand</option>
                                            <option value="Kontrakt">Kontrakt</option>
                                        </select>
                                        <button className="btn btn-outline-success ml-auto d-block" type='submit'>+Add</button>

                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-9">
                            <table className="table table-striped table-hover">
                                <thead >
                                    <tr>
                                        <th >№</th>
                                        <th >Ism - Familiya</th>
                                        <th >Tug'ilgan sana</th>
                                        <th >Talim turi</th>
                                        <th ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.informations.map((item, index) => {
                                        return (
                                            <>
                                                <tr>
                                                    <th >{index + 1}</th>
                                                    <th >{item.name} - {item.surname}</th>
                                                    <th >{item.date}</th>
                                                    <th >{item.typeOfTeaching}</th>
                                                    <th className="d-flex ">
                                                        <button className="btn btn-primary" type='button' onClick={() => {editInformation(index)}}>Edit</button>
                                                        <button className="btn btn-outline-danger ml-2" type='button' onClick={() => {deleteInformation(index)}}>Delete</button>
                                                    </th>
                                                </tr>
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Maps;

