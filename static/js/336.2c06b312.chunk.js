(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[336],{61532:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=61532,e.exports=t},2627:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(33028),i=n(59740),o=n(9249),a=n(87371),l=n(45754),u=n(37687),s=n(56976),c=n(21237),d=n(29693),f=n(14218),h=["dependencies","codePen"];function p(e){var t=e.dependencies,n=e.codePen,o=(0,i.Z)(e,h),a=(0,r.Z)({},o);return n&&(a.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:a.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"react-baidu-map-demo",description:"\u767e\u5ea6\u5730\u56fe React \u7ec4\u4ef6 - demo",dependencies:{react:"latest","react-dom":"latest","@uiw/react-baidu-map":"latest"},devDependencies:{"@kkt/less-modules":"6.11.0",kkt:"6.11.0",typescript:"4.3.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,f.jsx)(d.Z,(0,r.Z)((0,r.Z)({},a),{},{dependencies:(0,r.Z)((0,r.Z)({},t),{},{React:s},s),style:{marginBottom:0}}))}var v="index_footer__Fp4ea",m=function(e){var t=(e||{}).editorUrl;return(0,f.jsxs)("div",{className:v,children:[t&&(0,f.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/uiw-admin/edit/master".concat(t),children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin",children:"GitHub"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"})]})},g="index_markdown__hcQCp",x=["inline","node"],y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.forEach((function(t){"text"===t.type?n+=t.value:t.children&&Array.isArray(t.children)&&(n+=e(t.children))})),n},b=function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).editorUrl=void 0,r.getMdStr=void 0,r.dependencies=void 0,r.state={mdStr:""},r}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default||t})}))}},{key:"render",value:function(){var e=this;return(0,f.jsxs)(s.Fragment,{children:[(0,f.jsx)(c.Z,{style:{padding:"20px 26px"},source:this.state.mdStr,className:g,components:{code:function(t){var n=t.inline,o=t.node,a=(0,i.Z)(t,x),l=a,u=l.noPreview,s=l.noScroll,c=l.bgWhite,d=l.noCode,h=l.codePen,v=l.codeSandboxOption;if(n)return(0,f.jsx)("code",(0,r.Z)({},a));var m={noPreview:u,noScroll:s,bgWhite:c,noCode:d,codePen:h,codeSandboxOption:v};return 0===Object.keys(m).filter((function(e){return void 0!==m[e]})).length?(0,f.jsx)("code",(0,r.Z)({},a)):(0,f.jsx)(p,{code:y(o.children),dependencies:e.dependencies,noPreview:u,noScroll:s,bgWhite:c,noCode:d,codePen:h,codeSandboxOption:v})}}}),(0,f.jsx)(m,{editorUrl:this.editorUrl})]})}}]),n}(s.Component)},66994:function(e,t,n){"use strict";n.d(t,{PB:function(){return U},A9:function(){return ae},QV:function(){return T},Od:function(){return s},cI:function(){return le},x6:function(){return _}});var r=n(42542),i=n(56484),o=n(56976),a=n(32463),l=n(14218),u=["children","style","loading"],s=function(e){var t=e.children,n=e.style,o=e.loading,s=void 0!==o&&o,c=(0,i.Z)(e,u);return(0,l.jsx)(a.aN,(0,r.Z)({loading:s,style:(0,r.Z)({display:"block"},n),bgColor:"rgba(255, 255, 255, 0.4)"},c,{children:(0,l.jsx)(l.Fragment,{children:t})}))},c=n(96234),d=n(77162),f=n.n(d),h=n(61677),p=n(55855),v=n(7896),m=n(31461),g=n(47303),x=n.n(g);function y(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}var b=n(4673),j=n.n(b),S=["body","headers","requestType"],Z={200:"\u670d\u52a1\u5668\u6210\u529f\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u3002",201:"\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u6210\u529f\u3002",202:"\u4e00\u4e2a\u8bf7\u6c42\u5df2\u7ecf\u8fdb\u5165\u540e\u53f0\u6392\u961f\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002",204:"\u5220\u9664\u6570\u636e\u6210\u529f\u3002",400:"\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002",401:"\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002",403:"\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002",404:"\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002",406:"\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002",410:"\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002",422:"\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002",500:"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",502:"\u7f51\u5173\u9519\u8bef\u3002",503:"\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",504:"\u7f51\u5173\u8d85\u65f6\u3002"};function k(e,t){void 0===t&&(t={});var n=t.method||"GET",r=t,i=r.body,o=r.headers,a=r.requestType,l=void 0===a?"json":a,u=(0,m.Z)(t,S);(null==i?void 0:i.swr_Rest_Time)&&delete i.swr_Rest_Time;var s=(0,v.Z)({},u,{url:e,method:n,data:i});if("json"===l)s.headers=(0,v.Z)({"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},o||{}),s.data=JSON.stringify(i||{});else if("form"===l){var d=new FormData;Object.entries(i||{}).forEach((function(e){var t=(0,c.Z)(e,2),n=t[0],r=t[1];d.append(n,r)})),s.headers=(0,v.Z)({Accept:"application/json"},o||{}),s.data=d}else"urlencoded"===l&&(s.headers=(0,v.Z)({"Content-Type":"application/x-www-form-urlencoded; charset=utf-8",Accept:"application/json"},o||{}),s.data=j().stringify(i||{},{arrayFormat:"repeat"}));/(GET)/.test(n)&&(s.url=function(e,t){var n=e,r=[];return Object.keys(t).forEach((function(e){return r.push(e+"="+t[e])})),0===Object.keys(t).length?e:(!1===/\?/.test(n)?n=n+"?"+r.join("&"):n+="&"+r.join("&"),n)}(e,(0,v.Z)({},i)),delete s.body);var f=sessionStorage.getItem("token")||localStorage.getItem("token")||y("token");return f&&(s.headers=(0,v.Z)({},s.headers||{},{token:f})),x().request(s).then((function(e){return e.data})).catch((function(e){var t=e.response;if(t.status>=200&&t.status<300)return t;var n=t.status,r=Z[n]||t.statusText,i=new Error(r);if(i.name=t.status,t.data)return t.data;throw i}))}var w=(0,o.createContext)({}),O=function(){return(0,o.useContext)(w)};var P=["style","columns","rowSelection","onPageChange","scroll"],C=function(e){var t=e.columns,n=e.rowSelection,u=void 0===n?{}:n,s=e.onPageChange,d=e.scroll,v=void 0===d?{}:d,m=(0,i.Z)(e,P),g=(0,o.useState)(1),x=(0,c.Z)(g,2),y=x[0],b=x[1],j=(0,o.useState)({data:[],total:0}),S=(0,c.Z)(j,2),Z=S[0],w=S[1],C=O(),I=C.formatData,E=C.updateStore,F=C.query,A=C.key,B=C.searchValues,M=C.SWRConfiguration,R=void 0===M?{}:M,V=u.selectKey,T=u.type,_=void 0===T?"checkbox":T,D=u.defaultSelected,N=void 0===D?[]:D,J=v.x,z="checkbox"===_,W=(0,o.useMemo)((function(){return t.map((function(e){var t=e.align,n=void 0===t?"left":t,i=e.render;return(0,r.Z)({},e,{style:{textAlign:n},render:i||function(e){return(0,l.jsx)("div",{style:{textAlign:n},children:e})}})}))}),[t]),L=(0,o.useMemo)((function(){var e={};return t.forEach((function(t){var n;if(null!=t&&null!=(n=t.props)&&n.initialValue){var r=t.key||t.props.key;e[r]=t.props.initialValue}})),e}),[JSON.stringify(t)]),U=(0,o.useRef)(!1),X=(0,o.useCallback)((function(){return F?F(y,!1===U.current?L:B):{page:1,pageSize:10}}),[y,JSON.stringify(L),JSON.stringify(B)]),Y=X().pageSize||10,q=(0,p.ZP)([A,{method:"POST",body:X()}],k,(0,r.Z)({revalidateOnFocus:!1,revalidateOnMount:!1},R)),H=q.data,G=q.isValidating,K=q.mutate;(0,o.useEffect)((function(){K(!1)}),[K]);var Q=I&&H?I(H).data:(null==H?void 0:H.data)||(null==Z?void 0:Z.data),$=function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=!1);var r=(0,o.useState)(t),i=(0,c.Z)(r,2),a=i[0],l=i[1],u=(0,o.useMemo)((function(){return new Set(a)}),[a]),s=function(e){return u.has(e)},d=function(){e.forEach((function(e){u.delete(e)})),l(Array.from(u))},f=function(e){return n&&d(),u.add(e),l(Array.from(u))},h=function(e){return u.delete(e),l(Array.from(u))},p=function(){e.forEach((function(e){u.add(e)})),l(Array.from(u))},v=(0,o.useMemo)((function(){return e.every((function(e){return!u.has(e)}))}),[e,u]),m=(0,o.useMemo)((function(){return e.every((function(e){return u.has(e)}))&&!v}),[e,u,v]),g=(0,o.useMemo)((function(){return!v&&!m}),[v,m]);return{selected:a,noneSelected:v,allSelected:m,partiallySelected:g,setSelected:l,isSelected:s,select:f,unSelect:h,toggle:function(e){s(e)?h(e):f(e)},selectAll:p,unSelectAll:d,toggleAll:function(){return m?d():p()}}}(V&&Q?Q.map((function(e){return e[V]})):[],N,"radio"===_),ee=(0,o.useCallback)(function(){var e=(0,h.Z)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s&&s(t),e.next=3,b(t);case 3:K(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[b,s]);(0,o.useEffect)((function(){var e={};t.forEach((function(t){var n;if(null!=t&&null!=(n=t.props)&&n.initialValue){var r=t.key||t.props.key;e[r]=t.props.initialValue}}));var n={data:null==H?void 0:H.data,total:null==H?void 0:H.total,loading:G,selection:$,pageIndex:y,setPageIndex:b,mutate:K};U.current||(U.current=!0,n.searchValues=e),E(n),H&&w(I?I(H):H)}),[JSON.stringify(H),G,JSON.stringify(t),y,JSON.stringify($),b,K]);var te=[{title:z?function(){return(0,l.jsx)(a.XZ,{checked:$.allSelected,onClick:function(){$.toggleAll()}})}:null,key:"checked",width:35,render:function(e,t,n){return V?z?(0,l.jsx)(a.XZ,{checked:$.isSelected(n[V]),onClick:function(){$.toggle(n[V])}}):(0,l.jsx)(a.Y8,{onChange:function(){$.toggle(n[V])},checked:$.isSelected(n[V])}):null}}];return(0,l.jsx)("div",{style:{overflow:J?"scroll":"hidden"},children:(0,l.jsx)("div",{style:{width:J||"100%"},children:(0,l.jsx)(a.iA,(0,r.Z)({columns:V?te.concat(W):W,data:Q,footer:Q&&Q.length>0&&(0,l.jsx)(a.tl,{current:y,pageSize:Y,total:I&&H?I(H).total:(null==H?void 0:H.total)||(null==Z?void 0:Z.total),divider:!0,onChange:function(e){ee(e)}})},m))})})},I=["option"],E=function(e){var t=e.option,n=(0,i.Z)(e,I);return(0,l.jsxs)(a.Ph,(0,r.Z)({},n,{children:[(0,l.jsx)(a.Ph.Option,{value:"",children:"\u8bf7\u9009\u62e9"}),t&&t.map((function(e){return(0,l.jsx)(a.Ph.Option,{value:e.value,children:e.label},e.value)}))]}))},F=["option"],A=function(e){var t=e.option,n=(0,i.Z)(e,F);return(0,l.jsx)(a.Ee,(0,r.Z)({},n,{children:t&&t.map((function(e){return(0,l.jsx)(a.Y8,{value:e.value,children:e.label},e.value)}))}))},B=["widgetProps","key","widget","label","initialValue"],M={input:a.II,radio:A,checkbox:a.XZ,switch:a.rs,select:E,searchSelect:a.ul,textarea:a.gx,dateInput:a.Wr,timePicker:a.jI,monthPicker:a.lH},R=function(e){var t=O(),n=(0,o.useRef)(),u=t.updateStore,s=t.updateForm,c=e.columns,d=e.searchBtns,f=e.onBeforeSearch,h=(0,o.useMemo)((function(){var e={};return c.forEach((function(t){if(t.props&&Object.keys(t.props).length>0){var n=t.props,o=n.widgetProps,a=n.key,u=n.widget,s=n.label,c=n.initialValue,d=(0,i.Z)(n,B),f=a||t.key,h=M[u];e[f]=(0,r.Z)({label:s||t.title,children:(0,l.jsx)(h,(0,r.Z)({},o))},d,{initialValue:c})}})),e}),[JSON.stringify(c)]),p=function(e){var t=e.initial,n=e.current;u({searchValues:(0,r.Z)({},t,n)})};(0,o.useEffect)((function(){n.current&&s(n)}),[n]);var v=4-Object.keys(h).length%5;return(0,l.jsx)(a.l0,{style:{background:"#fff",paddingBottom:10,marginBottom:14},resetOnSubmit:!1,onSubmit:function(e){var t=e.initial,n=e.current;f?null!=f&&f({initial:t,current:n})&&p({initial:t,current:n}):p({initial:t,current:n})},onSubmitError:function(e){return e.filed?(0,r.Z)({},e.filed):null},ref:n,fields:h,children:function(e){var t=e.fields;e.state,e.canSubmit,e.resetForm;return(0,l.jsx)("div",{children:(0,l.jsxs)(a.X2,{gutter:12,children:[Object.keys(t).map((function(e){return(0,l.jsx)(a.JX,{fixed:!0,style:{width:"20%"},children:t[e]},e)})),Array(v).fill("").map((function(e,t){return(0,l.jsx)(a.JX,{fixed:!0,style:{width:"20%"}},t.toString())})),(0,l.jsx)(a.JX,{align:"middle",style:{textAlign:"right",marginRight:14},children:d?d.map((function(e,t){return null!=e&&e.render?(0,l.jsx)(o.Fragment,{children:e.render},t.toString()):(0,l.jsx)(a.zx,(0,r.Z)({style:{marginRight:5}},e,{children:e.label}),t.toString())})):(0,l.jsx)(a.zx,{type:"primary",htmlType:"submit",children:"\u67e5\u8be2"})})]})})}})},V=["table","columns","operateButtons","searchBtns","onBeforeSearch"],T=function(e){var t=e.table,n=e.columns,u=e.operateButtons,c=void 0===u?[]:u,d=e.searchBtns,f=e.onBeforeSearch,h=(0,i.Z)(e,V),p=t.key,v=t.onReset,m=t.onRefersh,g=t.updateStore,x=t.formatData,y=t.query,b=t.searchValues,j=t.loading,S=t.onSearch,Z=t.SWRConfiguration,k=t.selection,O=t.pageIndex,P=t.form,I=t.updateForm,E=t.setPageIndex,F=t.mutate,A=(0,o.useMemo)((function(){return{data:[],onReset:v,onRefersh:m,key:p,updateStore:g,formatData:x,query:y,searchValues:b,onSearch:S,SWRConfiguration:Z,selection:k,pageIndex:O,form:P,updateForm:I,setPageIndex:E,mutate:F}}),[JSON.stringify(t)]);return(0,l.jsx)(w.Provider,{value:(0,r.Z)({},A),children:(0,l.jsxs)(s,{loading:j,children:[(0,l.jsx)(R,{columns:n,searchBtns:d,onBeforeSearch:f}),c.length>0&&(0,l.jsx)("div",{style:{background:"#fff",padding:10},children:c.map((function(e,t){return null!=e&&e.render?(0,l.jsx)(o.Fragment,{children:e.render},t.toString()):(0,l.jsx)(a.zx,(0,r.Z)({},e,{children:e.label}),t.toString())}))}),(0,l.jsx)(C,(0,r.Z)({columns:n},h))]})})},_=function(e,t){void 0===t&&(t={});var n=t,i=n.formatData,a=n.query,l=n.SWRConfiguration,u=(0,o.useState)(null),s=(0,c.Z)(u,2),d=s[0],p=s[1],v=(0,o.useState)({pageIndex:1,total:1,data:[],searchValues:{},loading:!1,setPageIndex:function(){return null},mutate:function(){return null},selection:{selected:[],noneSelected:!1,allSelected:!1,partiallySelected:!1,setSelected:function(){return null},isSelected:function(){return null},select:function(){return null},unSelect:function(){return null},toggle:function(){return null},selectAll:function(){return null},unSelectAll:function(){return null},toggleAll:function(){return null}}}),m=(0,c.Z)(v,2),g=m[0],x=m[1],y=function(){var e=(0,h.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.current.resetForm();case 2:return e.next=4,d.current.onSubmit();case 4:if(!e.sent){e.next=9;break}return e.next=8,g.setPageIndex(1);case 8:g.mutate(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=(0,h.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.mutate(!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,h.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.current.onSubmit();case 2:if(!e.sent){e.next=7;break}return e.next=6,g.setPageIndex(1);case 6:g.mutate(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.Z)({key:e,onReset:y,onRefersh:b,onSearch:j,formatData:i,query:a,updateStore:function(e){x((0,r.Z)({},g,e))},SWRConfiguration:l,form:d,updateForm:function(e){p(e)}},g)},D=function(e){var t=e.path,n=e.disabled,r=e.children;if(AUTH){var i=function(e){if(AUTH){var t=[],n=sessionStorage.getItem("auth");return"local"===STORAGE&&(n=localStorage.getItem("auth")),n&&(t=JSON.parse(n)),!!t.find((function(t){return t===e}))}return!0}(t);return i?r:n&&o.isValidElement(r)?o.cloneElement(r,{disabled:n}):(0,l.jsx)(o.Fragment,{})}return r},N=["path","children"],J=["visible","title","onClose","width","buttons","children"],z=["label","show","path","disabled"];function W(e){var t=e.path,n=e.children,o=(0,i.Z)(e,N);return t?(0,l.jsx)(D,(0,r.Z)({path:t},o,{children:n})):(0,l.jsx)(l.Fragment,{children:n})}function L(e){var t=e.visible,n=e.title,o=void 0===n?"":n,u=e.onClose,s=void 0===u?null:u,c=e.width,d=void 0===c?800:c,f=e.buttons,h=void 0===f?[]:f,p=e.children,v=(0,i.Z)(e,J);return(0,l.jsx)(a.dy,(0,r.Z)({title:o,isOpen:t,onClose:s&&s,size:d,bodyStyle:{padding:"0 10px 45px 10px"},footer:h.map((function(e,t){var n=e.label,o=void 0===n?"":n,u=e.show,s=void 0===u||u,c=e.path,d=e.disabled,f=void 0!==d&&d,h=(0,i.Z)(e,z);return s&&(0,l.jsx)(W,{path:c,disabled:f,children:(0,l.jsx)(a.zx,(0,r.Z)({},h,{children:o}))},t)}))},v,{children:p}))}var U=(0,o.memo)(L),X=n(68079),Y=(0,o.createContext)({}),q=n(41361),H=["uploadType","value","readonly","maxNumber"],G=function(e){var t=e.uploadType,n=e.value,u=e.readonly,s=void 0!==u&&u,d=e.maxNumber,f=(0,i.Z)(e,H),h=o.useState(!1),p=(0,c.Z)(h,2),v=p[0],m=p[1],g=o.useState(""),x=(0,c.Z)(g,2),y=x[0],b=x[1];return(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)(a.S2,(0,r.Z)({uploadType:t,readonly:s,value:n,maxNumber:d,onPreview:function(e){b(null==e?void 0:e.dataURL),m(!0)}},f,{children:s?null:"card"===t?(0,l.jsx)(a.JO,{type:"plus"}):"picture"===t||"text"===t?(0,l.jsx)(a.zx,{type:"primary",children:"\u65b0\u589e"}):null})),(0,l.jsx)(a.u_,{isOpen:v,onClosed:function(){return m(!1)},width:600,confirmButtonProps:{style:{display:"none"}},children:(0,l.jsx)("img",{crossOrigin:"anonymous",src:y,alt:"",style:{width:"100%",height:"100%"}})})]})};function K(e,t,n,i){var u="";if("radio"===e||"searchSelect"===e||"select"===e){var s=n.filter((function(e){return e.value===t}))||[];s.length>0&&(u=s[0].label)}else if("checkbox"===e){var c,d=(0,q.Z)(n);try{for(d.s();!(c=d.n()).done;){var f=c.value;t.includes(f.value)&&(u+=""+f.label)}}catch(p){d.e(p)}finally{d.f()}}else if("switch"===e)u=t?"\u662f":"\u5426";else if("timePicker"===e)u=t&&(0,a.zW)("HH:mm:ss",new Date(t));else if("monthPicker"===e)u=t&&(0,a.zW)("YYYY-MM",new Date(t));else if("dateInput"===e)u=t&&(0,a.zW)((null==i?void 0:i.format)||"YYYY-MM-DD",new Date(t));else if("upload"===e){var h=(0,r.Z)({value:t,uploadType:null==i?void 0:i.uploadType,readonly:!0,showFileIcon:{showPreviewIcon:!0,showRemoveIcon:!1}},i);u=(0,l.jsx)(G,(0,r.Z)({},h))}else if("selectMultiple"===e){u=(t&&t.length>0&&t.map((function(e){return e.label}))||[]).join(";")}else"rate"===e?(console.log("initialValue",t),u=(0,l.jsx)(a.j8,{value:t,readOnly:!0})):u="string"===typeof t||"number"===typeof t||o.isValidElement(t)?t:"";return u}function Q(e){return"string"===typeof e||"number"===typeof e}var $=function(e){void 0===e&&(e=[]);var t={};return e.forEach((function(e){var n=e.rules,r=e.key,i=e.value;n&&n.length>0&&n.forEach((function(e){var n,o=e.validator,a=void 0===o?null:o,l=e.message,u=void 0===l?"":l,s=e.required,c=e.pattern,d=void 0===c?null:c;(!s||(n=i,"[object Object]"!=Object.prototype.toString.call(n))||!function(e){for(var t in e)return!1;return!0}(i)&&i)&&(!s||!function(e){return"[object Array]"==Object.prototype.toString.call(e)}(i)||0!==i.length&&i)?(s&&Q(i)&&!i||a&&!a(i)||Q(i)&&d&&!d.test(i))&&(t[r]=u):t[r]=u}))})),t};var ee=function(e){var t=e.formDatas,n=e.formfields,i=e.onSubmit,u=e.onChange,s=e.buttonsContainer,c=e.showSaveButton,d=void 0!==c&&c,f=e.showResetButton,h=void 0!==f&&f,p=e.saveButtonProps,v=void 0===p?{}:p,m=e.resetButtonProps,g=void 0===m?{}:m,x=e.type,y=(e.form,(0,o.useRef)()),b=(0,o.useContext)(Y),j=b.setErrors,S=b.setFormInstance,Z=b.formList,k=b.setFormList;return(0,o.useEffect)((function(){return null==S?void 0:S(y)}),[y]),(0,o.useEffect)((function(){if(y){if("array"===x){var e=Z;e.push(y),null==k||k((0,X.Z)(e))}return function(){return null==k?void 0:k([])}}}),[x]),(0,l.jsx)(a.l0,{ref:y,style:{background:"#fff",paddingBottom:10,marginBottom:14},resetOnSubmit:!1,onSubmit:function(e){var n=e.initial,r=e.current;if(i)null==i||i(n,r);else{var o=t&&t.length>0&&t.map((function(e){return{key:e.key,value:r[e.key],rules:e.rules}}))||[],a=$(o);if(Object.keys(a).length>0){var l=new Error;throw l.filed=a,l}}},onChange:function(e){var t=e.initial,n=e.current;return null==u?void 0:u(t,n)},onSubmitError:function(e){return e.filed?(j((0,r.Z)({},e.filed)),(0,r.Z)({},e.filed)):null},fields:n,children:function(e){var t=e.fields,n=(e.state,e.canSubmit),i=e.resetForm;return(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)(a.X2,{gutter:10,children:Object.keys(t).map((function(e){var n,r,i=(null==(n=t[e])||null==(r=n.props)?void 0:r.span)||"8";return(0,l.jsx)(a.JX,{span:i,children:t[e]},e)}))}),(0,l.jsxs)("div",{className:"w-form-item-center",style:(0,r.Z)({},s),children:[(0,l.jsx)(a.zx,(0,r.Z)({style:{display:d?"flex":"none"},disabled:!n(),htmlType:"submit"},v,{children:v.label||"\u63d0\u4ea4"})),(0,l.jsx)(a.zx,(0,r.Z)({style:{display:h?"flex":"none"},onClick:i},g,{children:g.label||"\u91cd\u7f6e"}))]})]})}})},te=function(e){var t=e.title,n=e.formDatas,i=e.readOnlyProps;return(0,l.jsx)(a.w5,(0,r.Z)({bordered:!0,title:t},i,{children:null==n?void 0:n.map((function(e,t){var n=e.hide,r=e.label,i=e.widget,o=e.initialValue,u=void 0===o?"":o,s=e.option,c=void 0===s?[]:s,d=e.readSpan,f=void 0===d?1:d,h=e.widgetProps,p=void 0===h?{}:h;return n?null:(0,l.jsx)(a.w5.Item,{span:f,label:r,children:K(i,u,c,p)},t)}))}))},ne=["option"],re=function(e){var t=e.option,n=(0,i.Z)(e,ne);return(0,l.jsx)(a.XZ.Group,(0,r.Z)({},n,{children:t&&t.map((function(e){return(0,l.jsx)(a.XZ,{value:e.value,children:e.label},e.value)}))}))};var ie=function(e){var t=e.option,n=void 0===t?[]:t,r=e.onChange,i=e.onSelect,u=e.onSearch,s=e.onBlur,d=e.onClear,f=e.value,h=void 0===f?[]:f,p=e.loading,v=void 0===p||p,m=e.disabled,g=void 0!==m&&m,x=e.placeholder,y=void 0===x?"\u8bf7\u9009\u62e9":x,b=e.allowClear,j=void 0!==b&&b,S=e.noContent,Z=e.showSearch,k=void 0!==Z&&Z,w=e.maxCount,O=void 0===w?3:w,P=(0,o.useState)(h),C=(0,c.Z)(P,2),I=C[0],E=C[1],F=(0,o.useState)(""),A=(0,c.Z)(F,2),B=A[0],M=A[1],R=(0,o.useState)(!1),V=(0,c.Z)(R,2),T=V[0],_=V[1],D=I.length===O,N=function(e,t){var n=t.target;"search"===e&&(_(!0),M(n.value),null==u||u(n.value)),"blur"===e&&(M(""),_(!1),null==s||s()),"clean"===e&&(M(""),E([]),_(!1),null==d||d([]))},J=o.useMemo((function(){var e=I&&I.length>0&&I.map((function(e){return e.label}))||[];return T?B:e.join(";")}),[I,B,T]);function z(){return!T&&j&&I.length>0?"close":T&&v?"loading":"search"}return(0,l.jsx)(a.J2,{trigger:"focus",placement:"bottomLeft",content:n&&n.length>0?(0,l.jsx)(a.v2,{style:{minHeight:25,maxHeight:150,overflowY:"scroll",width:200},children:n.map((function(e,t){var o=I&&-1!==I.findIndex((function(t){return t.value===e.value}));return(0,l.jsx)(a.v2.Item,{style:{marginBottom:n.length-1===t?0:5},active:o,text:e.label,disabled:e.disabled,onClick:function(t){_(!1),t.preventDefault(),function(e){var t=(0,X.Z)(I);t.find((function(t){return t.value===e.value}))||D?t=t.filter((function(t){return t.value!==e.value})):t.push(e),E(t),null==r||r(t),null==i||i(e)}(e)}},e.value)}))}):S||(0,l.jsx)(a.aN,{loading:v,color:"black",children:(0,l.jsxs)("div",{style:{padding:10,height:70,width:200,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:12,color:"#888"},children:[(0,l.jsx)(a.JO,{type:"file-unknown",style:{fontSize:20}}),"\u6682\u65e0\u6570\u636e"]})}),visibleArrow:!1,children:(0,l.jsx)(a.II,{readOnly:!k,disabled:g,placeholder:y,value:J,onChange:function(e){return N("search",e)},onBlur:function(e){return N("blur",e)},addonAfter:(0,l.jsx)(a.JO,{type:z(),spin:v,onClick:"close"===z()?N.bind(this,"clean"):void 0})})})},oe=["hide","widgetProps","key","widget","label","initialValue"];function ae(e){var t,n=e.formDatas,u=void 0===n?[]:n,s=e.title,c=void 0===s?"":s,d=e.formType,f=void 0===d?"card":d,h=e.readOnly,p=void 0!==h&&h,v=e.customWidgetsList,m=void 0===v?{}:v,g=e.form,x=e.cardProps,y=void 0===x?{}:x,b=e.collapseProps,j=void 0===b?{}:b,S=e.collapsePanelProps,Z=void 0===S?{}:S,k=(0,o.useMemo)((function(){return function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={});var o=(0,r.Z)({input:a.II,radio:A,checkbox:re,switch:a.rs,select:E,searchSelect:a.ul,selectMultiple:ie,textarea:a.gx,dateInput:a.Wr,timePicker:a.jI,monthPicker:a.lH,upload:G,rate:a.j8},n),u={};return t.forEach((function(t){if(e||delete t.readSpan,t){var n=t.hide,a=void 0!==n&&n,s=t.widgetProps,c=t.key,d=t.widget,f=t.label,h=t.initialValue,p=(0,i.Z)(t,oe);if(!a){var v=c,m=o[d];u[v]=(0,r.Z)({label:f,children:(0,l.jsx)(m,(0,r.Z)({},s))},p,{initialValue:h})}}})),u}(p,u,m)}),[u]),w=g||{},O=w.setErrors,P=w.setFormInstance,C=w.formList,I=w.setFormList,F=(0,o.useMemo)((function(){return{setFormInstance:P,setErrors:O,formList:C,setFormList:I}}),[g]),B=(0,r.Z)({},e,{formfields:k}),M=p?void 0:c,R=p?(0,l.jsx)(te,(0,r.Z)({},e)):(0,l.jsx)(ee,(0,r.Z)({},B));return t="card"===f?(0,l.jsx)(a.Zb,(0,r.Z)({title:M},y,{children:R})):"collapse"===f?(0,l.jsx)(a.UO,(0,r.Z)({title:M,activeKey:["1"]},j,{children:(0,l.jsx)(a.UO.Panel,(0,r.Z)({header:c},Z,{children:R}),"1")})):R,(0,l.jsx)(Y.Provider,{value:F,children:t})}var le=function(){var e=(0,o.useState)(null),t=(0,c.Z)(e,2),n=t[0],r=t[1],i=(0,o.useState)(null),a=(0,c.Z)(i,2),l=a[0],u=a[1],s=(0,o.useState)([]),d=(0,c.Z)(s,2);return{submitvalidate:function(){var e;return null==n||null==(e=n.current)?void 0:e.onSubmit()},getErrors:function(){return l},getFieldValues:function(){var e;return(null==(e=n.current)?void 0:e.getFieldValues())||{}},formList:d[0],setFormInstance:r,setErrors:u,setFormList:d[1]}}},53260:function(){}}]);
//# sourceMappingURL=336.2c06b312.chunk.js.map