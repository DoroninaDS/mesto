export default class FormValidator {
    constructor (formObj, formElement) {
        this._formSelectors = formObj;
        this._formElement = formElement;
        this._buttonElement = this._formElement.querySelector(this._formSelectors.submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._formSelectors.inputSelector));
    };

    _showInputError (inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._formSelectors.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._formSelectors.errorClass);
    };

    _hideInputError (inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._formSelectors.inputErrorClass);
        errorElement.textContent = " ";
        errorElement.classList.remove(this._formSelectors.errorClass);
    };

    _checkInputValidity (inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _hasInvalidInput () {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState () {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._formSelectors.inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', true);
        } else {
            this._buttonElement.classList.remove(this._formSelectors.inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    };

    _setEventListeners () {
        this._toggleButtonState();

        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonState();
            });
        });
    };

    enableValidation () {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };

    resetValidation() {
        this._toggleButtonState ();
        this._inputList.forEach((inputElement) => {
            this._hideInputError (inputElement);
        });
    };
};