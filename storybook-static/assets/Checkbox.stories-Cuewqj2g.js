import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{a as l}from"./index-C4mD4Gko.js";import{C as n}from"./Checkbox-4_eZED2W.js";const A={title:"Components/Checkbox",component:n},o=()=>{const[e,c]=l.useState(!1);return d.jsx(n,{label:"Default",checked:e,onChange:t=>c(t.target.checked)})},a=()=>{const[e,c]=l.useState(!1);return d.jsx(n,{label:"Left",labelAlign:"left",checked:e,onCheckedChange:t=>c(t)})},s=()=>{const[e,c]=l.useState(!1);return d.jsx(n,{label:"Top",labelAlign:"top",checked:e,onCheckedChange:t=>c(t)})},r=()=>{const[e,c]=l.useState(!1);return d.jsx(n,{label:"Bottom",labelAlign:"bottom",checked:e,onCheckedChange:t=>c(t)})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"LabelLeft"};s.__docgenInfo={description:"",methods:[],displayName:"LabelTop"};r.__docgenInfo={description:"",methods:[],displayName:"LabelBottom"};var h,k,m;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  return <Checkbox label="Default" checked={checked} onChange={e => setChecked(e.target.checked)} />;
}`,...(m=(k=o.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var p,u,C;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  return <Checkbox label="Left" labelAlign="left" checked={checked} onCheckedChange={checked => setChecked(checked)} />;
}`,...(C=(u=a.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var b,i,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  return <Checkbox label="Top" labelAlign="top" checked={checked} onCheckedChange={checked => setChecked(checked)} />;
}`,...(f=(i=s.parameters)==null?void 0:i.docs)==null?void 0:f.source}}};var g,x,L;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  return <Checkbox label="Bottom" labelAlign="bottom" checked={checked} onCheckedChange={checked => setChecked(checked)} />;
}`,...(L=(x=r.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const B=["Default","LabelLeft","LabelTop","LabelBottom"];export{o as Default,r as LabelBottom,a as LabelLeft,s as LabelTop,B as __namedExportsOrder,A as default};
