import React from 'react'

export default function CurrencyRow(props) {

    const {
        currencyOptions,
        selectCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props

    return (
        <div>
            <input type="number" className="input-box" value={amount} onChange={onChangeAmount} />
            <select value={selectCurrency} onChange={onChangeCurrency} >
                {currencyOptions.map((option,i) => (
                    <option value={option} key={i} > {option} </option>
                ))}
            </select>
        </div>
    )
}
