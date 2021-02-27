import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = (props) => {
    return (
        <main>
            <div className="header w-full flex justify-evenly fixed bg-yellow-200 bg-opacity-10 text-white">
                <div className="logo p-4">Logo</div>
                <ul className="flex justify-end flex-wrap">
                <li className="p-4 cursor-pointer">Home</li>
                <li className="p-4 cursor-pointer">Cam</li>
                <li className="p-4 cursor-pointer">ChatBot</li>
                <li className="p-4 cursor-pointer">Products</li>
                </ul>
            </div>

            <div className="hero w-full h-96 bg-gradient-to-r from-pink-400 to-yellow-200">
            </div>
             
					<div className="wrap bg-black p-3">
						<div className="flex justify-center">
         	 		<h1 className="border-2 w-80 border-pink-300 m-6 p-4 text-center text-pink-400">Features</h1>
       	    </div>
						<div className="card w-full max-w-60 p-6 bg-gray-800">
							<div className="m-auto p-1 border-gray-300 border-2 rounded text-gray-300 text-center w-max bg-transparent cursor-pointer">Features</div>
						</div>
					</div>
        </main>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);