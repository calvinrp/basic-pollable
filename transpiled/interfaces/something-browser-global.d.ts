export namespace SomethingBrowserGlobal {
  export { Window };
  export { Document };
  export { Element };
  export function getWindow(): Window;
}
import type { Pollable } from './wasi-io-poll.js';
export { Pollable };

export class Document {
  querySelector(selectors: string): Element | undefined;
}

export class Element {
  setTextContent(textContent: string): void;
  onclickSubscribe(): Pollable;
}

export class Window {
  document(): Document | undefined;
}
