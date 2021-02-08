let proj = document.getElementById("project1");
let techno = document.getElementById("pro_techno1");

function showTech(){
    techno.style.display = 'block';
    proj.style.opacity = '1';
    proj.style.width = '470px';
    proj.style.height = '470px';
}

function hiddeTech(){
    techno.style.display = 'none';
    proj.style.opacity = '0.7';
    proj.style.width = '450px';
    proj.style.height = '450px';
}



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