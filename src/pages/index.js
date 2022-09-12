
import {initialCards, formObj, cardObj, 
  popupEdit, popupAdd, popupFull, popupEditOpenButton, 
  popupAddOpenButton, nameInput, aboutMeInput, namedInput, linkInput,
  infoTitleElement, infoSubtitleElement, cardsConteiner} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const popupEditValidation = new FormValidator (formObj, popupEdit);
const popupAddValidation = new FormValidator (formObj, popupAdd);

const fullImage = new PopupWithImage(popupFull);

function createCard(data){
  const card = new Card (data, cardObj,{
    handleCardClick: (data) => {
      fullImage.open(data)
    }
  });
  return card.generateCard();
};

const addCard = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    addCard.addItem(cardElement)
  }
}, cardsConteiner);

const userInfo = new UserInfo ({
  nameSelector: '.profile__info-title', 
  aboutMeSelector: '.profile__info-subtitle'
});

const userPopup = new PopupWithForm({
  popupSelector: popupEdit, 
  handleFormSubmit: (data) => {
    userInfo.setUserInfo({
      name: data.nameInput,
      aboutMe: data.aboutMeInput
    });
    userPopup.close();
  }
})

const addPopup = new PopupWithForm({
  popupSelector: popupAdd, 
  handleFormSubmit: (data) => {
    addCard.addItem(createCard({
      name: data.namedInput, 
      link: data.linkInput
    }))
    addPopup.close();
  }
})

popupEditValidation.enableValidation();
popupAddValidation.enableValidation();

addCard.renderItems();
fullImage.setEventListeners();
userPopup.setEventListeners();
addPopup.setEventListeners();

popupEditOpenButton.addEventListener('click', () => {
  popupEditValidation.resetValidation();

  const userData = userInfo.getUserInfo();
  
  nameInput.value = userData.name;
  aboutMeInput.value = userData.aboutMe;

  userPopup.open();
});

popupAddOpenButton.addEventListener('click', () => {
  popupAddValidation.resetValidation();

  addPopup.open();
});