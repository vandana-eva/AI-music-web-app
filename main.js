var song="";

noseX=0;
noseY=0;
scoreNose=0;

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
    fill("#FF0000");
    stroke("#FF0000");
    circle(noseX,noseY,20);

		if(noseY >0 && noseY <= 250)
		{
			document.getElementById("name");		
			song.play(music.mp3);
		}
		else if(noseY >250 && noseY <= 500)
		{
			document.getElementById("name");		
		  song.play(music2.mp3.mp3);
		}
}

function preload()
{
    song=loadSound("music2.mp3.mp3");
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

    scoreNose=results[0].pose.keypoints[10].score;

    noseX=results[0].pose.nose.x;
    nosetY=results[0].pose.nose.y;

    console.log("noseX="+noseX+", noseY="+nosetY);
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

