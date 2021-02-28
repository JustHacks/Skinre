import React from 'react';
import logo from '../img/logo.png';

function Logo() {
	return (
		<div className="w-full bg-gradient-to-r from-pink to-yellow">
			<img className="m-auto" src={logo} alt="logo"/>
		</div>
	);
}

export default Logo;