import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import React, {useState, useEffect, createContext} from "react";
   export const randomCountryData = createContext();
import FlagDetail from "./FlagDetail";

const Layouts =()=> {

    // const [isOpen, setIsOpen] = useState(false)

    // const handleClick = ()=> {
    //     setIsOpen(!isOpen);
    // }
    const [randomCountry, setRandomCountry] = useState([]);
    const apiUrl = "https://restcountries.com/v3.1/all";

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
          <header>
                    <div className="logo"> <h1> Where in the world?</h1></div>

                    {/* <nav onClick={handleClick}>
                        <div classNameName= {`dark-mode ${ isOpen ? "show" : "hide"}`}>
                            <img src= {darkIcon} alt="dark mode icon" />
                        </div>
                        <div classNameName={`light-mode ${isOpen ? "hide" : "show"}`}>
                            <img src= {lightIcon} alt=" light mode icon" />
                        </div>
                    </nav> */}
                  
                    
                </header>

                <div className="search-section">

            <div className="searchBar">
                <input type="name"  placeholder="Search for a country…"/>
            </div>
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>


</div>

        
        <main>
                    {
                        randomCountry.map( (country, index)=> {
                            return(
                             
                                <section key={index}>
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
                            </section>
                           
                            )
                        })
                    }

            <Outlet/>



            <randomCountryData.Provider value={randomCountry}>
                <FlagDetail/>
            </randomCountryData.Provider>
           
        </main>
        </>
    )
}

export default Layouts;