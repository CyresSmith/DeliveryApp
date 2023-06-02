import{s as i,t,N as f,j as e,u as c,g as v,a as B,b,c as z,d as C,r as l,e as M,f as T,O as N}from"./index-b120845e.js";import{G as m}from"./iconBase-7ca16e1f.js";import{A as E}from"./index.esm-3979fc78.js";import{H,I as U,a as I}from"./index.esm-2fc47018.js";import{M as A,a as O}from"./index.esm-da841f61.js";import{B as u}from"./Box.styled-8485dffa.js";import{I as $}from"./IconButton-892cd5a6.js";import{n as y}from"./notiflix-aio-3.2.6.min-574377a7.js";function W(o){return m({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 3.172l-6.414 6.414c-.781.781-.781 2.047 0 2.828s2.047.781 2.828 0l1.586-1.586v7.242c0 1.104.895 2 2 2 1.104 0 2-.896 2-2v-7.242l1.586 1.586c.391.391.902.586 1.414.586s1.023-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-6.414-6.414z"}}]})(o)}function _(o){return m({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"}}]})(o)}const F=i.nav`
  margin-left: ${o=>o.mediaType==="desktop"?t.space[5]:0};
`,P=i.ul`
  display: ${o=>o.mediaType==="desktop"?"flex":"block"};
  align-items: center;
`,g=i.li`
  :not(:last-of-type) {
    margin-right: ${o=>o.mediaType==="desktop"?t.space[4]:0};
    margin-bottom: ${o=>o.mediaType==="desktop"?0:t.space[4]};
  }
`,x=i(f)`
  font-size: ${t.fontSizes.m};
  font-weight: ${t.fontWeights.regular};
  color: ${t.colors.white};
  transition: ${t.transition.primary};
  display: inline-flex;
  align-items: center;
  transition: ${t.transition.primary} svg {
    margin-right: ${t.space[2]};
  }

  &.active {
    color: ${t.colors.primary};
    background-color: ${t.colors.white};
    padding: ${t.space[1]} ${t.space[3]};
    border-radius: ${t.radii.normal};
    box-shadow: ${t.shadow.medium};

    :hover {
      color: ${t.colors.primary};
      background-color: ${t.colors.accent};
    }
  }

  :hover {
    color: ${t.colors.accent};
  }
`,D=i.div`
  position: absolute;
  top: -15px;
  left: -10px;
  height: 20px;
  width: 20px;
  background-color: ${t.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${t.radii.round};
  z-index: 1;
  box-shadow: ${t.shadow.medium};
`,R=i.span`
  font-weight: ${t.fontWeights.bold};
  color: ${t.colors.primary};
`,w=({number:o})=>e.jsx(D,{children:e.jsx(R,{children:o})}),k=({mediaType:o,toggleMobileMenu:s})=>{const r=c(v).length,a=c(B),n=()=>{s&&s()};return e.jsx(F,{mediaType:o,children:e.jsxs(P,{mediaType:o,children:[e.jsx(g,{mediaType:o,onClick:n,children:e.jsxs(x,{to:"/",children:[e.jsx(E,{})," Shop"]})}),e.jsx(g,{mediaType:o,onClick:n,children:e.jsxs(x,{to:"/cart",children:[e.jsxs(u,{style:{position:"relative"},children:[r!==0&&e.jsx(w,{number:r}),e.jsx(H,{style:{position:"relative"}})]}),"Cart"]})}),e.jsx(g,{mediaType:o,onClick:n,children:a._id&&e.jsxs(x,{to:"/history",children:[e.jsx(A,{})," History"]})})]})})};function Y(o){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 11H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8h6v3l5-4-5-4v3z"}}]}]})(o)}const G=i.ul`
  display: flex;
  flex-direction: ${o=>o.mediaType==="mobile"?"column":"row"};
  align-items: ${o=>o.mediaType==="mobile"?"flex-start":"center"};

  li {
    :not(:last-of-type) {
      margin-right: ${o=>o.mediaType==="mobile"?0:t.space[4]};
      margin-bottom: ${o=>o.mediaType==="mobile"?t.space[4]:0};
    }
  }
`,j=i(f)`
  font-size: ${t.fontSizes.m};
  font-weight: ${t.fontWeights.regular};
  color: ${t.colors.background};
  transition: ${t.transition.primary};
  display: flex;
  align-items: center;

  svg {
    margin-right: ${t.space[2]};
  }

  &.active {
    color: ${t.colors.secondary};
    background-color: ${t.colors.accent};
    padding: ${t.space[1]} ${t.space[3]};
    border-radius: ${t.radii.normal};
    box-shadow: ${t.shadow.medium};

    :hover {
      color: ${t.colors.secondary};
    }
  }

  :hover {
    color: ${t.colors.accent};
  }
`,V=({toggleMobileMenu:o})=>{const s=c(b),r=()=>{o&&o()};return e.jsxs(G,{mediaType:s,children:[e.jsx("li",{children:e.jsxs(j,{to:"/login",onClick:r,children:[e.jsx(Y,{}),"Login"]})}),e.jsx("li",{children:e.jsxs(j,{to:"/register",onClick:r,children:[e.jsx(U,{}),"Registration"]})})]})};function X(o){return m({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{points:"16 17 21 12 16 7"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"}}]})(o)}const q=i.p`
  font-size: ${t.fontSizes.m};
  font-weight: ${t.fontWeights.regular};
  color: ${t.colors.accent};
  margin-right: ${o=>o.mediaType==="mobile"?"auto":t.space[4]};
`,J=({user:o,mediaType:s})=>{const r=z(),[a,{isError:n,isLoading:d,isSuccess:p,error:h}]=C(),S=async()=>{await a(),r(M())};return l.useEffect(()=>{p&&y.Notify.success("Successfully Logout"),n&&y.Notify.failure(h.message)},[h,n,p]),e.jsxs(u,{display:"flex",alignItems:"center",width:"100%",children:[e.jsx(q,{mediaType:s,children:o==null?void 0:o.name}),e.jsx($,{icon:X,isLoading:d,iconSize:s==="desktop"?15:25,disabled:d,ariaLabel:"logout",backgroundColor:t.colors.background,onClick:S})]})},L=({mediaType:o,toggleMobileMenu:s})=>{const r=c(T);return e.jsx(u,{ml:"auto",mr:o==="tablet"?t.space[5]:0,mb:o==="mobile"?t.space[5]:0,display:"flex",alignItems:"center",children:!r.user._id||!r.accessToken?e.jsx(V,{toggleMobileMenu:s}):e.jsx(J,{user:r.user,mediaType:o})})},K=i.header`
  padding: ${t.space[4]} 0;
  background-color: ${t.colors.secondary};
  width: 100%;
`,Q=i.div`
  width: ${o=>{switch(o.mediaType){case"mobile":return t.mediaBreakpoints.mobile.width;case"tablet":return t.mediaBreakpoints.tablet.width;case"desktop":return t.mediaBreakpoints.desktop.width}}};
  padding: 0 ${t.space[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`,Z=({children:o,mediaType:s})=>e.jsx(K,{mediaType:s,children:e.jsx(Q,{mediaType:s,children:o})}),oo=i(f)`
  font-size: ${t.fontSizes.s};
  font-weight: ${t.fontWeights.bold};
  color: ${t.colors.white};
`,to=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    height: 60px;
    width: 60px;
  }
`,eo=()=>e.jsx(oo,{to:"/",children:e.jsx(to,{children:e.jsx(O,{})})});function so(){l.useLayoutEffect(()=>{const o=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>document.body.style.overflow=o},[])}const ro=i.div`
  padding: ${t.space[5]};
  background-color: ${t.colors.primary};
  position: absolute;
  top: 0;
  right: 0;
  width: ${o=>o.mediaType==="mobile"?"100vw":"320px"};
  height: 100vh;
  z-index: 999;
  transition: ${t.transition.primary};
  /* transform: ${o=>o.MobileMenuOpen?"translateX(+200%)":"translateX(0)"}; */
`,io=({mediaType:o,toggleMobileMenu:s,MobileMenuOpen:r})=>(so(),e.jsxs(ro,{mediaType:o,MobileMenuOpen:r,children:[e.jsx(u,{style:{marginBottom:t.space[5]},children:e.jsx($,{onClick:s,icon:I,iconSize:20,ariaLabel:"menu close button"})}),o==="mobile"&&e.jsx(L,{mediaType:o,toggleMobileMenu:s}),e.jsx(k,{toggleMobileMenu:s})]})),no=()=>{const o=c(b),s=c(v).length,[r,a]=l.useState(!1);l.useEffect(()=>{o==="desktop"&&a(!1)},[o]);const n=()=>{a(d=>!d)};return e.jsxs(Z,{mediaType:o,children:[e.jsx(eo,{}),o==="desktop"&&e.jsx(k,{mediaType:o}),o!=="mobile"&&e.jsx(L,{mediaType:o}),o!=="desktop"&&e.jsxs(u,{style:{position:"relative"},children:[s!==0&&e.jsx(w,{number:s}),e.jsx($,{icon:_,iconSize:o==="desktop"?15:25,ariaLabel:"open menu",backgroundColor:t.colors.background,onClick:n})]}),r&&e.jsx(io,{mediaType:o,toggleMobileMenu:n,MobileMenuOpen:r})]})},ao=l.memo(no),co=i.button`
  position: fixed;
  bottom: ${o=>o.mediaType==="desktop"?t.space[6]:t.space[4]};
  right: ${o=>o.mediaType==="desktop"?t.space[6]:t.space[4]};
  display: inline-flex;
  opacity: 0.7;
  padding: ${t.space[3]};
  color: ${t.colors.secondary};
  background-color: ${o=>o.disabled?t.colors.muted:t.colors.accent};
  cursor: pointer;
  border: ${t.borders.none};
  border-radius: ${o=>o.round?t.radii.round:t.radii.normal};
  box-shadow: ${t.shadow.low};
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  :hover:not(:disabled) {
    background-color: ${t.colors.accent};
    box-shadow: ${t.shadow.medium};
    scale: 1.1;
    opacity: 1;
  }
`,lo=({icon:o=null,iconSize:s,round:r,mediaType:a})=>{const[n,d]=l.useState(0),p=()=>{d(window.scrollY)},h=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.useEffect(()=>(window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)),[]),e.jsx(co,{type:"button","aria-labelledby":"scroll up button",round:r,onClick:h,style:{transform:n<300?"translateY(+300%)":"translateY(0)"},mediaType:a,children:o&&e.jsx(o,{size:s})})},po=()=>{const o=c(b);return e.jsxs(e.Fragment,{children:[e.jsx(ao,{}),e.jsx(N,{}),e.jsx(lo,{icon:W,iconSize:30,round:!0,mediaType:o})]})},yo=po;export{yo as default};
