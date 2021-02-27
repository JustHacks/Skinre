import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = (props) => {
    return (
        <main>
					<div className="w-full h-screen bg-gray-700">
            <div className="hero">
						</div>
						<div className="topnav bg-transparent p-1 w-full">
							<a className="text-right text-pink-200 m-0.5 underline" href="javascript:void(0);">Home</a>
							<a className="text-white text-right m-0.5 underline" href="javascript:void(0);">Cam</a>
							<a className="text-white text-right m-0.5 underline" href="javascript:void(0)">ChatBot</a>
							<a className="text-white text-right mr-5 m-0.5 underline" href="javascript:void(0)">Products</a>
						</div>
						<div className="wrap bg-black p-3">
							<div className="p-1 px-3 border-pink-400 border-2 text-pink-400 bg-transparent text-center w-max int cursor-pointe h-45">Features</div>
							<div className="card p-6 bg-gray-800">
								<div className="m-auto p-1 border-gray-300 border-2 rounded text-gray-300 text-center w-max bg-transparent cursor-pointer">Features</div>
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