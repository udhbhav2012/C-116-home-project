lipx = 150;
lipy = 250;

function preload()
{
 clown_lip = loadImage(' https://i.postimg.cc/PxFvYgkv/l1.png')
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses)
}
function modelLoaded()
{
    console.log('PoseNet is initialized');
}
function getPoses(results)
{
if (results.lenght > 0)
{
    console.log(results);
    lipX = resuls[0].pose.lip.x;
    lipY = resuls[0].pose.lip.y;
    console.log("lip x = " + lipx);
    console.log("lip y = " + lipy);
}
}
function draw()
{
 image(video, 0, 0, 300, 300);
 //fill(255, 0, 0);
 //stroke(255, 0, 0);
 //circle(noseX, noseY, 20);
 image(clown_lip, lipx, lipy, 30, 30);
}
function take_snapshot()
{
   save('myFilterimage.png');
}




