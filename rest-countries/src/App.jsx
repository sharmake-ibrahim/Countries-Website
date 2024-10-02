import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from "./component/MainSection";
import Layouts from "../src/component/Layouts";
import DefaultPage from './component/DefaultPage';
import FlagDetail from './component/FlagDetail';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element= { <DefaultPage/>}>
                  <Route index element= {<Layouts/>}/>
            </Route>
             <Route path='/:area' element= { <FlagDetail/>}/>
  
        </Routes>
        
    </BrowserRouter>

  )
}

export default App
