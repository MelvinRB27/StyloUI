import{j as a}from"./jsx-runtime-D_zvdyIk.js";const l="_checkboxContainer_1tl1r_1",n="_checkbox_1tl1r_1",i="_checkboxLabel_1tl1r_29",o={checkboxContainer:l,checkbox:n,checkboxLabel:i},m=({label:c,labelAlign:e="right",checked:u=!1,onCheckedChange:t})=>{const r=e==="left"?"row-reverse":e==="top"?"column-reverse":e==="bottom"?"column":"row";return a.jsxs("label",{className:o.checkboxContainer,style:{flexDirection:r},children:[a.jsx("input",{type:"checkbox",onChange:s=>t==null?void 0:t(s.target.checked),className:o.checkbox}),c&&a.jsx("span",{className:o.checkboxLabel,children:c})]})};m.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelAlign:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};export{m as C};
