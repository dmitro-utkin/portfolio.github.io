const myPhoto = document.getElementById("myPhoto");
const btn = document.getElementById("btn");
const btnText = document.getElementById("btnText");
const btnIcon = document.getElementById("btnIcon");
const footerLogo = document.getElementById("footerLogo");
const githubDark = document.getElementById("githubDark");

btn.onclick = function () {
    let setTheme = document.body; 
    setTheme.classList.toggle("darkTheme");

    let theme;

    if(setTheme.classList.contains("darkTheme")){
        theme = "DARK";
        myPhoto.src = "./Images/my_photo-dark.jpg";
        btnIcon.src = "./Images/sun_icon.png";
        btnText.innerHTML = "Light";
        footerLogo.src = "./Images/Logo_Footer_Dark.svg";
        githubDark.src = "./Images/desktop3/akar-icons_github-fill_dark.svg";
    } else{
        myPhoto.src = "./Images/my_photo.jpg";
        theme = "LIGHT";
        btnIcon.src = "./Images/moon_icon.png";
        btnText.innerHTML = "Dark";
        footerLogo.src = "./Images/Logo_Footer.svg";
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
    footerLogo.src = "./Images/logo_Footer_Dark.svg";
    githubDark.src = "./Images/desktop3/akar-icons_github-fill_dark.svg";
}
