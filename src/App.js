import React from 'react';
import './App.css';
import reduxThunk from "redux-thunk";
import HeaderNavbar from './components/HeaderNavbar';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import LoadBoard from './pages/LoadBoard';
import history from './history'

// DASHBOARD
// import Dashboard from "./components/Dashboard";
import Footer from './components/Footer';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(
  compose(
    (window.devToolsExtension ? window.devToolsExtension() : f => f)(
      createStore
    )
  )
);

const App = () =>{
  return (  
  <Router history={history}>
      <div className="app">
        <Provider store={createStoreWithMiddleware(reducers)}>
          <HeaderNavbar />
            <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/service' exact element={<Services/>} />
              <Route path='/loardboad' exact element={<LoadBoard/>} />
              <Route path='/about' exact element={<About/>}/>
              <Route path='/contact' exact element={<Contact/>} />  
          </Routes>
          <Footer />
      </Provider> 
    </div>
  </Router>
// ReactDOM.render(document.querySelectorAll("root"))
)}
export default App;