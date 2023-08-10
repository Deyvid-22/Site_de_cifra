let list_music = document.querySelectorAll('.music-list')
let button = document.querySelector('.button')
button.addEventListener('click', clicar)

let a = 0
let b = 12
while(a<6){
    list_music[a].style.display = 'block'
    a++
}
function clicar(){
    for(let c=0;c<b;c++){
        list_music[c].style.display = 'block'
     }
     b=b+6
}

