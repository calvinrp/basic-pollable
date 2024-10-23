export class Document {
    constructor(doc) {
        this.doc = doc;
    }
    querySelector(selectors) {
        return new Element(this.doc.querySelector(selectors));
    }
}

export class Element {
    constructor(el) {
        this.el = el;
    }
    setTextContent(text) {
        this.el.textContent = text;
    }
}

export class Window {
    constructor(win) {
        this.win = win;
    }
    document() {
        return new Document(this.win.document);
    }
}

export const global = {
    getWindow: () => {
        return new Window(window);
    },
    Document: Document,
    Element: Element,
    Window: Window,
};
