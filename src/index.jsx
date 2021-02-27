import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Logo from '../components/logo.js';

const App = (props) => {
    return (
        <main>
            <div className="header w-full flex justify-evenly bg-opacity-10 bg-gradient-to-r from-pink to-yellow text-white">
                <div className="logo p-4">Logo</div>
                <ul className="text-gray-50 flex justify-end flex-wrap">
                	<li className="p-4 text-white cursor-pointer hover:underline">Home</li>
            	    <li className="p-4 cursor-pointer hover:underline">Cam</li>
            	    <li className="p-4 cursor-pointer hover:underline">ChatBot</li>
            	    <li className="p-4 cursor-pointer hover:underline">Products</li>
                </ul>
            </div>
						<Logo />
            <div className="hero w-full h-96 bg-gradient-to-r from-pink to-yellow ">
            </div>

			<div className="wrap bg-dark p-3 w-full">

				
                <h1 className="text-4xl m-6 text-center text-white font-bold">Features</h1>

				<div className="cards w-full max-w-40 p-6 flex justify-center items-center flex-wrap">

                    <div className="CARD w-60 bg-card m-4 p-4">
                        <img src="https://www.capturelandscapes.com/wp-content/uploads/2019/04/Desert-Nights.jpg" alt="logo"></img>
					    <div className="w-full mt-4 p-2 px-4 border-borderGray border-2 text-borderGray text-center bg-transparent cursor-pointer hover:border-pink hover:text-pink">Features</div>
                    </div>
                    
                    <div className="CARD w-60 bg-card m-4 p-4">
                        <img src="https://www.capturelandscapes.com/wp-content/uploads/2019/04/Desert-Nights.jpg" alt="logo"></img>
					    <div className="w-full mt-4 p-2 px-4 border-borderGray border-2 text-borderGray text-center bg-transparent cursor-pointer hover:border-pink hover:text-pink">Features</div>
                    </div>
                    
                    <div className="CARD w-60 bg-card m-4 p-4">
                        <img src="https://www.capturelandscapes.com/wp-content/uploads/2019/04/Desert-Nights.jpg" alt="logo"></img>
					    <div className="w-full mt-4 p-2 px-4 border-borderGray border-2 text-borderGray text-center bg-transparent cursor-pointer hover:border-pink hover:text-pink">Features</div>
                    </div>

				</div>
			</div>
				
				<div className="w-full bg-gradient-to-r from-pink to-yellow p-8">
                <h1 className="text-4xl m-6 text-center text-white font-bold">OUR MISSION!</h1>
				
				</div>
      </main>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);