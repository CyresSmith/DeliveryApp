import{s as o,t as e,u as f,b as g,n as $,r as j,j as s,G as u}from"./index-302cc0a2.js";import{S as y}from"./Section-83ae5803.js";import{B as b}from"./Box.styled-db8a5129.js";const S=o.ul`
  padding: ${i=>i.mediaType==="desktop"?e.space[5]:e.space[4]};
  background-color: ${e.colors.primary};

  border-radius: ${e.radii.high};
`,w=o.li`
  padding: ${e.space[4]};
  background-color: ${e.colors.white};
  border-radius: ${e.radii.normal};
  display: flex;
  flex-direction: ${i=>i.mediaType==="mobile"?"column":"row"};
  align-items: ${i=>i.mediaType==="mobile"?"flex-end":"flex-start"};
  gap: ${i=>i.mediaType==="desktop"?e.space[5]:e.space[4]};

  &:not(:last-child) {
    margin-bottom: ${e.space[5]};
  }
`,z=o.p`
  font-size: ${e.fontSizes.m};
  font-weight: ${e.fontWeights.regular};
  color: ${e.colors.primary};
  display: flex;
  flex-direction: column;
`,T=o.span`
  font-size: ${e.fontSizes.l};
  font-weight: ${e.fontWeights.bold};
  margin-top: ${e.space[4]};
`,I=o.span`
  font-size: ${e.fontSizes.s};
  margin-bottom: ${e.space[4]};
`,k=o.ul`
  font-size: ${e.fontSizes.m};
  font-weight: ${e.fontWeights.r};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${e.space[4]};
`,H=o.li`
  color: ${e.colors.primary};
  background-color: ${e.colors.background};
  padding: ${e.space[3]};
  border-radius: ${e.radii.normal};
  width: 100%;

  display: ${i=>i.mediaType==="mobile"?"column":" flex"};
  align-items: baseline;
  gap: ${e.space[4]};

  /* &:not(:last-child) {
    margin-bottom: ${e.space[4]};
  } */
`,l=o.p`
  font-size: ${e.fontSizes.l};
  font-weight: ${e.fontWeights.bold};
`,E=()=>{var c;const i=f(g),{data:n=[],isLoading:r,error:P,isError:W,isSuccess:B,refetch:a}=$();return j.useEffect(()=>{a()},[a]),s.jsxs(S,{mediaType:i,children:[r&&s.jsx(b,{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx(u,{color:e.colors.accent})}),!r&&((c=n==null?void 0:n.history)==null?void 0:c.map(t=>s.jsxs(w,{mediaType:i,children:[s.jsx(k,{mediaType:i,children:t.items.map(({_id:d,name:p,price:m,count:h,total:x})=>s.jsxs(H,{mediaType:i,children:[s.jsx(l,{children:p}),s.jsxs("span",{children:[s.jsx("b",{children:"Price:"})," ",m]}),s.jsxs("span",{children:[s.jsx("b",{children:"Count: "}),h]}),s.jsxs(l,{children:["Total: ",x]})]},d))}),s.jsxs(z,{children:[s.jsxs(I,{children:["ID: ",t._id]}),s.jsx("b",{children:"Store:"}),s.jsxs("span",{children:[" ",t.seller.name]}),s.jsx("b",{children:"Client Name:"}),s.jsx("span",{children:t.client.name}),s.jsx("b",{children:"Address:"}),s.jsx("span",{children:t.client.address}),s.jsx("b",{children:"Date:"}),s.jsx("span",{children:new Date(t.createdAt).toLocaleString()}),s.jsxs(T,{children:["Total price: ",t.totalPrice]})]})]},t._id)))]})},L=()=>s.jsx(y,{children:s.jsx(E,{})}),A=L;export{A as default};
