
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
