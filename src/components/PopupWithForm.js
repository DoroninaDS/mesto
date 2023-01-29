import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, {handleSubmit}) {
        super(popup);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.form');
        this._inputList = Array.from(this._form.querySelectorAll('.form__input'));
        this._button = this._popup.querySelector('.form__save-button');
        this._textButton = this._button.textContent;
    }

    _getInputValues() {
        const formValues = {};
        this._inputList.forEach((input) => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
        })
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderLoading (isLoading) {
        if (isLoading) {
            this._button.textContent = 'Сохранение...';
        } else {
            this._button.textContent = this._textButton;
        }
      }
}