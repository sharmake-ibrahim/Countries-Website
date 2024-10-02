import React, {createContext, useState, useEffect} from "react";

const GlobalContext = createContext();


function GlobalProvider({children}) {
    const [africData, setAfricaData] =useState();
    const AfricaApiUrl = "https://restcountries.com/v3.1/region/africa";
    
    const getData = async ()=> {
        try{
            const res = await fetch(AfricaApiUrl);
            const data = await res.json();
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

            <GlobalContext.Provider value={ {africData}}>
                {children}
            </GlobalContext.Provider>
    )
}


export { GlobalContext, GlobalProvider};