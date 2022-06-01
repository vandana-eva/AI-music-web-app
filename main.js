var song="";

scoreRightWrist=0;
scoreLeftWrist=0;

rightWristX=0;
rightWristY=0;

leftWristY=0;
leftWristX=0;

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video,0,0,600,500);
}

function preload()
{
    song=loadSound("music.mp3");
}

function play()
{
    song.play();
}

function stop()
{
    song.stop();
}

function modalLoaded()
{
console.log('poseNet is initialized');
}

function gotPoses(results)
{
if (results.length>0)
{
    console.log(results);

    scoreRightWrist=results[0].pose.keypoints[10].score;
    scoreleftWrist=results[0].pose.keypoints[9].score;

    console.log("scoreLeftWrist="+scoreLeftWrist+"scoreRightWrist="+scoreRightWrist);

    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;

    console.log("leftWristX="+leftWristX+", leftWristY="+leftWristY);

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;

    console.log("rightWristX="+rightWristX+", rightWristY="+rightWristY);
}
}

/*var peter_pan = "";
var frozen = "";
var disney = "";

function preload()
{
	peter_pan = loadSound("peter_pan.mp3");
	disney = loadSound("Disney_music.mp3");
	frozen = loadSound("frozen.mp3");
  
}
   function play()
{
  var name = document.getElementById("name").value;
  if(name == "peter_pan"){
    //write code to stop songs loaded in "frozen" and "disney" varaibles from playing
    disney_music.stop();
    frozen.stop();
    
     peter_pan.play();
     }
   if(name == "frozen"){
     // write code to stop songs loaded in "peter_pan" and "disney" varaibles from playing
  disney_music.stop();
    petter_pan.stop();
     
     frozen.play();
     
     }
   if(name == "disney"){
     // write code to stop songs loaded in "peter_pan" and "frozen" varaibles from playing
   frozen.stop();
    petter_pan.stop();
     
     disney.play();
     }
	
}

function stop_music()
{
     peter_pan.stop();
     frozen.stop();
     disney.stop();
}

function setup(){*/

