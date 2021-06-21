import { DefineComponent, Plugin } from 'vue';


declare const HumbleVue: Exclude<Plugin['install'], undefined>;
export default HumbleVue;

export const HumbleVueSample: DefineComponent<{}, {}, any>;
