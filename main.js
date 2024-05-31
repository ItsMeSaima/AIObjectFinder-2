



function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
webcam = createCapture(VIDEO);
    webcam.size(480, 380);
    webcam.hide();
}

function draw(){
    image(webcam, 0, 0, 480, 380);

}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(1);
}