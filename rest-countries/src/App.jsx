import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from "./component/MainSection";
import Layouts from "../src/component/Layouts";
import DefaultPage from './component/DefaultPage';
import FlagDetail from './component/FlagDetail';
import Error from './component/Error';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Africa from './component/Africa';
import AfricaViewPage from './component/AfricaViewPage';


function App() {
  

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element= { <DefaultPage/>}>
                  <Route index element= {<Layouts/>}/>
                  <Route path='africa' element= {<Africa/>}/>
            </Route>
             <Route path='/:area' element= { <FlagDetail/>}/>
             <Route path='africa/:africaId' element= { <AfricaViewPage/>}/>
  
        </Routes>
        
    </BrowserRouter>

  )
}

export default App
