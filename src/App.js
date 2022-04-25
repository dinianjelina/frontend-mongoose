import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import DetailProduct from './components/DetailProduct';
import EditProduct from './components/EditProduct';
import Home from './components/Home';
import './app.css';

const App = () => {
  return (
    <div>
      <Router>
        <div className="navbar">
          <h4 className="navbar-brand">React x Express</h4>
          <ul className="link-wrapper">
            <li className="link">
              <Link exact to="/">
                Home
              </Link>
            </li>
            <li className="link">
              <Link to="/add">Tambah</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
          <Route path="detail/:id" element={<DetailProduct />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
