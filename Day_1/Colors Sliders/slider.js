function changeColor(){
    console.log("in");
    var channels = document.getElementsByTagName("input");
    var text = document.getElementById("text");
    text.style.color = "rgb("+channels[0].value+","+channels[1].value+","+channels[2].value+")";
}