import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
   constructor(popupSelector) {
        super(popupSelector);
        this._confButton = this._elemment.querySelector('.form__save-button');
    }

    submCallback (confirm) {
        this._handleSubmit = confirm;
    }

    setEventListeners() {
        super.setEventListeners();
        this._confButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        })
    }
}