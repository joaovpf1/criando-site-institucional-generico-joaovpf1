/* ------------------------------- Coloque sua lógica aqui ------------------------------- */

function appearModal(){
    const modalButton = document.querySelector('.header__button');
    const modalDialog = document.querySelector('.header__modal--container');
    
    modalButton.addEventListener("click", () => {
        modalDialog.showModal();
        closeModal();
    });
}


function hideModal(){
    const closeButton = document.querySelector('.modal__close-button');
    const modalDialog = document.querySelector('.header__modal--container');

    closeButton.addEventListener('click', () => {
        modalDialog.close();
    });
}

function sendModal(){
    const sendButton = document.querySelector('.modal__send-button');
    const modalDialog = document.querySelector('.header__modal--container');

    sendButton.addEventListener('click', () => {
        modalDialog.close();
    });
}

hideModal();
sendModal();
appearModal();