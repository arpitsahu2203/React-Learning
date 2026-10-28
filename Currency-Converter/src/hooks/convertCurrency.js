import { useEffect, useState } from "react";


//in this we are goingto design a custom hook to call the api and fetch the result it produces
function useCurrencyInfo(currency){
    const [data, setData]=useState({})
    useEffect(()=>{
        //from here we are calling the api using fetch
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        //since the result will be in string thus we will be converting the result to json
    .then((res)=>res.json())
    //and since we want the result to be currency specific thus we will store the result according to the 
    .then((res)=>setData(res[currency]))
    console.log(data);
    //And since the whole process is dependent on the currency passed thus we will use currecny as a dependecy
    },[currency])
    console.log(data);
    //and here we will return the complete data
    return data
}


export default useCurrencyInfo;