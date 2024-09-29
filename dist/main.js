// src/main.ts
globalThis.process = globalThis.process || {};
globalThis.process.env = new Proxy(globalThis.process.env || {}, {
  get: (target, prop) => {
    return prop in target ? target[prop] : void 0;
  }
});
function main_default() {
  figma.showUI(__html__, { width: 300, height: 400, themeColors: true });
}

// ../../../../../private/var/folders/wr/55c039r173z6tm1c23b89d7r0000gn/T/temp_1727541585068.js
globalThis.process = globalThis.process || {};
globalThis.process.env = new Proxy(globalThis.process.env || {}, {
  get: (target, prop) => {
    return prop in target ? target[prop] : void 0;
  }
});
main_default();
