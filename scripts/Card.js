export class Card {
  constructor (data, cardObj, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelectors = cardObj;
    this._handleCardClick = handleCardClick;
    this._card = document
      .querySelector(this._cardSelectors.templateElement)
      .content.querySelector(this._cardSelectors.cardElement)
      .cloneNode(true);
    this._imageElement = this._card.querySelector(this._cardSelectors.imageElement);
    this._textElement = this._card.querySelector(this._cardSelectors.textElement);
    this._likeButton = this._card.querySelector(this._cardSelectors.likeButton);
    this._deleteButton = this._card.querySelector(this._cardSelectors.deleteButton);
  };

  generateCard() {
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._textElement.textContent = this._name;
    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {
    this._imageElement.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });

    this._likeButton.addEventListener('click', () => {
      this._likeCard();
    });
    this._deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });
  }
  
  _likeCard() {
    this._likeButton.classList.toggle(this._cardSelectors.likeActive);
  };

  _deleteCard(){
    this._card.remove();
  };
};