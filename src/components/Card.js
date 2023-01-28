export default class Card {
  constructor (data, userId, cardObj, handleCardClick, {handleDeleteClick, handleLikeClick}) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._owner = data.owner._id;

    this._userId = userId;
    this._cardSelectors = cardObj;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._card = document
      .querySelector(this._cardSelectors.templateElement)
      .content.querySelector(this._cardSelectors.cardElement)
      .cloneNode(true);
    this._imageElement = this._card.querySelector(this._cardSelectors.imageElement);
    this._textElement = this._card.querySelector(this._cardSelectors.textElement);
    this._likeButton = this._card.querySelector(this._cardSelectors.likeButton);
    this._likeCount = this._card.querySelector(this._cardSelectors.likeCount);
    this._deleteButton = this._card.querySelector(this._cardSelectors.deleteButton);
    
  };

  generateCard() {
    this._setEventListeners();
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._textElement.textContent = this._name;
    this.showCountLikes(this._likes);
    this.showDeleteIcon ();
    
    return this._card;
  }

  _setEventListeners() {
    this._imageElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick(this);
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick(this);
    });
  }
  
  _dislikeCard() { 
    this._likeButton.classList.remove(this._cardSelectors.likeActive);
  };

  _likeCard() { 
    this._likeButton.classList.add(this._cardSelectors.likeActive);
  };

  checkLikes() {
    const userLikkeCard = this._likes.some(data => data._id === this._userId);
     return userLikkeCard
  }

  showCountLikes(newLikes) {
    this._likes = newLikes;
    this._likeCount.textContent = this._likes.length;
    if(this.checkLikes()) {
      this._likeCard();
    } else {
      this._dislikeCard();
    }
  }

  showDeleteIcon () {
    if (this._owner !== this._userId) {
      this._deleteButton.remove();
    }
  }

  deleteCard(){
    this._card.remove();
  };
};