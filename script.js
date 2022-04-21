function CoresDaPaleta() {
    const cor = document.getElementsByClassName('color');
     cor[0].style.background = 'black'
     cor[1].style.background = 'red'
     cor[2].style.background = 'green'
     cor[3].style.background = 'blue'
}
CoresDaPaleta()
/////////////////////////////////////////////////////////
 function paletaSelecionada(event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected')
    event.target.classList.add('selected')
}
const paleta = document.getElementsByTagName('li');
for(i=0; i < paleta.length; i+=1) {
    paleta[i].addEventListener('click', paletaSelecionada)
}
/////////////////////////////////////////////////////////////////
function pintar(event) {
    const selected = document.querySelector('.selected');
    event.target.style.background = selected.style.background
}
const pixel = document.getElementsByClassName('pixel')
for(i=0; i < pixel.length; i+=1) {
    pixel[i].addEventListener('click', pintar)
}
////////////////////////////////////////////////////////////////
function clear() {
    for(i=0; i < pixel.length; i+=1) {
         pixel[i].style.background = 'white'
    }
}
const button = document.getElementById('clear-board')
button.addEventListener('click', clear)