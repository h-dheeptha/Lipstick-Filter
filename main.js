lipX=0;
lipY=0;

function preload() {
  lipstick = loadImage('https://i.postimg.cc/Xq1xb9gH/ef812dbaddc7fec1821fda4584d379a4.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    lipX = results[0].pose.nose.x-25;
    lipY = results[0].pose.nose.y+15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(lipstick, lipX, lipY, 50, 20);
}

function take_snapshot(){    
  save('lipstick-filter.png');
}