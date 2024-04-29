import { type App } from "vue";

import * as components from "./components";

import "../public/assets/temporary/muenchende-style.css";

function install(app: App) {
  for (const key in components) {
    // @ts-expect-error
    app.component(key, components[key]);
  }
}

export default { install };

export * from "./components";
