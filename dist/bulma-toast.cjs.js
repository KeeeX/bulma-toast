/*!
 * bulma-toast 1.5.0-es5 
 * (c) 2018-present @rfoel <rafaelfr@outlook.com> 
 * Released under the MIT License.
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("core-js/modules/es6.object.assign");function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var defaults={message:"Your message here",duration:2e3,position:"top-right",closeOnClick:!0,opacity:1},initialized=!1,containers={},positions={},doc=document;function init(){containers={noticesTopLeft:doc.createElement("div"),noticesTopRight:doc.createElement("div"),noticesBottomLeft:doc.createElement("div"),noticesBottomRight:doc.createElement("div"),noticesTopCenter:doc.createElement("div"),noticesBottomCenter:doc.createElement("div"),noticesCenter:doc.createElement("div")};for(var a in containers.noticesTopLeft.setAttribute("style","".concat("width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;","left:0;top:0;text-align:left;align-items:flex-start;")),containers.noticesTopRight.setAttribute("style","".concat("width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;","right:0;top:0;text-align:right;align-items:flex-end;")),containers.noticesBottomLeft.setAttribute("style","".concat("width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;","left:0;bottom:0;text-align:left;align-items:flex-start;")),containers.noticesBottomRight.setAttribute("style","".concat("width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;","right:0;bottom:0;text-align:right;align-items:flex-end;")),containers.noticesTopCenter.setAttribute("style","".concat("width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;","top:0;left:0;right:0;text-align:center;align-items:center;")),containers.noticesBottomCenter.setAttribute("style","".concat("width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;","bottom:0;left:0;right:0;text-align:center;align-items:center;")),containers.noticesCenter.setAttribute("style","".concat("width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;","top:0;left:0;right:0;bottom:0;flex-flow:column;justify-content:center;align-items:center;")),containers)doc.body.appendChild(containers[a]);positions={"top-left":containers.noticesTopLeft,"top-right":containers.noticesTopRight,"top-center":containers.noticesTopCenter,"bottom-left":containers.noticesBottomLeft,"bottom-right":containers.noticesBottomRight,"bottom-center":containers.noticesBottomCenter,center:containers.noticesCenter},initialized=!0}function toast(a){initialized||init();var b=Object.assign({},defaults,a),c=new Toast(b),d=positions[b.position]||positions[defaults.position];d.appendChild(c.element)}function setDoc(a){for(var b in containers){var c=containers[b];c.parentNode.removeChild(c)}doc=a,init()}var Toast=/*#__PURE__*/function(){function a(b){var c=this;_classCallCheck(this,a),this.element=doc.createElement("div"),this.opacity=b.opacity,this.type=b.type,this.animate=b.animate,this.dismissible=b.dismissible,this.closeOnClick=b.closeOnClick,this.message=b.message,this.duration=b.duration,this.pauseOnHover=b.pauseOnHover;var d="width:auto;pointer-events:auto;display:inline-flex;opacity:".concat(this.opacity,";"),e=["notification"];if(this.type&&e.push(this.type),this.animate&&this.animate.in&&(e.push("animated ".concat(this.animate.in)),this.onAnimationEnd(function(){return c.element.classList.remove(c.animate.in)})),this.element.classList=e.join(" "),this.dismissible){var f=doc.createElement("button");f.className="delete",f.addEventListener("click",function(){c.destroy()}),this.element.insertAdjacentElement("afterbegin",f)}else d+="padding: 1.25rem 1.5rem";this.closeOnClick&&this.element.addEventListener("click",function(){c.destroy()}),this.element.setAttribute("style",d),"string"==typeof this.message?this.element.insertAdjacentHTML("beforeend",this.message):this.element.appendChild(this.message);var g=new Timer(function(){c.destroy()},this.duration);this.pauseOnHover&&(this.element.addEventListener("mouseover",function(){g.pause()}),this.element.addEventListener("mouseout",function(){g.resume()}))}return _createClass(a,[{key:"destroy",value:function(){var a=this;this.animate&&this.animate.out?(this.element.classList.add(this.animate.out),this.onAnimationEnd(function(){return a.element.remove()})):this.element.remove()}},{key:"onAnimationEnd",value:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){},b={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(var c in b)if(void 0!==this.element.style[c]){this.element.addEventListener(b[c],function(){return a()});break}}}]),a}(),Timer=/*#__PURE__*/function(){function a(b,c){_classCallCheck(this,a),this.timer,this.start,this.remaining=c,this.callback=b,this.resume()}return _createClass(a,[{key:"pause",value:function(){window.clearTimeout(this.timer),this.remaining-=new Date-this.start}},{key:"resume",value:function(){this.start=new Date,window.clearTimeout(this.timer),this.timer=window.setTimeout(this.callback,this.remaining)}}]),a}();exports.toast=toast,exports.setDoc=setDoc;
