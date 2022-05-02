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
        let sections = document.querySelectorAll('.scrollable-section');
        let found = false;
        sections.forEach(function (section) {
            if (found === true) return
            let sectionTop = section.getBoundingClientRect().bottom;
            if (sectionTop >= ((window.innerHeight) / 2)) {
                scrollSection(section)
                found = true
            }
        });
    }
});

function scrollSection(sectionToScroll){
    sectionToScroll.scrollIntoView({behavior: 'smooth'});
}

