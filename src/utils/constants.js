const formObj = {
    formEdit: '.form_edit',
    formAdd: '.form_add',
    formAvatar: '.form_edit-avatar',
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
    likeActive: 'element__like_active',
    likeCount: '.element__like-count'
};

const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupAvatar = document.querySelector('.popup_edit-avatar');
const popupFull = document.querySelector('.popup_full');
const popupDelete = document.querySelector('#popup_delete');
const popupEditOpenButton = document.querySelector('.profile__info-edit-button');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const editAvatarButton = document.querySelector('.profile__edit-avatar-button');
const nameInput = document.querySelector('.form__input_type_name');
const aboutMeInput = document.querySelector('.form__input_type_about-me');

export {formObj, cardObj, popupEdit, popupAdd, popupAvatar, popupDelete, popupFull, popupEditOpenButton, popupAddOpenButton, editAvatarButton, nameInput, aboutMeInput};