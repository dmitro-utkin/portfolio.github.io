let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
let footerLogo = document.getElementById("footerLogo");
let greensockDark = document.getElementById("greensockDark");
let githubDark = document.getElementById("githubDark");

btn.onclick = function () {
    let setTheme = document.body; 
    setTheme.classList.toggle("darkTheme");

    let theme;

    if(setTheme.classList.contains("darkTheme")){
        theme = "DARK";
        btnIcon.src = "./Images/sun_icon.png";
        btnText.innerHTML = "Light";
        footerLogo.src = "./Images/Logo_Footer_Dark.svg";
        greensockDark.src = "./Images/desktop3/cib_greensock_dark.svg";
        githubDark.src = "./Images/desktop3/akar-icons_github-fill_dark.svg";
    } else{
        theme = "LIGHT";
        btnIcon.src = "./Images/moon_icon.png";
        btnText.innerHTML = "Dark";
        footerLogo.src = "./Images/Logo_Footer.svg";
        greensockDark.src = "./Images/desktop3/cib_greensock.svg";
        githubDark.src = "./Images/desktop3/akar-icons_github-fill.svg";
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
    greensockDark.src = "./Images/desktop3/cib_greensock_dark.svg";
    githubDark.src = "./Images/desktop3/akar-icons_github-fill_dark.svg";
}
