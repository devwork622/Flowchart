import './App.scss';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import WholeTable from './pages/WholeTable';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux';

import CountReducer from "./redux/CountRowColumn/index"
import ScrollPosReducer from "./redux/ScrollPosition/index"


function App() {

  const rootReducer = combineReducers({
    CountReducer,
    ScrollPosReducer    
  })
  return (

    // <BrowserRouter>
    //   <Routes>
    //     <Route index path="/" element={<AddRow />} />           // add new procedure
    //     <Route path="/addcolumn" element={<AddColumn />} />     // add new visit
    //     <Route path="/editcell" element={<EditCell />} />       // procedure_visit
    //   </Routes>       
    // </BrowserRouter>      
    // <IndexTable />

    <Provider store={createStore(rootReducer )}>
      <WholeTable />
    </Provider>    

  );
}

export default App;