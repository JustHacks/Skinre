import React from 'react';
import '../src/style.css';
import logoS from '../img/logoS.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const TopNav = () => {
	return (
			<div className="header w-full flex justify-evenly bg-opacity-10 bg-gradient-to-r from-pink to-yellow text-white">
        <img className="logoS h-14 p-2" src={logoS} alt="logo"/>
        <ul className="text-gray-50 flex justify-end flex-wrap">
	      	<Link to="/" className="p-4 text-white cursor-pointer underline-none hover:underline">Home</Link>
          <Link to="/cam" className="p-4 underline-none cursor-pointer hover:underline">Cam</Link>
    	    <Link to="/chatbot" className="p-4 cursor-pointer hover:underline">ChatBot</Link>
    	    <Link to="/products" className="p-4 cursor-pointer hover:underline">Products</Link>
        </ul>
    	</div>
	);
}

export default TopNav;