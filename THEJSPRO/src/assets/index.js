import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'
const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
    // new AutoPlay()
] });

const button = document.querySelector('#playButton');
button.onclick = () => player.tooglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
    if (player.media.muted){
        player.unmuted();
    } else {
        player.mute();
    }
}