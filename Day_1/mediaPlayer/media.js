var imgArr=["https://media.gemini.media/img/Medium/2019/11/15/2019_11_15_21_30_19_454.jpg",
"https://islamonline.net/wp-content/uploads/2021/09/Quran-during-the-sunset-.jpg",
"https://i0.wp.com/onepathnetwork.com/wp-content/uploads/2017/09/reasons_to_read_quran.jpg?fit=650%2C366&ssl=1",
"https://cdn.siasat.com/wp-content/uploads/2020/09/quran.jpg"];


var audio = document.getElementById("audio");
window.addEventListener("load",onLoad);

function playAudio(){
    audio.play();
}
function pauseAudio(){
    audio.pause();
}
function stopAudio(){
    audio.load();
    audio.pause();
}
function muteAudio(){
    audio.muted = !audio.muted; 

}
function changeVolume(x){
    audio.volume = x.value;
}
function changeTime(x){
    audio.currentTime = x.value;
}
function changeDuration(x){
    console.log("change")
    document.getElementsByTagName("input")[1].value = x.currentTime;
}
function onLoad(){
    //document.getElementsByTagName("source")[0].src="111-المسد.mp3";
    document.getElementsByTagName("input")[1].max = audio.duration;
}
function changeAudio(x){
    stopAudio();
    audio.src=x.id;
    onLoad();
}