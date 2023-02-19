const body = document.body;
const mode = document.querySelector(".icon-mode");

const light = 'light_mode';
const bgcl = '#F2F4F7';
const tcl = '#001F3F';

const dark = 'dark_mode';
const bgcd = '#223C50';
const tcd = '#FFFFFF';

body.style.backgroundColor = bgcl;
body.style.color = tcl;
mode.innerText = dark;
mode.style.cursor = 'pointer';

mode.addEventListener('click', function() {
    if (mode.innerText === light) {
        body.style.backgroundColor = bgcl;
        body.style.color = tcl;
        mode.innerText = dark;
    } else {
        body.style.backgroundColor = bgcd;
        body.style.color = tcd;
        mode.innerText = light;
    }
});
