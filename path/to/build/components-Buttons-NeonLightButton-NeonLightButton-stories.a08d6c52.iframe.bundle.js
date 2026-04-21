"use strict";(self.webpackChunkfunny_react_components=self.webpackChunkfunny_react_components||[]).push([[387],{"./src/components/Buttons/NeonLightButton/NeonLightButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NeonLightButton_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const animate1=styled_components_browser_esm.i7`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`,animate2=styled_components_browser_esm.i7`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`,animate3=styled_components_browser_esm.i7`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`,animate4=styled_components_browser_esm.i7`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`,Section=styled_components_browser_esm.Ay.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: row;
  background: #050801;
  gap: 32px;
`,NeonLink=styled_components_browser_esm.Ay.a`
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  margin: 40px 0;
  color: #03E9F4;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);

  &:hover {
    background: #03E9F4;
    color: #050801;
    box-shadow: 0 0 5px #03E9F4, 0 0 25px #03E9F4, 0 0 50px #03E9F4, 0 0 200px #03E9F4;
  }

  &:nth-child(1) {
    filter: hue-rotate(290deg);
  }

  &:nth-child(2) {
    filter: hue-rotate(110deg);
  }
`,Span=styled_components_browser_esm.Ay.span`
  position: absolute;
  display: block;

  &:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03E9F4);
    animation: ${animate1} 1s linear infinite;
  }

  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03E9F4);
    animation: ${animate2} 1s linear infinite;
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03E9F4);
    animation: ${animate3} 1s linear infinite;
    animation-delay: 0.5s;
  }

  &:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03E9F4);
    animation: ${animate4} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NeonButton=_ref=>{let{text}=_ref;return(0,jsx_runtime.jsxs)(NeonLink,{href:"https://react.dev",target:"_blank",children:[(0,jsx_runtime.jsx)(Span,{}),(0,jsx_runtime.jsx)(Span,{}),(0,jsx_runtime.jsx)(Span,{}),(0,jsx_runtime.jsx)(Span,{}),text]})},NeonLightButton=()=>(0,jsx_runtime.jsx)(Section,{children:["Green Button","Pink Button","Blue Button"].map(((text,index)=>(0,jsx_runtime.jsx)(NeonButton,{text},index)))});NeonLightButton.__docgenInfo={description:"",methods:[],displayName:"NeonLightButton"};const NeonLightButton_stories={title:"Buttons/NeonLightButton",component:NeonLightButton,argTypes:{},args:{}},Primary={args:{label:"NeonLightButton"}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    // primary: true,\n    label: 'NeonLightButton'\n  }\n}",...Primary.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Buttons-NeonLightButton-NeonLightButton-stories.a08d6c52.iframe.bundle.js.map