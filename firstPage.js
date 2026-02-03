//Changing image
// function hover(element) {
//     element.setAttribute('src', 'Assets/sad.gif');
// }
  
// function unhover(element) {
//     element.setAttribute('src', 'Assets/hi.gif');
// }



//Changing background
// var button = document.getElementById('hover');
// var body = document.body;

// button.onmouseover = function() {
// 	body.className = 'hovered';
// }

// button.onmouseout = function() {
// 	body.className = '';
// }


//Changing gif
const img = document.getElementById('image');

const images = {
    hi: "Pages/Assets/hi.gif",
    ori: "Pages/Assets/sad.gif"
}

function ChangeImage(giphy) {
    img.src = images[giphy];
}
function ResetImage() {
    img.src = images.ori;
};


//Yes button bg image
var body = document.body;

function bg() {
	body.className = 'hovered';
};

function resetBG(){
	body.className = '';
};

//Linking to second page
function myFunction() {
    window.location.href = "Pages/Page 1/secondPage.html";
}

// Touch support for mobile devices
const button = document.getElementById('hover');
let touchActive = false;

button.addEventListener('touchstart', function(e) {
    e.preventDefault();
    touchActive = true;
    button.classList.add('touched');
    ChangeImage('hi');
    bg();
});

button.addEventListener('touchend', function(e) {
    e.preventDefault();
    if (touchActive) {
        // Navigate after a short delay to show the effect
        setTimeout(() => {
            myFunction();
        }, 300);
    }
});

button.addEventListener('touchcancel', function(e) {
    touchActive = false;
    button.classList.remove('touched');
    ResetImage();
    resetBG();
});