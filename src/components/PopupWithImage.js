import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popup) {
        super(popup);
        this._imageFull = this._popup.querySelector('.figure__image');
        this._titleFull = this._popup.querySelector('.figure__title');
    }

    open (name, link) {
        this._imageFull.src = link;
        this._imageFull.alt = name;
        this._titleFull.textContent = name;
        super.open();
    }
}