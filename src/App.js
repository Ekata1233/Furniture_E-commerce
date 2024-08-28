import './App.css';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import Home from './components/Home'
import Shop from './components/Shop'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import Contact from './components/Contact'
import User from './components/User'
import Cart from './components/Cart'
import Checkout from './components/Checkout';







function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>




      </Routes>
      {/* <Modern/>
      <Products/>*/}
      <Footer/> 
      </BrowserRouter>
    </div>
  );
  
}

export default App;
