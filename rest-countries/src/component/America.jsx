import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Data/GlobalProvider";

const America = ()=> {
    const {americaData} = useContext(GlobalContext);
    // console.log("america data",americaData)
    return(
        <main>
            {
                americaData.map( (country, index)=> {
                    return(
                        <section key={index}>
                <Link to={`/america/${country.area}`} >
                
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

export default America;