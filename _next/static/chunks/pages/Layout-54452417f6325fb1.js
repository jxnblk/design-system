(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1511],{7574:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Layout",function(){return a(39737)}])},39737:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return p}});var o=a(45202),t=(a(46393),a(22190));function s(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function p(e){var n=e.components;s(e,["components"]);return(0,o.jsxs)(t.MDXTag,{name:"wrapper",components:n,children:[(0,o.jsxs)(t.MDXTag,{name:"h1",components:n,props:{id:"layout-guide"},children:[(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"h1",props:{href:"#layout-guide","aria-hidden":"true"},children:(0,o.jsx)(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})}),"Layout Guide"]}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["The ",(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/Box"},children:"Box"})," and ",(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/Flex"},children:"Flex"})," components are low-level layout components that can handle virtually\nany layout styling that could be handled with a grid system as well as handle a lot of microlayout styles."]}),(0,o.jsxs)(t.MDXTag,{name:"h3",components:n,props:{id:"flexbox"},children:[(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#flexbox","aria-hidden":"true"},children:(0,o.jsx)(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})}),"Flexbox"]}),(0,o.jsx)(t.MDXTag,{name:"p",components:n,children:"To effectively use the Flex component, you should be familiar with Flexible Box (flexbox) Layout.\nThe following links can be useful to understand how flexbox works:"}),(0,o.jsxs)(t.MDXTag,{name:"ul",components:n,children:[(0,o.jsx)(t.MDXTag,{name:"li",components:n,parentName:"ul",children:(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.w3.org/TR/css-flexbox-1/"},children:"CSS Flexible Box Layout Module"})}),(0,o.jsx)(t.MDXTag,{name:"li",components:n,parentName:"ul",children:(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes"},children:"MDN: Using CSS Flexible Boxes"})})]}),(0,o.jsx)(t.MDXTag,{name:"p",components:n,children:"Additionally you should be aware of flexbox's bugs and limitations, especially in regards to IE11 support.\nGenerally the Design System layout components should work as expected in IE11, but it's always good to test."}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["See the ",(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/philipwalton/flexbugs"},children:"Flexbugs"})," project for more information."]}),(0,o.jsxs)(t.MDXTag,{name:"h3",components:n,props:{id:"margins"},children:[(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#margins","aria-hidden":"true"},children:(0,o.jsx)(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})}),"Margins"]}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["Using the ",(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/jxnblk/styled-system"},children:"styled-system"})," library, the Box and Flex components have several style props for handling margins,\nwhile adhering to the Design System's spacing scale."]}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["To add margin around a component, wrap it with the Box component and use the ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"m"})," (margin) prop."]}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""},children:"<Box m={3}>\n  <Text>Hello</Text>\n</Box>\n"})}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["The number ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"3"})," in this example refers to step 3 on the spacing scale (",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"theme.space"}),").\nThe spacing scale is an array of numbers that are used as pixel values in the Box component."]}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""},children:"// theme.space\n;[0, 4, 8, 16, 32, 64, 128]\n"})}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["To add margin in a particular direction use the ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"mt"}),", ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"mr"}),", ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"mb"}),", or ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"ml"})," props.\nThese props are shorthands for ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"margin-top"}),", ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"margin-right"}),", ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"margin-bottom"}),", and ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"margin-left"})," respectively."]}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""},children:"<Box\n  mt={3}\n  mb={4}>\n  <Text>Hello</Text>\n</Box>\n"})}),(0,o.jsxs)(t.MDXTag,{name:"h3",components:n,props:{id:"shorthand-syntax"},children:[(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#shorthand-syntax","aria-hidden":"true"},children:(0,o.jsx)(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})}),"Shorthand Syntax"]}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["Much like other libraries, including ",(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://tachyons.io"},children:"Tachyons"}),", ",(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://getbootstrap.com/docs/4.0/utilities/spacing/"},children:"Bootstrap"}),", and ",(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://basscss.com"},children:"Basscss"}),",\nthe Box component uses a shorthand syntax for margin and padding.\nThis has a little bit of a learning curve and requires some internalization,\nbut due to the heavy use of these properties it can help with development velocity."]}),(0,o.jsxs)(t.MDXTag,{name:"table",components:n,children:[(0,o.jsx)(t.MDXTag,{name:"thead",components:n,parentName:"table",children:(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"thead",children:[(0,o.jsx)(t.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null},children:"Shorthand"}),(0,o.jsx)(t.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null},children:"Meaning"})]})}),(0,o.jsxs)(t.MDXTag,{name:"tbody",components:n,parentName:"table",children:[(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"m"})}),(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"margin"})})]}),(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"mt"})}),(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"margin-top"})})]}),(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"mr"})}),(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"margin-right"})})]}),(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"mb"})}),(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"margin-bottom"})})]}),(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"ml"})}),(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"margin-left"})})]}),(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"mx"})}),(0,o.jsxs)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:[(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"margin-left"})," and ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"margin-right"})," (x-axis)"]})]}),(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"my"})}),(0,o.jsxs)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:[(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"margin-top"})," and ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"margin-top"})," (y-axis)"]})]}),(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"p"})}),(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"padding"})})]}),(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"pt"})}),(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"padding-top"})})]}),(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"pr"})}),(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"padding-right"})})]}),(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"pb"})}),(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"padding-bottom"})})]}),(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"pl"})}),(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"padding-left"})})]}),(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"px"})}),(0,o.jsxs)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:[(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"padding-left"})," and ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"padding-right"})," (x-axis)"]})]}),(0,o.jsxs)(t.MDXTag,{name:"tr",components:n,parentName:"tbody",children:[(0,o.jsx)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"py"})}),(0,o.jsxs)(t.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null},children:[(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"padding-top"})," and ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"td",children:"padding-top"})," (y-axis)"]})]})]})]}),(0,o.jsxs)(t.MDXTag,{name:"h3",components:n,props:{id:"padding"},children:[(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#padding","aria-hidden":"true"},children:(0,o.jsx)(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})}),"Padding"]}),(0,o.jsx)(t.MDXTag,{name:"p",components:n,children:"The Box and Flex components can also set padding, using a similar API to the margin props."}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["To add padding to a Box, use the ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"p"})," (padding) prop."]}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""},children:"<Box p={2}>\n  <Text>Hello</Text>\n</Box>\n"})}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["To add padding in a single direction, use ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"pt"}),", ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"pr"}),", ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"pb"}),", or ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"pl"})," props."]}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""},children:"<Box pt={2} pb={4}>\n  <Text>Hello</Text>\n</Box>\n"})}),(0,o.jsxs)(t.MDXTag,{name:"h3",components:n,props:{id:"creating-a-responsive-grid-layout"},children:[(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#creating-a-responsive-grid-layout","aria-hidden":"true"},children:(0,o.jsx)(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})}),"Creating a responsive grid layout"]}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["The Flex and Box components can be used to create a flexbox-based grid layout,\nusing the same principles used in other grid systems such as ",(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://getbootstrap.com"},children:"Bootstrap"}),"."]}),(0,o.jsx)(t.MDXTag,{name:"p",components:n,children:"To start, create a wrapping component with padding."}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""},children:"<Box p={4} />\n"})}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["Next, add a Flex component with the ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"wrap"})," prop to set ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"flex-wrap: wrap"}),'.\nThis will work similarly to a "row" in traditional grid systems.']}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""},children:"<Box p={4}>\n  <Flex wrap />\n</Box>\n"})}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:['Next add some Box components that will act as "columns",\nsetting the ',(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"width"})," prop to ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"1"})," to make the Boxes fill the full-width of the container\nand stack on top of each other for small viewports."]}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""},children:"<Box p={4}>\n  <Flex wrap>\n    <Box width={1}>\n      <Text>Hello</Text>\n    </Box>\n    <Box width={1}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n"})}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["Next, use the ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"width"})," prop's ",(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#responsive-widths"},children:"responsive array"})," feature\nto change the width of the Boxes at the ",(0,o.jsx)(t.MDXTag,{name:"em",components:n,parentName:"p",children:"small"})," breakpoint and up."]}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""},children:"<Box p={4}>\n  <Flex wrap>\n    <Box width={[ 1, 1/2 ]}>\n      <Text>Hello</Text>\n    </Box>\n    <Box width={[ 1, 1/2 ]}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n"})}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["Here, the array value (",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"[ 1, 1/2 ]"}),") passed to ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"width"})," sets its width to ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"100%"})," on small viewports and ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"50%"})," on viewports wider than the ",(0,o.jsx)(t.MDXTag,{name:"em",components:n,parentName:"p",children:"small"})," breakpoint.\nIf you resize your browser with this example, the Boxes should stack at narrow viewport widths, and appear side-by-side on wider viewports."]}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["Next, to add gutters to the grid, use a combination of padding and negative margins.\nAdd ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"mx={-3}"})," to the Flex component to set left and right margins to ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"-theme.space[3]"})," (-16px).\nThis is how many CSS grid systems compensate for gutters.\nAdd an equal amount of padding to the Box components (",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"px={3}"}),") to create gutters between their child components.\nA bottom margin (",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"mb={4}"}),") can also be added to the Box components to handle spacing when stacked."]}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""},children:"<Box p={4}>\n  <Flex\n    wrap\n    mx={-3}>\n    <Box\n      width={[ 1, 1/2 ]}\n      px={3}\n      mb={4}>\n      <Text>Hello</Text>\n    </Box>\n    <Box\n      width={[ 1, 1/2 ]}\n      px={3}\n      mb={4}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n"})}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["Note that ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"* { box-sizing: border-box }"})," should be set in your application to ensure that the padding and width work as expected in the above example."]}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["Because each Box component in the example above adds left and right padding of ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"px={3}"}),",\nthe total amount of space between their children will be double that amount.\nSince the spacing scale is based on powers of two, that amount of space is equal to ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"theme.space[4]"}),",\nwhich is why the margin bottom is set to ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"4"}),"."]}),(0,o.jsxs)(t.MDXTag,{name:"h3",components:n,props:{id:"creating-a-two-column-layout"},children:[(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#creating-a-two-column-layout","aria-hidden":"true"},children:(0,o.jsx)(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})}),"Creating a two-column layout"]}),(0,o.jsx)(t.MDXTag,{name:"p",components:n,children:"Often pages will have a two column layout, where the left column contains subnavigation or filters and the right column contains the main content for the page.\nUsing some of the same techniques from above, this can be achieved using the Flex and Box components."}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""},children:"<Flex>\n  <Box px={3} width={1 / 4}>\n    <Sidebar />\n  </Box>\n  <Box px={3} width={3 / 4}>\n    <MainContent />\n  </Box>\n</Flex>\n"})}),(0,o.jsxs)(t.MDXTag,{name:"h3",components:n,props:{id:"creating-a-navbar"},children:[(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#creating-a-navbar","aria-hidden":"true"},children:(0,o.jsx)(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})}),"Creating a navbar"]}),(0,o.jsx)(t.MDXTag,{name:"p",components:n,children:"The Flex and Box components are also well-suited to create things like navbars and toolbars."}),(0,o.jsx)(t.MDXTag,{name:"p",components:n,children:"Start with a Flex container and set its color to white with a blue background."}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""},children:"<Flex color='white' bg='blue' />\n"})}),(0,o.jsx)(t.MDXTag,{name:"p",components:n,children:"Next, add an Icon and some placeholder Text components for demonstration.\nIn a real application, these would likely be links and buttons."}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""},children:"<Flex\n  color='white'\n  bg='blue'>\n  <Icon\n    name='Hotels'\n    mr={2}\n  />\n  <Text\n    bold\n    mx={2}>\n    Hello\n  </Text>\n  <Text\n    ml='auto'\n    mr={2}>\n    Right Side\n  </Text>\n</Flex>\n"})}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["Note the ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"ml='auto'"})," on the last item.\nSetting ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"margin: auto"})," on a flex item will space it away from its sibling,\nin this case moving the item to the right side of the navbar."]}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["Next, add some padding and use the ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"align"})," prop on the parent Flex component to control the layout."]}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""},children:"<Flex\n  p={2}\n  align='center'\n  color='white'\n  bg='blue'>\n  <Icon\n    name='Hotels'\n    mr={2}\n  />\n  <Text\n    bold\n    mx={2}>\n    Hello\n  </Text>\n  <Text\n    ml='auto'\n    mr={2}>\n    Right Side\n  </Text>\n</Flex>\n"})}),(0,o.jsxs)(t.MDXTag,{name:"h3",components:n,props:{id:"creating-tiled-layout"},children:[(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#creating-tiled-layout","aria-hidden":"true"},children:(0,o.jsx)(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})}),"Creating tiled layout"]}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["Often you'll see cards representing an list of items arranged in a tiled layout.\nUsing the ",(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#responsive-widths"},children:"responsive width"})," feature of the Box component\nand the ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"wrap"})," prop on the Flex component, this sort of layout can be achieved with the following:"]}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""},children:"<Flex wrap>\n  {items.map((item) => (\n    <Box key={item.id} p={3} width={[1 / 2, 1 / 3, 1 / 4]}>\n      <ProductCard {...item} />\n    </Box>\n  ))}\n</Flex>\n"})}),(0,o.jsxs)(t.MDXTag,{name:"h3",components:n,props:{id:"responsive-widths"},children:[(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#responsive-widths","aria-hidden":"true"},children:(0,o.jsx)(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})}),"Responsive Widths"]}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["The ",(0,o.jsx)(t.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/jxnblk/styled-system"},children:"styled-system"})," library supports setting responsive widths that change per breakpoint with a mobile-first approach."]}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["The Box component accepts number values to set percentage-based widths.\nAny number from 0\u20131 will be converted to a percentage.\nAny number greater than 1 will be converted to fixed pixel values.\nAnd strings may be passed to use other CSS units, such as ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"em"})," or ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"vw"}),"."]}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""},children:"// width: 100%\n<Box width={1} />\n\n// width: 50%\n<Box width={1/2} />\n<Box width={0.5} />\n\n// width: 128px\n<Box width={128} />\n\n// width: 2em\n<Box width='2em' />\n"})}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["To set a width that changes at different breakpoints, pass an array to the ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"width"})," prop."]}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""},children:"<Box\n  width={[\n    1, // 100% at all viewport widths (xs breakpoint)\n    1 / 2, // 50% from the small (sm) breakpoint and up\n    1 / 3, // 33% from the medium (md) breakpoint and up\n    1 / 4, // 25% from the large (lg) breakpoint and up\n    1 / 8, // 12.5% from the x-large (xl) breakpoint and up\n  ]}\n/>\n"})}),(0,o.jsxs)(t.MDXTag,{name:"p",components:n,children:["To skip setting a width at a particular breakpoint, use a ",(0,o.jsx)(t.MDXTag,{name:"inlineCode",components:n,parentName:"p",children:"null"})," value in the array."]}),(0,o.jsx)(t.MDXTag,{name:"pre",components:n,children:(0,o.jsx)(t.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""},children:"<Box\n  width={[\n    1, // 100% for all viewport widths\n    null, // skip the sm breakpoint (stays 100%)\n    1 / 2, // 50% from the md breakpoint and up\n  ]}\n/>\n"})})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return n=7574,e(e.s=n);var n}));var n=e.O();_N_E=n}]);