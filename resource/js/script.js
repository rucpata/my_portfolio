let proj = document.getElementsByClassName("project");
let techno = document.getElementsByClassName("pro_techno");

function showTech(){
    techno.style.display = "block";
}

proj.addEventListener("mouseover", showTech);


let item = document.getElementById('head-item')

function change(){
    item.style.color = 'pink';
}

item.addEventListener('mouseover', change);