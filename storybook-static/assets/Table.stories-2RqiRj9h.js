import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{a as g}from"./index-C4mD4Gko.js";import{C as k}from"./Checkbox-4_eZED2W.js";const B={"StyloUI-Table":"_StyloUI-Table_s9c8m_1"},l=({columns:n,rows:p,showCheckbox:x=!1,onSelectionChange:i})=>{const[W,f]=g.useState([]),[b,w]=g.useState([]),[u,$]=g.useState(!1),y=p.map((e,t)=>({...e,key:e.key||`${t}`})),E=(e,t)=>{let a=[...W],r=[...b];const m=String(t);r.includes(m)?(a=a.filter(h=>String(h.key)!==m),r=r.filter(h=>h!==m)):(a.push(e),r.push(m)),f(a),w(r),i&&i(a,r)},P=()=>{let e=[],t=[];u||(e=y,t=y.map(a=>String(a.key))),f(e),w(t),$(!u),i&&i(e,t)};return s.jsxs("table",{className:B["StyloUI-Table"],children:[s.jsx("thead",{children:s.jsxs("tr",{children:[x&&s.jsx("th",{style:{textAlign:"center",borderBottom:"1px solid #ddd"},children:s.jsx(k,{checked:u,onChange:P})}),n.map((e,t)=>s.jsx("th",{style:{textAlign:e.align||"left",borderBottom:"1px solid #ddd",padding:"8px"},children:e.header},t))]})}),s.jsx("tbody",{children:y.map(e=>s.jsxs("tr",{children:[x&&s.jsx("td",{style:{textAlign:"center",padding:"8px",borderBottom:"1px solid #ddd"},children:s.jsx(k,{label:"",checked:b.includes(String(e.key)),onChange:()=>E(e,e.key)})}),n.map((t,a)=>s.jsx("td",{style:{textAlign:t.align||"left",padding:"8px",borderBottom:"1px solid #ddd"},children:e[t.accessor]},a))]},e.key))})]})};l.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnTable"}],raw:"ColumnTable[]"},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"Row"}],raw:"Row[]"},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRows: Row[], selectedKeys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Row"}],raw:"Row[]"},name:"selectedRows"},{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedKeys"}],return:{name:"void"}}},description:""}}};const q=[{header:"Nombre",accessor:"name",align:"left"},{header:"Edad",accessor:"age",align:"center"},{header:"Ciudad",accessor:"city",align:"center"}],I=[{key:1,name:"Juan",age:25,city:"Madrid"},{key:2,name:"Ana",age:30,city:"Barcelona"},{key:3,name:"Luis",age:28,city:"Valencia"},{key:4,name:"Carlos",age:35,city:"Sevilla"},{key:5,name:"Sofia",age:22,city:"Zaragoza"}],Z={title:"Components/Table",component:l},o=()=>s.jsx(l,{columns:q,rows:I}),c=()=>{const n=[{header:"Nombre",accessor:"name",align:"left"},{header:"Edad",accessor:"age",align:"right"},{header:"Ciudad",accessor:"city",align:"center"}];return s.jsx(l,{columns:n,rows:I})},d=()=>{const n=[{header:"Producto",accessor:"product"},{header:"Precio",accessor:"price"}],p=[{key:1,product:"Camiseta",price:"$20"},{key:2,product:"Pantalón",price:"$35"},{key:3,product:"Zapatos",price:"$50"}];return s.jsx(l,{columns:n,rows:p,showCheckbox:!0})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"WithCustomAlignment"};d.__docgenInfo={description:"",methods:[],displayName:"WithCheckbox"};var C,S,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:"() => <Table columns={columns} rows={rows} />",...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,R,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const customColumns: ColumnTable[] = [{
    header: "Nombre",
    accessor: "name",
    align: "left"
  }, {
    header: "Edad",
    accessor: "age",
    align: "right"
  }, {
    header: "Ciudad",
    accessor: "city",
    align: "center"
  }];
  return <Table columns={customColumns} rows={rows} />;
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var _,K,N;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const dynamicColumns = [{
    header: "Producto",
    accessor: "product"
  }, {
    header: "Precio",
    accessor: "price"
  }];
  const dynamicRows = [{
    key: 1,
    product: "Camiseta",
    price: "$20"
  }, {
    key: 2,
    product: "Pantalón",
    price: "$35"
  }, {
    key: 3,
    product: "Zapatos",
    price: "$50"
  }];
  return <Table columns={dynamicColumns} rows={dynamicRows} showCheckbox />;
}`,...(N=(K=d.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};const V=["Default","WithCustomAlignment","WithCheckbox"];export{o as Default,d as WithCheckbox,c as WithCustomAlignment,V as __namedExportsOrder,Z as default};
