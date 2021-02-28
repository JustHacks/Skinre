import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Logo from '../components/logo.js';
import Topnav from '../components/topnav.js';
import Footer from '../components/footer.js';

const App = (props) => {
    return (
        <main className="bg-dark scrollbar-thin scrollbar-track-white scrollbar-thumb-bluegray">
            <div className="header w-full flex justify-evenly bg-opacity-10 bg-gradient-to-r from-pink to-yellow text-white">
            </div>
				<Topnav />
				<Logo />
                <div className="hero w-full h-auto p-10 bg-gradient-to-r from-pink to-yellow text-center text-white flex justify-center items-center">
					<p className="text-white text-md text-center max-w-screen-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt quam. Integer ut dictum dui. Nunc nulla tortor, consequat non neque et, imperdiet iaculis sapien. Vivamus volutpat faucibus suscipit. Sed vel ligula in justo egestas cursus et eu tortor. Donec rutrum in odio eu ultrices. Nullam consequat orci in quam maximus mollis in sed nunc. Pellentesque lobortis arcu sit amet eros luctus aliquet. Ut pharetra metus nec diam eleifend, sit amet finibus nisl suscipit. Quisque consequat blandit risus, eu aliquet dolor pharetra ac. Vestibulum ac convallis massa.</p>
                 </div>

			<div className="wrap bg-dark p-3 w-full">

                <h1 className="text-4xl m-6 text-white font-bold text-center lg:text-6xl">Features</h1>

				<div className="cards w-full max-w-40 p-6 flex justify-center items-center flex-wrap">

                    <div className="CARD w-80 bg-card m-4 p-4">
                        <img src="https://www.capturelandscapes.com/wp-content/uploads/2019/04/Desert-Nights.jpg" alt="logo"></img>
					    <div className="w-full mt-4 p-2 px-4 border-borderGray border-2 text-borderGray text-center bg-transparent cursor-pointer hover:border-pink hover:text-pink">Features</div>
                    </div>
                    
                    <div className="CARD w-80 bg-card m-4 p-4">
                        <img src="https://www.capturelandscapes.com/wp-content/uploads/2019/04/Desert-Nights.jpg" alt="logo"></img>
					    <div className="w-full mt-4 p-2 px-4 border-borderGray border-2 text-borderGray text-center bg-transparent cursor-pointer hover:border-pink hover:text-pink">Features</div>
                    </div>
                    
                    <div className="CARD w-80 bg-card m-4 p-4">
                        <img src="https://www.capturelandscapes.com/wp-content/uploads/2019/04/Desert-Nights.jpg" alt="logo"></img>
					    <div className="w-full mt-4 p-2 px-4 border-borderGray border-2 text-borderGray text-center bg-transparent cursor-pointer hover:border-pink hover:text-pink">Features</div>
                    </div>

				</div>
			</div>
				
				<div className="w-full p-8 text-white">
          <h1 className="text-4xl m-6 font-bold text-center lg:text-6xl">OUR MISSION!</h1>
					<p className="text-md my-12 m-auto text-left max-w-screen-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt quam. Integer ut dictum dui. Nunc nulla tortor, consequat non neque et, imperdiet iaculis sapien. Vivamus volutpat faucibus suscipit. Sed vel ligula in justo egestas cursus et eu tortor. Donec rutrum in odio eu ultrices. Nullam consequat orci in quam maximus mollis in sed nunc. Pellentesque lobortis arcu sit amet eros luctus aliquet. Ut pharetra metus nec diam eleifend, sit amet finibus nisl suscipit. Quisque consequat blandit risus, eu aliquet dolor pharetra ac. Vestibulum ac convallis massa.</p>	
				</div>

				<div className="w-full p-8 text-white">
					<h1 className="text-4xl m-6 font-bold text-center lg:text-6xl">ABOUT</h1>
					<p className="text-md my-12 text-left m-auto max-w-screen-md">Donec vel ipsum ut ipsum porta tincidunt. Nulla accumsan suscipit nisi vel laoreet. Ut luctus enim ornare feugiat gravida. Pellentesque purus dui, suscipit et lacus quis, pellentesque mollis magna. Sed tempus arcu ac enim pretium, ut tempus quam eleifend. Aenean mattis dignissim dolor a rhoncus. In vehicula consequat nibh eget tempor. Nulla facilisi. In quam felis, pellentesque sed elit ac, tincidunt tincidunt arcu. Vivamus semper libero ultricies gravida scelerisque. Proin hendrerit dui ac facilisis blandit. Duis vestibulum nisl in imperdiet finibus.</p>
				</div>

                <Footer />

      </main>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);