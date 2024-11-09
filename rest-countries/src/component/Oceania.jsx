import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Data/GlobalProvider";

const Oceania = ()=> {
    const {oceaniaData} = useContext(GlobalContext);
    // console.log("america data",americaData)

    const {search} = useContext(GlobalContext);
    return(
        <main>
            {
                oceaniaData.filter( (country)=> {
                    return search.toLowerCase() === "" ?  country 
                    : country.name.common.toLowerCase().includes(search);
                }).map( (country, index)=> {
                    return(
            <section key={index}>
                <Link to={`/oceania/${country.area}`} >
                
                <div className="img">
                    <img src={country?.flags.png} alt="country flage" />
             
                </div>
                <div className="info">
                    <h3 className="name">{country?.name?.common}</h3>
                    <ul>
                        <li>Population: <small> {country?.population}</small></li>
                        <li>Region: <small>{country?.region}</small></li>
                        <li> Capital: <small>{country?.capital}</small></li>
                    </ul>
                </div>

                </Link>
            </section>
                    )
                })
            }

        </main>
    )
}

export default Oceania;