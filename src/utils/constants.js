const imageSochi = new URL('../images/Sochi.jpg', import.meta.url);
const imageKrasnoyarsk = new URL('../images/krasnoyarsk-krai.jpg', import.meta.url);
const imageIvanovo = new URL('../images/ivanovo.jpg', import.meta.url);
const imagePervushino = new URL('../images/Pervushino.jpg', import.meta.url);
const imagePrimorsk = new URL('../images/Primorsky-Krai.jpg', import.meta.url);
const imageSPb = new URL('../images/Saint-Petersburg.jpg', import.meta.url);

const initialCards = [
    {
      name: 'Сочи',
      link: imageSochi
    },
    {
      name: 'Красноярский край',
      link: imageKrasnoyarsk
    },
    {
      name: 'Иваново',
      link: imageIvanovo
    },
    {
      name: 'Первушино',
      link: imagePervushino
    },
    {
      name: 'Приморский край',
      link: imagePrimorsk
    },
    {
      name: 'Санкт-Петербург',
      link: imageSPb
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

const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupFull = document.querySelector('.popup_full');
const popupEditOpenButton = document.querySelector('.profile__info-edit-button');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const nameInput = document.querySelector('.form__input_type_name');
const aboutMeInput = document.querySelector('.form__input_type_about-me');
const cardsConteiner= document.querySelector('.elements');

export {initialCards, formObj, cardObj, 
  popupEdit, popupAdd, popupFull, popupEditOpenButton, 
  popupAddOpenButton, nameInput, aboutMeInput, cardsConteiner};