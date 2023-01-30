import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
        this._imageFull = this._popupElement.querySelector('.popup__figure_image');
        this._titleFull = this._popupElement.querySelector('.popup__figure_title');
    }

    open (name, link) {
        this._imageFull.src = link;
        this._imageFull.alt = name;
        this._titleFull.textContent = name;
        super.open();
    }
}