let showMenuButton = document.getElementById('show-menu');
let showModalButton = document.getElementById('show-modal');
let menuDropdown = document.getElementById('menu-dropdown');
let sideTray = document.getElementById('sidetray');
let modalPanel = document.getElementById('modal-panel');
let closeModalButton = document.getElementById('close-modal')

showMenuButton.addEventListener('click', toggleMenuDropdown);
showModalButton.addEventListener('click',showModal);
closeModalButton.addEventListener('click',hideModal);
document.addEventListener('keydown',(event) => {
if (event.key ==="Escape")  {
hideModal();
   }
});
function toggleMenuDropdown () {
    menuDropdown.classList.toggle('visible');
}
function showModal () {
 modalPanel.classList.add('visible')
}

 function hideModal() {
 modalPanel.classList.remove('visible');
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
