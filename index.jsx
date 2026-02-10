const { useState, useMemo } = React;

export function CurrencyConverter() {
  return(
    <>
    <input type="number"></input>
    <select>
     <option>USD</option>
     <option>EUR</option>
     <option>GBP</option>
     <option>JPY</option>
    </select>
    <select>
     <option>USD</option>
     <option>EUR</option>
     <option>GBP</option>
     <option>JPY</option>
    </select>
    </>
  )
}