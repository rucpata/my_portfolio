let proj = document.getElementsByClassName("project");
let techno = document.getElementsByClassName("pro_techno");

function showTech(){
    techno.style.display = "block";
}

proj.addEventListener("mouseover", showTech);

