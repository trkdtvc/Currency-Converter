const { useState } = React;

export function CurrencyConverter() {
  const rates = {
    USD: 1,
    EUR: 0.84,
    GBP: 0.73,
    JPY: 154.35,
  };

  const recalculateAll = (amt, from) => {
    const baseUSD = amt / rates[from];
    return {
      USD: baseUSD * rates.USD,
      EUR: baseUSD * rates.EUR,
      GBP: baseUSD * rates.GBP,
      JPY: baseUSD * rates.JPY,
    };
  };

  const [amountToConvert, setAmountToConvert] = useState(1);
  const [convertedFrom, setConvertedFrom] = useState("USD");
  const [convertedTo, setConvertedTo] = useState("EUR");
  const [convertedMap, setConvertedMap] = useState(() =>
    recalculateAll(1, "USD")
  );

  return (
    <>
      <input
        type="number"
        value={amountToConvert}
        onChange={(e) => {
          const val = Number(e.target.value);
          setAmountToConvert(val);
          setConvertedMap(recalculateAll(val, convertedFrom));
        }}
      />

      
      <select
        value={convertedFrom}
        onChange={(e) => {
          const newFrom = e.target.value;
          setConvertedFrom(newFrom);
          setConvertedMap(recalculateAll(amountToConvert, newFrom));
        }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>

      
      <select
        value={convertedTo}
        onChange={(e) => setConvertedTo(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>

      <p>
        {convertedMap[convertedTo].toFixed(2)} {convertedTo}
      </p>
    </>
  );
}
