// This is for the button to appear fading in and dissappear fading out
let button = document.getElementById("topbtn");

window.addEventListener('scroll', () => {

    if(window.pageYOffset >= 400) {
        button.style.opacity = '1';
    }
    else if (window.pageYOffset <= 400) {
        button.style.opacity = '0';
    }
});

// This is for the images to create a parallax effect

const parallax = document.querySelectorAll('.parallax');

for(let i = 0; i <= parallax.length; i++) {
    if(parallax[i] !== undefined) {
        window.addEventListener('scroll', () => {
            let findScroll = window.scrollY;
            parallax[i].style.backgroundPositionY = `${findScroll * .006}px`;
        });
    }
}
