var speech = window.webkitSpeechRecognition;
var recogniser = new speech();
 d = 0;
 x = 0;
 y = 0;
 drawn_circle = "";
 drawn_rect = "";


 recogniser.onresult = function(events){
    console.log(events);
    var content = events.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML = "heard thing : " + content;
    if(content == "circle"){
        x = Math.floor(Math.random * 900);
        y = Math.floor(Math.random * 600);
        drawn_circle = "set";
    }
    if(content == "rectangle"){
        x = Math.floor(Math.random * 900);
        y = Math.floor(Math.random * 600);
        drawn_rect = "set";
    }
}

function setup() {
    canvas = createCanvas(900,600);
    // canvas.center();

}

function draw() {
    if(drawn_circle == "set"){
        d = Math.floor(Math.random * 100);
        circle(x, y, d);
        document.getElementById("status").innerHTML = "circle drawn";
        drawn_circle = "";
    }
    if(drawn_rect == "set"){
        // e = Math.floor(Math.random * 100);
        // f = Math.floor(Math.random * 100);
        rect(x, y, 10, 20);
        document.getElementById("status").innerHTML = "rectangle drawn";
        drawn_rect = "";
    }
}

function start() {
    document.getElementById("status").innerHTML = "please speak. system is listening";
    recogniser.start();
}
    