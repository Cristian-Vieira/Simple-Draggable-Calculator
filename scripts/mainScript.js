
const openModalbutton = document.getElementById('open-modal1-button');
const modal1 = document.getElementById('my-modal1');
const closebutton = document.querySelector('.close-button');

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

//Define a função para tornar o elemento DIV arrastável:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    // Variáveis para armazenar a posição do mouse
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // Verifica se há um cabeçalho para arrastar o DIV
    if (document.getElementById(elmnt.id + "header")) {
        // Se houver, usa o cabeçalho como referência para o arraste
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // Se não houver cabeçalho, qualquer parte do DIV pode ser usada para arrastá-lo
        elmnt.onmousedown = dragMouseDown;
    }

    // Função chamada quando o usuário clica e segura o cabeçalho ou a área dentro do DIV
    function dragMouseDown(e) {
        // Pega o evento de clique ou o evento padrão da janela
        e = e || window.event;
        // Previne o comportamento padrão do clique
        e.preventDefault();
        // Pega a posição inicial do cursor do mouse
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Define a função para ser chamada quando o botão do mouse for solto
        document.onmouseup = closeDragElement;
        // Define a função para ser chamada sempre que o cursor do mouse se mover
        document.onmousemove = elementDrag;
    }

    // Função chamada sempre que o cursor do mouse se mover enquanto o botão estiver pressionado
    function elementDrag(e) {
        // Pega o evento de movimento ou o evento padrão da janela
        e = e || window.event;
        // Previne o comportamento padrão do movimento
        e.preventDefault();
        // Calcula a nova posição do cursor do mouse
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Define a nova posição do elemento
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    // Função chamada quando o botão do mouse é solto
    function closeDragElement() {
        // Interrompe o arrastar do DIV quando o botão do mouse é solto
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
