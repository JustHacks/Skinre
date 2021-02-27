import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Topnav from '../components/topnav.js';

const Cam = (props) => {
	return (
		<main>
			<Topnav />
			
		</main>
	);
};

ReactDOM.render (
	<Cam />,
	document.getElementById('root')
);