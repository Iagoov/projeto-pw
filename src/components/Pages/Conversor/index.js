import axios from 'axios';
import Select from 'react-select';
import React, { useState, useEffect } from 'react';

import './style.css';


function Conversor() {
  const options = [
    { value: 'BRL', label: 'Real (BRL)' },
    { value: 'USD', label: 'Dólar (USD)' },
    { value: 'JPY', label: 'Iene (JPY)' },
    { value: 'EUR', label: 'Euro (EUR)' },
  ];

  const [baseCurrency, setBaseCurrency] = useState(options[0]);
  const [targetCurrency, setTargetCurrency] = useState(options[1]);
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    convertCurrency();
  }, [baseCurrency, targetCurrency, amount]);

  const convertCurrency = () => {
    const url = `https://api.exchangerate-api.com/v4/latest/${baseCurrency.value}`;

    axios.get(url)
      .then(response => {
        const rate = response.data.rates[targetCurrency.value];
        const convertedValue = amount * rate;
        setConvertedAmount(convertedValue.toFixed(2));
      })
      .catch(error => {
        console.log('Error converting currency: ', error);
      });
  };

  const handleCurrencyChange = (selectedOption, action) => {
    if (action.name === 'base') {
      setBaseCurrency(selectedOption);
    } else {
      setTargetCurrency(selectedOption);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <h1 id="conversao">Conversor de Moedas</h1>

      
        <div className="currency-selectors">
          <Select
            className="currency-selector"
            options={options}
            value={baseCurrency}
            onChange={(selectedOption) => handleCurrencyChange(selectedOption, { name: 'base' })}
          />

          <Select
            className="currency-selector"
            options={options}
            value={targetCurrency}
            onChange={(selectedOption) => handleCurrencyChange(selectedOption, { name: 'target' })}
          />
        </div>

        <div className="amount-input">
          <input type="number" value={amount} onChange={handleAmountChange} />
        </div>

        <div className="result">
          {amount} {baseCurrency.value} = {convertedAmount} {targetCurrency.value}
        </div>
      
    </div>
  );
};

export default Conversor;
