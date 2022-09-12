import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
        this._inputList = this._elemment.querySelectorAll('.form__input');
        this.form = this._elemment.querySelector('.form');
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    } 

    setEventListeners() {
        super.setEventListeners();
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.handleFormSubmit(this._getInputValues());
            this.close();
        })
    }

    close() {
        super.close();
        this.form.reset();
    }
}