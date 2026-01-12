var counter_num;
var timerInterval;

function countdown(){
    var counter = document.getElementById('countdown');
    var background = document.getElementById('box');

    //clock format
    var minutes = Math.floor(counter_num / 60);
    var seconds = counter_num % 60;
    seconds = seconds.toString().padStart(2, '0');

    counter.textContent = minutes + ":" + seconds;

    // Timer starting
    if(counter_num === 300){
        play_sound('sounds/start.mp3');
        background.className = 'start';
    }

    // 1st phase over?
    if(counter_num === 285){
        play_sound('sounds/wash.mp3');
        background.className = 'washing'
    }

    // 4 minutes left
    if(counter_num === 120){
        play_sound('sounds/4min.mp3');
    }

    // 3 minutes left
    if(counter_num === 180){
        play_sound('sounds/3min.mp3');
    }

    // 2 minutes left
    if(counter_num === 120){
        play_sound('sounds/2min.mp3');
    }

    // 2nd phase over?
    if(counter_num === 135){
        play_sound('sounds/enjoy.mp3');
        background.className = 'enjoy'
    }

    // 1 minute left
    if(counter_num === 60){
        play_sound('sounds/1min.mp3');
    }

    // Entire shower over?
    if(counter_num === 0){
        stop_countdown();
        play_sound('sounds/shower_over.mp3');
    }
    counter_num -= 1;
}

function start_countdown(){
    clearInterval(timerInterval);
    timerInterval = setInterval(countdown, 1000);
    counter_num = 300;
}

function stop_countdown(){
    clearInterval(timerInterval);
}

function play_sound(sound){
    const audio_sound = new Audio(sound);
    audio_sound.play();
}