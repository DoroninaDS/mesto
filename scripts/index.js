const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupFull = document.querySelector('.popup_full');

const popupEditOpenButton = document.querySelector('.profile__info-edit-button');
const popupAddOpenButton = document.querySelector('.profile__add-button');

const popupEditCloseButton = document.querySelector('.popup__close-edit');
const popupAddCloseButton = document.querySelector('.popup__close-add');
const popupFullCloseButton = document.querySelector('.popup__close-full');

const formEdit = document.querySelector('.form_edit');
const nameInput = formEdit.querySelector('.form__input_type_name');
const aboutMeInput = formEdit.querySelector('.form__input_type_about-me');

const infoTitleElement = document.querySelector('.profile__info-title');
const infoSubtitleElement = document.querySelector('.profile__info-subtitle');

const formAdd = document.querySelector('.form_add');
const namedInput = formAdd.querySelector('.form__input_type_named');
const linkInput = formAdd.querySelector('.form__input_type_link');

const imageFull = document.querySelector('.figure__image');
const titleFull = document.querySelector('.figure__title');

const cardsConteiner= document.querySelector('.elements');
const templateElement = document.querySelector('#element-template').content;

const openPopup = function(popup) {
  popup.classList.add('popup_opened');
};
  
const closePopup = function(popup) {
  popup.classList.remove('popup_opened');
};

function createCard(name, link){
  const elementCard = templateElement.querySelector('.element').cloneNode(true);
  const imageElement = elementCard.querySelector('.element__image');
  const textElement = elementCard.querySelector('.element__title');
  const likeButton = elementCard.querySelector('.element__like');
  const deleteButton = elementCard.querySelector('.element__delete');

  imageElement.src = link;
  imageElement.alt = name;
  textElement.textContent = name;
  imageElement.addEventListener('click', openPopupFull);
  likeButton.addEventListener('click', likeCard);
  deleteButton.addEventListener('click', deleteCard);

  return elementCard;
};

function addCard(name, link) {
  const elementCard = createCard(name, link);
  cardsConteiner.prepend(elementCard);
};

function openPopupFull(evt) {
  openPopup(popupFull);
  imageFull.src = evt.target.src;
  imageFull.alt = evt.target.alt;
  titleFull.textContent = evt.target.alt;
};

function likeCard(evt) {
  evt.target.classList.toggle('element__like_active');
};

function deleteCard(evt) {
  evt.target.closest('.element').remove();
};

initialCards.forEach(function(initialCards){
  addCard(initialCards.name, initialCards.link);
});

function formEditSubmitHandler(evt) {
  evt.preventDefault();
  infoTitleElement.textContent = nameInput.value;
  infoSubtitleElement.textContent = aboutMeInput.value;
  closePopup(popupEdit);
};

function formAddSubmitHandler(evt) {
  evt.preventDefault();
  addCard (namedInput.value, linkInput.value);
  namedInput.value = '';
  linkInput.value = '';
  closePopup(popupAdd);
};

popupEditOpenButton.addEventListener('click', function () {
  openPopup(popupEdit);
  nameInput.value = infoTitleElement.textContent;
  aboutMeInput.value = infoSubtitleElement.textContent;
});

popupAddOpenButton.addEventListener('click', function () {
  openPopup(popupAdd);
});

popupEditCloseButton.addEventListener('click', function () {
  closePopup(popupEdit);
});

popupAddCloseButton.addEventListener('click', function () {
  closePopup(popupAdd);
});

popupFullCloseButton.addEventListener('click', function () {
  closePopup(popupFull);
});

formEdit.addEventListener('submit', formEditSubmitHandler);
formAdd.addEventListener('submit', formAddSubmitHandler);