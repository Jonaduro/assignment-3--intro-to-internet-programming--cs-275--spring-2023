let showMenuButton = document.getElementById('show-menu');
let showModalButton = document.getElementById('show-modal');
let menuDropdown = document.getElementById('menu-dropdown');
let sideTray = document.getElementById('sidetray');
let modalPanel = document.getElementById('modal-panel');
let closeModalButton = document.getElementById('close-modal')

showMenuButton.addEventListener('click', toggleMenuDropdown);
showModalButton.addEventListener('click',showModal);
closeModalButton.addEventListener('click',hideModal);

function toggleMenuDropdown () {
    menuDropdown.classList.toggle('visible');
}
function showModal () {
 let backgroundLayer = document.createElement('div');
 backgroundLayer.classList.add('modal-background');
 modalPanel.appendChild(backgroundLayer);

 let modalContent = document.createElement('div');
 modalContent.classList.add('modal-content');
 let heading = document.createElement('h2')
 heading.textContent ='Modal Title';
 let paragraph = document.createElement('p')
 paragraph.textContent = 'Modal content';
 modalContent.appendChild(header);
 modalContent.appendChild(paragraph);
 modalPanel.appendChild(modalContent);

 backgroundLayer.addEventListener('click', hideModal);

 document.addEventListener('keydown',onKeydown);
 modalPanel.classList.add('visible');
}
function hideModal() {
  let backgroundLayer = document.querySelector('.modal-background');
  let modalContent = document.querySelector('.modal-content-panel');
  modalPanel.removeChild(modalContent);
  modalPanel.removeChild(backgroundLayer);
  modalPanel.classList.remove('visible');
}
function onKeydown (event) {
    if (event.key === "Escape") {
        hideModal();
    }
}
window.addEventListener('resize',() => {
    if( window.innerWidth >=736 ) {
        menuDropdown.style.left = 'auto';
        menuDropdown.style.right='20px';
        sideTray.style.display = 'none';
    } else {
        menuDropdown.style.left ='auto';
        menuDropdown.style.right ='0';
        sideTray.style.display ='block';
    }
});
