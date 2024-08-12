"use strict";(self.webpackChunkfunny_react_components=self.webpackChunkfunny_react_components||[]).push([[899],{"./src/components/HotCupOfTea/HotCupOfTea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HotCupOfTea_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const GlobalStyle=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #607d8b;
`,Container=styled_components_browser_esm.I4.div`
  position: relative;
  top: 50px;
`,Cup=styled_components_browser_esm.I4.div`
  position: relative;
  width: 280px;
  height: 300px;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
  border-bottom-left-radius: 45%;
  border-bottom-right-radius: 45%;
`,Top=styled_components_browser_esm.I4.div`
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
  border-radius: 50%;
`,Circle=styled_components_browser_esm.I4.div`
  position: absolute;
  top: 5px;
  left: 10px;
  width: calc(100% - 20px);
  height: 50px;
  background: linear-gradient(to left, #f9f9f9, #d9d9d9);
  border-radius: 50%;
  overflow: hidden;
`,Tea=styled_components_browser_esm.I4.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#c57e65, #e28462);
  border-radius: 50%;
`,Handle=styled_components_browser_esm.I4.div`
  position: absolute;
  right: -70px;
  top: 40px;
  width: 160px;
  height: 180px;
  border: 25px solid #dcdcdc;
  border-left: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-radius: 50%;
  transform: rotate(45deg);
`,Plate=styled_components_browser_esm.I4.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 200px;
  background: linear-gradient(to right,#f9f9f9,#e7e7e7);
  border-radius: 50%;
  box-shadow: 0 35px 35px rgba(0,0,0,0.2);

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 50%;
    background: linear-gradient(to left,#f9f9f9,#e7e7e7);
  }

  &::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    border-radius: 50%;
    background: radial-gradient(rgba(0,0,0,0.2), 25%, transparent, transparent);
  }
`,animate=styled_components_browser_esm.i7`
  0% {
    transform: translateY(0) scaleX(1);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  50% {
    transform: translateY(-150px) scaleX(5);
  }
  95% {
    opacity: 0;
  }
  100% {
    transform: translateY(-300) scaleX(10);
  }
`,Vapour=styled_components_browser_esm.I4.div`
  position: relative;
  display: flex;
  z-index: 1;
  padding: 0 20px;

  > span {
    position: relative;
    bottom: 50%;
    display: block;
    margin: 0 2px 50px;
    min-width: 8px;
    height: 120px;
    background: #fff;
    border-radius: 50%;
    animation: ${animate} 5s linear infinite;
    opacity: 0;
    filter: blur(8px);
    animation-delay: calc(var(--i) * -0.5s);
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HotCupOfTea=()=>{const vapourSpans=[1,3,16,5,13,20,6,7,10,8,17,11,12,14,2,9,15,4,19].map((i=>(0,jsx_runtime.jsx)("span",{style:{"--i":i}},i)));return(0,jsx_runtime.jsx)(GlobalStyle,{children:(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Plate,{}),(0,jsx_runtime.jsxs)(Cup,{children:[(0,jsx_runtime.jsxs)(Top,{children:[(0,jsx_runtime.jsx)(Vapour,{children:vapourSpans}),(0,jsx_runtime.jsx)(Circle,{children:(0,jsx_runtime.jsx)(Tea,{})})]}),(0,jsx_runtime.jsx)(Handle,{})]})]})})};HotCupOfTea.__docgenInfo={description:"",methods:[],displayName:"HotCupOfTea"};const HotCupOfTea_stories={title:"HotCupOfTea/HotCupOfTea",component:HotCupOfTea,argTypes:{},args:{}},Primary={args:{label:"HotCupOfTea"}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    // primary: true,\n    label: 'HotCupOfTea'\n  }\n}",...Primary.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-HotCupOfTea-HotCupOfTea-stories.d74bcd02.iframe.bundle.js.map