nose_x=0;
nose_y=0;

function preload(){
  mustache=loadImage("https://i.postimg.cc/qqJv6chS/moustache-PNG38.png");
}

function setup(){
 canvas=createCanvas(300,300);
  canvas.center(); 

  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet=ml5.poseNet(video,modelloaded);
  poseNet.on('pose',getposes);
}
function getposes(poses_array){
if (poses_array.length>0){
  console.log(poses_array);
nose_x=poses_array[0].pose.nose.x;
nose_y=poses_array[0].pose.nose.y;
console.log("nose x= "+nose_x);
console.log("nose y="+nose_y);
}
}
function takepic(){
    save('mypic.png');

}
function draw(){
 image(video,0,0,300,300);
image(mustache,nose_x-50,nose_y,120,100);
}
function modelloaded(){
  console.log("model loaded succesfully")
}
