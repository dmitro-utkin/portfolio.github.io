let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
let footerLogo = document.getElementById("footerLogo");

btn.onclick = function () {
    let setTheme = document.body; 
    setTheme.classList.toggle("darkTheme");

    let theme;

    if(setTheme.classList.contains("darkTheme")){
        theme = "DARK";
        btnIcon.src = "./Images/sun_icon.png";
        btnText.innerHTML = "Light";
        footerLogo.src = "./Images/logo_1_Dark.svg";
    } else{
        theme = "LIGHT";
        btnIcon.src = "./Images/moon_icon.png";
        btnText.innerHTML = "Dark";
        footerLogo.src = "./Images/logo 11.svg";
    } 


    localStorage.setItem("PageTheme", JSON.stringify(theme, btnIcon, btnText, footerLogo));
}

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if(GetTheme === "DARK") {
    document.body.classList = "darkTheme";
    btnIcon.src = "./Images/sun_icon.png";
    btnText.innerHTML = "Light";
    footerLogo.src = "./Images/logo_1_Dark.svg";
}
