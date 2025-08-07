import InputBox from './components/InputBox';
import './App.css'
import useCurrencyHooks from './hooks/useCurrencyHooks';
import { useState } from 'react';
function App() {
    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("usd");
    const [conversionRate, setConversionRate] = useState("");
    const currencyInfo = useCurrencyHooks(from);
    // console.log(currencyInfo);
    // console.log(currencyInfo[to]);

    const currencyOptions = Object.keys(currencyInfo);

    const swapCurrency = () => {
        setFrom(to);
        setTo(from);
    }

    const convert = () => {
        if (currencyInfo[to]) {
            setConversionRate((amount * currencyInfo[to]).toFixed(2));
        }
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzT0aF36Bn9PBzzTWsy6oGAxqLozVZR8dMJA&s')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onCurrencyChange={(currency) => setFrom(currency)} 
                                currencyOptions={currencyOptions}
                                selectCurrency={from}
                                onAmountChange={setAmount}
                            />

                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swapCurrency}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={conversionRate}
                                onCurrencyChange={(currency) => setTo(currency)} // FIXED
                                amountDisabled
                                currencyOptions={currencyOptions}
                                selectCurrency={to}
                            />

                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert  {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default App
