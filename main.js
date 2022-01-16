function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    background("green");
    video = createCapture(VIDEO);
    video.size(550, 500);
    pose_net = ml5.poseNet(video, modelLoaded);
    pose_net.on('pose', getResult);
}
left_wrist_x = "";
square_x = Math.random()*500;
square_y = Math.random()*500;
function modelLoaded(){
    console.log("Model is Loaded")
}
function getResult(results) {
    if (results.length > 0){
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
    }
}
function draw(){
    background("green");
    square(square_x,square_y,80);
 
}