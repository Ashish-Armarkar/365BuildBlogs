import{$ as a,R as s}from"./index-DGhQ-Qo8.js";import{c as d}from"./index-D8PgM5v9-CYcvmr2o.js";const c=({postData:e})=>s.jsx(s.Fragment,{children:s.jsx("div",{className:"list-group",children:e.map(r=>s.jsx("a",{href:"#",className:"list-group-item",children:r.title},r.id))})}),i=({id:e})=>s.jsx(d,{url:`https://jsonplaceholder.typicode.com/users/${e}/posts`,renderSuccess:r=>s.jsx(c,{postData:r})}),t=({commentData:e})=>s.jsx("div",{className:"list-group",children:e.map(r=>s.jsx("a",{className:"list-group-item",children:r.body},r.id))}),l=({id:e})=>s.jsx(d,{url:`https://jsonplaceholder.typicode.com/users/${e}/comments`,renderSuccess:r=>s.jsx(t,{commentData:r})}),n=({userData:e})=>s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"d-flex flex-column",children:[s.jsxs("h1",{children:["Name: ",e.name]}),s.jsxs("b",{children:["Username: ",e.username]}),s.jsxs("b",{children:["Email: ",e.email]}),s.jsxs("b",{children:["Phone: ",e.phone]}),s.jsx("b",{children:s.jsx("a",{href:`http://${e.website}`,children:e.website})}),s.jsx("em",{children:`${e.address.street} ${e.address.suite} ${e.address.city} ${e.address.zipcode}`})]}),s.jsxs("div",{className:"d-flex mt-5",children:[s.jsxs("div",{children:[s.jsxs("h6",{children:["Posts by ",e.name]}),s.jsx(i,{id:e.id})]}),s.jsxs("div",{className:"ms-2",children:[s.jsxs("h6",{children:["Comments by ",e.name]}),s.jsx(l,{id:e.id})]})]})]}),h=()=>{const{id:e}=a();return s.jsx(d,{url:`https://jsonplaceholder.typicode.com/users/${e.substring(1)}`,renderSuccess:r=>s.jsx(n,{userData:r})})};export{h as default};
