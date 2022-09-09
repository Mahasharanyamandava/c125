 noseX = 0;
 noseY = 0;
 difference = 0;
 rightWristX = 0;
 leftWristX= 0;


 function setup()
 {
    video = createCapture(VIDEO);
    video.size(550,500);

     canvas = createCanvas(550,500);
     canvas.position(560,150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
 }
 function draw() {
    background(' #800080');
    document.getElementById("square_side").innerHTML = "width and height of the sqaure will be =" + difference+ "px" ;
    fill("#cc00cc");
    stroke(" #ffff00");
    square(noseX , noseY , difference);
 }

 function modelLoaded()
 {
    console.log('poseNet is intialized');

 }

 function gotPoses(results)
 {
    if (results.length > 0 ) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log( "noseX ="+ noseX + "noseY = "+ noseY  ) ;

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX" + leftWristX + "rightWristX" + rightWristX + "difference" + difference);
    }
 }