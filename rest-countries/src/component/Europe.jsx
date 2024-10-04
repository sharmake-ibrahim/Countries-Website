import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Data/GlobalProvider";

const Europe = ()=> {
    const {europeData} = useContext(GlobalContext);

    return(
        <main>
            {
                europeData.map( (country, index)=> {
                    return(
            <section key={index}>
                <Link to={`/europe/${country.area}`} >
                
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

export default Europe;