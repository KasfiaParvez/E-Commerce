import React from 'react'
import { Container } from 'react-bootstrap'
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from './screens/HomeScreens'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import { Switch } from 'react-router'

const App = () => {
  return (
    <Router>
      <Header/>
          <Routes>
          <Route path='/' element={<HomeScreen/>} exact/>
          <Route path='/product/:id' element={<ProductScreen/>}/>
          </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
