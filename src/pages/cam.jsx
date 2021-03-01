
import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import dots from '../../img/dots.svg';
import Footer from '../../components/footer.js'
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer.js'
import '../style.css';

const TITLE = "Cam || Skinre"
export const Cam = (props) => {
	    // More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

    // the link to your model provided by Teachable Machine export panel
    const URL = "https://teachablemachine.withgoogle.com/models/fahXthMwa/";

    let model, webcam, labelContainer, maxPredictions;

    // Load the image model and setup the webcam
    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function loop() {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    // run the webcam image through the image model
    async function predict() {
        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;

            if (prediction[3].probability.toFixed(2) > 0.75) {
              document.getElementById("acnepic").src = papules;
              
            }
            if (prediction[2].probability.toFixed(2) > 0.75) {
            document.getElementById("acnepic").src = cytis;

            }
            if (prediction[1].probability.toFixed(2) > 0.75) {
              document.getElementById("acnepic").src = white;

            }
            if (prediction[0].probability.toFixed(2) > 0.75) {
              document.getElementById("acnepic").src = black;

            }
      }
    }
		return( 
			<Helmet>
				<title>{ TITLE }</title>
			</Helmet>

	<main className="bg-dark text-white">
        
		<div className="flex flex-col my-14 items-center justify-center p-4">
            <h1 className="text-4xl m-6 text-white font-bold text-center lg:text-6xl">Acne Detector</h1>
            <img className="p-4 select-none absolute right-0 top-20 fill-current text-pink max-w-xs" src={dots} alt="dots"/>

                <div className="card z-10 bg-card w-full h-60 max-w-6xl p-2 m-8">
					<div id="webcam-container"></div>
					<div className="webcam-container w-full h-auto">
   					    <div className="acne m-auto text-left" id="acne">
 					 	    <img className="acnepic" id="acnepic"/>
                        </div>
  					    <canvas id="canvas"></canvas>
						<div id="label-container"></div>
					</div>
				</div>

			<button className="statbutton mt-8 p-2 px-4 border-borderGray border-2 text-borderGray text-center bg-transparent cursor-pointer hover:border-pink hover:text-pink" type="button" onClick={init}>Start</button>
        </div>
			<Footer />
	</main>
	);
};
