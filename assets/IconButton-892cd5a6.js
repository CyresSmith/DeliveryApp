import{s as u,t as o,j as n}from"./index-b120845e.js";const b=u("button")`
  display: inline-flex;
  padding: ${o.space[2]};
  color: ${r=>r.color};
  background-color: ${r=>r.disabled?o.colors.muted:r.backgroundColor};
  cursor: pointer;
  border: ${o.borders.none};
  border-radius: ${r=>r.round?o.radii.round:o.radii.normal};

  box-shadow: ${o.shadow.low};
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  :disabled {
    pointer-events: none;
  }

  :hover:not(:disabled) {
    background-color: ${o.colors.accent};
    box-shadow: ${o.shadow.medium};
    scale: 1.1;
  }
`,p=({icon:r=null,iconSize:s,type:t="button",disabled:a=!1,ariaLabel:e,round:i,onClick:d,backgroundColor:l=`${o.colors.background}`,color:c=`${o.colors.primary}`})=>n.jsx(b,{type:t,disabled:a,"aria-labelledby":e,round:i,onClick:d,backgroundColor:l,color:c,children:r&&n.jsx(r,{size:s})});export{p as I};
