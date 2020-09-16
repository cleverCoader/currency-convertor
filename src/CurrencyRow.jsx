import React from 'react'

export default function CurrencyRow(props) {

    const {
        currencyOptions,
        selectCurrency
    } = props

    return (
        <div>
            <input type="number" className="input-box" />
            <select value={selectCurrency} >
                {currencyOptions.map((option,i) => (
                    <option value={option} key={i} > {option} </option>
                ))}
            </select>
        </div>
    )
}
