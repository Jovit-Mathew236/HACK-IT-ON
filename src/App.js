import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Form from "./components/Form";
// import Head from './components/head';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes >
          
          <Route exact path='/HACK-IT-ON/'
          element={<Form /> }/>
          <Route exact path='/HACK-IT-ON/dash'
          element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
