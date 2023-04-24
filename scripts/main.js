let showMenuButton = document.getElementById('show-menu');
let showModalButton = document.getElementById('show-modal');
let menuDropdown = document.getElementById('menu-dropdown');
let sideTray = document.getElementById('sidetray');
let modalPanel = document.getElementById('modal-panel');

showMenuButton.addEventListener('click', toggleMenuDropdown);
showModalButton.addEventListener('click',showModal);

function toggleMenuDropdown () {
    menuDropdown.classList.toggle('visible');
}
