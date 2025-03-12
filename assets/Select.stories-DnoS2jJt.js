import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as p}from"./index-C4mD4Gko.js";import{F as V}from"./index-B1Rsxqyx.js";import{G as j}from"./iconBase-BCQfYAkG.js";function q(n){return j({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"},child:[]}]})(n)}function k(n){return j({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"},child:[]}]})(n)}const t={"StyloUI-SelectContainer":"_StyloUI-SelectContainer_15olp_1","StyloUI-SelectLabel":"_StyloUI-SelectLabel_15olp_13","StyloUI-CustomSelect":"_StyloUI-CustomSelect_15olp_49","StyloUI-CustomSelectToggle":"_StyloUI-CustomSelectToggle_15olp_59","StyloUI-CustomSelectMenu":"_StyloUI-CustomSelectMenu_15olp_85","StyloUI-CustomSelectOption":"_StyloUI-CustomSelectOption_15olp_111","StyloUI-ClearButton":"_StyloUI-ClearButton_15olp_133"},r=({label:n,placeholder:U="Selecciona una opción",value:D,defaultValue:N,options:S,showClear:u=!1,onChange:s})=>{const d=p.useRef(null),[y,m]=p.useState(!1),[L,f]=p.useState(D??N),i=S.find(l=>l.value===L)||null,T=()=>m(l=>!l),B=l=>{f(l.value),m(!1),s==null||s(l.value)},w=l=>{l.stopPropagation(),f(void 0),s==null||s(null)};return p.useEffect(()=>{const l=A=>{d.current&&!d.current.contains(A.target)&&m(!1)};return document.addEventListener("click",l),()=>document.removeEventListener("click",l)},[]),e.jsxs("div",{className:t["StyloUI-SelectContainer"],ref:d,children:[n&&e.jsx("span",{className:t["StyloUI-SelectLabel"],children:n}),e.jsxs("div",{className:t["StyloUI-CustomSelect"],children:[e.jsxs("div",{className:t["StyloUI-CustomSelectToggle"],onClick:T,children:[e.jsx("div",{className:t["StyloUI-SelectedOption"],children:i?i.label:U}),e.jsxs("div",{className:t["StyloUI-Icons"],children:[u&&i&&e.jsx(V,{className:t["StyloUI-ClearButton"],onClick:w}),(!u||u&&!i)&&e.jsx("div",{className:t["StyloUI-ClearButton"],onClick:l=>{l.stopPropagation()},children:y?e.jsx(k,{}):e.jsx(q,{})})]})]}),y&&e.jsx("div",{className:t["StyloUI-CustomSelectMenu"],children:S.map(l=>e.jsx("div",{className:t["StyloUI-CustomSelectOption"],onClick:()=>B(l),children:l.label},l.value))})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Selecciona una opción"',computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},showClear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""}}};const z={title:"Components/Select",component:r},o=()=>{const n=[{label:"Opción 1",value:"1"},{label:"Opción 2",value:"2"},{label:"Opción 3",value:"3"}];return e.jsx(r,{label:"Opciones",options:n})},a=()=>{const n=[{label:"Opción 1",value:"1"},{label:"Opción 2",value:"2"},{label:"Opción 3",value:"3"}];return e.jsx(r,{label:"Opciones",options:n,defaultValue:"1",showClear:!0})},c=()=>{const n=[{label:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("strong",{style:{color:"red"},children:"Opción A"}),e.jsx("p",{children:"Descripción de la opción A"})]}),value:"A"},{label:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("strong",{style:{color:"blue"},children:"Opción B"}),e.jsx("p",{children:"Descripción de la opción B"})]}),value:"B"},{label:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("strong",{style:{color:"green"},children:"Opción C"}),e.jsx("p",{children:"Descripción de la opción C"})]}),value:"C"}];return e.jsx(r,{label:"Opciones",defaultValue:"A",options:n})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Clearable"};c.__docgenInfo={description:"",methods:[],displayName:"WithDynamicLabel"};var v,b,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const options: optionsSelect[] = [{
    label: "Opción 1",
    value: "1"
  }, {
    label: "Opción 2",
    value: "2"
  }, {
    label: "Opción 3",
    value: "3"
  }];
  return <Select label="Opciones" options={options} />;
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var g,I,O;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const options: optionsSelect[] = [{
    label: "Opción 1",
    value: "1"
  }, {
    label: "Opción 2",
    value: "2"
  }, {
    label: "Opción 3",
    value: "3"
  }];
  return <Select label="Opciones" options={options} defaultValue="1" showClear />;
}`,...(O=(I=a.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var _,h,C;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const options: optionsSelect[] = [{
    label: <div style={{
      display: "flex",
      flexDirection: "column"
    }}>\r
          <strong style={{
        color: "red"
      }}>Opción A</strong>\r
          <p>Descripción de la opción A</p>\r
        </div>,
    value: "A"
  }, {
    label: <div style={{
      display: "flex",
      flexDirection: "column"
    }}>\r
          <strong style={{
        color: "blue"
      }}>Opción B</strong>\r
          <p>Descripción de la opción B</p>\r
        </div>,
    value: "B"
  }, {
    label: <div style={{
      display: "flex",
      flexDirection: "column"
    }}>\r
          <strong style={{
        color: "green"
      }}>Opción C</strong>\r
          <p>Descripción de la opción C</p>\r
        </div>,
    value: "C"
  }];
  return <Select label="Opciones" defaultValue={"A"} options={options} />;
}`,...(C=(h=c.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const F=["Default","Clearable","WithDynamicLabel"];export{a as Clearable,o as Default,c as WithDynamicLabel,F as __namedExportsOrder,z as default};
