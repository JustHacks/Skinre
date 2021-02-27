import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = (props) => {
    return (
        <main>
            <div className="header w-full flex justify-evenly fixed bg-opacity-10 bg-gradient-to-r from-pink to-yellow text-white">
                <div className="logo p-4">Logo</div>
                <ul className="text-gray-50 flex justify-end flex-wrap">
                	<li className="p-4 text-white cursor-pointer">Home</li>
            	    <li className="p-4 cursor-pointer">Cam</li>
            	    <li className="p-4 cursor-pointer">ChatBot</li>
            	    <li className="p-4 cursor-pointer">Products</li>
                </ul>
            </div>

            <div className="hero w-full h-96 bg-gradient-to-r from-pink to-yellow ">
             <img src="../img/logo.png" alt="logo"></img>
            </div>

			<div className="wrap bg-dark p-3 w-full">

				<div className="flex justify-center">
                <h1 className="border-2 w-80 border-pink m-6 p-4 text-center text-pink cursor-pointer">Features</h1>
                </div>

				<div className="cards w-full max-w-40 p-6 bg-card ">
                    <div className="card"
					    <div className="m-auto p-2 px-4 border-borderGray border-2 text-borderGray text-center w-max bg-transparent cursor-pointer">Features</div>
                    </div>
				</div>

			</div>
        </main>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);