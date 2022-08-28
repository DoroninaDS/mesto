import {initialCards, formObj, cardObj, popups, 
  popupEdit, popupAdd, popupFull, popupEditOpenButton, 
  popupAddOpenButton, formEdit, nameInput, aboutMeInput, 
  infoTitleElement, infoSubtitleElement, formAdd, namedInput, 
  linkInput, imageFull, titleFull, cardsConteiner, inputEditSaveButton, 
  inputAddSaveButton} from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const openPopup = function(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', closePopupEsc);
};
  
const closePopup = function(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closePopupEsc);
};

function closePopupEsc(evt){
  if (evt.key === 'Escape') {
    const opendPopup = document.querySelector('.popup_opened');
    closePopup(opendPopup);
  };
};

function createCard(item){
  const card = new Card (item, cardObj, handleCardClick).generateCard();
  return card;
};

function addCard() {
  initialCards.forEach((item) => {
    cardsConteiner.prepend(createCard(item));
  });
};

function handleFormEditSubmit() {
  infoTitleElement.textContent = nameInput.value;
  infoSubtitleElement.textContent = aboutMeInput.value;
  closePopup(popupEdit);
};

function handleFormAddSubmit() {
  const formAddCard = {
    name: namedInput.value,
    link: linkInput.value,
  };
  cardsConteiner.prepend(createCard(formAddCard));
  closePopup(popupAdd);
};

function handleCardClick (link, name) {
  imageFull.src = link;
  imageFull.alt = name;
  titleFull.textContent = name;

  openPopup(popupFull);
}

function disableButton(buttonElement) {
  buttonElement.classList.add('form__save-button_inactive');
  buttonElement.setAttribute('disabled', true);
};

const popupEditValidation = new FormValidator (formObj, popupEdit);
const popupAddValidation = new FormValidator (formObj, popupAdd);

popupEditValidation.enableValidation();
popupAddValidation.enableValidation();

// Listeners
popupEditOpenButton.addEventListener('click', () => {
  popupEditValidation.resetValidation();
  openPopup(popupEdit);
  nameInput.value = infoTitleElement.textContent;
  aboutMeInput.value = infoSubtitleElement.textContent;
  disableButton(inputEditSaveButton);
});

popupAddOpenButton.addEventListener('click', () => {
  popupAddValidation.resetValidation();
  openPopup(popupAdd);
  formAdd.reset();
  disableButton(inputAddSaveButton);
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', function (evt) {
    if (
      evt.target.classList.contains('popup_opened') ||
      evt.target.classList.contains('popup__close-button')
    ) 
    {
      closePopup(popup);
    };
  });  
});

formEdit.addEventListener('submit', handleFormEditSubmit);
formAdd.addEventListener('submit', handleFormAddSubmit);

addCard();