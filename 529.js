"use strict";(self.webpackChunk_examples_base=self.webpackChunk_examples_base||[]).push([[529],{1254:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var l=i(6976),a=i(9372),n=i(2729),d=i(4080),r=i(523),o=i(3028),u=i(5642),s=i(4218),c=function(e){var t=e.updateData,i=(0,n.I0)(),l=(0,n.v9)((function(e){return e})).demo,c=l.drawerVisible,p=l.tableType,b=l.queryInfo,f=l.isView,m=function(){return i({type:"demo/clean"})},v=(0,u.ZP)(["add"===p&&r.$T||"edit"===p&&r.Vx,{method:"POST",body:b}],{revalidateOnMount:!1,revalidateOnFocus:!1,onSuccess:function(e){e&&200===e.code&&(a.gU.success({title:e.message}),m())}}).mutate,y=function(e,t){var i=t.isView;return[{label:"\u59d3\u6c0f",key:"firstName",widget:"input",initialValue:null===e||void 0===e?void 0:e.firstName,widgetProps:{disabled:i},hide:!0},{label:"\u540d\u5b57",key:"lastName",widget:"input",initialValue:null===e||void 0===e?void 0:e.lastName,widgetProps:{disabled:i}},{label:"\u90ae\u7bb1",key:"email",widget:"input",initialValue:null===e||void 0===e?void 0:e.email,widgetProps:{disabled:i}},{label:"\u6c34\u679c",key:"select",widget:"select",option:[{value:1,label:"\u82f9\u679c"},{value:2,label:"\u897f\u74dc"},{value:3,label:"\u9999\u8549"},{value:4,label:"\u4e1c\u5317\u5927\u51bb\u68a8"}],initialValue:null===e||void 0===e?void 0:e.select,widgetProps:{disabled:i}},{label:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",key:"id1",widget:"fileInput"}]}(b,{isView:f});return(0,s.jsx)(d.PB,{width:800,title:"add"===p?"\u65b0\u589e":"edit"===p?"\u7f16\u8f91":"\u67e5\u770b",visible:c,onClose:m,children:(0,s.jsx)(d.A9,{title:"\u57fa\u7840\u4fe1\u606f",onSubmit:function(e,t){var i={};if(null!==t&&void 0!==t&&t.lastName||(i.lastName="\u540d\u5b57\u4e0d\u80fd\u4e3a\u7a7a"),Object.keys(i).length>0){var l=new Error;throw l.filed=i,a.gU.error({title:"\u63d0\u4ea4\u5931\u8d25\uff01"}),l}v()},btns:[{btnType:"submit",label:"\u63d0\u4ea4\u8868\u5355",type:"primary"}],renderWidgetsList:{fileInput:a.S2},onChange:function(e,i){return t({queryInfo:(0,o.Z)((0,o.Z)({},b),i)})},formDatas:y})})},p=void 0,b=function(){var e=(0,n.I0)(),t=function(t){e({type:"demo/updateState",payload:t})},i=(0,d.x6)(r.Zp,{formatData:function(e){return{total:e.data.total,data:e.data.rows||[]}},query:function(e){return console.log(e),{page:e,pageSize:10}}});function o(i,l){t({isView:"view"===i,tableType:i}),"add"===i&&t({drawerVisible:!0,queryInfo:{}}),"edit"!==i&&"view"!==i||e({type:"demo/selectById",payload:{id:null===l||void 0===l?void 0:l.id}})}return(0,s.jsxs)(l.Fragment,{children:[(0,s.jsx)(d.QV,{btns:[{label:"\u65b0\u589e",type:"primary",onClick:o.bind(p,"add")},{label:"\u5bfc\u51fa",type:"danger",onClick:o.bind(p,"export")},{label:"\u5bfc\u5165",type:"dark",onClick:o.bind(p,"import")}],columns:[{title:"\u59d3\u540d",key:"name",props:{widget:"input",initialValue:"zzz",widgetProps:{preIcon:"user",placeholder:"\u8f93\u5165\u7528\u6237\u540d"}}},{title:"\u5e74\u9f84",key:"age",props:{widget:"select",option:[{label:"20",value:20},{label:"10",value:10}]}},{title:"\u5730\u5740",key:"info"},{title:"\u64cd\u4f5c",key:"edit",width:98,render:function(e,t,i){return(0,s.jsxs)("div",{children:[(0,s.jsx)(a.zx,{size:"small",type:"danger",onClick:o.bind(p,"edit",i),children:"\u7f16\u8f91"}),(0,s.jsx)(a.zx,{size:"small",type:"success",onClick:o.bind(p,"view",i),children:"\u67e5\u770b"})]})}}],table:i}),(0,s.jsx)(c,{updateData:t})]})}},523:function(e,t,i){i.d(t,{ZE:function(){return n},Vx:function(){return d},$T:function(){return r},Zp:function(){return o}});var l=i(3028),a=i(5228);function n(e){return(0,a.W)("/api/demo/selectById",{method:"POST",body:(0,l.Z)({},e)})}var d="/api/demo/update",r="/api/demo/insert",o="/api/demo/selectPage"}}]);
//# sourceMappingURL=529.js.map