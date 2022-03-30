//circle progress
window.onload = function circleProgress(){
    document.getElementById("logo-load").style.display="none";
    new CircleProgress('.progress', {
        max: 100,
        value: 100,
        animationDuration: 2000
    });
}

// Scroll stop detector
function scrollStop (callback, refresh = 1000) {
    if (!callback || typeof callback !== 'function') return;
    let isScrolling;
    window.addEventListener('scroll', function () {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(callback, refresh);
    }, false);
}

// if user stopped scrolling
scrollStop(function () {
    if (screen.width > 900){
        if(document.getElementById("section1").getBoundingClientRect().bottom >= ((window.innerHeight)/2)){
            sectionToScroll = document.getElementById('section1');
        } else if(document.getElementById("section2").getBoundingClientRect().bottom >= ((window.innerHeight)/2)) {
            sectionToScroll = document.getElementById('section2');
        } else if(document.getElementById("section3").getBoundingClientRect().bottom >= ((window.innerHeight)/2)) {
            sectionToScroll = document.getElementById('section3');
        } else {
            sectionToScroll = '';
        }
        scrollSection(sectionToScroll);
    }
});

function scrollSection(sectionToScroll){
    sectionToScroll.scrollIntoView({behavior: 'smooth'});
}

