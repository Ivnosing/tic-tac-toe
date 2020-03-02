!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){n(5),e.exports=n(1)},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],u=n[l]||0,s="".concat(l," ").concat(u);n[l]=u+1;var f=c(s),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:y(d,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,g=0;function y(e,t){var n,r,o;if(t.singleton){var a=g++;n=p||(p=u(t)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=u(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=l(e,t),u=0;u<n.length;u++){var s=c(n[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=a}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,"#gameboard{display:grid;grid-template-columns:repeat(3, 1fr);width:100%;margin-bottom:1rem}#gameboard .cell{position:relative;width:100%;padding-bottom:100%;background-color:#6d6d6d;border:1px solid #424242;color:white;font-size:6rem;user-select:none;overflow:hidden;outline:0;cursor:pointer}#gameboard .cell span{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;line-height:0.775;text-align:center}#gameboard .cell:nth-child(1){border-radius:1rem 0 0 0}#gameboard .cell:nth-child(3){border-radius:0 1rem 0 0}#gameboard .cell:nth-child(7){border-radius:0 0 0 1rem}#gameboard .cell:nth-child(9){border-radius:0 0 1rem 0}#gameboard .cell:focus,#gameboard .cell:active{background-color:#3a3a3a}@media screen and (max-width: 500px){#gameboard .cell{font-size:3.5rem}}.players{display:flex;font-size:2rem}.players .player-form{display:flex;flex-direction:column;align-items:flex-start;position:relative;margin-bottom:1rem}.players .player-form label{position:absolute;left:0;top:0.25em;font-size:0.75em;transition:transform 0.2s ease-in-out;user-select:none;cursor:text}.players .player-form input{width:100%;background:none;border:none;box-shadow:0 1px 0 0 white;font-size:1em;color:white}.players .player-form input:focus{outline:0;box-shadow:0 2px 0 0 white}.players .player-form input:focus ~ label{transform:scale(0.5) translate(-1.75em, -2.375em)}.players .player-form input:not([value=\"\"]) ~ label{transform:scale(0.5) translate(-1.75em, -2.375em)}.players .player-form:not(:first-child){margin-left:1rem}*{box-sizing:border-box}html{font-family:'Roboto', Helvetica, sans-serif;font-size:20px}body{margin:0;background-color:#1b1b1b;color:white}h1{text-align:center;font-size:3rem}.container{max-width:30rem;margin:0 auto;padding:1rem}#announcement{text-align:center;font-size:1.25em;font-weight:500}@media screen and (max-width: 500px){h1{margin:0 0 1.5rem}}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.r(t);var o,a,i,c,l=function(e){var t=[],n=function(){for(var e=0;e<3;e++)for(var n=0;n<3;n++)t[e]||(t[e]=[]),t[e][n]=""};n();var o=function(){return t.reduce((function(e,t){return[].concat(r(e),r(t))}),[])};return{getCells:o,setCell:function(e,n){var r=Math.trunc(e/3),o=e%3;return!t[r][o]&&(t[r][o]=n,!0)},resetBoard:n,evaluateBoard:function(){var e=t,n=t.map((function(e,n){return t.map((function(e){return e[n]}))})),o=[t.map((function(e,t){return e[t]})),t.map((function(e,t){return e[2-t]}))];return[].concat(r(e),r(n),o).some((function(e){var t=r(new Set(e));return 1===t.length&&t[0]}))},tie:function(){var e=o();return e.length===e.filter((function(e){return e})).length}}}(),u=function(){return Object.create((e="",{setName:function(t){return e=t},getName:function(){return e}}));var e},s=(o=document.getElementById("gameboard").children,a=function(e,t){e.querySelector("span").innerHTML=t},{cells:o,setBoard:function(e){for(var t=0;t<e.length;t++)a(o[t],e[t])}}),f=(i=1,c=new Map([[1,"❌"],[2,"⭕"]]),{getPlayerTurn:function(){return i},getPlayerSymbol:function(){return c.get(i)},nextTurn:function(){return i===c.size?i=1:++i},resetTurns:function(){i=1}}),d=function(){document.querySelectorAll(".players .player-form input").forEach((function(e){return e.style.transition="all 0.2s ease-in-out 0s"})),document.getElementById("player1").addEventListener("keyup",(function(t){e.setName(t.target.value),n()})),document.getElementById("player2").addEventListener("keyup",(function(e){t.setName(e.target.value),n()})),s.setBoard(l.getCells());for(var e=u(),t=u(),n=function(n){!function(e,t){document.getElementById("announcement").innerText=t?t(e):"".concat(e," plays now")}((1===f.getPlayerTurn()?e:t).getName()||"Player ".concat(f.getPlayerTurn()),n)},r=function(e,t){(function(e){if("click"===e.type)return!0;var t=e.charCode||e.keyCode;return 32===t||13===t})(e)&&((l.evaluateBoard()||l.tie())&&(l.resetBoard(),s.setBoard(l.getCells())),l.setCell(t,f.getPlayerSymbol())&&(s.setBoard(l.getCells()),l.evaluateBoard()?(n((function(e){return"🎉 ".concat(e," wins! Click a cell to start a new game")})),f.resetTurns()):l.tie()?(n((function(){return"Tie! Click a cell to start a new game"})),f.resetTurns()):(f.nextTurn(),n())))},o=function(e){s.cells[e].addEventListener("click",(function(t){return r(t,e)})),s.cells[e].addEventListener("keyup",(function(t){return r(t,e)}))},a=0;a<s.cells.length;a++)o(a)};window.addEventListener("load",(function(){return d()}))}]);