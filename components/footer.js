import React from 'react';
import '../src/style.css';

function Footer()  {
	return (
		<div className="footer flex flex-col items-center text-white bg-gradient-to-r from-pink to-yellow">
			<h3 className="text-white font-semibold p-4">Follow us on</h3>
			    <div className="w-full p-4 flex items-center justify-center">

					<i className="fab fa-github">one</i>
					<i className="fab fa-twitter">two</i>
					<i className="fab fa-instagram">three</i>

				</div>
			<div className="copyright w-full text-center bg-dark p-4">&#xA9; Skinre 2021</div>
    	</div>

	);
}

export default Footer;