export namespace SomethingBrowserGlobal {
  export { Window };
  export { Document };
  export { Element };
  export function getWindow(): Window;
}

export class Document {
  querySelector(selectors: string): Element | undefined;
}

export class Element {
  setTextContent(textContent: string): void;
}

export class Window {
  document(): Document | undefined;
}
