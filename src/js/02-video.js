const throttle = require("lodash.throttle");

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const _saveLocalTime = function _locTime(e) {
    if (localStorage.getItem('videoplayer-current-time') === 0) {
        localStorage.setItem('videoplayer-current-time', 0)
    } else {
localStorage.setItem('videoplayer-current-time', e.seconds);
    console.log(e.seconds)
    }
    
};

let _upadateTime = throttle(_saveLocalTime, 2000)

player.on('timeupdate', _upadateTime)

let curTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(curTime).then(function (event) {
    console.log(event);
});

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
});
    