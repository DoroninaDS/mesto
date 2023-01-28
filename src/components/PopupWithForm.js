import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handleSubmit}) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._inputList = Array.from(this._elemment.querySelectorAll('.form__input'));
        this.form = this._elemment.querySelector('.form');
        this._button = this._elemment.querySelector('.form__save-button');
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
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
            this.close();
        })
    }

    close() {
        super.close();
        this.form.reset();
    }

    renderLoading (isLoading) {
        if (isLoading) {
            this._button.textContent = 'Сохранение...';
        } else {
            this._button.textContent = this._textButton;
        }
      }
}