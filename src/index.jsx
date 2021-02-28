import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Logo from '../components/logo.js';
import Topnav from '../components/topnav.js';

const App = (props) => {
    return (
        <main className="bg-dark scrollbar-thin scrollbar-track-white scrollbar-thumb-bluegray">
            <div className="header w-full flex justify-evenly bg-opacity-10 bg-gradient-to-r from-pink to-yellow text-white">
            </div>
						<Topnav />
						<Logo />
            <div className="hero w-full h-auto bg-gradient-to-r from-pink to-yellow ">
						<p className="text-white text-md text-center max-w-screen-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt quam. Integer ut dictum dui. Nunc nulla tortor, consequat non neque et, imperdiet iaculis sapien. Vivamus volutpat faucibus suscipit. Sed vel ligula in justo egestas cursus et eu tortor. Donec rutrum in odio eu ultrices. Nullam consequat orci in quam maximus mollis in sed nunc. Pellentesque lobortis arcu sit amet eros luctus aliquet. Ut pharetra metus nec diam eleifend, sit amet finibus nisl suscipit. Quisque consequat blandit risus, eu aliquet dolor pharetra ac. Vestibulum ac convallis massa.</p>
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
				
				<div className="w-full bg-gradient-to-r from-pink to-yellow p-8 text-white">
          <h1 className="text-4xl m-6 font-bold text-center md:text-8xl">OUR MISSION!</h1>
					<p className="text-sm my-12 m-auto text-left max-w-screen-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt quam. Integer ut dictum dui. Nunc nulla tortor, consequat non neque et, imperdiet iaculis sapien. Vivamus volutpat faucibus suscipit. Sed vel ligula in justo egestas cursus et eu tortor. Donec rutrum in odio eu ultrices. Nullam consequat orci in quam maximus mollis in sed nunc. Pellentesque lobortis arcu sit amet eros luctus aliquet. Ut pharetra metus nec diam eleifend, sit amet finibus nisl suscipit. Quisque consequat blandit risus, eu aliquet dolor pharetra ac. Vestibulum ac convallis massa.</p>	
				</div>

				<div className="p-8 text-white">
					<h1 className="text-center m-6 font-bold text-4xl md:text-6xl">ABOUT</h1>
					<p className="text-sm my-12 text-left w-full m-auto max-w-screen-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra orci non congue mattis. Aliquam leo nibh, tempor sit amet volutpat ac, lacinia nec neque. Fusce nec lectus eu diam vulputate ullamcorper vitae congue turpis. Aenean vitae scelerisque augue. Donec ultrices ex in quam auctor, non fermentum ex auctor. Sed imperdiet massa quis mattis sollicitudin. Sed dignissim orci id leo elementum, sit amet finibus felis mattis. Pellentesque tincidunt est in ultrices sollicitudin. Donec pellentesque tincidunt fermentum. Vestibulum finibus accumsan elementum. Phasellus vitae ultricies nisl. Vestibulum eros nunc, vestibulum nec vehicula ac, efficitur interdum velit. Nunc fringilla rutrum luctus. Cras ultricies rutrum erat, a sodales felis pulvinar id. Mauris ac pharetra lectus.</p>
				</div>

				<div className="w-full bg-gradient-to-r from-pink to-yellow p-8 text-white">
					<h1 className="text-4xl m-6 font-bold text-center md:text-8xl">LEARN MORE</h1>
					<p className="text-sm my-12 text-left m-auto max-w-screen-md">Donec vel ipsum ut ipsum porta tincidunt. Nulla accumsan suscipit nisi vel laoreet. Ut luctus enim ornare feugiat gravida. Pellentesque purus dui, suscipit et lacus quis, pellentesque mollis magna. Sed tempus arcu ac enim pretium, ut tempus quam eleifend. Aenean mattis dignissim dolor a rhoncus. In vehicula consequat nibh eget tempor. Nulla facilisi. In quam felis, pellentesque sed elit ac, tincidunt tincidunt arcu. Vivamus semper libero ultricies gravida scelerisque. Proin hendrerit dui ac facilisis blandit. Duis vestibulum nisl in imperdiet finibus.</p>
				</div>

      </main>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);