import React from 'react';
import '../src/style.css';

function Topnav()  {
	return (
			<div className="header w-full flex justify-evenly fixed bg-opacity-10 bg-gradient-to-r from-pink to-yellow text-white">
        <div className="logo p-4">Logo</div>
        <ul className="text-gray-50 flex justify-end flex-wrap">
	      	<a href="/" className="p-4 text-white cursor-pointer underline-none hover:underline">Home</a>
          <li className="p-4 cursor-pointer hover:underline">Cam</li>
    	    <li className="p-4 cursor-pointer hover:underline">ChatBot</li>
    	    <li className="p-4 cursor-pointer hover:underline">Products</li>
        </ul>
    	</div>
	);
}

export default Topnav;