import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
   constructor(popup) {
        super(popup);
        this._confButton = this._popup.querySelector('.form__save-button');
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