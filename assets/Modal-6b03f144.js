import{r as a,J as b,K as y,L as C,s as g,t as i,u as k,b as x,D as L,j as d}from"./index-04bfb624.js";import{G as M}from"./iconBase-c5a8225d.js";import{I as E}from"./IconButton-7ecbe925.js";function v(e){if(e){if(e.tagName==="BODY")return e;if(e.tagName==="IFRAME"){var t=e.contentDocument;return t?t.body:null}else if(!e.offsetParent)return null}else return null;return v(e.offsetParent)}function p(e){var t=e||window.event;return t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}var m=C&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),c=new Map,w=typeof document=="object"?document:void 0,f=!1;const h=w?function(t,r){t===void 0&&(t=!0);var l=a.useRef(w.body);r=r||l;var s=function(o){var n=c.get(o);n?c.set(o,{counter:n.counter+1,initialOverflow:n.initialOverflow}):(c.set(o,{counter:1,initialOverflow:o.style.overflow}),m?f||(b(document,"touchmove",p,{passive:!1}),f=!0):o.style.overflow="hidden")},u=function(o){var n=c.get(o);n&&(n.counter===1?(c.delete(o),m?(o.ontouchmove=null,f&&(y(document,"touchmove",p),f=!1)):o.style.overflow=n.initialOverflow):c.set(o,{counter:n.counter-1,initialOverflow:n.initialOverflow}))};a.useEffect(function(){var o=v(r.current);o&&(t?s(o):u(o))},[t,r.current]),a.useEffect(function(){var o=v(r.current);if(o)return function(){u(o)}},[])}:function(t,r){},T=()=>{const[e,t]=a.useState(!1),r=a.useCallback(()=>{t(l=>!l)},[]);return{showModal:e,toggleModal:r}};function B(e){return M({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}}]})(e)}const D=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`,$=g.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 250px;
  overflow: ${e=>e.mediaType==="desktop"?"unset":"scroll"};
  height: ${e=>e.mediaType==="mobile"?"100vh":"auto"};
  width: ${e=>e.mediaType==="mobile"?"100vw":"auto"};
  padding: ${i.space[5]};
  padding-top: ${i.space[6]};
  background-color: ${i.colors.background};
  border-radius: ${i.radii.high};
  box-shadow: ${i.shadow.high};
  z-index: 2;

  button[aria-labelledby='close button'] {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`,j=document.querySelector("#modal-root"),P=({toggleModal:e,showModal:t,children:r})=>{const l=k(x),s=a.useCallback(({code:u,target:o,currentTarget:n})=>{(o===n||u==="Escape")&&e()},[e]);return h(),a.useEffect(()=>(document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)),[s,e]),h(),L.createPortal(d.jsx(D,{onClick:s,children:d.jsxs($,{mediaType:l,children:[d.jsx(E,{icon:B,iconSize:20,ariaLabel:"close button",onClick:e,backgroundColor:i.colors.secondary,color:i.colors.primary}),r]})}),j)};export{P as M,T as u};
