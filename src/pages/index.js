import './index.css';
import {formObj, cardObj, popupEdit, popupAdd, popupAvatar, popupDelete, popupFull, popupEditOpenButton,
popupAddOpenButton, editAvatarButton, nameInput, aboutMeInput, cardsConteiner} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57',
  headers: {
    authorization: 'e801e63b-7588-42cc-9e3d-f75fa53200b5',
    'Content-Type': 'application/json',
  }
});

const confirmPopup = new PopupWithConfirmation(popupDelete);

//создане карточки
function createCard (data) {
  const card = new Card(data, userId, cardObj, handleCardClick, 
  {handleDeleteClick: () => {
    confirmPopup.open();
      confirmPopup.submCallback(() => {
        api.deleteCard(data._id)
          .then(() => {
            card.deleteCard();
            confirmPopup.close();
          })
          .catch((err) => {
            console.log(err);
          })
      })
  }, 
    handleLikeClick: (data) => {
      if(!card.checkLikes()) {
        api.addLike(data._id)
          .then((res) => {
            card.showCountLikes(res.likes)
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        api.deleteLike(data._id)
          .then((res) => {
            card.showCountLikes(res.likes)
          })
          .catch((err) => {
            console.log(err)
          })
      }
  }
  });
  const cardElement = card.generateCard();
  return cardElement;
};

//получене инф-ции о пользователе с сервера
const userInform = api.getUserInfo()
.then((res) => {
  return res
});

//получене инф-ции о изнач. карточках
const initialCards = api.getInitialCards()
.then((res) => {
  return res
});

const cardList = new Section({
  renderer: (card) => {
    cardList.addItem(createCard(card));
  }
}, cardsConteiner);
let userId;

//промисс с изнач. данными
Promise.all([userInform, initialCards])
.then(([user, cards]) => {
  userId = user._id;
  userInfo.setUserInfo(user.name, user.about);
  userInfo.setUserAvatar(user.avatar);
  cardList.renderItems(cards.reverse());
})
.catch((err) => {
  console.log(err);
});

//сведения о пользователе
const userInfo = new UserInfo ({
  nameUser: '.profile__info-title',
  aboutUser: '.profile__info-subtitle',
  avatarUser: '.profile__avatar'
});

// открытие боьшого изображения
const fullImage = new PopupWithImage(popupFull);
const handleCardClick = (name, link) => {
  fullImage.open(name, link);
};

// попап добавления карточки
const addPopup = new PopupWithForm(popupAdd, 
  {handleSubmit: (data) => {
    addPopup.renderLoading (true);
    api.postCard (data.namedInput, data.linkInput)
    .then((res) => {
      cardList.addItem(createCard(res));
      addPopup.close();
    })
    .catch((err) => {
      console.log (err);
    })
    .finally(() => {
      addPopup.renderLoading (false);
    })
  }
}); 

// попап редактирования профиля
const userPopup = new PopupWithForm(popupEdit, 
  {handleSubmit: (data) => {
    userPopup.renderLoading (true);
    api.editUserInfo (data.nameInput, data.aboutMeInput)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about);
      userPopup.close();
    })
    .catch((err) => {
      console.log (err);
    })
    .finally(() => {
      userPopup.renderLoading (false);
    })
  }
});

// попап редактирования аватара
const avatarPopup = new PopupWithForm(popupAvatar, 
  {handleSubmit: (data) => {
    avatarPopup.renderLoading (true);
    api.changeAvatar (data.avatarInput)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      avatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarPopup.renderLoading (false);
    })
  }
});

const popupEditValidation = new FormValidator (formObj, popupEdit);
popupEditValidation.enableValidation();
const popupAddValidation = new FormValidator (formObj, popupAdd);
popupAddValidation.enableValidation();
const popupAvatarValidation = new FormValidator (formObj, popupAvatar);
popupAvatarValidation.enableValidation();

fullImage.setEventListeners();
confirmPopup.setEventListeners();
userPopup.setEventListeners();
addPopup.setEventListeners();
avatarPopup.setEventListeners();

popupEditOpenButton.addEventListener('click', () => {
  popupEditValidation.resetValidation();
  const data = userInfo.getUserInfo();
  nameInput.value = data.nameUser;
  aboutMeInput.value = data.aboutUser;
  userPopup.open();
});

popupAddOpenButton.addEventListener('click', () => {
  popupAddValidation.resetValidation();
  addPopup.open();
});

editAvatarButton.addEventListener('click', () => {
  popupAvatarValidation.resetValidation();
  avatarPopup.open();
});