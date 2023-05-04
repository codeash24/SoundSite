var water_waves = new Audio()
water_waves.src = "/SoundSite/src/water_waves.wav"

function audioFunction(audio){
   if (audio.paused) {
    // audio.currentTime=0;
   audio.loop=true;
    audio.play();
 } else {
   audio.pause();
 }
}