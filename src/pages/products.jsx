import React from 'react';
import TopNav from '../../components/topnav.js';
import Footer from '../../components/footer.js';
import dots from '../../img/dots.svg';
import { Helmet } from 'react-helmet';

const TITLE = "Products || Skinre"

import one from '../../img/black/one.png';
import two from '../../img/black/two.png';
import three from '../../img/black/three.png';
import four from '../../img/black/three.png';
import five from '../../img/black/five.png';
import six from '../../img/black/six.png';
import seven from '../../img/black/seven.png';
import eight from '../../img/black/eight.png';



import '../style.css';

export function Products() {
	return (
		<main className="bg-dark text-white">
      {/* Products page */}
			<Helmet>
			<title>{ TITLE }</title>
			</Helmet>

        <h1 className="text-4xl mt-12 m-6 font-bold text-center lg:text-6xl text-white">Products!</h1>

        <div className="w-full h-auto p-16 m-2 flex justify-center items-center flex-wrap">

            <div className="box z-10 bg-card w-3/4 h-60 min-w-max p-2"></div>

            <div className="filter m-4 p-2 h-auto border-2 border-white w-48">
                <p className="pb-4 px-4 text-center font-bold text-borderGray">Filter</p>
                    <ul className="flex flex-col">
                        <li className="border-2 border-white w-4 h-4 m-2"><p className="relative left-6	-top-1.5" >Creams</p></li>
                        <li className="border-2 border-white w-4 h-4 m-2"><p className="relative left-6	-top-1.5">Olis</p></li>
                        <li className="border-2 border-white w-4 h-4 m-2"><p className="relative left-6	-top-1.5">FashWash</p></li>
                        <li className="border-2 border-white w-4 h-4 m-2"><p className="relative left-6	-top-1.5">FaceMask</p></li>

                    </ul>
            </div>
        </div>

        <img className="p-4 select-none	absolute left-0 top-20 max-w-xs" src={dots} alt="dots"/>

        <div className="Crads w-full h-auto p-16 flex justify-center items-center flex-wrap">

            <div className="card z-10 w-80 bg-card m-4">
                <img src={one} alt="vot"></img>
                <h2 className="font-bold hover:text-pink cursor-pointer p-4 text-borderGray ">Time Release Active Cleanser</h2>
                <p className="pb-4 px-4 text-borderGray ">Murad helps clear blemishes and purify skin without overdrying. It provides a sustained release of salicylic acid for continuous acne treatment, even after it’s been rinsed off.</p>
             </div>
             <div className="card z-10 w-80 bg-card m-4">
                <img src={two} alt="vot"></img>
                <h2 className="font-bold hover:text-pink cursor-pointer p-4 text-borderGray ">La Roche-Posay Effaclar Medicated Gel Cleanser</h2>
                <p className="pb-4 px-4 text-borderGray ">This medicated gel cleanser contains 2 percent salicylic acid. The formula helps target excess oil and helps clear up acne breakouts</p>
             </div>
             <div className="card z-10 w-80 bg-card m-4">
                <img src={three} alt="vot"></img>
                <h2 className="font-bold hover:text-pink cursor-pointer p-4 text-borderGray ">Dermalogica Clearing Skin Wash</h2>
                <p className="pb-4 px-4 text-borderGray ">Dermalogica helps clear skin and reduce visible signs of skin aging. The formula contains extracts of balm mint, eucalyptus, and tea tree, while menthol and camphor help cool the skin.</p>
             </div>

             <div className="card z-10 w-80 bg-card m-4">
                <img src={four} alt="vot"></img>
                <h2 className="font-bold hover:text-pink cursor-pointer p-4 text-borderGray">First Aid Beauty’s FAB Skin Lab Resurfacing Liquid AHA 10%</h2>
                <p className="pb-4 px-4 text-borderGray">Powered by a 10 percent concentration of 4 alpha-hydroxy acids, it helps smooth, brighten, and even out the appearance of rough, dull-looking skin.</p>
             </div>

             <div className="card z-10 w-80 bg-card m-4">
                <img src={five} alt="vot"></img>
                <h2 className="font-bold hover:text-pink cursor-pointer p-4 text-borderGray ">Clean and Clear Triple Cleanse Exfoliating Scrub</h2>
                <p className="pb-4 px-4 text-borderGray ">This daily acne face scrub fights breakouts by removing oil from the skin and gently exfoliating, treating acne while also soothing the skin.</p>
             </div>

             <div className="card z-10 w-80 bg-card m-4">
                <img src={six} alt="vot"></img>
                <h2 className="font-bold hover:text-pink cursor-pointer p-4 text-borderGray">ProActiv’s Adapalene Gel 0.1%</h2>
                <p className="pb-4 px-4 text-borderGray ">Adapalene is benzoyl peroxide-free. It’s a once-daily retinoid gel that absorbs quickly to treat acne at the cellular level.</p>
             </div>


             <div className="card z-10 w-80 bg-card m-4">
                <img src={seven} alt="vot"></img>
                <h2 className="font-bold hover:text-pink cursor-pointer p-4 text-borderGray">Differin Gel</h2>
                <p className="pb-4 px-4 text-borderGray">Differin Gel effectively targets two primary causes of acne: clogged pores and inflammation. It clears breakouts where they start (deep in pores) and prevents new acne from forming.</p>
             </div>

            <img className="p-4 select-none	absolute right-0 max-w-xs" src={dots} alt="dots"/>

             <div className="card z-10 w-80 bg-card m-4">
                <img src={eight} alt="vot"></img>
                <h2 className="font-bold hover:text-pink cursor-pointer p-4 text-borderGray">L’Oréal’s Detox and Brighten Pure Clay Mask</h2>
                <p className="pb-4 px-4 text-borderGray ">Potent pure clay and charcoal act like a magnet to clean out pores by drawing out and capturing deep impurities, such as dirt, oil, and pollution.</p>
             </div>

        </div>
        <Footer />
		</main>
	);
};