const { useState, useMemo } = React;

export function CurrencyConverter() {
  const rates = {
    USD: 1,
    EUR: 0.84,
    GBP: 0.73,
    JPY: 154.35,
    CHF: 0.88,
    CAD: 1.36,
    AUD: 1.53,
    CNY: 7.19,
    SEK: 10.45,
    NZD: 1.67,
  };

  const currencies = Object.keys(rates);

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
        {currencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>

      <select
        value={convertedTo}
        onChange={(e) => setConvertedTo(e.target.value)}
      >
        {currencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>

      <p>
        {displayedAmount} {convertedTo}
      </p>
    </>
  );
}
