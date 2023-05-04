let water_waves = new Audio();
water_waves.src = "/SoundSite/src/water_waves.wav";

let wind = new Audio();
wind.src = "/SoundSite/src/wind.wav";

let birds = new Audio();
birds.src = "/SoundSite/src/birds.wav";

let chilren_audience = new Audio();
chilren_audience.src = "/SoundSite/src/chilren_audience.wav";

let camp_fire = new Audio();
camp_fire.src = "/SoundSite/src/camp_fire.wav";

let city_road = new Audio();
city_road.src = "/SoundSite/src/city_road.wav";

let clock_timer = new Audio();
clock_timer.src = "/SoundSite/src/clock_timer.wav";

let thunder = new Audio();
thunder.src = "/SoundSite/src/thunder.wav";

function audioFunction(audio){
   if (audio.paused) {
    // audio.currentTime=0;
   audio.loop=true;
    audio.play();
 } else {
   audio.pause();
 }
}