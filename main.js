function preload(){
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    function modelLoaded() {
        console.log('PoseNet Is Initialized');

    }

    function gotPoses(results)
    {
        if(results.length > 0 )
        {
            console.log(results);
            console.log(results[0].pose.nose.x);
            console.log(results[0].pose.nose.y);

        }
    }
    function draw(){

    }
    function take_snapshot(){
        save('myfilterImage.png')
    }
}
