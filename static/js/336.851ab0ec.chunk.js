(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[336],{61532:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=61532,e.exports=n},13094:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(33028),o=t(59740),i=t(9249),l=t(87371),a=t(45754),u=t(37687),c=t(56976),s=t(21237),d=t(60036),f=t(92080),p=t(14218),v=["dependencies","codePen"];function h(e){var n=e.dependencies,t=e.codePen,i=(0,o.Z)(e,v),l=(0,r.Z)({},i);return t&&(l.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:l.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"react-baidu-map-demo",description:"\u767e\u5ea6\u5730\u56fe React \u7ec4\u4ef6 - demo",dependencies:{react:"latest","react-dom":"latest","@uiw/react-baidu-map":"latest"},devDependencies:{"@kkt/less-modules":"7.1.1",kkt:"7.1.5",typescript:"4.3.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,p.jsx)(f.Z,(0,r.Z)((0,r.Z)({},l),{},{dependencies:(0,r.Z)((0,r.Z)({},n),{},{React:c},c),style:{marginBottom:0}}))}var m="index_footer__Fp4ea",g=function(e){var n=(e||{}).editorUrl;return(0,p.jsxs)("div",{className:m,children:[n&&(0,p.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/uiw-admin/edit/master".concat(n),children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin",children:"GitHub"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"})]})},x="index_markdown__hcQCp",y=t(68079),b=t(96234),j=t(7896),S="esm_navbox__Zvl4q",w="esm_active__jkS6S",Z=t(60460),k=function(e){var n,t;for(n=0;n<e.length&&!e[n];n++);for(t=e.length-1;t>=0&&!e[t];t--);return e.slice(n,t+1)},O=function(e){var n=e.markdown,t=e.headingTopOffset,r=void 0===t?100:t,o=e.routerType,i=void 0===o?"bower":o,l=(0,c.useState)(0),a=(0,b.Z)(l,2),u=a[0],s=a[1],d=(0,c.useRef)(null),f=(0,c.useMemo)((function(){var e=n.replace(/^[^#]+\n/g,"").replace(/(?:[^\n#]+)#+\s([^#\n]+)\n*/g,"").replace(/^#\s[^#\n]*\n+/,"").replace(/```[^`\n]*\n+[^```]+```\n+/g,"").replace(/`([^`\n]+)`/g,"$1").replace(/\*\*?([^*\n]+)\*\*?/g,"$1").replace(/__?([^_\n]+)__?/g,"$1").trim(),t=/#+\s([^#\n]+)\n*/g,r=e.match(t);if(!r)return[];var o=r.map((function(e,n){return{index:n,level:e.match(/^#+/g)[0].length,text:e.replace(t,"$1"),listNo:0}})),i=0;o.forEach((function(e){e.level>i&&(i=e.level)}));for(var l=[],a=0;a<o.length;a++){for(var u=o[a],c=u.level;l.length&&l[l.length-1].level>c;)l.pop();if(0!==l.length){var s=l[l.length-1].arr.slice();s[c-1]+=1,l.push({level:c,arr:s}),u.listNo=k(s).join(".")}else{var d=new Array(i).fill(0);d[c-1]+=1,l.push({level:c,arr:d}),u.listNo=k(d).join(".")}}return o}),[n]);(0,c.useEffect)((function(){f&&(d.current&&clearTimeout(d.current),d.current=setTimeout((function(){x(),document.addEventListener("scroll",g,!1)}),500))}),[f]);var v=(0,c.useCallback)((function(){var e=[];return f&&f.forEach((function(n){var t=(0,y.Z)(document.querySelectorAll("h"+n.level)).find((function(e){return e.innerText.trim()===n.text.trim()}));t&&e.push({dataId:n.text,offsetTop:t.offsetTop,listNo:n.listNo})})),e}),[f]),h=function(e){var n=document.querySelector("#"+e);n&&"number"===typeof n.offsetTop&&function(e,n,t){if(void 0===t&&(t=0),e)if("function"===typeof e.scrollTo){var r={top:n,left:t};e.scrollTo(r)}else e===window?(document.documentElement.scrollTop=n,document.documentElement.scrollLeft=t):(e.scrollTop=n,e.scrollLeft=t)}(window,n.offsetTop-r,0)},m=function(e){var n=window.location.href,t="";if("bower"===i)t=""+window.location.pathname+window.location.search+"#"+e;else if(n.includes("?title=")){var r=n.indexOf("?title=");t=n.slice(0,r)+"?title="+e}else t=n+"?title="+e;window.history.replaceState({},"",t)},g=(0,Z.Z)((function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,n=v().map((function(n){return(0,j.Z)({},n,{distanceToTop:Math.abs(e+r-n.offsetTop)})})),t=n.map((function(e){return e.distanceToTop})),o=Math.min.apply(Math,(0,y.Z)(t)),i=n.find((function(e){return e.distanceToTop===o}));i&&(m(i.dataId.toLowerCase().replace(" ","-")),s(i.listNo))}),200),x=function(){if(window.location.hash)if("bower"===i)h(window.location.hash.replace("#",""));else{var e=window.location.href.indexOf("?title=");if(e>-1){var n=window.location.href.slice(e+7);h(n)}}};return(0,p.jsx)("div",{className:S,children:f&&f.map((function(e,n){return(0,p.jsxs)("div",{style:{paddingLeft:5*e.level,paddingRight:5,lineHeight:"25px",cursor:"pointer"},className:u===e.listNo?w:"",onClick:function(){var n=e.text.toLowerCase().replace(" ","-");h(n),m(n),s(e.listNo)},children:[e.listNo," ",e.text]},n)}))})},P=["inline","node"],C=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t},E=function(e){(0,a.Z)(t,e);var n=(0,u.Z)(t);function t(e){var r;return(0,i.Z)(this,t),(r=n.call(this,e)).editorUrl=void 0,r.getMdStr=void 0,r.dependencies=void 0,r.state={mdStr:""},r}return(0,l.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(n){e.setState({mdStr:n.default||n})}))}},{key:"render",value:function(){var e=this;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(d.X2,{children:[(0,p.jsx)(d.JX,{children:(0,p.jsx)(s.Z,{style:{padding:"15px 15px"},source:this.state.mdStr,className:x,components:{code:function(n){var t=n.inline,i=n.node,l=(0,o.Z)(n,P),a=l,u=a.noPreview,c=a.noScroll,s=a.bgWhite,d=a.noCode,f=a.codePen,v=a.codeSandboxOption;if(t)return(0,p.jsx)("code",(0,r.Z)({},l));var m={noPreview:u,noScroll:c,bgWhite:s,noCode:d,codePen:f,codeSandboxOption:v};return 0===Object.keys(m).filter((function(e){return void 0!==m[e]})).length?(0,p.jsx)("code",(0,r.Z)({},l)):(0,p.jsx)(h,{code:C(i.children),dependencies:e.dependencies,noPreview:u,noScroll:c,bgWhite:s,noCode:d,codePen:f,codeSandboxOption:v})}}})}),(0,p.jsx)(d.JX,{fixed:!0,style:{width:150},children:(0,p.jsx)(O,{markdown:this.state.mdStr,routerType:"hash"})})]}),(0,p.jsx)(g,{editorUrl:this.editorUrl})]})}}]),t}(c.Component)},77815:function(e,n,t){"use strict";t.d(n,{LH:function(){return i}});var r=t(56976),o=t(14218),i=function(e){var n=e.path,t=e.disabled,i=e.children;if(AUTH){var l=function(e){if(AUTH){var n=[],t=sessionStorage.getItem("auth");return"local"===STORAGE&&(t=localStorage.getItem("auth")),t&&(n=JSON.parse(t)),!!n.find((function(n){return n===e}))}return!0}(n);return l?i:t&&r.isValidElement(i)?r.cloneElement(i,{disabled:t}):(0,o.jsx)(r.Fragment,{})}return i}},23844:function(e,n,t){"use strict";t.d(n,{PB:function(){return W},A9:function(){return ce},QV:function(){return V},Od:function(){return c},cI:function(){return se},x6:function(){return R}});var r=t(42542),o=t(56484),i=t(56976),l=t(32463),a=t(14218),u=["children","style","loading"],c=function(e){var n=e.children,t=e.style,i=e.loading,c=void 0!==i&&i,s=(0,o.Z)(e,u);return(0,a.jsx)(l.aN,(0,r.Z)({loading:c,style:(0,r.Z)({display:"block"},t),bgColor:"rgba(255, 255, 255, 0.4)"},s,{children:(0,a.jsx)(a.Fragment,{children:n})}))},s=t(96234),d=t(77162),f=t.n(d),p=t(61677),v=t(35642),h=t(7896),m=t(31461),g=t(47303),x=t.n(g);var y=t(4673),b=t.n(y),j=["body","headers","requestType"],S={200:"\u670d\u52a1\u5668\u6210\u529f\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u3002",201:"\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u6210\u529f\u3002",202:"\u4e00\u4e2a\u8bf7\u6c42\u5df2\u7ecf\u8fdb\u5165\u540e\u53f0\u6392\u961f\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002",204:"\u5220\u9664\u6570\u636e\u6210\u529f\u3002",400:"\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002",401:"\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002",403:"\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002",404:"\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002",406:"\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002",410:"\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002",422:"\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002",500:"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",502:"\u7f51\u5173\u9519\u8bef\u3002",503:"\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",504:"\u7f51\u5173\u8d85\u65f6\u3002"};function w(e,n){void 0===n&&(n={});var t=n.method||"GET",r=n,o=r.body,i=r.headers,l=r.requestType,a=void 0===l?"json":l,u=(0,m.Z)(n,j);(null==o?void 0:o.swr_Rest_Time)&&delete o.swr_Rest_Time;var c=(0,h.Z)({},u,{url:e,method:t,data:o});if("json"===a)c.headers=(0,h.Z)({"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},i||{}),c.data=JSON.stringify(o||{});else if("form"===a){var d=new FormData;Object.entries(o||{}).forEach((function(e){var n=(0,s.Z)(e,2),t=n[0],r=n[1];d.append(t,r)})),c.headers=(0,h.Z)({Accept:"application/json"},i||{}),c.data=d}else"urlencoded"===a&&(c.headers=(0,h.Z)({"Content-Type":"application/x-www-form-urlencoded; charset=utf-8",Accept:"application/json"},i||{}),c.data=b().stringify(o||{},{arrayFormat:"repeat"}));/(GET)/.test(t)&&(c.url=function(e,n){var t=e,r=[];return Object.keys(n).forEach((function(e){return r.push(e+"="+n[e])})),0===Object.keys(n).length?e:(!1===/\?/.test(t)?t=t+"?"+r.join("&"):t+="&"+r.join("&"),t)}(e,(0,h.Z)({},o)),delete c.body);var f=sessionStorage.getItem("token")||localStorage.getItem("token");return f&&(c.headers=(0,h.Z)({},c.headers||{},{token:f})),x().request(c).then((function(e){return e.data})).catch((function(e){var n=e.response;if(n.status>=200&&n.status<300)return n;var t=n.status,r=S[t]||n.statusText,o=new Error(r);if(o.name=n.status,n.data)return n.data;throw o}))}var Z=(0,i.createContext)({}),k=function(){return(0,i.useContext)(Z)};var O=["style","columns","rowSelection","onPageChange","scroll","paginationProps"],P=function(e){var n=e.columns,t=e.rowSelection,u=void 0===t?{}:t,c=e.onPageChange,d=e.scroll,h=void 0===d?{}:d,m=e.paginationProps,g=void 0===m?{}:m,x=(0,o.Z)(e,O),y=(0,i.useState)(1),b=(0,s.Z)(y,2),j=b[0],S=b[1],Z=(0,i.useState)((null==g?void 0:g.pageSize)||10),P=(0,s.Z)(Z,2),C=P[0],E=P[1],T=(0,i.useState)({data:[],total:0}),I=(0,s.Z)(T,2),A=I[0],_=I[1],F=k(),N=F.formatData,V=F.updateStore,R=F.query,M=F.key,B=F.searchValues,D=F.SWRConfiguration,J=void 0===D?{}:D,z=F.requestOptions,q=u.selectKey,W=u.type,H=void 0===W?"checkbox":W,X=u.defaultSelected,Y=void 0===X?[]:X,L=h.x,U="checkbox"===H,G=function(){return n.map((function(e){var n=e.align,t=void 0===n?"left":n,o=e.render;return(0,r.Z)({},e,{style:{textAlign:t},render:o||function(e){return(0,a.jsx)("div",{style:{textAlign:t},children:e})}})}))},$=(0,i.useMemo)((function(){var e={};return n.forEach((function(n){var t;if(null!=n&&null!=(t=n.props)&&t.initialValue){var r=n.props.key||n.key;e[r]=n.props.initialValue}Array.isArray(n.props)&&n.props.forEach((function(t){var r=t.key||n.key;t.initialValue&&(e[r]=t.initialValue)}))})),e}),[JSON.stringify(n)]),K=(0,i.useRef)(!1),Q=(0,i.useCallback)((function(){return R?R(j,C,!1===K.current?$:B):{page:1,pageSize:10}}),[j,JSON.stringify($),JSON.stringify(B),C]),ee=Q().pageSize||10,ne=(0,v.ZP)([M,(0,r.Z)({method:"POST",body:Q()},z)],w,(0,r.Z)({revalidateOnFocus:!1,revalidateOnMount:!1},J)),te=ne.data,re=ne.isValidating,oe=ne.mutate;(0,i.useEffect)((function(){oe(!1)}),[oe]);var ie=N&&te?N(te).data:(null==te?void 0:te.data)||(null==A?void 0:A.data),le=function(e,n,t){void 0===n&&(n=[]),void 0===t&&(t=!1);var r=(0,i.useState)(n),o=(0,s.Z)(r,2),l=o[0],a=o[1],u=(0,i.useMemo)((function(){return new Set(l)}),[l]),c=function(e){return u.has(e)},d=function(){e.forEach((function(e){u.delete(e)})),a(Array.from(u))},f=function(e){return t&&d(),u.add(e),a(Array.from(u))},p=function(e){return u.delete(e),a(Array.from(u))},v=function(){e.forEach((function(e){u.add(e)})),a(Array.from(u))},h=(0,i.useMemo)((function(){return e.every((function(e){return!u.has(e)}))}),[e,u]),m=(0,i.useMemo)((function(){return e.every((function(e){return u.has(e)}))&&!h}),[e,u,h]),g=(0,i.useMemo)((function(){return!h&&!m}),[h,m]);return{selected:l,noneSelected:h,allSelected:m,partiallySelected:g,setSelected:a,isSelected:c,select:f,unSelect:p,toggle:function(e){c(e)?p(e):f(e)},selectAll:v,unSelectAll:d,toggleAll:function(){return m?d():v()}}}(q&&ie?ie.map((function(e){return e[q]})):[],Y,"radio"===H),ae=(0,i.useCallback)(function(){var e=(0,p.Z)(f().mark((function e(n){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c&&c(n),e.next=3,S(n);case 3:oe(!1);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[S,c]);(0,i.useEffect)((function(){var e={};n.forEach((function(n){var t;if(null!=n&&null!=(t=n.props)&&t.initialValue){var r=n.props.key||n.key;e[r]=n.props.initialValue}Array.isArray(n.props)&&n.props.forEach((function(t){var r=t.key||n.key;t.initialValue&&(e[r]=t.initialValue)}))}));var t={data:null==te?void 0:te.data,total:null==te?void 0:te.total,loading:re,selection:le,pageIndex:j,setPageIndex:S,mutate:oe};K.current||(K.current=!0,t.searchValues=e),V(t),te&&_(N?N(te):te)}),[JSON.stringify(te),re,JSON.stringify(n),j,JSON.stringify(le),S,oe]);var ue=[{title:U?function(){return(0,a.jsx)(l.XZ,{checked:le.allSelected,onClick:function(){le.toggleAll()}})}:null,key:"checked",width:35,render:function(e,n,t){return q?U?(0,a.jsx)(l.XZ,{checked:le.isSelected(t[q]),onClick:function(){le.toggle(t[q])}}):(0,a.jsx)(l.Y8,{onChange:function(){le.toggle(t[q])},checked:le.isSelected(t[q])}):null}}];return(0,a.jsx)("div",{style:{overflow:L?"scroll":"hidden"},children:(0,a.jsx)("div",{style:{width:L||"100%"},children:(0,a.jsx)(l.iA,(0,r.Z)({columns:q?ue.concat(G()):G(),data:ie,empty:(0,a.jsx)(l.HY,{}),footer:ie&&ie.length>0&&(0,a.jsx)(l.tl,(0,r.Z)({divider:!0},g,{current:j,pageSize:ee,total:N&&te?N(te).total:(null==te?void 0:te.total)||(null==A?void 0:A.total),onChange:function(e){ae(e)},onShowSizeChange:function(e,n){E(n),ae(1),null==g||null==g.onShowSizeChange||g.onShowSizeChange(e,n)}}))},x))})})},C=["option"],E=function(e){var n=e.option,t=(0,o.Z)(e,C);return(0,a.jsxs)(l.Ph,(0,r.Z)({},t,{children:[(0,a.jsx)(l.Ph.Option,{value:"",children:"\u8bf7\u9009\u62e9"}),n&&n.map((function(e){return(0,a.jsx)(l.Ph.Option,{value:e.value,children:e.label},e.value)}))]}))},T=["option"],I=function(e){var n=e.option,t=(0,o.Z)(e,T);return(0,a.jsx)(l.Ee,(0,r.Z)({},t,{children:n&&n.map((function(e){return(0,a.jsx)(l.Y8,{value:e.value,children:e.label},e.value)}))}))},A=["widgetProps","key","widget","label","initialValue"],_={input:l.II,radio:I,checkbox:l.XZ,switch:l.rs,select:E,searchSelect:l.ul,textarea:l.gx,dateInput:l.Wr,timePicker:l.jI,monthPicker:l.lH},F=function(e){var n=k(),t=(0,i.useRef)(),u=n.updateStore,c=n.updateForm,s=e.columns,d=e.searchBtns,f=e.onBeforeSearch,p=function(e,n){var t=e.widgetProps,i=e.widget,l=e.label,u=e.initialValue,c=(0,o.Z)(e,A),s=_[i];return(0,r.Z)({label:l||n,children:(0,a.jsx)(s,(0,r.Z)({},t))},c,{initialValue:u})},v=(0,i.useMemo)((function(){var e={};return s.forEach((function(n){if(n.props&&Object.keys(n.props).length>0)if(Array.isArray(n.props))n.props.forEach((function(t){var r=t.key||n.key;e[r]=p(t,n.title)}));else{var t=n.props.key||n.key;e[t]=p(n.props,n.title)}})),e}),[JSON.stringify(s)]),h=function(e){var n=e.initial,t=e.current;u({searchValues:(0,r.Z)({},n,t)})};(0,i.useEffect)((function(){t.current&&c(t)}),[t]);var m=4-Object.keys(v).length%5;return(0,a.jsx)(l.l0,{style:{background:"#fff",paddingBottom:10,marginBottom:14},resetOnSubmit:!1,onSubmit:function(e){var n=e.initial,t=e.current;f?null!=f&&f({initial:n,current:t})&&h({initial:n,current:t}):h({initial:n,current:t})},onSubmitError:function(e){return e.filed?(0,r.Z)({},e.filed):null},ref:t,fields:v,children:function(e){var n=e.fields;e.state,e.canSubmit,e.resetForm;return(0,a.jsx)("div",{children:(0,a.jsxs)(l.X2,{gutter:12,children:[Object.keys(n).map((function(e){return(0,a.jsx)(l.JX,{fixed:!0,style:{width:"20%"},children:n[e]},e)})),Array(m).fill("").map((function(e,n){return(0,a.jsx)(l.JX,{fixed:!0,style:{width:"20%"}},n.toString())})),(0,a.jsx)(l.JX,{align:"middle",style:{textAlign:"right",marginRight:14},children:d&&d.map((function(e,n){return null!=e&&e.render?(0,a.jsx)(i.Fragment,{children:e.render},n.toString()):(0,a.jsx)(l.zx,(0,r.Z)({style:{marginRight:5}},e,{children:e.label}),n.toString())}))})]})})}})},N=["table","columns","operateButtons","searchBtns","onBeforeSearch","paginationProps"],V=function(e){var n=e.table,t=e.columns,u=e.operateButtons,s=void 0===u?[]:u,d=e.searchBtns,f=e.onBeforeSearch,p=e.paginationProps,v=(0,o.Z)(e,N),h=n.key,m=n.onReset,g=n.onRefersh,x=n.updateStore,y=n.formatData,b=n.query,j=n.searchValues,S=n.loading,w=n.onSearch,k=n.SWRConfiguration,O=n.selection,C=n.pageIndex,E=n.form,T=n.updateForm,I=n.setPageIndex,A=n.mutate,_=n.requestOptions,V=(0,i.useMemo)((function(){return{data:[],onReset:m,onRefersh:g,key:h,updateStore:x,formatData:y,query:b,searchValues:j,onSearch:w,SWRConfiguration:k,selection:O,pageIndex:C,form:E,updateForm:T,setPageIndex:I,mutate:A,requestOptions:_}}),[JSON.stringify(n)]);return(0,a.jsx)(Z.Provider,{value:(0,r.Z)({},V),children:(0,a.jsxs)(c,{loading:S,children:[d&&d.length>0&&(0,a.jsx)(F,{columns:t,searchBtns:d,onBeforeSearch:f}),s&&s.length>0&&(0,a.jsx)("div",{style:{background:"#fff",padding:10},children:s.map((function(e,n){return null!=e&&e.render?(0,a.jsx)(i.Fragment,{children:e.render},n.toString()):(0,a.jsx)(l.zx,(0,r.Z)({},e,{children:e.label}),n.toString())}))}),(0,a.jsx)(P,(0,r.Z)({columns:t},v,{paginationProps:p}))]})})},R=function(e,n){void 0===n&&(n={});var t=n,o=t.formatData,l=t.query,a=t.SWRConfiguration,u=t.requestOptions,c=(0,i.useState)(null),d=(0,s.Z)(c,2),v=d[0],h=d[1],m=(0,i.useState)({pageIndex:1,total:1,data:[],searchValues:{},loading:!1,setPageIndex:function(){return null},mutate:function(){return null},selection:{selected:[],noneSelected:!1,allSelected:!1,partiallySelected:!1,setSelected:function(){return null},isSelected:function(){return null},select:function(){return null},unSelect:function(){return null},toggle:function(){return null},selectAll:function(){return null},unSelectAll:function(){return null},toggleAll:function(){return null}}}),g=(0,s.Z)(m,2),x=g[0],y=g[1],b=function(){var e=(0,p.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.current.resetForm();case 2:S();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,p.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.mutate(!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,p.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v){e.next=10;break}return e.next=3,v.current.onSubmit();case 3:if(n=v.current.getError(),0!==Object.keys(n).length){e.next=8;break}return e.next=7,x.setPageIndex(1);case 7:x.mutate(!1);case 8:e.next=13;break;case 10:return e.next=12,x.setPageIndex(1);case 12:x.mutate(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.Z)({key:e,onReset:b,onRefersh:j,onSearch:S,formatData:o,query:l,updateStore:function(e){y((0,r.Z)({},x,e))},SWRConfiguration:a,form:v,requestOptions:u,updateForm:function(e){h(e)}},x)},M=t(77815),B=["path","children"],D=["visible","title","onClose","width","buttons","children"],J=["label","show","path","disabled"];function z(e){var n=e.path,t=e.children,i=(0,o.Z)(e,B);return n?(0,a.jsx)(M.LH,(0,r.Z)({path:n},i,{children:t})):(0,a.jsx)(a.Fragment,{children:t})}function q(e){var n=e.visible,t=e.title,i=void 0===t?"":t,u=e.onClose,c=void 0===u?null:u,s=e.width,d=void 0===s?800:s,f=e.buttons,p=void 0===f?[]:f,v=e.children,h=(0,o.Z)(e,D);return(0,a.jsx)(l.dy,(0,r.Z)({title:i,isOpen:n,onClose:c&&c,size:d,bodyStyle:{padding:"0 10px 45px 10px"},footer:p.map((function(e,n){var t=e.label,i=void 0===t?"":t,u=e.show,c=void 0===u||u,s=e.path,d=e.disabled,f=void 0!==d&&d,p=(0,o.Z)(e,J);return c&&(0,a.jsx)(z,{path:s,disabled:f,children:(0,a.jsx)(l.zx,(0,r.Z)({},p,{children:i}))},n)}))},h,{children:v}))}var W=(0,i.memo)(q),H=(0,i.createContext)({}),X=t(41361),Y=["uploadType","value","readonly","maxNumber"],L=function(e){var n=e.uploadType,t=e.value,u=e.readonly,c=void 0!==u&&u,d=e.maxNumber,f=(0,o.Z)(e,Y),p=i.useState(!1),v=(0,s.Z)(p,2),h=v[0],m=v[1],g=i.useState(""),x=(0,s.Z)(g,2),y=x[0],b=x[1];return(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(l.S2,(0,r.Z)({uploadType:n,readonly:c,value:t,maxNumber:d,onPreview:function(e){b(null==e?void 0:e.dataURL),m(!0)}},f,{children:c?null:"card"===n?(0,a.jsx)(l.JO,{type:"plus"}):"picture"===n||"text"===n?(0,a.jsx)(l.zx,{type:"primary",children:"\u65b0\u589e"}):null})),(0,a.jsx)(l.u_,{isOpen:h,onClosed:function(){return m(!1)},width:600,confirmButtonProps:{style:{display:"none"}},children:(0,a.jsx)("img",{crossOrigin:"anonymous",src:y,alt:"",style:{width:"100%",height:"100%"}})})]})};function U(e,n,t,o){var u="";if("radio"===e||"searchSelect"===e&&"multiple"!==(null==o?void 0:o.mode)||"select"===e){var c=t.filter((function(e){return e.value===n}))||[];c.length>0&&(u=c[0].label)}else if("checkbox"===e){var s,d=(0,X.Z)(t);try{for(d.s();!(s=d.n()).done;){var f=s.value;n.includes(f.value)&&(u+=""+f.label)}}catch(g){d.e(g)}finally{d.f()}}else if("switch"===e)u=n?"\u662f":"\u5426";else if("timePicker"===e)u=n&&(0,l.zW)("HH:mm:ss",new Date(n));else if("monthPicker"===e)u=n&&(0,l.zW)("YYYY-MM",new Date(n));else if("dateInput"===e)u=n&&(0,l.zW)((null==o?void 0:o.format)||"YYYY-MM-DD",new Date(n));else if("upload"===e){var p=(0,r.Z)({value:n,uploadType:null==o?void 0:o.uploadType,readonly:!0,showFileIcon:{showPreviewIcon:!0,showRemoveIcon:!1}},o);u=(0,a.jsx)(L,(0,r.Z)({},p))}else if("selectMultiple"===e){u=(n&&n.length>0&&n.map((function(e){return e.label}))||[]).join(";")}else if("searchSelect"===e&&"multiple"===(null==o?void 0:o.mode)){var v,h=(0,X.Z)(t);try{for(h.s();!(v=h.n()).done;){var m=v.value;n.includes(m.value)&&(u+=""+m.label)}}catch(g){h.e(g)}finally{h.f()}}else u="rate"===e?(0,a.jsx)(l.j8,{value:n,readOnly:!0}):"string"===typeof n||"number"===typeof n||i.isValidElement(n)?n:"";return u}function G(e){return"string"===typeof e||"number"===typeof e}function $(e){for(var n in e)return!1;return!0}var K=function(e){void 0===e&&(e=[]);var n={};return e.forEach((function(e){var t=e.rules,r=e.key,o=e.value;t&&t.length>0&&t.forEach((function(e){var t,i=e.validator,l=void 0===i?null:i,a=e.message,u=void 0===a?"":a,c=e.required,s=e.pattern,d=void 0===s?null:s;(!c||(t=o,"[object Object]"!=Object.prototype.toString.call(t))||!$(o)&&o)&&(!c||!function(e){return"[object Array]"==Object.prototype.toString.call(e)}(o)||0!==o.length&&o)?(c&&G(o)&&!o||l&&!l(o)||G(o)&&d&&!d.test(o))&&(n[r]=u):n[r]=u}))})),n};var Q=function(e){var n=e.formDatas,t=void 0===n?[]:n,o=e.formfields,u=e.onSubmit,c=e.onChange,s=e.onSubmitError,d=e.buttonsContainer,f=e.showSaveButton,p=void 0!==f&&f,v=e.showResetButton,h=void 0!==v&&v,m=e.saveButtonProps,g=void 0===m?{}:m,x=e.resetButtonProps,y=void 0===x?{}:x,b=e.formInstanceRef,j=(0,i.useRef)(null),S=(0,i.useContext)(H).setFormState;return(0,i.useEffect)((function(){return null==S?void 0:S(j)}),[j]),(0,i.useEffect)((function(){b.current=j}),[j]),(0,a.jsx)(l.l0,{ref:j,style:{background:"#fff",paddingBottom:10,marginBottom:14},resetOnSubmit:!1,onSubmit:function(e){var n=e.initial,r=e.current;if(u)null==u||u(n,r);else{var o=t.length>0&&t.map((function(e){return{key:e.key,value:r[e.key],rules:e.rules}}))||[],i=K(o);if(Object.keys(i).length>0){var l=new Error;throw l.filed=i,l}}},onChange:function(e){var n=e.initial,t=e.current;return null==c?void 0:c(n,t)},onSubmitError:function(e){if(!s)return e.filed?(0,r.Z)({},e.filed):null;null==s||s(e)},fields:o,children:function(e){var n=e.fields,t=(e.state,e.canSubmit),o=e.resetForm;return(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(l.X2,{gutter:10,children:Object.keys(n).map((function(e){var t,o,i,u,c=(null==(t=n[e])||null==(o=t.props)?void 0:o.span)||"8",s=(null==(i=n[e])||null==(u=i.props)?void 0:u.colstyle)||{};return(0,a.jsx)(l.JX,{style:(0,r.Z)({},(0,r.Z)({},s)),span:c,children:n[e]},e)}))}),(0,a.jsxs)("div",{className:"w-form-item-center",style:(0,r.Z)({},d),children:[(0,a.jsx)(l.zx,(0,r.Z)({style:{display:p?"flex":"none"},disabled:!t(),htmlType:"submit"},g,{children:g.label||"\u63d0\u4ea4"})),(0,a.jsx)(l.zx,(0,r.Z)({style:{display:h?"flex":"none"},onClick:o},y,{children:y.label||"\u91cd\u7f6e"}))]})]})}})},ee=function(e){var n=e.title,t=e.formDatas,o=e.readOnlyProps;return(0,a.jsx)(l.w5,(0,r.Z)({bordered:!0,title:n},o,{children:null==t?void 0:t.map((function(e,n){var t=e.hide,r=e.label,o=e.widget,i=e.initialValue,u=void 0===i?"":i,c=e.option,s=void 0===c?[]:c,d=e.readSpan,f=void 0===d?1:d,p=e.widgetProps,v=void 0===p?{}:p;return t?null:(0,a.jsx)(l.w5.Item,{span:f,label:r,children:U(o,u,s,v)},n)}))}))},ne=["option"],te=function(e){var n=e.option,t=(0,o.Z)(e,ne);return(0,a.jsx)(l.XZ.Group,(0,r.Z)({},t,{children:n&&n.map((function(e){return(0,a.jsx)(l.XZ,{value:e.value,children:e.label},e.value)}))}))},re=t(68079);var oe=function(e){var n=e.option,t=void 0===n?[]:n,r=e.onChange,o=e.onSelect,u=e.onSearch,c=e.onBlur,d=e.onClear,f=e.value,p=void 0===f?[]:f,v=e.loading,h=void 0===v||v,m=e.disabled,g=void 0!==m&&m,x=e.placeholder,y=void 0===x?"\u8bf7\u9009\u62e9":x,b=e.allowClear,j=void 0!==b&&b,S=e.noContent,w=e.showSearch,Z=void 0!==w&&w,k=e.maxCount,O=void 0===k?3:k,P=(0,i.useState)(p),C=(0,s.Z)(P,2),E=C[0],T=C[1],I=(0,i.useState)(""),A=(0,s.Z)(I,2),_=A[0],F=A[1],N=(0,i.useState)(!1),V=(0,s.Z)(N,2),R=V[0],M=V[1],B=E.length===O,D=function(e,n){var t=n.target;"search"===e&&(M(!0),F(t.value),null==u||u(t.value)),"blur"===e&&(F(""),M(!1),null==c||c()),"clean"===e&&(F(""),T([]),M(!1),null==d||d([]))},J=i.useMemo((function(){var e=E&&E.length>0&&E.map((function(e){return e.label}))||[];return R?_:e.join(";")}),[E,_,R]);function z(){return!R&&j&&E.length>0?"close":R&&h?"loading":"search"}return(0,a.jsx)(l.J2,{trigger:"focus",placement:"bottomLeft",content:t&&t.length>0?(0,a.jsx)(l.v2,{style:{minHeight:25,maxHeight:150,overflowY:"scroll",width:200},children:t.map((function(e,n){var i=E&&-1!==E.findIndex((function(n){return n.value===e.value}));return(0,a.jsx)(l.v2.Item,{style:{marginBottom:t.length-1===n?0:5},active:i,text:e.label,disabled:e.disabled,onClick:function(n){M(!1),n.preventDefault(),function(e){var n=(0,re.Z)(E);n.find((function(n){return n.value===e.value}))||B?n=n.filter((function(n){return n.value!==e.value})):n.push(e),T(n),null==r||r(n),null==o||o(e)}(e)}},e.value)}))}):S||(0,a.jsx)(l.aN,{loading:h,color:"black",children:(0,a.jsxs)("div",{style:{padding:10,height:70,width:200,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:12,color:"#888"},children:[(0,a.jsx)(l.JO,{type:"file-unknown",style:{fontSize:20}}),"\u6682\u65e0\u6570\u636e"]})}),visibleArrow:!1,children:(0,a.jsx)(l.II,{readOnly:!Z,disabled:g,placeholder:y,value:J,onChange:function(e){return D("search",e)},onBlur:function(e){return D("blur",e)},addonAfter:(0,a.jsx)(l.JO,{type:z(),spin:h,onClick:"close"===z()?D.bind(this,"clean"):void 0})})})},ie=["option"],le=function(e){var n=e.option,t=(0,o.Z)(e,ie);return(0,a.jsx)(l.Ws,(0,r.Z)({options:n},t))},ae=["hide","widgetProps","key","widget","label","initialValue"];function ue(e,n){var t,u=e.formDatas,c=void 0===u?[]:u,s=e.title,d=void 0===s?"":s,v=e.formType,h=void 0===v?"card":v,m=e.readOnly,g=void 0!==m&&m,x=e.customWidgetsList,y=void 0===x?{}:x,b=e.form,j=e.cardProps,S=void 0===j?{}:j,w=e.collapseProps,Z=void 0===w?{}:w,k=e.collapsePanelProps,O=void 0===k?{}:k,P=(0,i.useMemo)((function(){return function(e,n,t){void 0===n&&(n=[]),void 0===t&&(t={});var i=(0,r.Z)({input:l.II,radio:I,checkbox:te,switch:l.rs,select:E,searchSelect:l.ul,selectMultiple:oe,textarea:l.gx,dateInput:l.Wr,timePicker:l.jI,monthPicker:l.lH,upload:L,rate:l.j8,searchTree:le},t),u={};return n.forEach((function(n){if(e||delete n.readSpan,n){var t=n.hide,l=void 0!==t&&t,c=n.widgetProps,s=n.key,d=n.widget,f=n.label,p=n.initialValue,v=(0,o.Z)(n,ae);if(!l){var h=s,m=i[d];u[h]=(0,r.Z)({label:f,children:(0,a.jsx)(m,(0,r.Z)({},c))},v,{initialValue:p})}}})),u}(g,c,y)}),[c]),C=(b||{}).setFormState,T=(0,i.useMemo)((function(){return{setFormState:C}}),[b]),A=(0,i.useRef)();(0,i.useImperativeHandle)(n,(function(){var e,n=function(){var e,n;return(null==(e=A.current)||null==(n=e.current)?void 0:n.onSubmit())||null},t=function(){var e,n;return(null==(e=A.current)||null==(n=e.current)?void 0:n.getFieldValues())||{}},o=function(){var e,n;return(null==A||null==(e=A.current)||null==(n=e.current)?void 0:n.getError())||{}};return(0,r.Z)({},null==(e=A.current)?void 0:e.current,{submitvalidate:n,getFieldValues:t,getError:o,validateFieldsAndGetValue:function(){return new Promise(function(){var e=(0,p.Z)(f().mark((function e(r,i){var l,a;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:$(l=o())?(a=t(),r(a)):i(l);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())}})}));var _=(0,r.Z)({},e,{formfields:P,formInstanceRef:A}),F=g?void 0:d,N=g?(0,a.jsx)(ee,(0,r.Z)({},e)):(0,a.jsx)(Q,(0,r.Z)({},_));return t="card"===h?(0,a.jsx)(l.Zb,(0,r.Z)({title:F},S,{children:N})):"collapse"===h?(0,a.jsx)(l.UO,(0,r.Z)({title:F,activeKey:["1"]},Z,{children:(0,a.jsx)(l.UO.Panel,(0,r.Z)({header:d},O,{children:N}),"1")})):N,(0,a.jsx)(H.Provider,{value:T,children:t})}var ce=(0,i.forwardRef)(ue),se=function(){var e=(0,i.useState)(),n=(0,s.Z)(e,2),t=n[0],o=n[1],l=function(){var e;return(null==t||null==(e=t.current)?void 0:e.onSubmit())||null},a=function(){var e;return(null==t||null==(e=t.current)?void 0:e.getFieldValues())||{}},u=function(){var e;return(null==t||null==(e=t.current)?void 0:e.getError())||{}},c=function(){var e=(0,p.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,p.Z)(f().mark((function e(n,t){var r,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:$(r=u())?(o=a(),n(o)):t(r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.Z)({},null==t?void 0:t.current,{submitvalidate:l,getError:u,getFieldValues:a,validateFieldsAndGetValue:c,setFormState:o})}},53260:function(){}}]);
//# sourceMappingURL=336.851ab0ec.chunk.js.map