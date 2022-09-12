export default class Section {
    constructor({ data, renderer }, cardsConteiner) {
        this._renderedItems = data;
        this._renderer = renderer;
        this._container = cardsConteiner;
    }

    clear() {
        this._container.innerHTML = '';
    }

    renderItems() {
        this.clear();
        this._renderedItems.forEach(item => {
          this._renderer(item);
        });
    }
    
    addItem(element) {
        this._container.prepend(element);
    }
}