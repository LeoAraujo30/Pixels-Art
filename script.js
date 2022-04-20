function CoresDaPaleta() {
    const cor = document.getElementsByClassName('color');
     cor[0].style.background = 'black'
     cor[1].style.background = 'red'
     cor[2].style.background = 'green'
     cor[3].style.background = 'blue'
}
CoresDaPaleta()


const paleta1 = document.getElementsByTagName('li')[0];
const paleta2 = document.getElementsByTagName('li')[1];
const paleta3 = document.getElementsByTagName('li')[2];
const paleta4 = document.getElementsByTagName('li')[3];
 function paletaSelecionada(event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected')
    event.target.classList.add('selected')
}
paleta1.addEventListener('click', paletaSelecionada)
paleta2.addEventListener('click', paletaSelecionada)
paleta3.addEventListener('click', paletaSelecionada)
paleta4.addEventListener('click', paletaSelecionada)