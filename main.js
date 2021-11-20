Webcam.set({

    width : 350,

    height : 300,

    image_format : 'png',

    png_quality : 90


});

Camera = document.getElementById("Camera");

Webcam.attach(Camera);

function TakeSnapshot() {

    Webcam.snap(function (data_uri) {

        document.getElementById("Result").innerHTML = '<img id="Captured_Image" src = "' + data_uri + '"/>';
        
    });
    
}

console.log('ml5 Version: ',ml5.version);

Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8IIAC108L/model.json',modelLoaded);

function modelLoaded() {

    console.log("Model Loaded");
    
}

function Check() {

    img = document.getElementById("Captured_Image");

    Classifier.classify(img , GotResult);
    
}

function GotResult(error,results) {

    if (error) {

        console.log(error);
        
    } else {

        console.log(results);

        document.getElementById("ResultObjectName").innerHTML = results[0].label;
        
        document.getElementById("ResultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);

    }
    
}