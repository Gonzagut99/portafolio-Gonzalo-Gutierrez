import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_BaRi4gyB.mjs';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"api/sendEmail.json","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sendemail.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendEmail\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendEmail.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendEmail.json.ts","pathname":"/api/sendEmail.json","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"experiencia/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/experiencia","isIndex":false,"type":"page","pattern":"^\\/experiencia\\/?$","segments":[[{"content":"experiencia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/experiencia.astro","pathname":"/experiencia","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"proyectos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/proyectos","isIndex":false,"type":"page","pattern":"^\\/proyectos\\/?$","segments":[[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyectos.astro","pathname":"/proyectos","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"sobre_mi/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sobre_mi","isIndex":false,"type":"page","pattern":"^\\/sobre_mi\\/?$","segments":[[{"content":"sobre_mi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobre_mi.astro","pathname":"/sobre_mi","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Gonzalo/Otros_proyectos_web/portfolios/portafolio-dev/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["D:/Gonzalo/Otros_proyectos_web/portfolios/portafolio-dev/src/pages/experiencia.astro",{"propagation":"none","containsHead":true}],["D:/Gonzalo/Otros_proyectos_web/portfolios/portafolio-dev/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Gonzalo/Otros_proyectos_web/portfolios/portafolio-dev/src/pages/proyectodetalle/[id].astro",{"propagation":"none","containsHead":true}],["D:/Gonzalo/Otros_proyectos_web/portfolios/portafolio-dev/src/pages/proyectos.astro",{"propagation":"none","containsHead":true}],["D:/Gonzalo/Otros_proyectos_web/portfolios/portafolio-dev/src/pages/sobre_mi.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_td0K40gq.mjs","\u0000@astrojs-manifest":"manifest_CIWOYoMb.mjs","D:/Gonzalo/Otros_proyectos_web/portfolios/portafolio-dev/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_dJXwur4H.mjs","\u0000@astro-page:src/pages/api/sendEmail.json@_@ts":"chunks/sendEmail_xMR-cV_W.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_xcBfKewY.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"chunks/contacto_ZAXhk-p-.mjs","\u0000@astro-page:src/pages/experiencia@_@astro":"chunks/experiencia_hn-Jw-9X.mjs","\u0000@astro-page:src/pages/proyectodetalle/[id]@_@astro":"chunks/_id__aCAhG_C1.mjs","\u0000@astro-page:src/pages/proyectos@_@astro":"chunks/proyectos_Jvfktelw.mjs","\u0000@astro-page:src/pages/sobre_mi@_@astro":"chunks/sobre_mi_BiSKIWd9.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.I6w-PWv0.js","@astrojs/svelte/client.js":"_astro/client.bWR2MAd2.js","D:/Gonzalo/Otros_proyectos_web/portfolios/portafolio-dev/src/components/ProjectGallery/ProjectGallery":"_astro/ProjectGallery.wRFL_pPX.js","D:/Gonzalo/Otros_proyectos_web/portfolios/portafolio-dev/src/components/AboutMeParallax/ExperienceParallax":"_astro/ExperienceParallax.AlvJnMAG.js","@astrojs/react/client.js":"_astro/client.nIvGf5TC.js","D:/Gonzalo/Otros_proyectos_web/portfolios/portafolio-dev/src/components/AboutMeBody":"_astro/AboutMeBody.eUfkGb-X.js","D:/Gonzalo/Otros_proyectos_web/portfolios/portafolio-dev/src/components/Illustrations/CodingIllustration.svelte":"_astro/CodingIllustration.JY2UEf0r.js","/astro/hoisted.js?q=1":"_astro/hoisted.p8KAzuMO.js","D:/Gonzalo/Otros_proyectos_web/portfolios/portafolio-dev/src/components/ContactForm.tsx":"_astro/ContactForm.2XaFbrp9.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/onest-latin-wght-normal.ycwkluYs.woff2","/_astro/onest-cyrillic-wght-normal.okE7jKFK.woff2","/_astro/onest-latin-ext-wght-normal.NATBPiDw.woff2","/_astro/contacto.gNqm5dkr.css","/favicon.svg","/flowbite.min.js","/flowbite.min.js.map","/assets/GONZALO_GUTIERREZ_CV.pdf","/parallaxImages/bubble.png","/parallaxImages/resumeIllustrartion.svg","/parallaxImages/skillsAdditional.png","/parallaxImages/skillsBackend.png","/parallaxImages/skillsDesktop.png","/menu_cards/about_me.webp","/menu_cards/contacto.webp","/menu_cards/experiencia.webp","/menu_cards/proyectos.webp","/profile_photos/coding.svg","/profile_photos/codingillustration.svg","/profile_photos/perfil_2023.jpeg","/profile_photos/sendMeEmail.png","/projects/alphasaludPanoramico.webp","/projects/alphasaludPrincipal.webp","/projects/calculadoraSubredesPanoramic.webp","/projects/calculadoraSubredesPrincipal.webp","/projects/CineScopePanoramic.webp","/projects/CineScopePrincipal.webp","/projects/JabbiMockupImage.webp","/projects/JabbiMockupPanoramic.webp","/projects/QuickMathsMockup.webp","/projects/QuickMathsPanoramic.webp","/projects/ShopiMockupPrincipal.webp","/projects/ShopiPanoramic.webp","/projects/SubacomPanoramic.webp","/projects/subacom_dms.webp","/projects/UbaPetbook.webp","/projects/UBAPetbookPanoramic.webp","/_astro/AboutMeBody.eUfkGb-X.js","/_astro/client.bWR2MAd2.js","/_astro/client.nIvGf5TC.js","/_astro/CodingIllustration.JY2UEf0r.js","/_astro/ContactForm.2XaFbrp9.js","/_astro/ExperienceParallax.AlvJnMAG.js","/_astro/hoisted.I6w-PWv0.js","/_astro/hoisted.p8KAzuMO.js","/_astro/index.LFf77hJu.js","/_astro/index.v4p63QzM.js","/_astro/jsx-runtime.9YwcPWTT.js","/_astro/ProjectGallery.wRFL_pPX.js","/_astro/projectTypesReact.uCgDMPS7.js","/_astro/proyectos.QXa_-Kd6.css","/_astro/sobre_mi.RePg2bIV.css","/_astro/Spinner.HGyMylA7.js","/_astro/SpinningIcon._3V9KIn_.js","/_astro/_commonjsHelpers.HFhYSYcO.js","/api/sendEmail.json","/index.html","/contacto/index.html","/experiencia/index.html","/proyectos/index.html","/sobre_mi/index.html"],"buildFormat":"directory"});

export { manifest };
