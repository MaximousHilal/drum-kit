window.addEventListener('keypress', function (event) {
    let duration;
    document.querySelectorAll('ul li').forEach(function (item, index) {
        let key = item.dataset.key;
        let audio = document.querySelector('audio[data-key="' + key + '"]')
        
        if (key == event.charCode || Number(key)+32 == event.charCode) {
            item.classList.add('active');
            item.style.transitionDuration = audio.duration / 2 + 's';
            audio.currentTime = 0;
            audio.play();
        }
        setTimeout(function() {
            item.classList.remove('active')
        }, audio.duration * 500)
    })
})