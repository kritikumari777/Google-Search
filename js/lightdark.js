// dark mode to light mode

const toggle = document.getElementById("moon");
const body = document.querySelector("body");

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-sun')
    if(this.classList.toggle('fa-moon')){
        body.style.background = 'black';
        body.style.color ='white';
        body.style.transition = '2s';
    }else{
        body.style.background = 'white';
        body.style.color = '#FFD700';
        body.style.transition = '2s';
    }
})