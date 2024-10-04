import { Outlet , NavLink} from "react-router-dom";

import React, {useState} from "react";

import FlagDetail from "./FlagDetail";

const DefaultPage =()=> {

    // const [isOpen, setIsOpen] = useState(false)

    // const handleClick = ()=> {
    //     setIsOpen(!isOpen);
    // }
   
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