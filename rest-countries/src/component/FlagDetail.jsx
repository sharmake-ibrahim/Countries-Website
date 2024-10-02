
import {Link, useParams} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "../Scss/FlagDetails.scss";
import Header from "./Header";


const FlagDetail = ()=> {
    const [state, setState] = useState([]);
        const apiUrl = "https://restcountries.com/v3.1/all";
    

           
        
        
        
        const fetchData = async ()=> {
                try{
                    const res = await fetch(apiUrl);
                    const data = await res.json();
                    // console.log(data)
                    setState(data);
                }
                catch(error) {
                    console.log(error)
                   
                }
            }


            useEffect(()=> {
                fetchData()
            }, [])
    
        const {area} = useParams();

        console.log("useParms", area);
    
    
        const countryDetail =  state.find( (detial)=>  detial.area === parseInt(area));

            // console.log(" the clicked country", countryDetail);
       
    return(
        <>
        <Header/>
       <main>
        
        
            <section className="Detail-container">
            <div className="content">
            <button type="button" class="btn btn-success content-btn"> <Link to= "/">Back</Link></button>
                    <div className="info-div">
                        <div className="img-div">
                            <img src= {countryDetail?.flags?.png} alt= {countryDetail?.name.official} />
                        </div>
                            <div className="split">
                                <div className="info-content">
                                    <div className="text-one">
                                        
                                        <ul className="text-list">
                                        <h1> {countryDetail?.name?.common}</h1>
                                            <li>Native Name: {countryDetail?.name?.nativeName?.eng?.common}</li>
                                            <li>Population: {countryDetail?.population}</li>
                                            <li>Region: {countryDetail?.region}</li>
                                            <li>Capital: {countryDetail?.capital[0]}</li>
                                        </ul>
                                    </div>
                                    <div className="text-two text-center">
                                    <ul className="text-list">
                                            <li>Top Level Domain: {countryDetail?.tld[0]}</li>
                                            <li>Currencies: {countryDetail?.currencies?.SHP?.name}</li>
                                            <li>Languages: {countryDetail?.languages?.eng}</li>
                                           
                                        </ul>
                                    </div>
                                </div>
                    
                            </div>
                    </div>
            </div>
    </section> 
                
        

        
        
       
</main>    
</>
    )
}
export default FlagDetail;