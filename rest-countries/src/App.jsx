import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from "./component/MainSection";
import Layouts from "../src/component/Layouts";
import FlagDetail from './component/FlagDetail';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element= { <Layouts/>}>
                  <Route index element= {<Layouts/>}/>
            </Route>
        </Routes>
        
    </BrowserRouter>

  )
}

export default App
