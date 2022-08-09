"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[1191],{"../../packages/core/src/stories/Colors.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colors:()=>Colors,Palette:()=>Palette,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Colors_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/web.dom-collections.for-each.js");var theme_theme=__webpack_require__("../../packages/core/src/theme/theme.ts"),createMediaQueries=__webpack_require__("../../packages/core/src/utils/createMediaQueries/createMediaQueries.ts"),createPalette=__webpack_require__("../../packages/core/src/utils/createPalette.ts"),createColorStyles=__webpack_require__("../../packages/core/src/utils/createColorStyles.ts"),createTextStyles=__webpack_require__("../../packages/core/src/utils/createTextStyles.ts"),deepmerge=__webpack_require__("../../common/temp/node_modules/.pnpm/deepmerge@4.2.2/node_modules/deepmerge/dist/cjs.js"),addAliases=function addAliases(arr){return arr.forEach((function(val,key){arr[["sm","md","lg","xl","xxl"][key]]=val})),arr},Box=__webpack_require__("../../packages/core/src/Box/Box.tsx"),Text=__webpack_require__("../../packages/core/src/Text/Text.tsx"),Flex=__webpack_require__("../../packages/core/src/Flex/Flex.tsx"),styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),theme=function createTheme(){var theme=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},customBreakpoints=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,existingTheme=arguments.length>2&&void 0!==arguments[2]?arguments[2]:theme_theme.rS,finalMergedTheme=deepmerge(existingTheme,theme),mediaQueries=customBreakpoints?(0,createMediaQueries.n)(customBreakpoints):finalMergedTheme.mediaQueries;return Object.assign({},finalMergedTheme,{contrastRatio:finalMergedTheme.contrastRatio||2.6,breakpoints:addAliases(customBreakpoints||finalMergedTheme.breakpoints),mediaQueries:addAliases(mediaQueries),palette:(0,createPalette.r)(finalMergedTheme),colorStyles:(0,createColorStyles.u)(finalMergedTheme),textStyles:(0,createTextStyles.U)(finalMergedTheme)})}(),blacklist=["darkPurple"],next=Object.keys(theme.colors).filter((function(key){return!blacklist.includes(key)})).map((function(key){return{key,value:theme.colors[key]}})),Chip=function Chip(props){return(0,jsx_runtime.jsx)(Box.Z,{width:1,px:5,py:4,bg:props.color})};Chip.displayName="Chip";var ColorCard=function ColorCard(props){return(0,jsx_runtime.jsxs)(Box.Z,{children:[(0,jsx_runtime.jsx)(Chip,{name:props.shade,color:props.color}),(0,jsx_runtime.jsx)(Text.ZP,{f:0,children:props.shade}),(0,jsx_runtime.jsx)(Text.ZP,{as:"pre",m:0,children:props.hex})]})};ColorCard.displayName="ColorCard";const Colors_stories={title:"Design / Color"};var Palette=function Palette(){return(0,jsx_runtime.jsx)(styled_components_browser_esm.Sf,{children:function children(theme){return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(Box.Z,{p:3,children:[(0,jsx_runtime.jsx)("h1",{children:"Palette"}),(0,jsx_runtime.jsx)("p",{children:"The palette allows you to change the color of components."}),(0,jsx_runtime.jsx)(Flex.Z,{wrap:!0,children:Object.keys(theme.palette).map((function(color){var shades=theme.palette[color];if("object"==typeof shades)return(0,jsx_runtime.jsxs)("div",{style:{width:"100%"},children:[(0,jsx_runtime.jsx)("h4",{children:color}),(0,jsx_runtime.jsx)(Flex.Z,{wrap:!0,children:Object.keys(shades).map((function(shade){var fullColor=color+"."+shade;return(0,jsx_runtime.jsx)(Box.Z,{p:3,width:[1,.5,1/3,1/4,1/7],children:(0,jsx_runtime.jsx)(ColorCard,{name:fullColor,color:fullColor,shade,hex:shades[shade]})},fullColor)}))}),(0,jsx_runtime.jsx)("hr",{})]});var fullColor=color+"."+shades;return(0,jsx_runtime.jsx)(Box.Z,{p:3,width:[1,.5,1/3,1/4,.2],children:(0,jsx_runtime.jsx)(ColorCard,{name:fullColor,color:fullColor})},fullColor)}))})]})})}})};Palette.displayName="Palette";var Colors=function Colors(){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Box.Z,{p:3,children:(0,jsx_runtime.jsx)("h1",{children:"Colors"})}),(0,jsx_runtime.jsx)(Flex.Z,{wrap:!0,children:next.map((function(color){return(0,jsx_runtime.jsx)(Box.Z,{p:3,width:[1,.5,1/3,1/4,1/7],children:(0,jsx_runtime.jsx)(ColorCard,{name:color.key,color:color.value,shade:color.key,hex:color.value})},color.key)}))})]})};Colors.displayName="Colors",Palette.parameters=Object.assign({storySource:{source:"() => (\n  <ThemeConsumer>\n    {(theme) => {\n      return (\n        <div>\n          <Box p={3}>\n            <h1>Palette</h1>\n            <p>The palette allows you to change the color of components.</p>\n            <Flex wrap>\n              {Object.keys(theme.palette).map((color) => {\n                const shades = theme.palette[color]\n                if (typeof shades === 'object') {\n                  return (\n                    <div style={{ width: '100%' }}>\n                      <h4>{color}</h4>\n                      <Flex wrap>\n                        {Object.keys(shades).map((shade) => {\n                          const fullColor = `${color}.${shade}`\n                          return (\n                            <Box key={fullColor} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 7]}>\n                              <ColorCard\n                                name={fullColor}\n                                color={fullColor}\n                                shade={shade}\n                                hex={shades[shade]}\n                              />\n                            </Box>\n                          )\n                        })}\n                      </Flex>\n                      <hr />\n                    </div>\n                  )\n                } else {\n                  const fullColor = `${color}.${shades}`\n                  return (\n                    <Box key={fullColor} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>\n                      <ColorCard name={fullColor} color={fullColor} />\n                    </Box>\n                  )\n                }\n              })}\n            </Flex>\n          </Box>\n        </div>\n      )\n    }}\n  </ThemeConsumer>\n)"}},Palette.parameters),Colors.parameters=Object.assign({storySource:{source:"() => (\n  <div>\n    <Box p={3}>\n      <h1>Colors</h1>\n    </Box>\n    <Flex wrap>\n      {next.map((color) => (\n        <Box key={color.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 7]}>\n          <ColorCard name={color.key} color={color.value} shade={color.key} hex={color.value} />\n        </Box>\n      ))}\n    </Flex>\n  </div>\n)"}},Colors.parameters);var __namedExportsOrder=["Palette","Colors"]},"../../packages/core/src/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/src/utils/attrs/borderRadiusAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/attrs/boxShadowAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/createPalette.ts");var propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_2__.E0.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.Wn.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.jf.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.kC.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.kk.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.jw.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.ih.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.dp.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.yd.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.bf.propTypes,{bg:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.aR)("color"),borderRadiusSize:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_5__.Ze),rounded:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_5__.YP),boxShadowSize:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_6__.d),boxShadowColor:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_7__.g),color:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.nL)()}),Box=styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP.div.attrs((function(props){return Object.assign({},(0,_utils__WEBPACK_IMPORTED_MODULE_5__._U)(props),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.v)(props))}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  ","\n  "," "," "," ","\n  "," "," "," "," \n  "," "," \n  ","\n\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_3__.hO)("Box"),styled_system__WEBPACK_IMPORTED_MODULE_2__.jf,styled_system__WEBPACK_IMPORTED_MODULE_2__.Cb,styled_system__WEBPACK_IMPORTED_MODULE_2__.kC,styled_system__WEBPACK_IMPORTED_MODULE_2__.kk,styled_system__WEBPACK_IMPORTED_MODULE_2__.jw,styled_system__WEBPACK_IMPORTED_MODULE_2__.ih,styled_system__WEBPACK_IMPORTED_MODULE_2__.dp,styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.yd,styled_system__WEBPACK_IMPORTED_MODULE_2__.bf,_utils__WEBPACK_IMPORTED_MODULE_3__.$_,styled_system__WEBPACK_IMPORTED_MODULE_2__.E0,styled_system__WEBPACK_IMPORTED_MODULE_2__.Wn);Box.displayName="Box",Box.propTypes=propTypes;const __WEBPACK_DEFAULT_EXPORT__=Box},"../../packages/core/src/Flex/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/src/Box/Box.tsx"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_excluded=["wrap","align","justify"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_5__.Dh.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.bf.propTypes,{color:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.nL)(),bg:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("color")},styled_system__WEBPACK_IMPORTED_MODULE_5__.cq.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.Kl.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.WO.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.Me.propTypes,{wrap:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("flexWrap"),align:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("alignItems"),justify:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("justifyContent")}),Flex=(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_8__.Z).attrs((function(_ref){var wrap=_ref.wrap,align=_ref.align,justify=_ref.justify,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({flexWrap:wrap?"wrap":void 0,alignItems:align,justifyContent:justify},props)}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: flex;\n  ","\n  "," ","\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.hO)("Flex"),styled_system__WEBPACK_IMPORTED_MODULE_5__.cq,styled_system__WEBPACK_IMPORTED_MODULE_5__.Kl,styled_system__WEBPACK_IMPORTED_MODULE_5__.Me,styled_system__WEBPACK_IMPORTED_MODULE_5__.WO);Flex.propTypes=propTypes,Flex.displayName="Flex";const __WEBPACK_DEFAULT_EXPORT__=Flex},"../../packages/core/src/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>Text_Text});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.bold.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,utils=__webpack_require__("../../packages/core/src/utils/utils.ts"),typographyAttrs=__webpack_require__("../../packages/core/src/utils/attrs/typographyAttrs.ts");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var textProps=(0,styled_components_browser_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  ","\n  color: ",";\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),(0,utils.hO)("Text"),(0,utils.ow)("base"),(function(props){return props.bg?"background-color: "+(0,utils.ow)(props.bg,"base")(props)+";":""}),index_esm.jf,index_esm.Cb,index_esm.kC,index_esm.kk,index_esm.jw,index_esm.ih,index_esm.tx,index_esm.Dh,index_esm.bf,(function caps(props){return Array.isArray(props.caps)&&0===props.caps.length?null:null!=props&&props.caps?{textTransform:"uppercase"}:null}),(function regular(props){return props.regular?{fontWeight:props.theme.regular}:null}),(function bold(props){return Array.isArray(props.bold)&&0===props.bold.length?null:props.bold?{fontWeight:props.theme.bold}:null}),index_esm.JB,index_esm.p_,index_esm.Ue,index_esm.Nv,index_esm.rX,index_esm.yd,(function textDecoration(props){return props.textDecoration?"text-decoration: "+props.textDecoration+";":""}),(function textShadow(props){var textShadowSize=props.textShadowSize||"md";return props.enableTextShadow?{textShadow:props.theme.textShadows[textShadowSize]}:null}),index_esm.YK,index_esm.W5),textAttrs=function textAttrs(props){return Object.assign({},(0,typographyAttrs.I)(props),function textAlignAttrs(props){var align=props.align;return{textAlign:props.textAlign||align}}(props))},Text=styled_components_browser_esm.ZP.div.attrs(textAttrs)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Span=styled_components_browser_esm.ZP.span.attrs(textAttrs)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Paragraph=styled_components_browser_esm.ZP.p.attrs(textAttrs)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Strike=styled_components_browser_esm.ZP.s.attrs(textAttrs)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps);Text.displayName="Text",Text.propTypes=Object.assign({},index_esm.jf.propTypes,index_esm.JB.propTypes,index_esm.p_.propTypes,index_esm.Ue.propTypes,index_esm.Cb.propTypes,index_esm.Nv.propTypes,index_esm.kC.propTypes,index_esm.kk.propTypes,index_esm.jw.propTypes,index_esm.ih.propTypes,index_esm.tx.propTypes,index_esm.Dh.propTypes,index_esm.yd.propTypes,index_esm.YK.propTypes,index_esm.bf.propTypes,index_esm.W5.propTypes,{align:(0,utils.aR)("textAlign"),bold:prop_types_default().bool,caps:prop_types_default().bool,color:(0,utils.nL)(),enableTextShadow:prop_types_default().bool,regular:prop_types_default().bool,textDecoration:prop_types_default().string,textShadowSize:prop_types_default().oneOf(["sm","md"]),textStyle:prop_types_default().oneOf(typographyAttrs.F)}),Text.span=Span,Text.span.displayName="Text.span",Text.p=Paragraph,Text.p.displayName="Text.p",Text.s=Strike,Text.s.displayName="Text.s";const Text_Text=Text;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"../../packages/core/src/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/core/src/utils/attrs/borderRadiusAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YP:()=>roundedValues,Ze:()=>borderRadiusValues,_U:()=>borderRadiusAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js");var roundedValues=["top","right","bottom","left","topLeft","topRight","bottomRight","bottomLeft"],borderRadiusValues=["none","xsm","sm","md","lg","xl","2xl","3xl","full","action-sm","action-md","action-lg"];function calculateRoundedProps(radius,rounded){var topRight=0,bottomRight=0,bottomLeft=0,topLeft=0;return rounded&&"round"!==rounded?("top"===rounded?topLeft=topRight=radius:"right"===rounded?topRight=bottomRight=radius:"bottom"===rounded?bottomRight=bottomLeft=radius:"left"===rounded?topLeft=bottomLeft=radius:"topLeft"===rounded?topLeft=radius:"topRight"===rounded?topRight=radius:"bottomRight"===rounded?bottomRight=radius:"bottomLeft"===rounded&&(bottomLeft=radius),topLeft+" "+topRight+" "+bottomRight+" "+bottomLeft):radius}function borderRadiusAttrs(_ref){var borderRadius=_ref.borderRadius,rounded=_ref.rounded,theme=_ref.theme;if(!borderRadius)return{};if(Array.isArray(borderRadius))return{borderRadius:borderRadius.map((function(radius){return theme.borderRadii[radius]})).map((function(radius){return radius?calculateRoundedProps(radius,rounded):borderRadius}))};var _effectiveRadius=theme.borderRadii[borderRadius];return{borderRadius:_effectiveRadius?calculateRoundedProps(_effectiveRadius,rounded):borderRadius}}},"../../packages/core/src/utils/attrs/boxShadowAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>boxShadowSizeValues,v:()=>boxShadowAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js");var ___WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/utils.ts"),boxShadowSizeValues=["sm","md","lg","xl","2xl","overlay-lg","overlay-xl"];function calculateShadowProps(effectiveShadow,effectiveColor){if(effectiveColor){var rgb=(0,___WEBPACK_IMPORTED_MODULE_6__.oo)(effectiveColor);return effectiveShadow.replace("rgba(0,0,0,",rgb.slice(0,rgb.length-1)+", ")}return effectiveShadow}function boxShadowAttrs(props){var effectiveColor,boxShadowSize=props.boxShadowSize,boxShadowColor=props.boxShadowColor,theme=props.theme;if(!boxShadowSize)return{};if(boxShadowColor){var shadowColor=boxShadowColor.split(".")[0]+".dark";effectiveColor=(0,___WEBPACK_IMPORTED_MODULE_6__.ow)(shadowColor)(props)}return Array.isArray(boxShadowSize)?{boxShadow:boxShadowSize.map((function(size){return theme.shadows[size]})).map((function(shadow){return calculateShadowProps(shadow,effectiveColor)}))}:{boxShadow:calculateShadowProps(theme.shadows[boxShadowSize],effectiveColor)}}},"../../packages/core/src/utils/attrs/typographyAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>textStylesValues,I:()=>typographyAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/web.dom-collections.for-each.js");var textStylesValues=["title1","title2","title3","heading1","heading2","heading3","heading4","heading5","heading6","article","articleBold","paragraph","paragraphBold","paragraph2","paragraph2Bold","caption","captionBold","overline","overlineMedium","disclaimer","disclaimerBold","highlight","highlightBold","subtitle1","subheading1","subheading2","subheading3","subheading4","subheading5","subheading6"];function typographyAttrs(props){var textStyle=props.textStyle,theme=props.theme;return textStyle?Array.isArray(textStyle)?textStyle.map((function(style){return theme.typography[style]})).reduce((function(acc,style){var styleProps=style&&style.hasOwnProperty("fontSize")?Object.keys(style):[];return 0===styleProps.length?["fontSize","fontWeight","lineHeight","letterSpacing","textTransform"].forEach((function(styleProp){acc[styleProp].push(null)})):styleProps.forEach((function(styleProp){acc[styleProp].push(style[styleProp])})),acc}),{fontSize:[],fontWeight:[],lineHeight:[],letterSpacing:[],caps:[],textTransform:[]}):theme.typography[textStyle]:{}}},"../../packages/core/src/utils/createPalette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>paletteFamilies,r:()=>createPalette});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js");var _excluded=["palette"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var deepmerge=__webpack_require__("../../common/temp/node_modules/.pnpm/deepmerge@4.2.2/node_modules/deepmerge/dist/cjs.js"),paletteFamilies=["primary","secondary","text","highlight","success","error","warning","alert","caution","notify","pricePrimary","priceSecondary","promoPrimary","promoSecondary","border","background"],createPalette=function createPalette(_ref){var _ref$palette=_ref.palette,palette=void 0===_ref$palette?{}:_ref$palette,_theme$colors=_objectWithoutProperties(_ref,_excluded).colors,lightBlue=_theme$colors.lightBlue,tintBlue=_theme$colors.tintBlue,blue=_theme$colors.blue,toneBlue=_theme$colors.toneBlue,darkBlue=_theme$colors.darkBlue,shadeBlue=_theme$colors.shadeBlue,lightGreen=_theme$colors.lightGreen,tintGreen=_theme$colors.tintGreen,green=_theme$colors.green,toneGreen=_theme$colors.toneGreen,darkGreen=_theme$colors.darkGreen,shadeGreen=_theme$colors.shadeGreen,lightRed=_theme$colors.lightRed,tintRed=_theme$colors.tintRed,red=_theme$colors.red,toneRed=_theme$colors.toneRed,darkRed=_theme$colors.darkRed,shadeRed=_theme$colors.shadeRed,lightOrange=_theme$colors.lightOrange,tintOrange=_theme$colors.tintOrange,orange=_theme$colors.orange,toneOrange=_theme$colors.toneOrange,darkOrange=_theme$colors.darkOrange,shadeOrange=_theme$colors.shadeOrange,lightYellow=_theme$colors.lightYellow,tintYellow=_theme$colors.tintYellow,yellow=_theme$colors.yellow,toneYellow=_theme$colors.toneYellow,darkYellow=_theme$colors.darkYellow,shadeYellow=_theme$colors.shadeYellow,lightPurple=_theme$colors.lightPurple,tintPurple=_theme$colors.tintPurple,purple=_theme$colors.purple,tonePurple=_theme$colors.tonePurple,darkPurple=_theme$colors.darkPurple,shadePurple=_theme$colors.shadePurple,lightPink=_theme$colors.lightPink,tintPink=_theme$colors.tintPink,pink=_theme$colors.pink,tonePink=_theme$colors.tonePink,darkPink=_theme$colors.darkPink,shadePink=_theme$colors.shadePink,lightestText=_theme$colors.lightestText,lightText=_theme$colors.lightText,tintText=_theme$colors.tintText,text=_theme$colors.text,darkText=_theme$colors.darkText,headingText=_theme$colors.headingText,lightHighlight=_theme$colors.lightHighlight,tintHighlight=_theme$colors.tintHighlight,highlight=_theme$colors.highlight,toneHighlight=_theme$colors.toneHighlight,darkHighlight=_theme$colors.darkHighlight,shadeHighlight=_theme$colors.shadeHighlight,lightestBackground=_theme$colors.lightestBackground,lightBackground=_theme$colors.lightBackground,tintBackground=_theme$colors.tintBackground,background=_theme$colors.background,toneBackground=_theme$colors.toneBackground,darkBackground=_theme$colors.darkBackground,shadeBackground=_theme$colors.shadeBackground,darkestBackground=_theme$colors.darkestBackground,lightBorder=_theme$colors.lightBorder,tintBorder=_theme$colors.tintBorder,border=_theme$colors.border,toneBorder=_theme$colors.toneBorder,darkBorder=_theme$colors.darkBorder,shadeBorder=_theme$colors.shadeBorder;return deepmerge({primary:{light:lightBlue,tint:tintBlue,base:blue,tone:toneBlue,dark:darkBlue,shade:shadeBlue},secondary:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},text:{lightest:lightestText,light:lightText,tint:tintText,base:text,dark:darkText,heading:headingText},highlight:{light:lightHighlight,tint:tintHighlight,base:highlight,tone:toneHighlight,dark:darkHighlight,shade:shadeHighlight},success:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},error:{light:lightRed,tint:tintRed,base:red,tone:toneRed,dark:darkRed,shade:shadeRed},warning:{light:lightRed,tint:tintRed,base:red,tone:toneRed,dark:darkRed,shade:shadeRed},alert:{light:lightOrange,tint:tintOrange,base:orange,tone:toneOrange,dark:darkOrange,shade:shadeOrange},caution:{light:lightYellow,tint:tintYellow,base:yellow,tone:toneYellow,dark:darkYellow,shade:shadeYellow},notify:{light:lightYellow,tint:tintYellow,base:yellow,tone:toneYellow,dark:darkYellow,shade:shadeYellow},pricePrimary:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},priceSecondary:{light:lightBlue,tint:tintBlue,base:blue,tone:toneBlue,dark:darkBlue,shade:shadeBlue},strike:{base:red},promoPrimary:{light:lightPurple,tint:tintPurple,base:purple,tone:tonePurple,dark:darkPurple,shade:shadePurple},promoSecondary:{light:lightPink,tint:tintPink,base:pink,tone:tonePink,dark:darkPink,shade:shadePink},border:{light:lightBorder,tint:tintBorder,base:border,tone:toneBorder,dark:darkBorder,shade:shadeBorder},background:{lightest:lightestBackground,light:lightBackground,tint:tintBackground,base:background,tone:toneBackground,dark:darkBackground,shade:shadeBackground,darkest:darkestBackground}},palette)}},"../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.reduce.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})}}]);