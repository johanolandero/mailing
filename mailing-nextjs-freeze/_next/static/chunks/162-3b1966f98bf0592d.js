(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{5632:function(e,t,o){e.exports=o(3642)},2613:function(e,t,o){"use strict";o.d(t,{y1:function(){return T}});var n="undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function r(e,t,o,n){e.addEventListener?e.addEventListener(t,o,n):e.attachEvent&&e.attachEvent("on".concat(t),(function(){o(window.event)}))}function i(e,t){for(var o=t.slice(0,t.length-1),n=0;n<o.length;n++)o[n]=e[o[n].toLowerCase()];return o}function a(e){"string"!==typeof e&&(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),o=t.lastIndexOf("");o>=0;)t[o-1]+=",",t.splice(o,1),o=t.lastIndexOf("");return t}for(var c={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21ea":20,",":188,".":190,"/":191,"`":192,"-":n?173:189,"=":n?61:187,";":n?59:186,"'":222,"[":219,"]":221,"\\":220},u={"\u21e7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},l={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},d={16:!1,18:!1,17:!1,91:!1},s={},p=1;p<20;p++)c["f".concat(p)]=111+p;var f=[],v=!1,h="all",g=[],y=function(e){return c[e.toLowerCase()]||u[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function m(e){h=e||"all"}function b(){return h||"all"}var w=function(e){var t=e.key,o=e.scope,n=e.method,r=e.splitKey,c=void 0===r?"+":r;a(t).forEach((function(e){var t=e.split(c),r=t.length,a=t[r-1],l="*"===a?"*":y(a);if(s[l]){o||(o=b());var d=r>1?i(u,t):[];s[l]=s[l].filter((function(e){return!((!n||e.method===n)&&e.scope===o&&function(e,t){for(var o=e.length>=t.length?e:t,n=e.length>=t.length?t:e,r=!0,i=0;i<o.length;i++)-1===n.indexOf(o[i])&&(r=!1);return r}(e.mods,d))}))}}))};function R(e,t,o,n){var r;if(t.element===n&&(t.scope===o||"all"===t.scope)){for(var i in r=t.mods.length>0,d)Object.prototype.hasOwnProperty.call(d,i)&&(!d[i]&&t.mods.indexOf(+i)>-1||d[i]&&-1===t.mods.indexOf(+i))&&(r=!1);(0!==t.mods.length||d[16]||d[18]||d[17]||d[91])&&!r&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function C(e,t){var o=s["*"],n=e.keyCode||e.which||e.charCode;if(E.filter.call(this,e)){if(93!==n&&224!==n||(n=91),-1===f.indexOf(n)&&229!==n&&f.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(t){var o=l[t];e[t]&&-1===f.indexOf(o)?f.push(o):!e[t]&&f.indexOf(o)>-1?f.splice(f.indexOf(o),1):"metaKey"===t&&e[t]&&3===f.length&&(e.ctrlKey||e.shiftKey||e.altKey||(f=f.slice(f.indexOf(o))))})),n in d){for(var r in d[n]=!0,u)u[r]===n&&(E[r]=!0);if(!o)return}for(var i in d)Object.prototype.hasOwnProperty.call(d,i)&&(d[i]=e[l[i]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===f.indexOf(17)&&f.push(17),-1===f.indexOf(18)&&f.push(18),d[17]=!0,d[18]=!0);var a=b();if(o)for(var c=0;c<o.length;c++)o[c].scope===a&&("keydown"===e.type&&o[c].keydown||"keyup"===e.type&&o[c].keyup)&&R(e,o[c],a,t);if(n in s)for(var p=0;p<s[n].length;p++)if(("keydown"===e.type&&s[n][p].keydown||"keyup"===e.type&&s[n][p].keyup)&&s[n][p].key){for(var v=s[n][p],h=v.splitKey,g=v.key.split(h),m=[],w=0;w<g.length;w++)m.push(y(g[w]));m.sort().join("")===f.sort().join("")&&R(e,v,a,t)}}}function E(e,t,o){f=[];var n=a(e),c=[],l="all",p=document,h=0,m=!1,b=!0,w="+",R=!1;for(void 0===o&&"function"===typeof t&&(o=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(l=t.scope),t.element&&(p=t.element),t.keyup&&(m=t.keyup),void 0!==t.keydown&&(b=t.keydown),void 0!==t.capture&&(R=t.capture),"string"===typeof t.splitKey&&(w=t.splitKey)),"string"===typeof t&&(l=t);h<n.length;h++)c=[],(e=n[h].split(w)).length>1&&(c=i(u,e)),(e="*"===(e=e[e.length-1])?"*":y(e))in s||(s[e]=[]),s[e].push({keyup:m,keydown:b,scope:l,mods:c,shortcut:n[h],method:o,key:n[h],splitKey:w,element:p});"undefined"!==typeof p&&!function(e){return g.indexOf(e)>-1}(p)&&window&&(g.push(p),r(p,"keydown",(function(e){C(e,p)}),R),v||(v=!0,r(window,"focus",(function(){f=[]}),R)),r(p,"keyup",(function(e){C(e,p),function(e){var t=e.keyCode||e.which||e.charCode,o=f.indexOf(t);if(o>=0&&f.splice(o,1),e.key&&"meta"===e.key.toLowerCase()&&f.splice(0,f.length),93!==t&&224!==t||(t=91),t in d)for(var n in d[t]=!1,u)u[n]===t&&(E[n]=!1)}(e)}),R))}var P={setScope:m,getScope:b,deleteScope:function(e,t){var o,n;for(var r in e||(e=b()),s)if(Object.prototype.hasOwnProperty.call(s,r))for(o=s[r],n=0;n<o.length;)o[n].scope===e?o.splice(n,1):n++;b()===e&&m(t||"all")},getPressedKeyCodes:function(){return f.slice(0)},isPressed:function(e){return"string"===typeof e&&(e=y(e)),-1!==f.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,o=t.tagName,n=!0;return!t.isContentEditable&&("INPUT"!==o&&"TEXTAREA"!==o&&"SELECT"!==o||t.readOnly)||(n=!1),n},trigger:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";Object.keys(s).forEach((function(o){var n=s[o].find((function(o){return o.scope===t&&o.shortcut===e}));n&&n.method&&n.method()}))},unbind:function(e){if(e){if(Array.isArray(e))e.forEach((function(e){e.key&&w(e)}));else if("object"===typeof e)e.key&&w(e);else if("string"===typeof e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];var r=o[0],i=o[1];"function"===typeof r&&(i=r,r=""),w({key:e,scope:r,method:i,splitKey:"+"})}}else Object.keys(s).forEach((function(e){return delete s[e]}))},keyMap:c,modifier:u,modifierMap:l};for(var O in P)Object.prototype.hasOwnProperty.call(P,O)&&(E[O]=P[O]);if("undefined"!==typeof window){var _=window.hotkeys;E.noConflict=function(e){return e&&window.hotkeys===E&&(window.hotkeys=_),E},window.hotkeys=E}var k=o(2784);E.filter=function(){return!0};var x=function(e,t){var o=e.target,n=o&&o.tagName;return Boolean(n&&t&&t.includes(n))};function T(e,t,o,n){o instanceof Array&&(n=o,o=void 0);var r=o||{},i=r.enableOnTags,a=r.filter,c=r.keyup,u=r.keydown,l=r.filterPreventDefault,d=void 0===l||l,s=r.enabled,p=void 0===s||s,f=r.enableOnContentEditable,v=void 0!==f&&f,h=(0,k.useRef)(null),g=(0,k.useCallback)((function(e,o){var n;return a&&!a(e)?!d:!!(x(e,["INPUT","TEXTAREA","SELECT"])&&!x(e,i)||null!=(n=e.target)&&n.isContentEditable&&!v)||(null===h.current||document.activeElement===h.current)&&(t(e,o),!0)}),n?[h,i,a].concat(n):[h,i,a]);return(0,k.useEffect)((function(){if(p)return c&&!0!==u&&(o.keydown=!1),E(e,o||{},g),function(){return E.unbind(e,g)};E.unbind(e,g)}),[g,e,p]),h}E.isPressed},8831:function(e,t,o){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowContainer=void 0;var r=o(2322),i=o(2784),a=o(4379);t.ArrowContainer=function(e){var t=e.childRect,o=e.popoverRect,c=e.position,u=e.arrowColor,l=e.arrowSize,d=e.arrowClassName,s=e.arrowStyle,p=e.className,f=e.children,v=e.style,h=a.useArrowContainer({childRect:t,popoverRect:o,position:c,arrowColor:u,arrowSize:l}),g=h.arrowContainerStyle,y=h.arrowStyle,m=i.useMemo((function(){return n(n({},g),v)}),[g,v]),b=i.useMemo((function(){return n(n({},y),s)}),[y,s]);return r.jsxs("div",n({className:p,style:m},{children:[r.jsx("div",{style:b,className:d},void 0),f]}),void 0)}},9909:function(e,t,o){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Popover=t.usePopover=t.ArrowContainer=t.useArrowContainer=void 0;var r=o(2322),i=o(2784),a=o(4635),c=o(7574),u=o(1462);Object.defineProperty(t,"usePopover",{enumerable:!0,get:function(){return u.usePopover}});var l=o(414),d=o(4379);Object.defineProperty(t,"useArrowContainer",{enumerable:!0,get:function(){return d.useArrowContainer}});var s=o(8831);Object.defineProperty(t,"ArrowContainer",{enumerable:!0,get:function(){return s.ArrowContainer}});var p=i.forwardRef((function(e,t){var o=e.isOpen,d=e.children,s=e.content,p=e.positions,f=void 0===p?c.Constants.DEFAULT_POSITIONS:p,v=e.align,h=void 0===v?c.Constants.DEFAULT_ALIGN:v,g=e.padding,y=void 0===g?0:g,m=e.reposition,b=void 0===m||m,w=e.parentElement,R=void 0===w?window.document.body:w,C=e.boundaryElement,E=void 0===C?R:C,P=e.containerClassName,O=void 0===P?"react-tiny-popover-container":P,_=e.containerStyle,k=e.contentLocation,x=e.boundaryInset,T=void 0===x?0:x,L=e.onClickOutside,j=l.useMemoizedArray(f),N=i.useRef(!1),A=i.useRef(),M=i.useRef(),I=i.useRef(b),K=i.useRef(),S=i.useState({align:h,nudgedLeft:0,nudgedTop:0,position:j[0],padding:y,childRect:c.Constants.EMPTY_CLIENT_RECT,popoverRect:c.Constants.EMPTY_CLIENT_RECT,parentRect:c.Constants.EMPTY_CLIENT_RECT,boundaryRect:c.Constants.EMPTY_CLIENT_RECT,boundaryInset:T,violations:c.Constants.EMPTY_CLIENT_RECT,hasViolations:!1}),B=S[0],F=S[1],z=i.useCallback((function(e){return F(e)}),[]),Y=u.usePopover({isOpen:o,childRef:K,containerClassName:O,parentElement:R,boundaryElement:E,contentLocation:k,positions:j,align:h,padding:y,boundaryInset:T,reposition:b,onPositionPopover:z}),D=Y.positionPopover,U=Y.popoverRef,V=Y.scoutRef;i.useLayoutEffect((function(){var e=!0,t=function(){var n,r;if(o&&e){var i=null===(n=null===K||void 0===K?void 0:K.current)||void 0===n?void 0:n.getBoundingClientRect(),a=null===(r=null===U||void 0===U?void 0:U.current)||void 0===r?void 0:r.getBoundingClientRect();null==i||null==a||c.rectsAreEqual(i,{top:B.childRect.top,left:B.childRect.left,width:B.childRect.width,height:B.childRect.height,bottom:B.childRect.top+B.childRect.height,right:B.childRect.left+B.childRect.width})&&a.width===B.popoverRect.width&&a.height===B.popoverRect.height&&B.padding===y&&B.align===h&&j===A.current&&k===M.current&&b===I.current||D(),j!==A.current&&(A.current=j),k!==M.current&&(M.current=k),b!==I.current&&(I.current=b),e&&window.requestAnimationFrame(t)}N.current=o};return window.requestAnimationFrame(t),function(){e=!1}}),[h,k,o,y,U,B.align,B.childRect.height,B.childRect.left,B.childRect.top,B.childRect.width,B.padding,B.popoverRect.height,B.popoverRect.width,D,j,b]),i.useEffect((function(){var e=U.current;return Object.assign(e.style,_),function(){Object.keys(null!==_&&void 0!==_?_:{}).forEach((function(t){return delete e.style[t]}))}}),[_,o,U]);var q=i.useCallback((function(e){var t,n;!o||(null===(t=U.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=K.current)||void 0===n?void 0:n.contains(e.target))||null===L||void 0===L||L(e)}),[o,L,U]),G=i.useCallback((function(){K.current&&window.requestAnimationFrame((function(){return D()}))}),[D]);i.useEffect((function(){return window.addEventListener("click",q,!0),window.addEventListener("resize",G),function(){window.removeEventListener("click",q,!0),window.removeEventListener("resize",G)}}),[q,G]);var X=i.useCallback((function(e){K.current=e,null!=t&&("object"===typeof t?t.current=e:"function"===typeof t&&t(e))}),[t]);return r.jsxs(r.Fragment,{children:[i.cloneElement(d,{ref:X}),o?r.jsx(a.PopoverPortal,n({element:U.current,scoutElement:V.current,container:R},{children:"function"===typeof s?s(B):s}),void 0):null]},void 0)}));t.Popover=i.forwardRef((function(e,t){return"undefined"===typeof window?e.children:r.jsx(p,n({},e,{ref:t}),void 0)}))},4635:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PopoverPortal=void 0;var n=o(2784),r=o(8316);t.PopoverPortal=function(e){var t=e.container,o=e.element,i=e.scoutElement,a=e.children;return n.useLayoutEffect((function(){return t.appendChild(o),t.appendChild(i),function(){t.removeChild(o),t.removeChild(i)}}),[t,o]),r.createPortal(a,o)}},4379:function(e,t,o){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.useArrowContainer=void 0;var r=o(2784);t.useArrowContainer=function(e){var t=e.childRect,o=e.popoverRect,i=e.position,a=e.arrowSize,c=e.arrowColor;return{arrowContainerStyle:r.useMemo((function(){return{padding:a}}),[a]),arrowStyle:r.useMemo((function(){return n({position:"absolute"},function(){var e=2*a,n=t.top-o.top+t.height/2-e/2,r=t.left-o.left+t.width/2-e/2,u=a,l=o.width-a,d=o.height-a;switch(r=(r=r<u?u:r)+e>l?l-e:r,n=(n=n<u?u:n)+e>d?d-e:n,n=Number.isNaN(n)?0:n,r=Number.isNaN(r)?0:r,i){case"right":return{borderTop:a+"px solid transparent",borderBottom:a+"px solid transparent",borderRight:a+"px solid "+c,left:0,top:n};case"left":return{borderTop:a+"px solid transparent",borderBottom:a+"px solid transparent",borderLeft:a+"px solid "+c,right:0,top:n};case"bottom":return{borderLeft:a+"px solid transparent",borderRight:a+"px solid transparent",borderBottom:a+"px solid "+c,top:0,left:r};case"top":return{borderLeft:a+"px solid transparent",borderRight:a+"px solid transparent",borderTop:a+"px solid "+c,bottom:0,left:r};default:return{display:"hidden"}}}())}),[c,a,t.height,t.left,t.top,t.width,o.height,o.left,o.top,o.width,i])}}},9601:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useElementRef=void 0;var n=o(2784),r=o(7574);t.useElementRef=function(e,t){var o=n.useMemo((function(){return r.createContainer(t,e)}),[e,t]);return n.useRef(o)}},414:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMemoizedArray=void 0;var n=o(2784);t.useMemoizedArray=function(e){var t=n.useRef(e);return n.useMemo((function(){if(t.current===e)return t.current;if(t.current.length!==e.length)return t.current=e,e;for(var o=0;o<e.length;o+=1)if(e[o]!==t.current[o])return t.current=e,e;return t.current}),[e])}},1462:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePopover=void 0;var n=o(2784),r=o(7574),i=o(9601);t.usePopover=function(e){var t=e.isOpen,o=e.childRef,a=e.positions,c=e.containerClassName,u=e.parentElement,l=e.contentLocation,d=e.align,s=e.padding,p=e.reposition,f=e.boundaryInset,v=e.boundaryElement,h=e.onPositionPopover,g=i.useElementRef(c,{position:"fixed",overflow:"visible",top:"0px",left:"0px"}),y=i.useElementRef("react-tiny-popover-scout",{position:"fixed",top:"0px",left:"0px",width:"0px",height:"0px",visibility:"hidden"}),m=n.useCallback((function(e){var n,i,c=void 0===e?{}:e,b=c.positionIndex,w=void 0===b?0:b,R=c.parentRect,C=void 0===R?u.getBoundingClientRect():R,E=c.childRect,P=void 0===E?null===(n=null===o||void 0===o?void 0:o.current)||void 0===n?void 0:n.getBoundingClientRect():E,O=c.scoutRect,_=void 0===O?null===(i=null===y||void 0===y?void 0:y.current)||void 0===i?void 0:i.getBoundingClientRect():O,k=c.popoverRect,x=void 0===k?g.current.getBoundingClientRect():k,T=c.boundaryRect,L=void 0===T?v===u?C:v.getBoundingClientRect():T;if(P&&C&&t){if(l){var j="function"===typeof l?l({childRect:P,popoverRect:x,parentRect:C,boundaryRect:L,padding:s,nudgedTop:0,nudgedLeft:0,boundaryInset:f,violations:r.Constants.EMPTY_CLIENT_RECT,hasViolations:!1}):l,N=j.top,A=j.left,M=C.left+A,I=C.top+N;return g.current.style.transform="translate("+(M-_.left)+"px, "+(I-_.top)+"px)",void h({childRect:P,popoverRect:x,parentRect:C,boundaryRect:L,padding:s,nudgedTop:0,nudgedLeft:0,boundaryInset:f,violations:r.Constants.EMPTY_CLIENT_RECT,hasViolations:!1})}var K=w===a.length,S=K?a[0]:a[w],B=r.getNewPopoverRect({childRect:P,popoverRect:x,boundaryRect:L,position:S,align:d,padding:s,reposition:p},f),F=B.rect;if(B.boundaryViolation&&p&&!K)m({positionIndex:w+1,childRect:P,popoverRect:x,parentRect:C,boundaryRect:L});else{var z=F.top,Y=F.left,D=F.width,U=F.height,V=p&&!K,q=r.getNudgedPopoverRect(F,L,f),G=q.left,X=q.top,H=z,J=Y;V&&(H=X,J=G),g.current.style.transform="translate("+(J-_.left)+"px, "+(H-_.top)+"px)";var Q={top:L.top+f-H,left:L.left+f-J,right:J+D-L.right+f,bottom:H+U-L.bottom+f};h({childRect:P,popoverRect:{top:H,left:J,width:D,height:U,right:J+D,bottom:H+U},parentRect:C,boundaryRect:L,position:S,align:d,padding:s,nudgedTop:X-z,nudgedLeft:G-Y,boundaryInset:f,violations:{top:Q.top<=0?0:Q.top,left:Q.left<=0?0:Q.left,right:Q.right<=0?0:Q.right,bottom:Q.bottom<=0?0:Q.bottom},hasViolations:Q.top>0||Q.left>0||Q.right>0||Q.bottom>0})}}}),[u,o,g,v,l,a,d,s,p,f,h,t]);return{positionPopover:m,popoverRef:g,scoutRef:y}}},7574:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNudgedPopoverRect=t.getNewPopoverRect=t.popoverRectForPosition=t.createContainer=t.rectsAreEqual=t.Constants=void 0,t.Constants={DEFAULT_ALIGN:"center",DEFAULT_POSITIONS:["top","left","right","bottom"],EMPTY_CLIENT_RECT:{top:0,left:0,bottom:0,height:0,right:0,width:0}};t.rectsAreEqual=function(e,t){return e===t||(null===e||void 0===e?void 0:e.bottom)===(null===t||void 0===t?void 0:t.bottom)&&(null===e||void 0===e?void 0:e.height)===(null===t||void 0===t?void 0:t.height)&&(null===e||void 0===e?void 0:e.left)===(null===t||void 0===t?void 0:t.left)&&(null===e||void 0===e?void 0:e.right)===(null===t||void 0===t?void 0:t.right)&&(null===e||void 0===e?void 0:e.top)===(null===t||void 0===t?void 0:t.top)&&(null===e||void 0===e?void 0:e.width)===(null===t||void 0===t?void 0:t.width)};t.createContainer=function(e,t){var o=window.document.createElement("div");return t&&(o.className=t),Object.assign(o.style,e),o};t.popoverRectForPosition=function(e,t,o,n,r){var i,a,c=t.left+t.width/2,u=t.top+t.height/2,l=o.width,d=o.height;switch(e){case"left":i=u-d/2,a=t.left-n-l,"start"===r&&(i=t.top),"end"===r&&(i=t.bottom-d);break;case"bottom":i=t.bottom+n,a=c-l/2,"start"===r&&(a=t.left),"end"===r&&(a=t.right-l);break;case"right":i=u-d/2,a=t.right+n,"start"===r&&(i=t.top),"end"===r&&(i=t.bottom-d);break;default:i=t.top-d-n,a=c-l/2,"start"===r&&(a=t.left),"end"===r&&(a=t.right-l)}return{top:i,left:a,width:l,height:d,right:a+l,bottom:i+d}};t.getNewPopoverRect=function(e,o){var n=e.position,r=e.align,i=e.childRect,a=e.popoverRect,c=e.boundaryRect,u=e.padding,l=e.reposition,d=t.popoverRectForPosition(n,i,a,u,r);return{rect:d,boundaryViolation:l&&("top"===n&&d.top<c.top+o||"left"===n&&d.left<c.left+o||"right"===n&&d.right>c.right-o||"bottom"===n&&d.bottom>c.bottom-o)}};t.getNudgedPopoverRect=function(e,t,o){var n=t.top+o,r=t.left+o,i=t.right-o,a=t.bottom-o,c=e.top<n?n:e.top;c=c+e.height>a?a-e.height:c;var u=e.left<r?r:e.left;return{top:c,left:u=u+e.width>i?i-e.width:u,width:e.width,height:e.height,right:u+e.width,bottom:c+e.height}}}}]);