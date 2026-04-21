"use strict";(self.webpackChunkfunny_react_components=self.webpackChunkfunny_react_components||[]).push([[919],{"./src/components/EyesFollowMouse/EyesFollowMouse.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>EyesFollowMouse_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #5d3800;
`,Face=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #ffcd00;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 180px;
    width: 150px;
    height: 70px;
    background: #b57700;
    border-bottom-left-radius: 70px;
    border-bottom-right-radius: 70px;
    transition: 0.5s;
  }

  &:hover::before {
    top: 210px;
    height: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`,Eyes=styled_components_browser_esm.Ay.div`
  position: relative;
  top: -40px;
  display: flex;
`,Eye=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 80px;
  height: 80px;
  background: #fff;
  margin: 0 15px;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background: #000;
    border-radius: 50%;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const EyesFollowMouse=()=>{const eyesRef=(0,react.useRef)([]);return(0,jsx_runtime.jsx)(Container,{onMouseMove:event=>{eyesRef.current.forEach((eye=>{if(!eye)return;const rect=eye.getBoundingClientRect(),x=rect.left+rect.width/2,y=rect.top+rect.height/2,rot=Math.atan2(event.pageX-x,event.pageY-y)*(180/Math.PI)*-1+270;eye.style.transform=`rotate(${rot}deg)`}))},children:(0,jsx_runtime.jsx)(Face,{children:(0,jsx_runtime.jsxs)(Eyes,{children:[(0,jsx_runtime.jsx)(Eye,{ref:el=>el&&(eyesRef.current[0]=el)}),(0,jsx_runtime.jsx)(Eye,{ref:el=>el&&(eyesRef.current[1]=el)})]})})})};EyesFollowMouse.__docgenInfo={description:"",methods:[],displayName:"EyesFollowMouse"};const EyesFollowMouse_stories={title:"EyesFollowMouse/EyesFollowMouse",component:EyesFollowMouse,argTypes:{},args:{}},Primary={args:{label:"EyesFollowMouse"}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    // primary: true,\n    label: 'EyesFollowMouse'\n  }\n}",...Primary.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-EyesFollowMouse-EyesFollowMouse-stories.919fde2b.iframe.bundle.js.map