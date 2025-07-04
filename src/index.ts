import { type App } from "vue";

import * as components from "./components";

function install(app: App) {
  for (const key in components) {
    // @ts-expect-error it doesn't matter here which type the component has
    app.component(key, components[key]);
  }
}

export default { install };

export * from "./components";
