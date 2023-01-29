export default class Section {
    constructor({renderer }, cardsConteiner) {
        this._renderer = renderer;
        this._container = document.querySelector(cardsConteiner);
    }

    renderItems(cards) {
        cards.forEach((card) => {
            this._renderer(card)
        });
    }
    
    addItem(card) {
        this._container.prepend(card);
    }
}