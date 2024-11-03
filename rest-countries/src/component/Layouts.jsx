
import {Link } from "react-router-dom";
import MainSection from "./MainSection";
import React, {useState, useEffect, useContext} from "react";
import { GlobalContext } from "../Data/GlobalProvider";

const Layouts =()=> {

    const {search} = useContext(GlobalContext);
    const [randomCountry, setRandomCountry] = useState([]);
    const apiUrl = "https://restcountries.com/v3.1/all";

    console.log("searching a country to conqure.", search)
    const getData =  async ()=> {
        try{
            const res = await fetch(apiUrl)
            const data = await res.json();
            setRandomCountry(data)

        }
            catch(error){
                console.log(error);
            }
    }
    useEffect( ()=> {
            getData()
    },[])


    console.log(randomCountry)
    return ( 

        <>
                    {
                        randomCountry.filter( (country)=> {
                            return search.toLowerCase() === "" ? country
                            : country.name.common.toLowerCase().includes(search);
                        }).map( (country, index)=> {
                            return(
                              
                                <section key={index}>
                                     <Link to={`/${country.area}`} >
                                <div className="img">
                                    <img src={country.flags.png} alt="country flage" />
                             
                                </div>
                                <div className="info">
                                    <h3 className="name">{country.name.common}</h3>
                                    <ul>
                                        <li>Population: <small> {country.population}</small></li>
                                        <li>Region: <small>{country.region}</small></li>
                                        <li> Capital: <small>{country.capital}</small></li>
                                    </ul>
                                </div>
                                </Link>
                            </section>
                            
                           
                            )
                        })
                    }
                           
      
        </>

    

        
    )
}

export default Layouts;