import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_CbQgag24.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B3OMXtPV.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
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
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/fedor/Desktop/HardCode_landing/","cacheDir":"file:///home/fedor/Desktop/HardCode_landing/node_modules/.astro/","outDir":"file:///home/fedor/Desktop/HardCode_landing/dist/","srcDir":"file:///home/fedor/Desktop/HardCode_landing/src/","publicDir":"file:///home/fedor/Desktop/HardCode_landing/public/","buildClientDir":"file:///home/fedor/Desktop/HardCode_landing/dist/client/","buildServerDir":"file:///home/fedor/Desktop/HardCode_landing/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/lead","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/lead\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"lead","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/lead.ts","pathname":"/api/lead","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.51G_xOeS.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/fedor/Desktop/HardCode_landing/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/lead@_@ts":"pages/api/lead.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DMWPS6GY.mjs","/home/fedor/Desktop/HardCode_landing/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dw8DCEhf.mjs","/home/fedor/Desktop/HardCode_landing/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CN-bpTls.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/fedor/Desktop/HardCode_landing/src/pages/index.astro?astro&type=script&index=0&lang.ts","window.showForm=function(){document.getElementById(\"formOverlay\").classList.add(\"active\"),document.body.style.overflow=\"hidden\"};window.hideForm=function(){document.getElementById(\"formOverlay\").classList.remove(\"active\"),document.body.style.overflow=\"auto\"};document.addEventListener(\"DOMContentLoaded\",function(){const c=document.getElementById(\"mobileMenuBtn\"),o=document.getElementById(\"mainNav\");c&&o&&(c.addEventListener(\"click\",function(){o.classList.toggle(\"active\");const e=this.querySelector(\"i\");o.classList.contains(\"active\")?(e.classList.replace(\"fa-bars\",\"fa-times\"),document.body.style.overflow=\"hidden\"):(e.classList.replace(\"fa-times\",\"fa-bars\"),document.body.style.overflow=\"auto\")}),document.querySelectorAll(\"#mainNav a\").forEach(e=>{e.addEventListener(\"click\",()=>{o.classList.remove(\"active\"),c.querySelector(\"i\").classList.replace(\"fa-times\",\"fa-bars\"),document.body.style.overflow=\"auto\"})}));const d=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add(\"visible\")})},{threshold:.1});document.querySelectorAll(\".fade-in\").forEach(e=>d.observe(e));const u=document.querySelectorAll(\".stat-number\"),l=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(f(t.target),l.unobserve(t.target))})},{threshold:.5});u.forEach(e=>l.observe(e));function f(e){const t=e.textContent,n=t.includes(\"+\"),s=t.includes(\"%\"),r=parseFloat(t.replace(/[^0-9.]/g,\"\"));let a=0;const m=r/60,v=setInterval(()=>{if(a+=m,a>=r)e.textContent=t,clearInterval(v);else{let i=Math.floor(a);n&&(i+=\"+\"),s&&(i+=\"%\"),e.textContent=i}},2e3/60)}document.querySelectorAll('a[href^=\"#\"]').forEach(e=>{e.addEventListener(\"click\",function(t){const n=this.getAttribute(\"href\");if(n===\"#\")return;const s=document.querySelector(n);if(s){t.preventDefault();const r=document.querySelector(\"header\").offsetHeight;window.scrollTo({top:s.offsetTop-r-20,behavior:\"smooth\"})}})})});"]],"assets":["/_astro/index.51G_xOeS.css","/favicon.ico","/favicon.svg","/test.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"H7k1bFtijreljARVYz+y2ydJPzPtNDT0Ep84t+sIXAw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
