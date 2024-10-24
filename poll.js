export class Pollable {
  ready() {
    return true;
  }

  async block() {}
}

export const poll = {
  poll: async (inList) => {
    await Promise.race(inList.map((pollable, i) => pollable.block()));

    let ready = [];
    for (let i = 0; i < inList.length; i++) {
      if (await inList[i].ready()) {
        ready.push(i);
      }
    }

    return new Uint32Array(ready);
  },

  Pollable,
};
