import React from 'react';
import {Link,Navigate,Route,Routes,NavLink} from 'react-router-dom';
import {Home} from './HomePage';
import {Products} from './ProductsPage';
import {Store} from './StorePage';
import {User} from './UserPage';


export const NavComponent = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <NavLink className={(args)=> ` ${args.isActive ? 'active' : ''}`} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <Link to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link to="/store">
            Store
          </Link>
        </li>
        <li>
          <NavLink to="/user">
            User
          </NavLink>
        </li>
      </ul>
    </nav>

    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/user" element={<User/>} />
    </Routes>
    </>
  );
};



