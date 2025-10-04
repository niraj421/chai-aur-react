import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_aufz4ZNmM1gViZBQeM4XMPPponWB145Gqk8lyoJ5&base_currency=${currency}
`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
    //console.log(res.data);  //ye api mey jo key hai data wo hai
  }, [currency])

//  console.log(data); // ye hook ka data hai
  
    return data
}

export default useCurrencyInfo;