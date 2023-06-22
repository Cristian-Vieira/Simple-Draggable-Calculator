// Get Elements of DOM
const openModalbutton = document.getElementById('open-modal1-button');
const modal1 = document.getElementById('my-modal1');
const closebutton = document.querySelector('.close-button');
const modalCentralizador = document.getElementById('centralizador')

 // Bloco que manipula abertura e fechamento do modal
openModalbutton.addEventListener('click', () => {
    modal1.style.display = 'block';
});

closebutton.addEventListener('click', () => {
    modal1.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal1) {
        modal1.style.display = 'none';
    }
});

window.addEventListener('click', (event) => {
     // Fecha o modal caso o usuario clique fora dele 
    if (event.target == modalCentralizador ) {
        modal1.style.display = 'none';
    }
});




 // Função para tornar o elemento DIV arrastável:
dragElement(document.getElementById("mydiv"));

function dragElement(elemento_1) {
     // Variáveis para armazenar a posição do mouse
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  
     // usa o cabeçalho como referência para o arraste
    document.getElementById(elemento_1.id + "header").onmousedown = dragMouseDown;


     // Função chamada quando o usuário clica e segura o cabeçalho ou a área dentro do DIV
    function dragMouseDown(elemento_2) {
         // Pega o evento de clique ou o evento padrão da janela
        elemento_2 = elemento_2 || window.event;
         // Previne o comportamento padrão do clique
        elemento_2.preventDefault();
         // Pega a posição inicial do cursor do mouse
        pos3 = elemento_2.clientX;
        pos4 = elemento_2.clientY;
         // Define a função para ser chamada quando o botão do mouse for solto
        document.onmouseup = closeDragElement;
         // Define a função para ser chamada sempre que o cursor do mouse se mover
        document.onmousemove = elementDrag;
    }

     // Função chamada sempre que o cursor do mouse se mover enquanto o botão estiver pressionado
    function elementDrag(elemento_2) {
         // Pega o evento de movimento ou o evento padrão da janela
        elemento_2 = elemento_2 || window.event;
         // Previne o comportamento padrão do movimento
        elemento_2.preventDefault();
         // Calcula a nova posição do cursor do mouse
        pos1 = pos3 - elemento_2.clientX;
        pos2 = pos4 - elemento_2.clientY;
        pos3 = elemento_2.clientX;
        pos4 = elemento_2.clientY;
         // Define a nova posição do elemento
        elemento_1.style.top = (elemento_1.offsetTop - pos2) + "px";
        elemento_1.style.left = (elemento_1.offsetLeft - pos1) + "px";
    }

     // Função chamada quando o botão do mouse é solto
    function closeDragElement() {
         // Interrompe o arrastar do DIV quando o botão do mouse é solto
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
