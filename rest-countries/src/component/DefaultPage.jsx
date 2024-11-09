import { Outlet , NavLink} from "react-router-dom";
import React, {useState , useEffect, useContext} from "react";
import { GlobalContext } from "../Data/GlobalProvider";

const DefaultPage =()=> {

    const {search, setSearch} = useContext(GlobalContext);

   
    return ( 
        <>
          <header>
                    <div className="logo"> <h1> Where in the world?</h1></div>

                
                  
                    
                </header>

                <div className="search-section">

            <div className="searchBar">
                <input type="name"  placeholder="Search for a country…"
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                />
            </div>
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Filter by Region
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li> 
                <NavLink className= "dropdown-item" to="/africa" >Africa</NavLink>
                
                </li>
                <li>
                <NavLink className= "dropdown-item" to="/america" >America</NavLink>
                </li>
                <li><NavLink className= "dropdown-item" to="/asia" >Asia</NavLink></li>
                <li><NavLink className= "dropdown-item" to="/europe" >Europe</NavLink></li>
                <li><NavLink className= "dropdown-item" to="/oceania" >Oceania</NavLink></li>
            </ul>
            </div>


</div>


        <main>
        
  
       
            
            <Outlet/>
            
        </main>

        
      

        </>
    )
}

export default DefaultPage;