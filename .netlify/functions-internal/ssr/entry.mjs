import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CIWOYoMb.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_dJXwur4H.mjs');
const _page1 = () => import('./chunks/sendEmail_xMR-cV_W.mjs');
const _page2 = () => import('./chunks/index_xcBfKewY.mjs');
const _page3 = () => import('./chunks/contacto_ZAXhk-p-.mjs');
const _page4 = () => import('./chunks/experiencia_hn-Jw-9X.mjs');
const _page5 = () => import('./chunks/_id__aCAhG_C1.mjs');
const _page6 = () => import('./chunks/proyectos_Jvfktelw.mjs');
const _page7 = () => import('./chunks/sobre_mi_BiSKIWd9.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/sendEmail.json.ts", _page1],
    ["src/pages/index.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/experiencia.astro", _page4],
    ["src/pages/proyectodetalle/[id].astro", _page5],
    ["src/pages/proyectos.astro", _page6],
    ["src/pages/sobre_mi.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = undefined;
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
