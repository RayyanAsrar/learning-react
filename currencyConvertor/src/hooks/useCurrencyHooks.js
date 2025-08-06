import { useEffect,useState} from "react";

function useCurrencyHooks(currency) {
    const [currencyData, setCurrencyData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((data) => {
             setCurrencyData(data[currency]);;
            // console.log(data.usd.pkr);  
        })
        
    },[currency])
      return currencyData;
}
export default useCurrencyHooks;