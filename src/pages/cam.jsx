import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

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
              document.getElementById("acnepic").src = "../img/Papules.png";
              
            }
            if (prediction[2].probability.toFixed(2) > 0.75) {
              document.getElementById("acnepic").src = "../img/Cystic.png";

            }
            if (prediction[1].probability.toFixed(2) > 0.75) {
              document.getElementById("acnepic").src = "../img/White.png";

            }
            if (prediction[0].probability.toFixed(2) > 0.75) {
              document.getElementById("acnepic").src = "../img/Black.png";

            }
      }
    }
	return (
		<main className="w-full h-screen bg-dark text-white scrollbar-thin scrollbar-track-white scrollbar-thumb-bluegray">
			  <div><h1 className="text-center text-4xl ">Cam</h1></div>
					<div className="card w-">
						<div id="webcam-container"></div>
					<div className="webcam-container">
   					 <div className="acne" id="acne">
 					 	    <img className="acnepic" id="acnepic"/></div>
  					<canvas id="canvas"></canvas>
							<div id="label-container"></div>
						</div>
					</div>

			<button className="statbutton" type="button" onclick="init()">Start</button>

	</main>
	);
};
