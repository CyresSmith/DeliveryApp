import{s as i,t as o,j as s,c as x,u as d,g as w,q as C,v as S,w as j,x as k,b as y,G as z,i as T,y as B,r as m,z as I,A as M}from"./index-de7ac07b.js";import{u as A,M as _}from"./Modal-3c0f71a2.js";import{B as f}from"./Box.styled-0ad813d7.js";import{c as v}from"./index.esm-bca74b82.js";import{B as u}from"./Button-113cdd71.js";import{a as G,H as O}from"./index.esm-64556932.js";import{S as W}from"./Section-0f21cbd8.js";import"./iconBase-b34d46a1.js";import"./IconButton-fb3e1beb.js";const D=i.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${o.space[2]} ${o.space[4]};
  color: ${e=>e.seller===e.active?o.colors.primary:o.colors.background};
  background-color: ${e=>e.seller===e.active?o.colors.accent:o.colors.primary};
  border-radius: ${o.radii.high};
  cursor: pointer;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  &:hover {
    color: ${o.colors.primary};
    background-color: ${o.colors.accent};
  }
`,E=i.p`
  font-size: ${o.fontSizes.l};
  font-weight: ${o.fontWeights.regular};
  /* color: ${o.colors.background}; */
`,R=({seller:e,activeSeller:t,handleSellerSet:n,handleSellerRemove:r})=>{const a=c=>{if(c._id===(t==null?void 0:t._id)){r();return}n(c)};return s.jsx(D,{seller:e._id,active:t==null?void 0:t._id,onClick:()=>a(e),children:s.jsx(E,{children:e.name.toUpperCase()})})},q=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${o.space[4]};
  margin-bottom: ${o.space[5]};
`,N=({ActiveSeller:e,toggleModal:t})=>{const n=x(),r=d(w),a=l=>{if(r.length>0){t();return}n(S(l))},c=()=>{if(r.length>0){t();return}n(j())},{data:p=[],isLoading:b,error:h,refetch:Y}=C([]);return s.jsx(q,{children:p.map(l=>s.jsx(R,{seller:l,activeSeller:e,handleSellerSet:a,handleSellerRemove:c},l._id))})},U=i.li`
  width: ${e=>{switch(e.mediaType){case"desktop":return`calc((100% - (${o.space[5]} * 2)) / 3)`;case"tablet":return`calc((100% - ${o.space[5]}) / 2)`}}};
  height: 100%;
  background-color: ${o.colors.white};
  border-radius: ${o.radii.normal};
  overflow: hidden;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  box-shadow: ${o.shadow.medium};

  &:hover {
    scale: ${e=>e.mediaType==="desktop"?1.1:"none"};
    box-shadow: ${o.shadow.high};
  }
`,F=i.img`
  height: 300px;
  width: 100%;
  background-color: ${o.colors.muted};
  object-fit: cover;
`,H=i.div`
  height: 40%;
  padding: ${o.space[4]};
`,L=i.p`
  font-size: ${o.fontSizes.l};
  font-weight: ${o.fontWeights.bold};
  margin-bottom: ${o.space[1]};
`,Q=i.p`
  font-size: ${o.fontSizes.l};
  font-weight: ${o.fontWeights.bold};
  margin-bottom: ${o.space[2]};
  color: ${o.colors.primary};
`,$=i.p`
  font-size: ${o.fontSizes.s};
  font-weight: ${o.fontWeights.regular};
  margin-bottom: ${o.space[4]};
`,P=({item:e,ActiveSeller:t,mediaType:n})=>{const r=x(),a=()=>{r(k({...e,count:1,total:e.price}))};return s.jsxs(U,{mediaType:n,children:[s.jsx(F,{alt:e.name,src:e.image}),s.jsxs(H,{children:[s.jsx(L,{children:e.name}),s.jsxs(Q,{children:[e.price,"₴"]}),s.jsx($,{children:e.desc}),s.jsxs($,{children:["seller: ",s.jsx("b",{children:e.seller.name.toUpperCase()})]}),s.jsx(u,{icon:v,iconSize:15,onClick:a,disabled:!t,children:t?"Add to cart":" please select seller"})]})]})},J=i.ul`
  display: flex;
  flex-direction: ${e=>e.mediaType==="mobile"?"column":"row"};
  flex-wrap: ${e=>e.mediaType==="mobile"?"nowrap":"wrap"};
  gap: ${o.space[5]};
  width: 100%;
  height: 100%;
  background-color: ${o.colors.primary};
  border-radius: ${o.radii.high};
  padding: ${e=>e.mediaType==="mobile"?o.space[4]:o.space[5]};
`,K=({ActiveSeller:e,OffersItems:t,isLoading:n})=>{const r=d(y);return s.jsxs(J,{mediaType:r,children:[n&&s.jsx(f,{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx(z,{color:o.colors.accent})}),!n&&t.map(a=>s.jsx(P,{mediaType:r,item:a,ActiveSeller:e},a.name))]})},g=i.p`
  font-size: ${o.fontSizes.xl};
  font-weight: ${o.fontWeights.regular};
  text-align: center;
  color: ${o.colors.primary};
`,V=({ActiveSeller:e,toggleModal:t})=>{const n=T(),r=x(),a=()=>{t(),r(B()),r(j()),n("/")};return s.jsxs(f,{display:"flex",flexDirection:"column",alignItems:"center",children:[s.jsxs(g,{children:["The shopping cart contains the goods of the seller &quot",e.toUpperCase(),"&quot!"]}),s.jsx(g,{children:"Do you want to place an order?"}),s.jsx(g,{children:"Or the items will be removed from the cart!"}),s.jsxs(f,{style:{marginTop:o.space[5],display:"flex",gap:o.space[4]},children:[s.jsx(u,{icon:G,onClick:a,children:"Reset Cart"}),s.jsx(u,{icon:O,onClick:()=>n("/cart"),children:"Go to Cart"})]})]})},X=()=>{const[e,t]=m.useState(null),{showModal:n,toggleModal:r}=A();d(y);const a=d(I),{data:c=[],isLoading:p,error:b,refetch:h}=M(e==null?void 0:e._id);return m.useEffect(()=>{t(a)},[a]),m.useEffect(()=>{h()},[h,e]),s.jsx(W,{children:s.jsxs(s.Fragment,{children:[s.jsx(N,{ActiveSeller:e,toggleModal:r}),s.jsx(K,{OffersItems:c,isLoading:p,ActiveSeller:!!e}),n&&s.jsx(_,{toggleModal:r,showModal:n,children:s.jsx(V,{ActiveSeller:e==null?void 0:e.name,toggleModal:r})})]})})},ce=X;export{ce as default};
