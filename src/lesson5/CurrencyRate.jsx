import axios from 'axios';
import React, {useEffect, useState} from 'react'

const CurrencyRate = () => {
    const [ratesList, setRatesList] = useState([]);
    const [base, setBase] = useState('USD')

    useEffect(() => {
        getRates('USD');
    }, []);

    const getRates = async() => {
        const res =  await axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=c0605696fdb4a0242f65f17047506865&format=1');
        console.log(res);

        const { rates } = res.data;
        console.log(rates);

        const ratesTemp = []
        for(const [i, rate] of Object.entries(rates)) {
            console.log(rate);
            ratesTemp.push({i, rate})
        }
         setRatesList(ratesTemp)   
    }


    return (

    <>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <select name="selection" onChange={(e) => {
                            const value = e.target.value;
                            getRates(value)
                            setBase(value)
                            value={base}
                        }}>
                            {ratesList.map((item, index) => {
                                return (
                                    <>
                                        <option value={item.i} key={index}>{item.i}</option>
                                    </>
                                )
                            })}
                        </select>

                        <ul className="list-view">
                            {ratesList.map((item, index) => {
                                return (
                                    <li key={index} className="list">{item.i} = {item.rate}</li>
                                )
                            })}
                        </ul>

                        
                    </div>
                </div>
            </div>







            {/* <div className="container">
                <div className="row mt-5">
                    <div className="col-3">
                        <h4>From</h4>
                        <div className='card'>
                            <div className='card-body d-flex'>
                                <select>
                                    <option value="rub">RUB</option>
                                    <option value="usd">USD</option>
                                    <option value="sum">SUM</option>
                                </select>
                                <input type='number' name='sum1'  />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-9">
                        <h4>To</h4>
                        <div className="row">
                            <div className="col-3">
                                <div className='card'>
                                    <div className='card-body d-flex'>
                                        <select>
                                            <option value="rub">RUB</option>
                                            <option value="usd">USD</option>
                                            <option value="sum">SUM</option>
                                        </select>
                                        <input type='number' disabled name='sum1'  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default CurrencyRate;

