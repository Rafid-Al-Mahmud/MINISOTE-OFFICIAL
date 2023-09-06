for (let i = 0; i < document.querySelectorAll('img').length; i++) {
    document.querySelectorAll('img')[i].draggable='false';
}

window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".top-nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// import fadeOutByRafid from '../../lib/fadeout.js';
var contextElement = document.getElementsByClassName("context-menu")[0];
window.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    contextElement.style.top = event.offsetY + "px";
    contextElement.style.left = event.offsetX + "px";
    contextElement.classList.add("active");
});
window.addEventListener("click", () =>
    contextElement.classList.remove("active")
);

//fade in or out
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);

}
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
function opaClassAdd(elementQuery) {
    const el = document.querySelectorAll(elementQuery);
    for (let i = 0; i < el.length; i++) {
        el[i].classList.add('opa');
    }
}
opaClassAdd('button');
opaClassAdd('nav');
opaClassAdd('ol');
opaClassAdd('ul');
opaClassAdd('li');
opaClassAdd('div');
opaClassAdd('header');
opaClassAdd('main');
opaClassAdd('footer');

/**
 * 
 * minisote
 */





// document.querySelector(".app>iframe").contentDocument.querySelector("*").style.overflow = "hidden";
const l = document.querySelectorAll(".app_logo");
for (let i = 0; i < l.length; i++) {
    l[i].innerHTML += `
                        <div class="store-overlay"></div>
            `;
    l[i].addEventListener("mouseover", () => document.querySelectorAll(".store-overlay")[i].style.display = "block");
    l[i].addEventListener("mouseout", () => document.querySelectorAll(".store-overlay")[i].style.display = "none");
    if (document.querySelectorAll(".app_logo>img")[i].naturalHeight > document.querySelectorAll(".app_logo>img")[i].naturalWidth) {
        document.querySelectorAll(".app_logo>img")[i].style.height = "90%";
    } else {
        document.querySelectorAll(".app_logo>img")[i].style.width = "90%";
    }
}


var root = document.querySelector(':root');
cssVarGet = (name) => getComputedStyle(root).getPropertyValue("--" + name);
cssVarSet = (name, value) => root.style.setProperty("--" + name, value);
cssVarSet('innerWidth', innerWidth);//alert(cssVarGet("innerWidth"));








//---------------------------------------------------

// fadeOutByRafid(document.querySelectorAll('.opa'));


//code for set all imgs as apple store img
/*
var img = [];
for (var i = 0; i <= document.querySelectorAll(".app_logo").length; i++) {
    window.img[i] = document.querySelectorAll(".app>div>div>div.app_logo>img")[i].src;
    document.querySelectorAll(".app>div>div>div.app_logo>img")[i].src = "https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg";
    console.log("2nd(" + i + "): \n" + JSON.stringify(img));
} console.log("1st: \n" + JSON.stringify(img));
setTimeout(() => {
    console.log("3rd(" + i + "): \n" + JSON.stringify(img));
    for (var i1 = 0; i1 <= document.querySelectorAll(".app_logo").length; i1++) {
        document.querySelectorAll(".app>div>div>div.app_logo>img")[i1].src = window.img[i1];
    }
}, 1000);*/

// loadDoc(document.querySelector('main'),'GET','./calculator.html')
// contextmenu.init({
//     name:"print",
//     id:1,
//     action:"click"=()=>print()
// });

const appLink = "./colours.html";
// location.replace("./public/index.html");
// const audio = document.querySelector("audio") || new Audio("https://raw.githubusercontent.com/lopiacode/audio-visualizer/main/forever.mp3");
// document.querySelectorAll('.l')[0].addEventListener('click', () => {
//     document.querySelectorAll('.l')[0].style.animation='slidein .1s ease-in 0s 1 normal forwards running';
//     setTimeout(() => {
//         document.querySelectorAll('.l')[0].outerHTML = '';
//         audio.volume = '0.01';
//         audio.play();
//     }, 2000)
// });
console.warn('click, tap, Swipe, Scroll, Press, Keyboard inputs,  ~Hover~, Double-click, Resize, Focus and blur, Touch gestures, Drag and drop, Context menu');