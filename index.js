var seconds = 0;
var timeInterval = null;

function formatSeconds(second) {
    var m = Math.floor(second / 60);
    var h = Math.floor(m / 60);
    var s = second % 60;
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    return h + ' : ' + m + ' : ' + s;
}

document.getElementById('btnPause').onclick = () => {
    if (timeInterval) {
        clearInterval(timeInterval);
    }
    document.getElementById('btnStart').innerHTML = 'Continue';
    document.getElementById('btnStart').onclick = () => {
        document.getElementById('btnStart').innerHTML = 'Start';
        timeInterval = setInterval(() => {
            seconds++;
            var time = formatSeconds(seconds);
            document.getElementById('time').innerHTML = time;
        }, 1000)
        document.getElementById('btnStart').onclick = () => {}
    }
}

document.getElementById('btnStop').onclick = () => {
    if (timeInterval) {
        clearInterval(timeInterval);
    }
    seconds = 0;
    document.getElementById('time').innerHTML = formatSeconds(seconds);
    document.getElementById('btnStart').onclick = () => {
        document.getElementById('btnStart').innerHTML = 'Start';
        timeInterval = setInterval(() => {
            seconds++;
            var time = formatSeconds(seconds);
            document.getElementById('time').innerHTML = time;
        }, 1000)
        document.getElementById('btnStart').onclick = () => {}
    }
}

document.getElementById('btnStart').onclick = () => {
    timeInterval = setInterval(() => {
        seconds++;
        var time = formatSeconds(seconds);
        document.getElementById('time').innerHTML = time;
    }, 1000)
    document.getElementById('btnStart').onclick = () => {}
}