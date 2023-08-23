// pega todos os elementos com a classe list-music
const listMusicElements = document.querySelectorAll('.list-music');
const button = document.querySelector('.list-button');
//ele pega o botao com a classe list-button
const corElements = document.querySelectorAll('.cor');

//ele colocar um ouvinte de evento de click no botao
button.addEventListener('click', clicar);
let a = 12
let b = 6
// passa por cada elemento com a classe list.music
listMusicElements.forEach((listMusicElement,i) => {
  //se o indice i for menor que b exibe o elemento 
  if(i < b){
    listMusicElements[i].style.display = 'flex'
  }
})

function clicar(){
  listMusicElements.forEach((listMusicElement,i) => {
    //se o indice for menor que a quando apertar o botao exibe o elemento
    if(i < a){
      listMusicElements[i].style.display = 'flex'
    }
  });
  a = a + 6 
}
  //passa todos elementos da classe list.music
listMusicElements.forEach((element,i) =>{
  //evento do mouse ao entra na div 
  listMusicElements[i].addEventListener('mouseover',colorir);
  //evento do mouse ao sair da div
  listMusicElements[i].addEventListener('mouseout', descolorir);
  function colorir(){
      corElements[i].style.color = '#2de627'
  };
  function descolorir(){
        corElements[i].style.color = ''
  };
});

