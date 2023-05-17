document.querySelector('.modal-status-on').addEventListener('click', toggleWindow);
document.getElementById('btn-close').addEventListener('click', toggleWindow);
document.addEventListener('keydown', () => document.getElementById('modal').classList.add('none'))
function toggleWindow() {
    const modal = document.getElementById('modal')
    modal.classList.toggle('none');
}