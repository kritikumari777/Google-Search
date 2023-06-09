// implemation og google search
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value;
    
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        
    }else{
        searchWrapper.classList.remove("active"); 
    }
}



