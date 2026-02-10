const { useState, useMemo } = React;

export function CurrencyConverter() {
  const rates = {
    USD: 1,
    EUR: 0.84,
    GBP: 0.73,
    JPY: 154.35,
  };

  const [amountToConvert, setAmountToConvert] = useState(1);
  const [convertedFrom, setConvertedFrom] = useState("USD");
  const [convertedTo, setConvertedTo] = useState("EUR");
  const [baseUSD, setBaseUSD] = useState(1);

  useMemo(() => {
    const usd = amountToConvert / rates[convertedFrom];
    setBaseUSD(usd);
  }, [amountToConvert, convertedFrom]);

  const displayedAmount = (baseUSD * rates[convertedTo]).toFixed(2);

  return (
    <>
      <input
        type="number"
        value={amountToConvert}
        onChange={(e) =>
          setAmountToConvert(Number(e.target.value))
        }
      />

      <select
        value={convertedFrom}
        onChange={(e) => setConvertedFrom(e.target.value)}
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
        {displayedAmount} {convertedTo}
      </p>
    </>
  );
}
