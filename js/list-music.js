let list_music = document.querySelectorAll('.list-music');
let button = document.querySelector('.list-button')
let cor = document.querySelectorAll('.cor')

button.addEventListener('click', clicar);


let a = 0
let b = 12
while (a < 9) {
    list_music[a].style.display = 'flex'
    a++
}
function clicar() {
    for (let c = 0; c < b; c++) {
        list_music[c].style.display = 'flex'
    }
    b = b + 6 
}

for(let x = 0; x < list_music.length;x++){

list_music[x].addEventListener('mouseover', colorir)
list_music[x].addEventListener('mouseout', descolorir)
function colorir() {
    cor[x].style.color = '#2de627'
}
function descolorir() {
   cor[x].style.color = ''
}

}