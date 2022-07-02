let popupElement = document.querySelector('.popup');
let closeButtonElement = popupElement.querySelector('.popup__close-button');
let openButtonElement = document.querySelector('.profile__info-edit-button');
let infoTitleElement = document.querySelector('.profile__info-title');
let infoSubtitleElement = document.querySelector('.profile__info-subtitle');
let popupFormElement = document.querySelector('.popup__form');
let nameInput = popupFormElement.querySelector('.popup__form_input_type_name');
let aboutMeInput = popupFormElement.querySelector('.popup__form_input_type_about-me');

const openPopup = function() {
  popupElement.classList.add('popup__open');
  nameInput.value = infoTitleElement.textContent;
  aboutMeInput.value = infoSubtitleElement.textContent;
}
  
const closePopup = function() {
  popupElement.classList.remove('popup__open');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  infoTitleElement.textContent = nameInput.value;
  infoSubtitleElement.textContent = aboutMeInput.value;
  closePopup();
}

openButtonElement.addEventListener('click', openPopup);
closeButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('submit', formSubmitHandler);


