var t=Object.defineProperty,n=Object.defineProperties,e=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(n,e,o)=>e in n?t(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,c=(t,n)=>{for(var e in n||(n={}))r.call(n,e)&&i(t,e,n[e]);if(o)for(var e of o(n))s.call(n,e)&&i(t,e,n[e]);return t},a=(t,o)=>n(t,e(o));function u(){}function l(t,n){for(const e in n)t[e]=n[e];return t}function f(t){return t()}function p(){return Object.create(null)}function d(t){t.forEach(f)}function h(t){return"function"==typeof t}function m(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function $(t,...n){if(null==t)return u;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function g(t){let n;return $(t,(t=>n=t))(),n}function y(t,n,e){t.$$.on_destroy.push($(n,e))}function b(t,n,e,o){if(t){const r=v(t,n,e,o);return t[0](r)}}function v(t,n,e,o){return t[1]&&o?l(e.ctx.slice(),t[1](o(n))):e.ctx}function x(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function w(t,n,e,o,r,s){if(r){const i=v(n,e,o,s);t.p(i,r)}}function E(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function _(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function R(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function O(t){return null==t?"":t}function P(t,n){t.appendChild(n)}function k(t,n,e){t.insertBefore(n,e||null)}function S(t){t.parentNode.removeChild(t)}function j(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function I(){return A(" ")}function N(){return A("")}function L(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function U(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function C(t){return""===t?null:+t}function M(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function T(t,n){t.value=null==n?"":n}function F(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let q;function z(t){q=t}function Y(){if(!q)throw new Error("Function called outside component initialization");return q}function B(t,n){Y().$$.context.set(t,n)}function H(t){return Y().$$.context.get(t)}const D=[],G=[],J=[],K=[],Q=Promise.resolve();let V=!1;function W(){V||(V=!0,Q.then(nt))}function X(t){J.push(t)}let Z=!1;const tt=new Set;function nt(){if(!Z){Z=!0;do{for(let t=0;t<D.length;t+=1){const n=D[t];z(n),et(n.$$)}for(z(null),D.length=0;G.length;)G.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];tt.has(n)||(tt.add(n),n())}J.length=0}while(D.length);for(;K.length;)K.pop()();V=!1,Z=!1,tt.clear()}}function et(t){if(null!==t.fragment){t.update(),d(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(X)}}const ot=new Set;let rt;function st(){rt={r:0,c:[],p:rt}}function it(){rt.r||d(rt.c),rt=rt.p}function ct(t,n){t&&t.i&&(ot.delete(t),t.i(n))}function at(t,n,e,o){if(t&&t.o){if(ot.has(t))return;ot.add(t),rt.c.push((()=>{ot.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function ut(t){return"object"==typeof t&&null!==t?t:{}}function lt(t){t&&t.c()}function ft(t,n,e,o){const{fragment:r,on_mount:s,on_destroy:i,after_update:c}=t.$$;r&&r.m(n,e),o||X((()=>{const n=s.map(f).filter(h);i?i.push(...n):d(n),t.$$.on_mount=[]})),c.forEach(X)}function pt(t,n){const e=t.$$;null!==e.fragment&&(d(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n,e,o,r,s,i,c=[-1]){const a=q;z(t);const l=t.$$={fragment:null,ctx:null,props:s,update:u,not_equal:r,bound:p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:n.context||[]),callbacks:p(),dirty:c,skip_bound:!1,root:n.target||a.$$.root};i&&i(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},((n,e,...o)=>{const s=o.length?o[0]:e;return l.ctx&&r(l.ctx[n],l.ctx[n]=s)&&(!l.skip_bound&&l.bound[n]&&l.bound[n](s),f&&function(t,n){-1===t.$$.dirty[0]&&(D.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(t,n)),e})):[],l.update(),f=!0,d(l.before_update),l.fragment=!!o&&o(l.ctx),n.target){if(n.hydrate){const t=(h=n.target,Array.from(h.childNodes));l.fragment&&l.fragment.l(t),t.forEach(S)}else l.fragment&&l.fragment.c();n.intro&&ct(t.$$.fragment),ft(t,n.target,n.anchor,n.customElement),nt()}var h;z(a)}class ht{$destroy(){pt(this,1),this.$destroy=u}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const mt=t=>void 0===t,$t=t=>"number"==typeof t;function gt(){let t=0;return()=>t++}const yt="undefined"==typeof window;function bt(t,n,e){return t.addEventListener(n,e),()=>t.removeEventListener(n,e)}const vt=[];function xt(t,n=u){let e;const o=new Set;function r(n){if(m(t,n)&&(t=n,e)){const n=!vt.length;for(const e of o)e[1](),vt.push(e,t);if(n){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:r,update:function(n){r(n(t))},subscribe:function(s,i=u){const c=[s,i];return o.add(c),1===o.size&&(e=n(r)||u),s(t),()=>{o.delete(c),0===o.size&&(e(),e=null)}}}}function wt(t,n,e){const o=!Array.isArray(t),r=o?[t]:t,s=n.length<2;return{subscribe:xt(e,(t=>{let e=!1;const i=[];let c=0,a=u;const l=()=>{if(c)return;a();const e=n(o?i[0]:i,t);s?t(e):a=h(e)?e:u},f=r.map(((t,n)=>$(t,(t=>{i[n]=t,c&=~(1<<n),e&&l()}),(()=>{c|=1<<n}))));return e=!0,l(),function(){d(f),a()}})).subscribe}}const Et=t=>`@@svnav-ctx__${t}`,_t=Et("LOCATION"),Rt=Et("ROUTER"),Ot=Et("ROUTE"),Pt=Et("ROUTE_PARAMS"),kt=Et("FOCUS_ELEM"),St=/^:(.+)/,jt=(t,n)=>t.substr(0,n.length)===n,At=t=>"*"===t[0],It=t=>t.replace(/(^\/+|\/+$)/g,"");function Nt(t,n=!1){const e=It(t).split("/");return n?e.filter(Boolean):e}const Lt=(t,n)=>t+(n?`?${n}`:""),Ut=t=>`/${It(t)}`;function Ct(...t){const n=t.map((t=>Nt(t,!0).join("/"))).join("/");return Ut(n)}const Mt={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},Tt=t=>Mt[t];function Ft(t,n,e,o){const r=e&&function(t,n){let e;return 2===t?e=n.path?`path="${n.path}"`:"default":1===t?e=`to="${n.to}"`:3===t&&(e=`basepath="${n.basepath||""}"`),`<${Tt(t)} ${e||""} />`}(o||t,e),s=r?`\n\nOccurred in: ${r}`:"",i=Tt(t);return`<${i}> ${"function"==typeof n?n(i):n}${s}`}const qt=t=>(...n)=>t(Ft(...n)),zt=qt((t=>{throw new Error(t)})),Yt=qt(console.warn);function Bt(t,n){return{route:t,score:t.default?0:Nt(t.fullPath).reduce(((t,n)=>{let e=t;return e+=4,(t=>""===t)(n)?e+=1:(t=>St.test(t))(n)?e+=2:At(n)?e-=5:e+=3,e}),0),index:n}}function Ht(t,n){let e,o;const[r]=n.split("?"),s=Nt(r),i=""===s[0],u=function(t){return t.map(Bt).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let l=0,f=u.length;l<f;l++){const{route:t}=u[l];let r=!1;const f={},p=n=>a(c({},t),{params:f,uri:n});if(t.default){o=p(n);continue}const d=Nt(t.fullPath),h=Math.max(s.length,d.length);let m=0;for(;m<h;m++){const t=d[m],n=s[m];if(!mt(t)&&At(t)){const n="*"===t?"*":t.slice(1);f[n]=s.slice(m).map(decodeURIComponent).join("/");break}if(mt(n)){r=!0;break}const e=St.exec(t);if(e&&!i){const t=decodeURIComponent(n);f[e[1]]=t}else if(t!==n){r=!0;break}}if(!r){e=p(Ct(...s.slice(0,m)));break}}return e||o||null}function Dt(t,n){return Ht([t],n)}function Gt(t,n){const{pathname:e,hash:o="",search:r="",state:s}=t,i=Nt(n,!0),c=Nt(e,!0);for(;i.length;)i[0]!==c[0]&&zt(3,`Invalid state: All locations must begin with the basepath "${n}", found "${e}"`),i.shift(),c.shift();return{pathname:Ct(...c),hash:o,search:r,state:s}}const Jt=t=>1===t.length?"":t;function Kt(t){const n=t.indexOf("?"),e=t.indexOf("#"),o=-1!==n,r=-1!==e,s=r?Jt(t.substr(e)):"",i=r?t.substr(0,e):t,c=o?Jt(i.substr(n)):"";return{pathname:o?i.substr(0,n):i,search:c,hash:s}}function Qt(t,n,e){return Ct(e,function(t,n){if(jt(t,"/"))return t;const[e,o]=t.split("?"),[r]=n.split("?"),s=Nt(e),i=Nt(r);if(""===s[0])return Lt(r,o);if(!jt(s[0],".")){const t=i.concat(s).join("/");return Lt(("/"===r?"":"/")+t,o)}const c=i.concat(s),a=[];return c.forEach((t=>{".."===t?a.pop():"."!==t&&a.push(t)})),Lt(`/${a.join("/")}`,o)}(t,n))}function Vt(t,n){const e=Ut(t.replace(/\*.*$/,""));const o=Nt(e,!0),r=Dt({fullPath:e},Ct(...Nt(n,!0).slice(0,o.length)));return r&&r.uri}function Wt(t){return a(c({},t.location),{pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"})}function Xt(t,n){return a(c({},Kt(n)),{state:t})}const Zt=!(yt||!window.document||!window.document.createElement),tn=!yt&&"null"===window.location.origin,nn=function(t){let n=[],e=Wt(t),o="POP";const r=(t=n)=>t.forEach((t=>t({location:e,action:o})));return{get location(){return e},listen(s){n.push(s);r([s]);const i=bt(t,"popstate",(()=>{e=Wt(t),o="POP",r([s])}));return()=>{i(),n=n.filter((t=>t!==s))}},navigate(n,s){const{state:i={},replace:u=!1}=s||{};if(o=u?"REPLACE":"PUSH",$t(n))s&&Yt(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o="POP",t.history.go(n);else{const e=a(c({},i),{_key:Math.random().toString(36).substring(2)});try{t.history[u?"replaceState":"pushState"](e,"",n)}catch(l){t.location[u?"replace":"assign"](n)}}e=Wt(t),r()}}}(Zt&&!tn?window:function(t="/"){let n=0,e=[Xt(null,t)];return{get entries(){return e},get location(){return e[n]},addEventListener(){},removeEventListener(){},history:{get state(){return e[n].state},pushState(t,o,r){n++,e=e.slice(0,n),e.push(Xt(t,r))},replaceState(t,o,r){e[n]=Xt(t,r)},go(t){const o=n+t;o<0||o>e.length-1||(n=o)}}}}());let en=null,on=!0;function rn(t){(!en||t.level>en.level||t.level===en.level&&function(t,n){const e=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<e.length;o++){const r=e[o],s=Number(r.dataset.svnavRouter);if(s===t)return!0;if(s===n)return!1}return!1}(t.routerId,en.routerId))&&(en=t)}function sn(t){if(!t)return!1;const n="tabindex";try{if(!t.hasAttribute(n)){let e;t.setAttribute(n,"-1");const o=()=>{t.removeAttribute(n),e()};e=bt(t,"blur",o)}return t.focus(),document.activeElement===t}catch(e){return!1}}function cn(t,n){return Number(t.dataset.svnavRouteEnd)===n}function an(t,n=document){return n.querySelector(t)}function un(t){Promise.resolve(g(t.focusElement)).then((n=>{const e=n||function(t){let n=an(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!cn(n,t);){if(/^H[1-6]$/i.test(n.tagName))return n;const t=an("h1,h2,h3,h4,h5,h6",n);if(t)return t;n=n.nextElementSibling}return null}(t.id);e||Yt(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',t,2);sn(e)||sn(document.documentElement)}))}const ln=(t,n,e)=>(o,r)=>(W(),Q).then((()=>{if(en&&!on){if(o&&un(en.route),t.announcements&&r){const{path:o,fullPath:r,meta:s,params:i,uri:c}=en.route,a=t.createAnnouncement({path:o,fullPath:r,meta:s,params:i,uri:c},g(e));Promise.resolve(a).then((t=>{n.set(t)}))}en=null}else on=!1}));function fn(t){let n,e,o,r,s;const i=t[20].default,c=b(i,t,t[19],null);let a=t[2]&&t[4]&&t[1].announcements&&function(t){let n,e;return{c(){n=j("div"),e=A(t[0]),U(n,"role","status"),U(n,"aria-atomic","true"),U(n,"aria-live","polite"),U(n,"style","position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(t,o){k(t,n,o),P(n,e)},p(t,n){1&n[0]&&M(e,t[0])},d(t){t&&S(n)}}}(t);return{c(){n=j("div"),e=I(),c&&c.c(),o=I(),a&&a.c(),r=N(),F(n,"display","none"),U(n,"aria-hidden","true"),U(n,"data-svnav-router",t[3])},m(t,i){k(t,n,i),k(t,e,i),c&&c.m(t,i),k(t,o,i),a&&a.m(t,i),k(t,r,i),s=!0},p(t,n){c&&c.p&&(!s||524288&n[0])&&w(c,i,t,t[19],s?x(i,t[19],n,null):E(t[19]),null),t[2]&&t[4]&&t[1].announcements&&a.p(t,n)},i(t){s||(ct(c,t),s=!0)},o(t){at(c,t),s=!1},d(t){t&&S(n),t&&S(e),c&&c.d(t),t&&S(o),a&&a.d(t),t&&S(r)}}}const pn=gt(),dn="/";function hn(t,n,e){let o,r,s,i,a,{$$slots:u={},$$scope:l}=n,{basepath:f=dn}=n,{url:p=null}=n,{history:d=nn}=n,{primary:h=!0}=n,{a11y:m={}}=n;const $=c({createAnnouncement:t=>`Navigated to ${t.uri}`,announcements:!0},m),g=f,b=Ut(f),v=H(_t),x=H(Rt),w=!v,E=pn(),_=h&&!(x&&!x.manageFocus),R=xt("");y(t,R,(t=>e(0,a=t)));const O=xt([]);y(t,O,(t=>e(18,i=t)));const P=xt(null);y(t,P,(t=>e(16,r=t)));let k=!1;const S=w?0:x.level+1,j=w?xt(Gt(yt?Kt(p):d.location,b)):v;y(t,j,(t=>e(15,o=t)));const A=xt(o);y(t,A,(t=>e(17,s=t)));const I=ln($,R,j),N=t=>n=>n.filter((n=>n.id!==t));var L;return w||f===dn||Yt(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:f}),w&&(L=()=>d.listen((t=>{const n=Gt(t.location,b);A.set(o),j.set(n)})),Y().$$.on_mount.push(L),B(_t,j)),B(Rt,{activeRoute:P,registerRoute:function(t){if(yt){if(k)return;const n=Dt(t,o.pathname);if(n)return k=!0,n}else O.update((n=>{const e=N(t.id)(n);return e.push(t),e}))},unregisterRoute:function(t){O.update(N(t))},manageFocus:_,level:S,id:E,history:w?d:x.history,basepath:w?b:x.basepath}),t.$$set=t=>{"basepath"in t&&e(10,f=t.basepath),"url"in t&&e(11,p=t.url),"history"in t&&e(12,d=t.history),"primary"in t&&e(13,h=t.primary),"a11y"in t&&e(14,m=t.a11y),"$$scope"in t&&e(19,l=t.$$scope)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&f!==g&&Yt(3,'You cannot change the "basepath" prop. It is ignored.'),294912&t.$$.dirty[0]){const t=Ht(i,o.pathname);P.set(t)}if(163840&t.$$.dirty[0]&&w){const t=!!o.hash,n=!t&&_,e=!t||o.pathname!==s.pathname;I(n,e)}65536&t.$$.dirty[0]&&_&&r&&r.primary&&rn({level:S,routerId:E,route:r})},[a,$,w,E,_,R,O,P,j,A,f,p,d,h,m,o,r,s,i,l,u]}class mn extends ht{constructor(t){super(),dt(this,t,hn,fn,m,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}}function $n(t,n,e=Rt,o=3){H(e)||zt(t,(t=>`You cannot use ${t} outside of a ${Tt(o)}.`),n)}function gn(){return $n(5),(t=>{const{subscribe:n}=H(t);return{subscribe:n}})(_t)}function yn(){const t=H(Ot);return t?wt(t,(t=>t.base)):xt("/")}function bn(){$n(7);const t=function(){$n(10);const t=yn(),{basepath:n}=H(Rt);return e=>Qt(e,g(t),n)}(),{navigate:n}=function(){const{history:t}=H(Rt);return t}();return(e,o)=>{const r=$t(e)?e:t(e);return n(r,o)}}const vn=t=>({params:16&t,location:8&t}),xn=t=>({params:yt?g(t[9]):t[4],location:t[3],navigate:t[10]});function wn(t){let n,e;return n=new mn({props:{primary:t[1],$$slots:{default:[Rn]},$$scope:{ctx:t}}}),{c(){lt(n.$$.fragment)},m(t,o){ft(n,t,o),e=!0},p(t,e){const o={};2&e&&(o.primary=t[1]),264217&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(ct(n.$$.fragment,t),e=!0)},o(t){at(n.$$.fragment,t),e=!1},d(t){pt(n,t)}}}function En(t){let n;const e=t[17].default,o=b(e,t,t[18],xn);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,r){o&&o.p&&(!n||262168&r)&&w(o,e,t,t[18],n?x(e,t[18],r,vn):E(t[18]),xn)},i(t){n||(ct(o,t),n=!0)},o(t){at(o,t),n=!1},d(t){o&&o.d(t)}}}function _n(t){let n,e,o;const r=[{location:t[3]},{navigate:t[10]},yt?g(t[9]):t[4],t[11]];var s=t[0];function i(t){let n={};for(let e=0;e<r.length;e+=1)n=l(n,r[e]);return{props:n}}return s&&(n=new s(i())),{c(){n&&lt(n.$$.fragment),e=N()},m(t,r){n&&ft(n,t,r),k(t,e,r),o=!0},p(t,o){const c=3608&o?function(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}(r,[8&o&&{location:t[3]},1024&o&&{navigate:t[10]},528&o&&ut(yt?g(t[9]):t[4]),2048&o&&ut(t[11])]):{};if(s!==(s=t[0])){if(n){st();const t=n;at(t.$$.fragment,1,0,(()=>{pt(t,1)})),it()}s?(n=new s(i()),lt(n.$$.fragment),ct(n.$$.fragment,1),ft(n,e.parentNode,e)):n=null}else s&&n.$set(c)},i(t){o||(n&&ct(n.$$.fragment,t),o=!0)},o(t){n&&at(n.$$.fragment,t),o=!1},d(t){t&&S(e),n&&pt(n,t)}}}function Rn(t){let n,e,o,r;const s=[_n,En],i=[];function c(t,n){return null!==t[0]?0:1}return n=c(t),e=i[n]=s[n](t),{c(){e.c(),o=N()},m(t,e){i[n].m(t,e),k(t,o,e),r=!0},p(t,r){let a=n;n=c(t),n===a?i[n].p(t,r):(st(),at(i[a],1,1,(()=>{i[a]=null})),it(),e=i[n],e?e.p(t,r):(e=i[n]=s[n](t),e.c()),ct(e,1),e.m(o.parentNode,o))},i(t){r||(ct(e),r=!0)},o(t){at(e),r=!1},d(t){i[n].d(t),t&&S(o)}}}function On(t){let n,e,o,r,s,i=t[2]&&wn(t);return{c(){n=j("div"),e=I(),i&&i.c(),o=I(),r=j("div"),F(n,"display","none"),U(n,"aria-hidden","true"),U(n,"data-svnav-route-start",t[5]),F(r,"display","none"),U(r,"aria-hidden","true"),U(r,"data-svnav-route-end",t[5])},m(t,c){k(t,n,c),k(t,e,c),i&&i.m(t,c),k(t,o,c),k(t,r,c),s=!0},p(t,[n]){t[2]?i?(i.p(t,n),4&n&&ct(i,1)):(i=wn(t),i.c(),ct(i,1),i.m(o.parentNode,o)):i&&(st(),at(i,1,1,(()=>{i=null})),it())},i(t){s||(ct(i),s=!0)},o(t){at(i),s=!1},d(t){t&&S(n),t&&S(e),i&&i.d(t),t&&S(o),t&&S(r)}}}const Pn=gt();function kn(t,n,e){let o;const r=["path","component","meta","primary"];let s,i,c,a,u=R(n,r),{$$slots:f={},$$scope:p}=n,{path:d=""}=n,{component:h=null}=n,{meta:m={}}=n,{primary:$=!0}=n;$n(2,n);const g=Pn(),{registerRoute:b,unregisterRoute:v,activeRoute:x}=H(Rt);y(t,x,(t=>e(15,s=t)));const w=yn();y(t,w,(t=>e(16,c=t)));const E=gn();y(t,E,(t=>e(3,i=t)));const O=xt(null);let P;const k=xt(),S=xt({});y(t,S,(t=>e(4,a=t))),B(Ot,k),B(Pt,S),B(kt,O);const j=bn();var A;return yt||(A=()=>v(g),Y().$$.on_destroy.push(A)),t.$$set=t=>{e(23,n=l(l({},n),_(t))),e(11,u=R(n,r)),"path"in t&&e(12,d=t.path),"component"in t&&e(0,h=t.component),"meta"in t&&e(13,m=t.meta),"primary"in t&&e(1,$=t.primary),"$$scope"in t&&e(18,p=t.$$scope)},t.$$.update=()=>{if(77834&t.$$.dirty){const t=""===d,n=Ct(c,d),o={id:g,path:d,meta:m,default:t,fullPath:t?"":n,base:t?c:Vt(n,i.pathname),primary:$,focusElement:O};k.set(o),e(14,P=b(o))}if(49152&t.$$.dirty&&e(2,o=!!(P||s&&s.id===g)),49156&t.$$.dirty&&o){const{params:t}=P||s;S.set(t)}},n=_(n),[h,$,o,i,a,g,x,w,E,S,j,u,d,m,P,s,c,f,p]}class Sn extends ht{constructor(t){super(),dt(this,t,kn,On,m,{path:12,component:0,meta:13,primary:1})}}export{mn as R,ht as S,U as a,k as b,P as c,M as d,j as e,u as f,S as g,lt as h,dt as i,ct as j,at as k,pt as l,ft as m,O as n,I as o,st as p,it as q,F as r,m as s,A as t,L as u,N as v,T as w,C as x,Sn as y};
