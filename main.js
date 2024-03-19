function setup()
{
canvas = createCanvas(1240 , 640);
canvas.parent('canvas');

}

function modelLoaded()
{
    console.log('model loaded !');

}

function start()
{
    poseNet = ml5.poseNet(video , modeLoaded);
}