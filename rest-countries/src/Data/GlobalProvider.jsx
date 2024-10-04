import React, {createContext, useState, useEffect} from "react";

const GlobalContext = createContext();


function GlobalProvider({children}) {
    const [africData, setAfricaData] =useState();
    const [americaData, setAmericaData] = useState([]);
    const [asiaData, setAsiaData] = useState([]);
    const AfricaApiUrl = "https://restcountries.com/v3.1/region/africa";
    const AmericaApiURL= "https://restcountries.com/v3.1/region/america";
    const AsiaApiURL =  "https://restcountries.com/v3.1/region/asia";

    
    const getData = async ()=> {
        try{
            //africa 
            const res = await fetch(AfricaApiUrl);
            const data = await res.json();
            //america

            const res2 = await fetch(AmericaApiURL);
            const data2 = await res2.json();

            //asia

            const res3 = await fetch(AsiaApiURL);
            const data3 = await res3.json();

            setAsiaData(data3);
            setAmericaData(data2);

            setAfricaData(data)
        }
        catch(error) {
            console.log(error)
        }
    }

            useEffect( ()=> {
                getData()
            },[])


    return(

            <GlobalContext.Provider value={ {africData, americaData, asiaData}}>
                {children}
            </GlobalContext.Provider>
    )
}


export { GlobalContext, GlobalProvider};