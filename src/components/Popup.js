export default class Popup {
    constructor(popupSelector) {
        this._elemment = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._elemment.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
        
    close() {
        this._elemment.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
      
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
          this.close();
        };
    }

    setEventListeners() {
        this._elemment.addEventListener('mousedown', (evt) => {
            if (
                evt.target.classList.contains('popup_opened') ||
                evt.target.classList.contains('popup__close-button')
            )
            {
            this.close();
            };
        });
    }
}