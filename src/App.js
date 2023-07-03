
import './App.css';
import Navbar from './Navbar';
import Products from './Products';
import Login from './Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div>
       <Navbar/>
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Products />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/Product/:productId" element={<ProductDetailsPage />} /> */}
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
