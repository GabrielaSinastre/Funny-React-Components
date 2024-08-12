"use strict";(self.webpackChunkfunny_react_components=self.webpackChunkfunny_react_components||[]).push([[911],{"./src/components/IconBackgroundAnimation/IconBackgroundAnimation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>IconBackgroundAnimation_stories});__webpack_require__("./node_modules/react/index.js");var fontawesome_svg_core=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.mjs"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const rotate1=styled_components_browser_esm.i7`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`,rotate2=styled_components_browser_esm.i7`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-200%);
  }
`,rotate3=styled_components_browser_esm.i7`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`,rotate4=styled_components_browser_esm.i7`
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0%);
  }
`,Section=styled_components_browser_esm.Ay.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #111;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,RowContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  top: -64%;
  width: 100%;
  display: flex;
  padding: 10px 0;
  white-space: nowrap;
  font-size: 64px;
  transform: rotate(-30deg);

  & > div {
    animation: ${rotate1} 80s linear infinite;
    animation-delay: -80s;
  }

  & > div:nth-child(2) {
    animation: ${rotate2} 80s linear infinite;
    animation-delay: -40s;
  }

  &:nth-child(even) > div {
    animation: ${rotate3} 80s linear infinite;
    animation-delay: -80s;
  }

  &:nth-child(even) > div:nth-child(2) {
    animation: ${rotate4} 80s linear infinite;
    animation-delay: -40s;
  }
`,IconGroup=styled_components_browser_esm.Ay.div`
  display: flex;
`,StyledIcon=(0,styled_components_browser_esm.Ay)(index_es.g)`
  color: rgba(0, 0, 0, 0.5);
  transition: color 1s, filter 1s;
  padding: 0 5px;
  user-select: none;
  cursor: default;

  &:hover {
    color: #0f0;
    filter: drop-shadow(0 0 10px #0F0);
    transition: color 0s, filter 0s;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");fontawesome_svg_core.Yv.add(free_solid_svg_icons.vlp,free_solid_svg_icons.VsA,free_solid_svg_icons.mlZ,free_solid_svg_icons.Rog,free_solid_svg_icons.GR4,free_solid_svg_icons.Sfn,free_solid_svg_icons.z$e,free_solid_svg_icons.N6U,free_solid_svg_icons.zm_,free_solid_svg_icons.e4L,free_solid_svg_icons.Bep,free_solid_svg_icons.q9p,free_solid_svg_icons.y_8,free_solid_svg_icons.C97,free_solid_svg_icons.Bwz,free_solid_svg_icons.eST,free_solid_svg_icons.qcK,free_solid_svg_icons.pXE,free_solid_svg_icons.ijD);const iconList=[free_solid_svg_icons.vlp,free_solid_svg_icons.VsA,free_solid_svg_icons.mlZ,free_solid_svg_icons.Rog,free_solid_svg_icons.GR4,free_solid_svg_icons.Sfn,free_solid_svg_icons.z$e,free_solid_svg_icons.N6U,free_solid_svg_icons.zm_,free_solid_svg_icons.e4L,free_solid_svg_icons.Bep,free_solid_svg_icons.q9p,free_solid_svg_icons.y_8,free_solid_svg_icons.C97,free_solid_svg_icons.Bwz,free_solid_svg_icons.eST,free_solid_svg_icons.qcK,free_solid_svg_icons.pXE,free_solid_svg_icons.ijD],Row=()=>(0,jsx_runtime.jsxs)(RowContainer,{children:[(0,jsx_runtime.jsx)(IconGroup,{children:iconList.map(((icon,index)=>(0,jsx_runtime.jsx)(StyledIcon,{icon},index)))}),(0,jsx_runtime.jsx)(IconGroup,{children:iconList.map(((icon,index)=>(0,jsx_runtime.jsx)(StyledIcon,{icon},index)))})]}),IconBackgroundAnimation=()=>(0,jsx_runtime.jsx)(Section,{children:[...Array(20)].map(((_,index)=>(0,jsx_runtime.jsx)(Row,{},index)))});IconBackgroundAnimation.__docgenInfo={description:"",methods:[],displayName:"IconBackgroundAnimation"};const IconBackgroundAnimation_stories={title:"IconBackgroundAnimation/IconBackgroundAnimation",component:IconBackgroundAnimation,argTypes:{},args:{}},Primary={args:{label:"IconBackgroundAnimation"}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    // primary: true,\n    label: 'IconBackgroundAnimation'\n  }\n}",...Primary.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-IconBackgroundAnimation-IconBackgroundAnimation-stories.26965ead.iframe.bundle.js.map