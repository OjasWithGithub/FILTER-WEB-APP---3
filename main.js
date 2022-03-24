noseX = 0
noseY = 0

function preload(){
  moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function draw(){
    image(video,0,0,400,315);
    image(moustache,noseX-25,noseY-2,55,40)
}

function takeSnapshot(){
    save("moustacheSelfie.jpg")
}
function setup(){
    canvas = createCanvas(400,315)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(400,315)
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    document.getElementById("display").innerHTML = "Posenet Initialized!"
}

noseXYD = document.getElementById("display")

function gotPoses(results){
  if (results.length > 0){
      noseX = Math.floor(results[0].pose.nose.x)
      noseY = Math.floor(results[0].pose.nose.y)
      document.getElementById("display").innerHTML = "X: "+noseX+", Y: "+noseY
  }
}