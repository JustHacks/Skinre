import React from 'react';
import logo from '../img/logo.png';

function Logo() {
	return (
		<div className="w-full bg-gradient-to-r from-pink to-yellow">
			<img className="m-auto p-4" src={logo} alt="logo"/>
		</div>
	);
}

export default Logo;