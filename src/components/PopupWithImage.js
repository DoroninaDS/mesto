import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
        this._imageFull = document.querySelector('.figure__image');
        this._titleFull = document.querySelector('.figure__title');
    }

    open ({name, link}) {
        this._imageFull.src = link;
        this._imageFull.alt = name;
        this._titleFull.textContent = name;
        super.open();
    }
}