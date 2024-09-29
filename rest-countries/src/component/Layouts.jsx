// import { Outlet } from "react-router-dom";
// import { NavLink } from "react-router-dom";

import React, {useState} from "react";

const Layouts =()=> {

    // const [isOpen, setIsOpen] = useState(false)

    // const handleClick = ()=> {
    //     setIsOpen(!isOpen);
    // }
    return (
        <>
          <header>
                    <div className="logo"> <h1> Where in the world?</h1></div>

                    {/* <nav onClick={handleClick}>
                        <div className= {`dark-mode ${ isOpen ? "show" : "hide"}`}>
                            <img src= {darkIcon} alt="dark mode icon" />
                        </div>
                        <div className={`light-mode ${isOpen ? "hide" : "show"}`}>
                            <img src= {lightIcon} alt=" light mode icon" />
                        </div>
                    </nav> */}
                  
                    
                </header>

                <div className="search-section">

            <div className="searchBar">
                <input type="name"  placeholder="Search for a country…"/>
            </div>
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>


</div>

        
        <main>
            {/* <Outlet/> */}
            <h1> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, atque.</h1>
        </main>
        </>
    )
}

export default Layouts;