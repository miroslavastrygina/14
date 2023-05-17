/* JavaScript код */
let html = document.querySelector("html");
let buttonsThemes = document.querySelectorAll(".theme-button");
let buttonFonts = document.querySelectorAll(".font-button");
let buttonFontsSize = document.querySelectorAll(".font-size-button");

html.addEventListener("click",e=>{
    switch(e.target.className.split(" ")[0]){
        case "theme-button":
            if(e.target.className.split(" ").includes("theme-button-light")){
                html.setAttribute("data-theme-name","light")
                buttonsThemes[1].classList.remove("active")
                buttonsThemes[0].classList.add("active")
            }
            else if(e.target.className.split(" ").includes("theme-button-dark")){
                html.setAttribute("data-theme-name","dark")
                buttonsThemes[0].classList.remove("active")
                buttonsThemes[1].classList.add("active")
            }
        break;
        case "font-button":
            if(e.target.className.split(" ").includes("font-button-sans-serif")){
                html.setAttribute("data-theme-font","sans-serif")
                buttonFonts[1].classList.remove("active")
                buttonFonts[0].classList.add("active")
            }
            else if(e.target.className.split(" ").includes("font-button-serif")){
                html.setAttribute("data-theme-font","serif")
                buttonFonts[0].classList.remove("active")
                buttonFonts[1].classList.add("active")
            } 
        break;
        case "font-size-button":
            if(e.target.className.split(" ").includes("font-size-button-s")){
                html.setAttribute("data-theme-font-size","small")
                buttonFontsSize[0].classList.add("active")
                buttonFontsSize[1].classList.remove("active")
                buttonFontsSize[2].classList.remove("active")
            }
            else if(e.target.className.split(" ").includes("font-size-button-m")){
                html.setAttribute("data-theme-font-size","medium")
                buttonFontsSize[0].classList.remove("active")
                buttonFontsSize[1].classList.add("active")
                buttonFontsSize[2].classList.remove("active")
            } 
            else if(e.target.className.split(" ").includes("font-size-button-l")){
                html.setAttribute("data-theme-font-size","large")
                buttonFontsSize[0].classList.remove("active")
                buttonFontsSize[1].classList.remove("active")
                buttonFontsSize[2].classList.add("active")
            } 
        break;
    }
})