
//Website Themes
const theme1Colors = ['#01467d', '#29abe2', '#f3e9d1', '#f9d250', '#013158'];
const theme2Colors = ['#333533', '#f0e784', '#d6d6d6', '#f9d250', '#202020'];
const theme3Colors = ['#a4c3b2', '#esf4f4', '#f6fff8', '#cce3de', '#6b9080'];

document.getElementById('btnTheme1').addEventListener('click', () => setTheme(theme1Colors));
document.getElementById('btnTheme2').addEventListener('click', () => setTheme(theme2Colors));
document.getElementById('btnTheme3').addEventListener('click', () => setTheme(theme3Colors));

function setTheme(colors) {
    document.documentElement.style.setProperty('--firstColor', colors[0]);
    document.documentElement.style.setProperty('--secondColor', colors[1]);
    document.documentElement.style.setProperty('--thirdColor', colors[2]);
    document.documentElement.style.setProperty('--fourthColor', colors[3]);
    document.documentElement.style.setProperty('--fifthColor', colors[4]);
}

