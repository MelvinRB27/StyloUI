import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{a as l}from"./index-C4mD4Gko.js";const N="_radioContainer_1jx61_1",R="_radio_1jx61_1",v="_radioLabel_1jx61_31",m={radioContainer:N,radio:R,radioLabel:v},s=({className:a,label:t,labelAlign:e,onCheckedChange:i,...j})=>{const S=e==="left"?"row-reverse":e==="top"?"column-reverse":e==="bottom"?"column":"row";return o.jsxs("label",{className:m.radioContainer,style:{flexDirection:S},children:[o.jsx("input",{type:"radio",...j,onChange:T=>i==null?void 0:i(T.target.checked),className:`${m.radio} ${a??""}`}),t&&o.jsx("span",{className:m.radioLabel,children:t})]})};s.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelAlign:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};const A={title:"Components/Radio",component:s},r=()=>{const[a,t]=l.useState(!1);return o.jsx(s,{label:"Default",checked:a,onChange:e=>t(e.target.checked)})},c=()=>{const[a,t]=l.useState(!1);return o.jsx(s,{label:"Left",labelAlign:"left",checked:a,onCheckedChange:e=>t(e)})},n=()=>{const[a,t]=l.useState(!1);return o.jsx(s,{label:"Top",labelAlign:"top",checked:a,onCheckedChange:e=>t(e)})},d=()=>{const[a,t]=l.useState(!1);return o.jsx(s,{label:"Bottom",labelAlign:"bottom",checked:a,onCheckedChange:e=>t(e)})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"LabelLeft"};n.__docgenInfo={description:"",methods:[],displayName:"LabelTop"};d.__docgenInfo={description:"",methods:[],displayName:"LabelBottom"};var p,h,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  return <Radio label="Default" checked={checked} onChange={e => setChecked(e.target.checked)} />;
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var k,f,b;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  return <Radio label="Left" labelAlign="left" checked={checked} onCheckedChange={checked => setChecked(checked)} />;
}`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,C,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  return <Radio label="Top" labelAlign="top" checked={checked} onCheckedChange={checked => setChecked(checked)} />;
}`,...(_=(C=n.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var L,x,y;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  return <Radio label="Bottom" labelAlign="bottom" checked={checked} onCheckedChange={checked => setChecked(checked)} />;
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const B=["Default","LabelLeft","LabelTop","LabelBottom"];export{r as Default,d as LabelBottom,c as LabelLeft,n as LabelTop,B as __namedExportsOrder,A as default};
