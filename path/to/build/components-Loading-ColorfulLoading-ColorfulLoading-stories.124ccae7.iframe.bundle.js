"use strict";(self.webpackChunkfunny_react_components=self.webpackChunkfunny_react_components||[]).push([[460],{"./src/components/Loading/ColorfulLoading/ColorfulLoading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ColorfulLoading_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const hueRotateAnimation=styled_components_browser_esm.i7`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`,scaleAnimation=styled_components_browser_esm.i7`
  0% {
    transform: scale(1);
  }
  80%, 100% {
    transform: scale(0);
  }
`,Section=styled_components_browser_esm.Ay.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #042104;
  animation: ${hueRotateAnimation} 10s linear infinite;
`,Loader=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 120px;
  height: 120px;
`,Span=styled_components_browser_esm.Ay.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * ${_ref=>{let{index}=_ref;return index}}));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #00FF0A;
    box-shadow: 0 0 10px #00FF0A,
                0 0 20px #00FF0A,
                0 0 40px #00FF0A,
                0 0 60px #00FF0A,
                0 0 80px #00FF0A,
                0 0 100px #00FF0A;
    animation: ${scaleAnimation} 2s linear infinite;
    animation-delay: calc(0.1s * ${_ref2=>{let{index}=_ref2;return index}});
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ColorfulLoading=()=>{const circleSpan=Array.from({length:20},((_,i)=>(0,jsx_runtime.jsx)(Span,{index:i+1},i+1)));return(0,jsx_runtime.jsx)(Section,{children:(0,jsx_runtime.jsx)(Loader,{children:circleSpan})})};ColorfulLoading.__docgenInfo={description:"",methods:[],displayName:"ColorfulLoading"};const ColorfulLoading_stories={title:"Loading/ColorfulLoading",component:ColorfulLoading,argTypes:{},args:{}},Primary={args:{label:"ColorfulLoading"}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    // primary: true,\n    label: 'ColorfulLoading'\n  }\n}",...Primary.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Loading-ColorfulLoading-ColorfulLoading-stories.124ccae7.iframe.bundle.js.map