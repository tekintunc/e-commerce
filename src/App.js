import './App.css';
import Category from './pages/category/Category';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Products from './pages/product/Products';
import Home from './pages/home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <div className='root'>
    <Navbar/>
    <Routes>
      <Route path='/categories' element={<Category />} />
      <Route path='/products' element={<Products />} />
      <Route path='/' element={<Home />} /> 
    </Routes>
    <ToastContainer />
    </div>
    </>
  );
};

export default App;
