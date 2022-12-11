
import Header from '../src/component/header/Header';
import './App.css';
import Shop from './component/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import NoMatch from './component/NoMatch/NoMatch';
import Prodetail from './component/ProductDetail/Prodetail';

import SignIn from './component/Login/Login';





function App() {
  return (
       
      <div className="App">
        <Header></Header>
        <Router>
        <Routes>
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path="/review" element={<Review></Review>} />
        <Route path="/manage" element={<Inventory></Inventory>} />
        <Route path="/product/:productid" element={<Prodetail></Prodetail>} />
        <Route exact path="/" element={<Shop></Shop>} />
        <Route path="*" element={<NoMatch></NoMatch>} />
        <Route path="/Sign In" element={<SignIn></SignIn>} />
        </Routes>
      </Router>
        


  
      
      
    </div>
  );
}

export default App;
