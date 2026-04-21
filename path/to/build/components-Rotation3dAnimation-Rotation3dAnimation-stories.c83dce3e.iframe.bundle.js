"use strict";(self.webpackChunkfunny_react_components=self.webpackChunkfunny_react_components||[]).push([[391],{"./src/components/Rotation3dAnimation/Rotation3dAnimation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Rotation3dAnimation_stories});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const animate=styled_components_browser_esm.i7`
  0% {
    transform: perspective(1000px) rotateX(0deg);
  }
  100% {
    transform: perspective(1000px) rotateX(359deg);
  }
`,Container=styled_components_browser_esm.Ay.div`
  margin: 0;
  padding: 0;
  background: #607d8b;
  width: 100vw;
  height: 100vh;
  position: relative;
`,Box=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 100px);
  width: 200px;
  height: 300px;

  transform: perspective(1000px) rotateY(-45deg);
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    bottom: -100px;
    left: 0;
    width: 100%;
    height: 50px;
    background: #000;
    filter: blur(40px);
    opacity: 0.5;
    transform: rotateX(90deg);
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d; 
    animation: ${animate} 5s linear infinite;
  }

  div span {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #f1f1f1, #bbb, #f1f1f1);
    border-radius: 20px;
    
  }

  div span:nth-child(1) {
    transform: rotateX(0deg);
    background-color: red;
  }
  
  div span:nth-child(2) {
    transform: rotateX(45deg);
    background-color: black;
  }

  div span:nth-child(3) {
    transform: rotateX(-45deg);
    background-color: #578d35;
  }

  div span:nth-child(4) {
    transform: rotateX(90deg);
    background-color: blue;
  }

`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Rotation3dAnimation=()=>(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(Box,{children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("span",{}),(0,jsx_runtime.jsx)("span",{}),(0,jsx_runtime.jsx)("span",{}),(0,jsx_runtime.jsx)("span",{})]})})});Rotation3dAnimation.__docgenInfo={description:"",methods:[],displayName:"Rotation3dAnimation"};const Rotation3dAnimation_stories={title:"Rotation3dAnimation/Rotation3dAnimation",component:Rotation3dAnimation,argTypes:{},args:{}},Primary={args:{label:"Rotation3dAnimation"}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    // primary: true,\n    label: 'Rotation3dAnimation'\n  }\n}",...Primary.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Rotation3dAnimation-Rotation3dAnimation-stories.c83dce3e.iframe.bundle.js.map