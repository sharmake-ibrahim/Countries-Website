
import {Link, useParams} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "../Scss/FlagDetails.scss";
import Header from "./Header";
import { GlobalContext } from "../Data/GlobalProvider";

const OceaniaViewPage = ()=> {

    const  {oceaniaData} = useContext(GlobalContext);
  
    
        const {oceania_Id} = useParams();


        

    
    
        const countryDetail =  oceaniaData.find( (detial)=>  detial.area === parseInt(oceania_Id));

        

        
    return(
        <>
        <Header/>
       <main>
        
        
            <section className="Detail-container">
            <div className="content">
            <button type="button" class="btn btn-success content-btn"> <Link to= "/oceania">Back</Link></button>
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
export default  OceaniaViewPage;