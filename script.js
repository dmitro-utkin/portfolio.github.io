let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
let footerLogo = document.getElementById("footerLogo");

btn.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        btnIcon.src = "./Images/sun_icon.png";
        btnText.innerHTML = "Light";
        footerLogo.src = "./Images/logo_1_Dark.svg";
    } else {
        btnIcon.src = "./Images/moon_icon.png";
        btnText.innerHTML = "Dark";
        footerLogo.src = "./Images/logo 11.svg";
    }
}
