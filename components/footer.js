import React from 'react';
import '../src/style.css';
import github from '../img/github.png';
import twitter from '../img/twitter.jpg';
import discord from '../img/discord.svg';


function Footer()  {
	return (
		<div className="footer flex flex-col items-center text-white bg-gradient-to-r from-pink to-yellow">
            <div className="p-2">
			<h3 className="text-white text-xl text-center font-semibold p-4">Follow us on</h3>
			    <div className="w-full flex items-center justify-center">

                    <img className="icon w-16 p-4 cursor-pointer" src={github} alt="github"/>
                    <img className="icon w-16 p-4 cursor-pointer" src={twitter} alt="twitter"/>
                    <img className="icon w-16 p-4 cursor-pointer" src={discord} alt="discord"/>

				</div>
                </div>
			<div className="copyright w-full text-center bg-dark p-6">&#xA9; Skinre 2021</div>
    	</div>

	);
}

export default Footer;