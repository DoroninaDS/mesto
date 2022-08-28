const initialCards = [
    {
      name: 'Сочи',
      link: './images/Sochi.jpg'
    },
    {
      name: 'Красноярский край',
      link: './images/krasnoyarsk-krai.jpg'
    },
    {
      name: 'Иваново',
      link: './images/ivanovo.jpg'
    },
    {
      name: 'Первушино',
      link: './images/Pervushino.jpg'
    },
    {
      name: 'Приморский край',
      link: './images/Primorsky-Krai.jpg'
    },
    {
      name: 'Санкт-Петербург',
      link: './images/Saint-Petersburg.jpg'
    }
];

const formObj = {
    formEdit: '.form_edit',
    formAdd: '.form_add',
    form: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__save-button',
    inactiveButtonClass: 'form__save-button_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
};

const cardObj = {
    templateElement: '#element-template',
    cardElement: '.element',
    imageElement: '.element__image',
    textElement: '.element__title',
    likeButton: '.element__like',
    deleteButton: '.element__delete',
    likeActive: 'element__like_active'
};

const popups = document.querySelectorAll('.popup'); 
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupFull = document.querySelector('.popup_full');

const popupEditOpenButton = document.querySelector('.profile__info-edit-button');
const popupAddOpenButton = document.querySelector('.profile__add-button');

const formEdit = document.querySelector(formObj.formEdit);
const nameInput = formEdit.querySelector('.form__input_type_name');
const aboutMeInput = formEdit.querySelector('.form__input_type_about-me');

const infoTitleElement = document.querySelector('.profile__info-title');
const infoSubtitleElement = document.querySelector('.profile__info-subtitle');

const formAdd = document.querySelector(formObj.formAdd); // +
const namedInput = formAdd.querySelector('.form__input_type_named');
const linkInput = formAdd.querySelector('.form__input_type_link');

const imageFull = document.querySelector('.figure__image');
const titleFull = document.querySelector('.figure__title');

const cardsConteiner= document.querySelector('.elements');

const inputEditSaveButton = document.querySelector('.form__save-button_edit');
const inputAddSaveButton = document.querySelector('.form__save-button_add');

export {initialCards, formObj, cardObj, popups, popupEdit, popupAdd, popupFull, popupEditOpenButton, popupAddOpenButton, formEdit, nameInput, aboutMeInput, infoTitleElement, infoSubtitleElement, formAdd, namedInput, linkInput, imageFull, titleFull, cardsConteiner, inputEditSaveButton, inputAddSaveButton};