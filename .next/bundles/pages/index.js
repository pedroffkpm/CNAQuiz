module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([2],{131:function(e,t,n){e.exports=n(132)},132:function(e,t,n){"use strict";var r=n(32),o=n(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(63)),i=o(n(133)),c=o(n(35)),l=o(n(19)),u=o(n(20)),s=o(n(36)),p=o(n(37)),f=o(n(86)),y=n(125),m=r(n(0)),h=o(n(2)),d=o(n(135)),b=r(n(47)),g=n(34),v=function(e){function t(e){var n,r;(0,l.default)(this,t);for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return(r=(0,s.default)(this,(n=t.__proto__||(0,c.default)(t)).call.apply(n,[this,e].concat(a)))).linkClicked=r.linkClicked.bind((0,f.default)(r)),r.formatUrls(e),r}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.formatUrls(e)}},{key:"linkClicked",value:function(e){var t=this;if("A"!==e.currentTarget.nodeName||!(e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var n=this.props.shallow,r=this.href,o=this.as;if(function(e){var t=(0,y.parse)(e,!1,!0),n=(0,y.parse)((0,g.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(r)){var a=window.location.pathname;r=(0,y.resolve)(a,r),o=o?(0,y.resolve)(a,o):r,e.preventDefault();var i=this.props.scroll;null==i&&(i=o.indexOf("#")<0);var c=this.props.replace?"replace":"push";b.default[c](r,o,{shallow:n}).then(function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){t.props.onError&&t.props.onError(e)})}}}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=(0,y.resolve)(e,this.href);b.default.prefetch(t)}}},{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,i.default)(this.props.href)!==(0,i.default)(e.href)&&this.prefetch()}},{key:"formatUrls",value:function(e){this.href=e.href&&"object"===(0,a.default)(e.href)?(0,y.format)(e.href):e.href,this.as=e.as&&"object"===(0,a.default)(e.as)?(0,y.format)(e.as):e.as}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.href,r=this.as;"string"==typeof t&&(t=m.default.createElement("a",null,t));var o=m.Children.only(t),a={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=r||n),a.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,b._rewriteUrlForNextExport)(a.href)),m.default.cloneElement(o,a)}}]),t}(m.Component);t.default=v,Object.defineProperty(v,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:(0,d.default)({href:h.default.oneOfType([h.default.string,h.default.object]).isRequired,as:h.default.oneOfType([h.default.string,h.default.object]),prefetch:h.default.bool,replace:h.default.bool,shallow:h.default.bool,passHref:h.default.bool,scroll:h.default.bool,children:h.default.oneOfType([h.default.element,function(e,t){return"string"==typeof e[t]&&w("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"),null}]).isRequired})});var w=(0,g.execOnce)(g.warn)},133:function(e,t,n){e.exports=n(134)},134:function(e,t,n){var r=n(5),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},135:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(0,a.default)(e))throw new TypeError("given propTypes must be an object");if((0,o.default)(e,l)&&(t=e[l],!t||t[l]!==u))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");var t;return(0,r.default)({},e,c({},l,(n=function(){return function(t,n,r){var a=Object.keys(t).filter(function(t){return!(0,o.default)(e,t)});if(a.length>0)return new TypeError(String(r)+": unknown props found: "+String(a.join(", ")));return null}}(),(0,r.default)(n,c({},l,u)))));var n};var r=i(n(136)),o=i(n(142)),a=i(n(143));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l="prop-types-exact: ​",u={};e.exports=t.default},136:function(e,t,n){"use strict";var r=n(65),o=n(67),a=n(69),i=n(141),c=a();r(c,{getPolyfill:a,implementation:o,shim:i}),e.exports=c},137:function(e,t,n){"use strict";var r=Object.prototype.toString;e.exports=function(e){var t=r.call(e),n="[object Arguments]"===t;return n||(n="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===r.call(e.callee)),n}},138:function(e,t){var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString;e.exports=function(e,t,o){if("[object Function]"!==r.call(t))throw new TypeError("iterator must be a function");var a=e.length;if(a===+a)for(var i=0;i<a;i++)t.call(o,e[i],i,e);else for(var c in e)n.call(e,c)&&t.call(o,e[c],c,e)}},139:function(e,t,n){"use strict";var r=Array.prototype.slice,o=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==o.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var n,a=r.call(arguments,1),i=Math.max(0,t.length-a.length),c=[],l=0;l<i;l++)c.push("$"+l);if(n=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof n){var o=t.apply(this,a.concat(r.call(arguments)));return Object(o)===o?o:this}return t.apply(e,a.concat(r.call(arguments)))}),t.prototype){var u=function(){};u.prototype=t.prototype,n.prototype=new u,u.prototype=null}return n}},140:function(e,t,n){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),n=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(n))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var r=Object.getOwnPropertySymbols(e);if(1!==r.length||r[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},141:function(e,t,n){"use strict";var r=n(65),o=n(69);e.exports=function(){var e=o();return r(Object,{assign:e},{assign:function(){return Object.assign!==e}}),e}},142:function(e,t,n){"use strict";var r=n(68);e.exports=r.call(Function.call,Object.prototype.hasOwnProperty)},143:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){return e&&"object"===(void 0===e?"undefined":n(e))&&!Array.isArray(e)},e.exports=t.default},144:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(145),i=n.n(a),c=n(2);n.n(c);t.a=function(e){return o.a.createElement(i.a,null,o.a.createElement("meta",{charSet:"UTF-8"}),o.a.createElement("title",null,e.title||""),o.a.createElement("meta",{name:"description",content:e.description||""}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.a.createElement("link",{rel:"icon",sizes:"192x192",href:"/static/touch-icon.png"}),o.a.createElement("link",{rel:"apple-touch-icon",href:"/static/touch-icon.png"}),o.a.createElement("link",{rel:"mask-icon",href:"/static/favicon-mask.svg",color:"#49B882"}),o.a.createElement("link",{rel:"icon",href:"/favicon.ico",type:"image/x-icon"}),o.a.createElement("meta",{property:"fb:app_id",content:e.appID||""}),o.a.createElement("meta",{property:"og:url",content:e.url||""}),o.a.createElement("meta",{property:"og:type",content:e.type||"article"}),o.a.createElement("meta",{property:"og:title",content:e.ogTitle||""}),o.a.createElement("meta",{property:"og:description",content:e.description||""}),o.a.createElement("meta",{property:"og:image",content:e.ogImage||""}),o.a.createElement("meta",{property:"og:image:width",content:"1200"}),o.a.createElement("meta",{property:"og:image:height",content:"630"}))}},145:function(e,t,n){e.exports=n(146)},158:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return u});var r=n(0),o=n.n(r),a=n(159),i=n.n(a),c=function(e){return o.a.createElement(i.a,e,o.a.createElement("path",{d:"m5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2-2v-14a2 2 0 0 1 2-2m13 2h-2.5a3.5 3.5 0 0 0 -3.5 3.5v2.5h-2v3h2v7h3v-7h3v-3h-3v-2a1 1 0 0 1 1-1h2z"}))},l=function(e){return o.a.createElement(i.a,e,o.a.createElement("path",{d:"M9,19V13H11L13,13H15V19H18V10.91L12,4.91L6,10.91V19H9M12,2.09L21.91,12H20V21H13V15H11V21H4V12H2.09L12,2.09Z"}))},u=function(e){return o.a.createElement(i.a,e,o.a.createElement("path",{d:"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"}))}},316:function(e,t,n){e.exports=n(317)},317:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),a=n(131),i=n.n(a),c=n(144),l=n(2),u=(n.n(l),n(48)),s=(n.n(u),n(94)),p=n.n(s),f=n(75),y=n.n(f),m=n(158);t.default=Object(u.withStyles)(function(e){return{text:{marginTop:100,fontFamily:"-apple-system,Arial,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif",display:"flex",justifyContent:"space-around"},root:{flexGrow:1,margin:0},button:{marginTop:0,paddingLeft:"40px",paddingRight:"40px",margin:e.spacing.unit},logo:{marginTop:"4vw",width:"70vw",display:"flex",justifyContent:"center"},list:{marginTop:"0 important",padding:"20px"},link:{marginLeft:"33.3%",resize:"both",maxHeight:"4vw"},icon:{fontSize:48,color:"black"},title:{fontFamily:"Futura-Bold,-apple-system,Arial,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif",marginTop:0,marginBottom:"2vw",width:"100%",paddingTop:"0",lineHeight:"1.15",textAlign:"center",fontSize:"48px"}}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement(c.a,{title:"Travel Quiz"}),o.a.createElement(y.a,{container:!0,spacing:40,direction:"column",justify:"center",alignItems:"center"},o.a.createElement("img",{className:t.logo,src:"/static/Logo_EaiViajanteT.png"}),o.a.createElement("h1",{className:t.title},"Travel Quiz"),o.a.createElement(y.a,{item:!0,xs:12},o.a.createElement(i.a,{href:"/quiz"},o.a.createElement(p.a,{variant:"extendedFab",className:t.button},"Clique aqui para começar"))),o.a.createElement("h3",{className:t.text},"Nos siga nas redes sociais:"),o.a.createElement(y.a,{item:!0,xs:12},o.a.createElement(y.a,{container:!0,className:t.list,spacing:40,direction:"row",justify:"center",alignItems:"center"},o.a.createElement(y.a,{item:!0},o.a.createElement(i.a,{href:"https://www.facebook.com/eaiviajante/"},o.a.createElement("a",{target:"_blank"},o.a.createElement(m.a,{className:t.icon})))),o.a.createElement(y.a,{item:!0},o.a.createElement(i.a,{href:"https://eaiviajante.wordpress.com/"},o.a.createElement("a",{target:"_blank"},o.a.createElement(m.b,{className:t.icon})))),o.a.createElement(y.a,{item:!0},o.a.createElement(i.a,{href:"https://www.instagram.com/eaiviajante/"},o.a.createElement("a",{target:"_blank"},o.a.createElement(m.c,{className:t.icon}))))))))})},65:function(e,t,n){"use strict";var r=n(66),o=n(138),a="function"==typeof Symbol&&"symbol"==typeof Symbol(),i=Object.prototype.toString,c=Object.defineProperty&&function(){var e={};try{for(var t in Object.defineProperty(e,"x",{enumerable:!1,value:e}),e)return!1;return e.x===e}catch(e){return!1}}(),l=function(e,t,n,r){var o;t in e&&("function"!=typeof(o=r)||"[object Function]"!==i.call(o)||!r())||(c?Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n,writable:!0}):e[t]=n)},u=function(e,t){var n=arguments.length>2?arguments[2]:{},i=r(t);a&&(i=i.concat(Object.getOwnPropertySymbols(t))),o(i,function(r){l(e,r,t[r],n[r])})};u.supportsDescriptors=!!c,e.exports=u},66:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Object.prototype.toString,a=Array.prototype.slice,i=n(137),c=Object.prototype.propertyIsEnumerable,l=!c.call({toString:null},"toString"),u=c.call(function(){},"prototype"),s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(e){var t=e.constructor;return t&&t.prototype===e},f={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},y=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!f["$"+e]&&r.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{p(window[e])}catch(e){return!0}}catch(e){return!0}return!1}(),m=function(e){var t=null!==e&&"object"==typeof e,n="[object Function]"===o.call(e),a=i(e),c=t&&"[object String]"===o.call(e),f=[];if(!t&&!n&&!a)throw new TypeError("Object.keys called on a non-object");var m=u&&n;if(c&&e.length>0&&!r.call(e,0))for(var h=0;h<e.length;++h)f.push(String(h));if(a&&e.length>0)for(var d=0;d<e.length;++d)f.push(String(d));else for(var b in e)m&&"prototype"===b||!r.call(e,b)||f.push(String(b));if(l)for(var g=function(e){if("undefined"==typeof window||!y)return p(e);try{return p(e)}catch(e){return!1}}(e),v=0;v<s.length;++v)g&&"constructor"===s[v]||!r.call(e,s[v])||f.push(s[v]);return f};m.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var e=Object.keys;Object.keys=function(t){return i(t)?e(a.call(t)):e(t)}}}else Object.keys=m;return Object.keys||m},e.exports=m},67:function(e,t,n){"use strict";var r=n(66),o=n(68),a=n(140)(),i=Object,c=o.call(Function.call,Array.prototype.push),l=o.call(Function.call,Object.prototype.propertyIsEnumerable),u=a?Object.getOwnPropertySymbols:null;e.exports=function(e,t){if(void 0===(n=e)||null===n)throw new TypeError("target must be an object");var n,o,s,p,f,y,m,h,d=i(e);for(o=1;o<arguments.length;++o){s=i(arguments[o]),f=r(s);var b=a&&(Object.getOwnPropertySymbols||u);if(b)for(y=b(s),p=0;p<y.length;++p)h=y[p],l(s,h)&&c(f,h);for(p=0;p<f.length;++p)m=s[h=f[p]],l(s,h)&&(d[h]=m)}return d}},68:function(e,t,n){"use strict";var r=n(139);e.exports=Function.prototype.bind||r},69:function(e,t,n){"use strict";var r=n(67);e.exports=function(){return Object.assign?function(){if(!Object.assign)return!1;for(var e="abcdefghijklmnopqrst",t=e.split(""),n={},r=0;r<t.length;++r)n[t[r]]=t[r];var o=Object.assign({},n),a="";for(var i in o)a+=i;return e!==a}()?r:function(){if(!Object.assign||!Object.preventExtensions)return!1;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return!1}()?r:Object.assign:r}}},[316]).default}});