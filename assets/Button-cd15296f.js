import{s as o,t,j as e}from"./index-62f6d308.js";import{G as d}from"./iconBase-342ca897.js";function m(r){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{cx:"12",cy:"20",r:"2"}},{tag:"circle",attr:{cx:"12",cy:"4",r:"2"}},{tag:"circle",attr:{cx:"6.343",cy:"17.657",r:"2"}},{tag:"circle",attr:{cx:"17.657",cy:"6.343",r:"2"}},{tag:"circle",attr:{cx:"4",cy:"12",r:"2.001"}},{tag:"circle",attr:{cx:"20",cy:"12",r:"2"}},{tag:"circle",attr:{cx:"6.343",cy:"6.344",r:"2"}},{tag:"circle",attr:{cx:"17.657",cy:"17.658",r:"2"}}]})(r)}const f=o("button")`
  display: flex;
  align-items: center;
  font-family: ${t.fonts.body};
  font-size: ${t.fontSizes.m};
  font-weight: ${t.fontWeights.regular};
  padding: ${t.space[1]} ${t.space[3]};
  color: ${t.colors.primary};
  background-color: ${r=>r.disabled?t.colors.muted:t.colors.accent};
  cursor: ${r=>r.disabled?"":"pointer"};
  border: ${t.borders.none};
  border-radius: ${t.radii.normal};
  box-shadow: ${t.shadow.low};
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  :hover:not(:disabled) {
    background-color: ${t.colors.accent};
    box-shadow: ${t.shadow.medium};
    scale: 1.02;
  }
`,x=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin 1s linear 0s infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`,g=o.span`
  margin-left: ${r=>r.isIconThere?t.space[3]:t.space[0]};
`,y=({icon:r=null,iconSize:a,type:c="button",disabled:i=!1,isLoading:s=!1,children:n,onClick:l})=>e.jsxs(f,{type:c,disabled:i,onClick:l,children:[s&&r&&e.jsx(x,{children:e.jsx(m,{size:a})}),!s&&r&&e.jsx(r,{size:a}),e.jsx(g,{isIconThere:r,children:n})]});export{y as B};
