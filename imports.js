import { Pollable } from './poll.js';

class ElementOnclickPollable extends Pollable {
    #ready = false;
    #promise;

    constructor(el) {
      super();
      this.#promise = new Promise((resolve) => {
        el.onclick = () => {
          this.#ready = true;
          resolve();
        };
      });
    }

    ready() {
      return this.#ready;
    }

    async block() {
      await this.#promise;
    }
}

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
    textContent() {
        return this.el.textContent;
    }
    setTextContent(text) {
        this.el.textContent = text;
    }
    onclickSubscribe() {
      return new ElementOnclickPollable(this.el);
    }
    onclickGet() {
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
