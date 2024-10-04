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
import America from './component/America';
import AmericaViewPage from './component/AmericaViewPage';
import Asia from './component/Asia';
import AsiaViewPage from './component/AsiaViewPage';


function App() {
  

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element= { <DefaultPage/>}>
                  <Route index element= {<Layouts/>}/>
                  <Route path='africa' element= {<Africa/>}/>
                  <Route path='america' element= {<America/>}/>
                  <Route path='asia' element= {<Asia/>}/>
            </Route>
             <Route path='/:area' element= { <FlagDetail/>}/>
             <Route path='africa/:africaId' element= { <AfricaViewPage/>}/>
             <Route path='america/:america_Id' element= { <AmericaViewPage/>}/>
             <Route path='asia/:asia_Id' element= {<AsiaViewPage/>}/>
  
        </Routes>
        
    </BrowserRouter>

  )
}

export default App
