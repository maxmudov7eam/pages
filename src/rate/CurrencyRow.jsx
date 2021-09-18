import React from 'react'

const CurrencyRow = (props) => {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount,
        froms
    } = props

    return (
        <>
        <div className='d-flex align-items-center wrap'>
        <select value={selectedCurrency} onChange={onChangeCurrency}  className='border-0 select shadow-none form-control'  >
            {currencyOptions.map((item, index) => {
                return (
                    <option key={index} value={item}>{item}</option>
                )
            })}
        </select>
            <input type="number" onChange={onChangeAmount} value={amount} className='border-0 input shadow-none form-control' />
        </div>

        
{/* 
        {froms.map((item1, index1) => {
                return (
                    <div className='row'>
                        <div className="col-4">
                            <select value={selectedCurrency} onChange={onChangeCurrency}  className='border-0 select shadow-none form-control'  >
                                {currencyOptions.map((item, index) => {
                                    return (
                                        <option key={index} value={item}>{item}</option>
                                    )
                                })}
                            </select>
                            <input type="number" onChange={onChangeAmount} value={amount} className='border-0 input shadow-none form-control' />
                        </div>
                    </div>
                )
            })} */}

        </>
    )
}

export default CurrencyRow
