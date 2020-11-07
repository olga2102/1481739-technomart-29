const popup = document.querySelector('.form');
const openPopupButton = document.querySelector('.button-contacts');
const loginClose = popup.querySelector(".modal-close");

openPopupButton.addEventListener('click', function (evt) { 
    evt.preventDefault();
    popup.classList.add('modal-show');
});

loginClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
