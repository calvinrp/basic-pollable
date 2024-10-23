export class Pollable {
  ready() {
    return true;
  }

  async block() {}
}

export const poll = async (inList) => {
  await Promise.race(inList.map((pollable, i) => pollable.block()));

  let ready = [];
  for (const i = 0; i < inList.length; i++) {
    if (await inList[i].ready()) {
      ready.push(i);
    }
  }

  return new Uint32Array(ready);
};
