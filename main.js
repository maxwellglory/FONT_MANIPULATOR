leftWristX=0;
rightWristX=0;
difference=0;

function preload(){
}

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,160);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function draw(){
    background("grey");

    document.getElementById("font").innerHTML="Font Size of the Text will be = "+difference+" px";
    textSize(difference);
    fill("black");
    text("GLORY", 50, 400);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX = "+leftWristX+" | rightWristX = "+rightWristX+" | difference = "+difference);
    }
}