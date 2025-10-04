    document.getElementById('audio-player').textTracks[0].addEventListener('cuechange', function() {
    document.getElementById('subtitulos').innerText = this.activeCues[0].text;
});

