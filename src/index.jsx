import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Logo from '../components/logo.js';
import dots from '../img/dots.svg';
import cam from '../img/cam.png';
import bot from '../img/bot.png';
import chro from '../img/chro.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Cam} from './pages/cam.jsx';

import TopNav from '../components/topnav.js';
import Footer from '../components/footer.js';

const App = (props) => {
    return (
        <Router>
            <main className="bg-dark scrollbar-thin scrollbar-track-white scrollbar-thumb-bluegray">
                <div className="header w-full flex justify-evenly bg-opacity-10 bg-gradient-to-r from-pink to-yellow text-white">
                </div>
                    <TopNav />
                <Switch>
                    <Route exact path="/">
                    <Logo />
                    <div className="hero w-full h-auto p-16 bg-gradient-to-r from-pink to-yellow text-center text-white flex justify-center items-center">
                    <img className="p-4 select-none	absolute left-0 max-w-xs" src={dots} alt="dots"/>
                        <p className="text-white text-md text-center max-w-screen-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt quam. Integer ut dictum dui. Nunc nulla tortor, consequat non neque et, imperdiet iaculis sapien. Vivamus volutpat faucibus suscipit. Sed vel ligula in justo egestas cursus et eu tortor. Donec rutrum in odio eu ultrices. Nullam consequat orci in quam maximus mollis in sed nunc. Pellentesque lobortis arcu sit amet eros luctus aliquet. Ut pharetra metus nec diam eleifend, sit amet finibus nisl suscipit. Quisque consequat blandit risus, eu aliquet dolor pharetra ac. Vestibulum ac convallis massa.</p>
                    </div>



                <div className="wrap bg-dark p-3 my-16 w-full">

                    <h1 className="text-4xl m-6 text-white font-bold text-center lg:text-6xl">Features</h1>

                    <div className="cards w-full max-w-40 p-6 flex justify-center items-center flex-wrap">

                        <div className="CARD z-10 w-80 bg-card m-4 p-4">
                            <img src={cam} alt="cam"></img>
                            <div className="w-full mt-4 p-2 px-4 border-borderGray border-2 text-borderGray text-center bg-transparent cursor-pointer hover:border-pink hover:text-pink">Features</div>
                        </div>
                        
                        <div className="CARD z-10 w-80 bg-card m-4 p-4">
                            <img src={bot} alt="vot"></img>
                            <div className="w-full mt-4 p-2 px-4 border-borderGray border-2 text-borderGray text-center bg-transparent cursor-pointer hover:border-pink hover:text-pink">Features</div>
                        </div>
                        
                        <div className="CARD z-10 w-80 bg-card m-4 p-4">
                            <img src={chro} alt="chrome"></img>
                            <div className="w-full mt-4 p-2 px-4 border-borderGray border-2 text-borderGray text-center bg-transparent cursor-pointer hover:border-pink hover:text-pink">Features</div>
                        </div>

                        <img className="p-4 select-none absolute right-0 fill-current text-pink max-w-sm" src={dots} alt="dots"/>
                    </div>
                </div>
                    
                    <div className="w-full p-8 my-16 text-white">
            <h1 className="text-4xl m-6 font-bold text-center lg:text-6xl">OUR MISSION!</h1>
                        <p className="text-md my-12 m-auto text-left max-w-screen-md">Our goal is to help people improve their lives, and to do that we have created a simple method for people to help look after their skin. Skinre was created to be a way for people with limited resources or difficulties to be able to quickly get results without the additional costs or effort it takes to sometimes do something. What Skinre is to reccomend you what treatment or products to take for treating things such as acne and skin damage.</p>	
                    </div>
                    
                    <img className="p-4 select-none	absolute left-0 max-w-sm" src={dots} alt="dots"/>

                    <div className="w-full p-8 my-16 text-white">
                        <h1 className="text-4xl m-6 font-bold text-center lg:text-6xl">ABOUT</h1>
                        <p className="text-md my-12 text-left m-auto max-w-screen-md">Donec vel ipsum ut ipsum porta tincidunt. Nulla accumsan suscipit nisi vel laoreet. Ut luctus enim ornare feugiat gravida. Pellentesque purus dui, suscipit et lacus quis, pellentesque mollis magna. Sed tempus arcu ac enim pretium, ut tempus quam eleifend. Aenean mattis dignissim dolor a rhoncus. In vehicula consequat nibh eget tempor. Nulla facilisi. In quam felis, pellentesque sed elit ac, tincidunt tincidunt arcu. Vivamus semper libero ultricies gravida scelerisque. Proin hendrerit dui ac facilisis blandit. Duis vestibulum nisl in imperdiet finibus.</p>
                    </div>

                    <Footer />
                    </Route>
                    <Route path="/cam">
                        <Cam/>
                    </Route>
                </Switch>

        </main>
      </Router>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);