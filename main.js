let sun = document.getElementById('sun');
let moon = document.getElementById('moon');
let bodyStyle = document.getElementById('page');
let backStyle = document.getElementById('hero');

function lightStyle(){
    bodyStyle.style.backgroundColor = 'white';
    bodyStyle.style.color = '#1B2528';
    moon.style.display = 'block';
    sun.style.display = 'none';
    backStyle.style.backgroundImage = ('url(./resource/img/backLight.png)');
}

function darkStyle(){
    bodyStyle.style.backgroundColor = '#1B2528';
    bodyStyle.style.color = 'white';
    moon.style.display = 'none';
    sun.style.display = 'block';
    backStyle.style.backgroundImage = ('url(./resource/img/markus-spiske-FXFz-sW0uwo-unsplash.jpg)');
}

sun.addEventListener('click', lightStyle);
moon.addEventListener('click', darkStyle)