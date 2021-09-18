import React, {useEffect, useState} from 'react'
import CurrencyRow from './CurrencyRow';
import '../sass/currency.scss'

const Main = () => {

    const [currencyOptions, setCurrencyOptions] = useState([]);
    console.log(currencyOptions);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [amount, setAmount] = useState(1);
    const [amountFromCurrency, setAmountFromCurrency] = useState(true);
    const [exchangeRate, setExchangeRate] = useState();
    const [froms, setFroms] = useState([]);
    const [tos, setTos] = useState([]);

    const [rows, setRows] = useState([
        {
            from: '',
            to: '',
            fromValue: 0,
            toValue: 0,
            tos: [
                {
                    from: '',
                    to: '',
                    fromValue: 0,
                    toValue: 0
                }
            ]
        }
    ])

    let newFroms = {
        amount: 1,
        fromCurrency: '',
        tos: [{
            amount: 1,
            toCurrency: ''
        }]
    }

    const addTos = async (index) => {
        // tos.push(newFroms.tos);
        // newFroms.tos.amount = 1
        let tempRows = rows;
        tempRows.
        setRows(tempRows[index].tos.concat( {
            from: '',
            to: '',
            fromValue: 0,
            toValue: 0
        }));

    }

    const addFroms = () => {
        // froms.push(newFroms);
        // console.log('sd');
        // newFroms.amount = 1
        let tempRows = rows
        // tempRows.push()
        setRows(tempRows.concat(tempRows[tempRows.length - 1]));
    }

    

    const URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=c0605696fdb4a0242f65f17047506865&format=1';

    console.log(exchangeRate + "rates");

    let toAmount, fromAmount;

    if(amountFromCurrency) {
        fromAmount = amount;
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount; 
        fromAmount = amount / exchangeRate;
    }

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                const firstCurrency = Object.keys(data.rates)[0]
                console.log("dates" + data);
                setCurrencyOptions([data.base, ...Object.keys(data.rates)])
                setFromCurrency(data.base)
                setToCurrency(firstCurrency);
                setExchangeRate(data.rates[firstCurrency])
            })
    },[]);

    useEffect(() => {
        if(fromCurrency != null && toCurrency != null) {
            fetch(`${URL}?base=${fromCurrency}&symbols=${toCurrency}`)
            .then(res => res.json())
            .then(data => setExchangeRate(data.rates[toCurrency]))
        }
    }, [fromCurrency, toCurrency])


    const handleFromAmountChange = (e) => {
        setAmount(e.target.value);
        setAmountFromCurrency(true)
    }
    const handleToAmountChange = (e) => {
        setAmount(e.target.value);
        setAmountFromCurrency(false);
    }

    const deleteTos = (index) => {
        tos.splice(index, 1);
        setTos()
    }


    return (
        <>
        <div className="container mt-5">
                    <div>
                        <div className="row flex-nowrap">
                            <div className="col-4">
                                <h4 class>From</h4>
                                <CurrencyRow 
                                    currencyOptions={currencyOptions}
                                    selectedCurrency={fromCurrency}
                                    onChangeCurrency={e => setFromCurrency(e.target.value)}
                                    amount={fromAmount}
                                    onChangeAmount={handleFromAmountChange}
                                    froms={froms}
                                />
                                <button onClick={addFroms} className="btn btn-success ">+</button>
                            </div>
                            <div className="col-4 ">
                                    <h4 class>To</h4>
                                        <CurrencyRow 
                                            currencyOptions={currencyOptions}
                                            selectedCurrency={toCurrency}
                                            onChangeCurrency={e => setToCurrency(e.target.value)}
                                            amount={toAmount}
                                            onChangeAmount={handleToAmountChange}
                                            froms={froms}
                                        />
                                        {tos.map((item, index) => {
                                            return (
                                                <div>
            
                                                    <CurrencyRow 
                                                        currencyOptions={currencyOptions}
                                                        selectedCurrency={toCurrency}
                                                        onChangeCurrency={e => setToCurrency(e.target.value)}
                                                        amount={toAmount}
                                                        onChangeAmount={handleToAmountChange}
                                                        froms={froms}
                                                    />
            
                                                </div>
                                            )
                                        })}
                                    {/* <CurrencyRow 
                                        currencyOptions={currencyOptions}
                                        selectedCurrency={toCurrency}
                                        onChangeCurrency={e => setToCurrency(e.target.value)}
                                        amount={toAmount}
                                        onChangeAmount={handleToAmountChange}
                                        froms={froms}
                                    /> */}
                                    <button onClick={addTos} className="btn btn-success">+</button>
                                </div>
                        </div>
                    </div>
            {froms.map((item1, index1) => {
                return(
                    <div>
                        <div className="row flex-nowrap">
                            <div className="col-4">
                                <CurrencyRow 
                                    currencyOptions={currencyOptions}
                                    selectedCurrency={fromCurrency}
                                    onChangeCurrency={e => setFromCurrency(e.target.value)}
                                    amount={fromAmount}
                                    onChangeAmount={handleFromAmountChange}
                                    froms={froms}
                                />
                                {/* <button onClick={addFroms} className="btn btn-success myBtn1">+</button> */}
                            </div>
                            <div className="col-4">
                                        {tos.map((item, index) => {
                                            return (
                                                <div>
            
                                                    <CurrencyRow 
                                                        currencyOptions={currencyOptions}
                                                        selectedCurrency={toCurrency}
                                                        onChangeCurrency={e => setToCurrency(e.target.value)}
                                                        amount={toAmount}
                                                        onChangeAmount={handleToAmountChange}
                                                        froms={froms}
                                                    />
                                                    <span className='deleteBtn' onClick={() => deleteTos(index)}>&times;</span>
            
                                                </div>
                                            )
                                        })}
                                    {/* <CurrencyRow 
                                        currencyOptions={currencyOptions}
                                        selectedCurrency={toCurrency}
                                        onChangeCurrency={e => setToCurrency(e.target.value)}
                                        amount={toAmount}
                                        onChangeAmount={handleToAmountChange}
                                        froms={froms}
                                    /> */}
                                    {/* <button onClick={addTos} className="btn btn-success">+</button> */}
                                </div>
                        </div>
                    </div>
                )
            })}


            {rows.map((item, index) => (
                <>
                 <CurrencyRow 
                                    currencyOptions={currencyOptions}
                                    selectedCurrency={fromCurrency}
                                    onChangeCurrency={e => setFromCurrency(e.target.value)}
                                    amount={fromAmount}
                                    onChangeAmount={handleFromAmountChange}
                                    froms={froms}
                                    
                                />
                                <button onClick={addFroms} className="btn btn-success ">+</button>
                                {item.tos.map((item2, index2) => (
                                    <>
                                    <CurrencyRow 
                                    currencyOptions={currencyOptions}
                                    selectedCurrency={fromCurrency}
                                    onChangeCurrency={e => setFromCurrency(e.target.value)}
                                    amount={fromAmount}
                                    onChangeAmount={handleFromAmountChange}
                                    froms={froms}
                                />
                                
                                    </>
                                ))}
                                <button onClick={() => addTos(index)} className="btn btn-success">+</button>
                </>
            ))}
        </div>
        </>
    )
}

export default Main;

