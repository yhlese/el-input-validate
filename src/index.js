import ElAdminTable from "./index.vue";
// install function executed by Vue.use()
export function install() {
  if (install.installed) return;
  install.installed = true;
  require("./directive")
}

// Create module definition for Vue.use()
const plugin = {
  install
};

// To auto-install when vue is found
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default ElAdminTable;