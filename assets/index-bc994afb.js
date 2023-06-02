import{s as y,t as a,k as j,c as w,u as L,b as $,i as F,r as M,j as s,l as S,m as k}from"./index-302cc0a2.js";import{F as E,c as B,a as p,b as q,d as u,I as v,h as A}from"./FormField-c2e9765a.js";import{n as R}from"./notiflix-aio-3.2.6.min-bc1e2792.js";import{b as T}from"./index.esm-02e9c154.js";import{B as z}from"./Button-12a52b9b.js";import{B as h}from"./Box.styled-db8a5129.js";import{S as I}from"./Section-83ae5803.js";import"./iconBase-ed59627b.js";const _=y(E)`
  display: flex;
  flex: 20%;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: ${a.colors.primary};
  padding: ${a.space[5]};
  padding-top: ${a.space[6]};
  width: ${i=>i.mediatype==="mobile"?"100%":"350px"};
  border-radius: ${a.radii.high};
`,N=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,O=B().shape({email:p().email("Must be valid email").required("Required"),password:p().min(8,"Must be at least 8 characters").max(20,"Must be max 20 characters").matches(N,"Must be at least one capital letter and one number").required("Required")}),V={email:"",password:""},C=()=>{const[i,{isLoading:c,isSuccess:o,isError:m,error:l,isUninitialized:H}]=j(),x=w(),g=L($),f=async t=>{const r=await i(t),{user:n,accessToken:e,refreshToken:b}=r.data;x(S({user:n,accessToken:e,refreshToken:b})),k(e)},d=F();return M.useEffect(()=>{o&&(d("/"),R.Notify.success("Login was success!",{showOnlyTheLastOne:!0,position:"right-top"})),m&&console.error(l)},[l,m,o,d]),s.jsx(q,{initialValues:V,validationSchema:O,onSubmit:({email:t,password:r},{resetForm:n})=>{const e={email:t.trim(),password:r.trim()};f(e),o&&n()},children:s.jsxs(_,{mediatype:g,children:[s.jsx(h,{mb:[6],children:s.jsx(u,{type:"email",label:"Email",icon:v,placeholder:"mail@mail.com"})}),s.jsx(h,{mb:[6],children:s.jsx(u,{type:"password",label:"password",icon:T,placeholder:"********"})}),s.jsx(z,{type:"submit",isLoading:c,icon:A,disabled:c,children:"Login",iconSize:20})]})})},D=()=>s.jsx(I,{children:s.jsx(C,{})}),X=D;export{X as default};
