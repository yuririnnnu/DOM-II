import './less/index.less'

// Your code goes here!
// mouseover
const logoHead = document.querySelector(".logo-heading");
logoHead.addEventListener("mouseenter", function(event) {
    event.target.style.color = "gray";
});

// keydown
const welcome = document.querySelector(".intro h2");
document.addEventListener("keydown", logkey);
function logkey(e) {
    welcome.textContent += `${e.code}`
}

// wheel
// const go = document.querySelector(".text-content");
// let scale = 1;
// function zoom(event) {
//     event.preventDefault();
//     if (event.deltaY < 0) {
//         scale *= event.deltaY * -2;
//     } else {
//         scale /= event.deltaY * -2;
//     }
//     scale = Math.min(Math.max(125, scale), 4)
//     go.style.transform = `scale(${scale})`
// }
// document.onwheel = zoom;

// load
// const preview = document.querySelector("img.img-fluid");
const img = document.querySelector(".img-content");
document.addEventListener('readystatechange', (event) => {
    img.textContent = img.textContent + `readystate: ${document.readyState}`;
});

// focus
const destination = document.querySelector(".content-destination h2")
function pause() {
    document.body.classList.add('paused');
    destination.textContent = 'FOCUS LOST!';
    }  
function play() {
    document.body.classList.remove('paused');
    destination.textContent = 'This document has focus. Click outside the document to lose focus.';
    }
window.addEventListener('blur', pause);
window.addEventListener('focus', play);

// resize 
const headImg = document.querySelector(".intro img");
const headh = document.querySelector(".intro img")
function reportWindowSize() {
    headImg.textContent = window.innerHeight;
    headh.textContent = window.innerWidth;    
}
window.onresize = reportWindowSize;

// scroll
const scroll = document.querySelector(".destination h4")
let lastKnownScrollPosition = 0;
let ticking = false;
function scrollUp(event) {
    scroll.textContent = `This is updated: ${event.code}`
}
document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function() {
            scrollUp(lastKnownScrollPosition);
        ticking = false;
        });
        ticking = true;
    }
});

// key press
const d = document.querySelector(".destination:nth-of-type(2) .btn");
document.addEventListener('keypress', logKey);
function logKey(event) {
    d.textContent += ` ${event.code}`;
}
// key up
const up = document.querySelector('header p');
document.addEventListener('keyup', keyUp);
function keyUp(e) {
    up.textContent += ` ${e.code}`;
}

// dblclick
const c = document.querySelector('.destination:nth-of-type(3) .btn');

c.addEventListener('dblclick', function (e) {
    c.preventDefault();
    c.style.color = "red";
});

// drag
// const a = document.querySelector("header img")
// document.addEventListener("dragstart", function(event) {
//     a = event.target
//     event.target.style.opacity = .1;
// }, false);