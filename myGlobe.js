import { GlobeKitView, Icosphere } from "./globekit.esm.js";

const apiKey = "gk_ec7383d1b3f37a4c96035d3afaa359e75ccd9d74c54789f521987c75c42889fe6b6bd0fd009dde1b45e20fd777a71151379d8f30ab94cce6890b033d1e567d80";
const options = {
  apiKey: apiKey,
  wasmPath: "./gkweb_bg.wasm",
};

const canvas = document.getElementById('globekit-canvas');

const gkview = new GlobeKitView(canvas, options);

const icosphere = new Icosphere("earth.jpg");

gkview.addDrawable(icosphere, () => {
  gkview.startDrawing();
});
