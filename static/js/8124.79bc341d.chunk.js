"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8124],{88124:function(e,n,r){r.r(n),n.default="# Drawer \u62bd\u5c49\n\u5c4f\u5e55\u8fb9\u7f18\u6ed1\u51fa\u7684\u6d6e\u5c42\u9762\u677f,\u96c6\u6210\u6743\u9650button\u6309\u94ae\u3002\n\n\u57fa\u4e8e[uiw/Drawer](https://uiwjs.github.io/#/components/drawer)\u548c[uiw/Button](https://uiwjs.github.io/#/components/button)\u5c01\u88c5\n- \u2705  \u652f\u6301\u539fuiw/Drawer\u548cuiw/Button\u53c2\u6570\n- \u2705  \u652f\u6301\u5feb\u901f\u751f\u6210button\u6309\u94ae\n- \u2705  button\u6309\u94ae\u7684\u6743\u9650\u63a7\u5236\n\n## \u4f55\u65f6\u4f7f\u7528\n\u62bd\u5c49\u4ece\u7236\u7a97\u4f53\u8fb9\u7f18\u6ed1\u5165\uff0c\u8986\u76d6\u4f4f\u90e8\u5206\u7236\u7a97\u4f53\u5185\u5bb9\u3002\u7528\u6237\u5728\u62bd\u5c49\u5185\u64cd\u4f5c\u65f6\u4e0d\u5fc5\u79bb\u5f00\u5f53\u524d\u4efb\u52a1\uff0c\u64cd\u4f5c\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5e73\u6ed1\u5730\u56de\u5230\u539f\u4efb\u52a1\u3002\n- \u5f53\u9700\u8981\u4e00\u4e2a\u9644\u52a0\u7684\u9762\u677f\u6765\u63a7\u5236\u7236\u7a97\u4f53\u5185\u5bb9\uff0c\u8fd9\u4e2a\u9762\u677f\u5728\u9700\u8981\u65f6\u547c\u51fa\u3002\u6bd4\u5982\uff0c\u63a7\u5236\u754c\u9762\u5c55\u793a\u6837\u5f0f\uff0c\u5f80\u754c\u9762\u4e2d\u6dfb\u52a0\u5185\u5bb9\u3002\n- \u5f53\u9700\u8981\u5728\u5f53\u524d\u4efb\u52a1\u6d41\u4e2d\u63d2\u5165\u4e34\u65f6\u4efb\u52a1\uff0c\u521b\u5efa\u6216\u9884\u89c8\u9644\u52a0\u5185\u5bb9\u3002\u6bd4\u5982\u5c55\u793a\u534f\u8bae\u6761\u6b3e\uff0c\u521b\u5efa\u5b50\u5bf9\u8c61\u3002\n\x3c!--ProDrawer--\x3e\n\n## \u57fa\u7840\u62bd\u5c49\n> \u57fa\u7840\u62bd\u5c49\uff0c\u70b9\u51fb\u89e6\u53d1\u6309\u94ae\u62bd\u5c49\u4ece\u53f3\u6ed1\u51fa\uff0c\u70b9\u51fb\u906e\u7f69\u533a\u5173\u95ed\u3002\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState } from 'react';\nimport { ProDrawer } from '@uiw-admin/components'\nimport { Button } from 'uiw'\nconst Demo = () => {\n  const [ drawerVisible,setDrawerVisible ] = useState( false )\n    return (\n     <div>\n       <ProDrawer visible={drawerVisible} onClose={()=>setDrawerVisible(false)}>\n        <div>\u57fa\u7840\u62bd\u5c49</div>\n       </ProDrawer>\n      <Button type=\"primary\" onClick={()=>setDrawerVisible(true)}>\u6253\u5f00\u5f39\u6846</Button>\n     </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n\n## \u9884\u8bbe\u5bbd\u5ea6\n> \u53ef\u901a\u8fc7width\u63a7\u5236Drawer\u5bbd(\u9ed8\u8ba4800px),\u4e5f\u53ef\u901a\u8fc7size\u63a7\u5236\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState } from 'react';\nimport { ProDrawer } from '@uiw-admin/components'\nimport { Button } from 'uiw'\nconst Demo = () => {\n  const [ drawerVisible,setDrawerVisible ] = useState( false )\n  const [ drawerVisible2,setDrawerVisible2 ] = useState( false )\n  const [ drawerVisible3,setDrawerVisible3 ] = useState( false )\n    return (\n     <div>\n       <ProDrawer visible={drawerVisible2} onClose={()=>setDrawerVisible2(false)}>\n        <div>800px</div>\n       </ProDrawer>\n       <ProDrawer width={1000} visible={drawerVisible} onClose={()=>setDrawerVisible(false)}>\n        <div>1000px</div>\n       </ProDrawer>\n       <ProDrawer size=\"small\" visible={drawerVisible3} onClose={()=>setDrawerVisible3(false)}>\n        <div>size-small</div>\n       </ProDrawer>\n      <Button type=\"primary\" onClick={()=>setDrawerVisible2(true)}>\u6253\u5f00\u5f39\u6846(800px)</Button>\n      <Button type=\"primary\" onClick={()=>setDrawerVisible(true)}>\u6253\u5f00\u5f39\u6846(1000px)</Button>\n      <Button type=\"primary\" onClick={()=>setDrawerVisible3(true)}>\u6253\u5f00\u5f39\u6846(size-small)</Button>\n     </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n## \u62bd\u5c49\u6309\u94ae\n>\u901a\u8fc7\u4f20\u9012buttons\u751f\u6210\u6309\u94ae,\u6309\u94ae\u7ee7\u627f\u4e86uiw/buttons,\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7show\u63a7\u5236\u6309\u94ae\u663e\u793a\u4e0e\u9690\u85cf\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState } from 'react';\nimport { ProDrawer } from '@uiw-admin/components'\nimport { Button } from 'uiw'\nconst Demo = () => {\n  const [ drawerVisible,setDrawerVisible ] = useState( false )\n  const [ isView ] = useState( false )\n    return (\n     <div>\n       <ProDrawer\n        visible={drawerVisible}\n        onClose={()=>setDrawerVisible(false)}\n        buttons={[\n          { label: '\u53d6\u6d88', type:\"primary\" , onClick: ()=>setDrawerVisible(false) },\n          { label: '\u4fdd\u5b58',type:\"primary\",show:false },\n        ]}\n      >\n        <div>\u96c6\u6210\u4e86Button</div>\n      </ProDrawer>\n      <Button type=\"primary\" onClick={()=>setDrawerVisible(true)}>\u6253\u5f00\u5f39\u6846</Button>\n     </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u8868\u5355\u62bd\u5c49\n> \u914d\u548cProForm\u4f7f\u7528(\u65b0\u589e;\u7f16\u8f91;\u67e5\u770b\u7b49\u4e1a\u52a1)\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState } from 'react';\nimport { ProDrawer,ProForm } from '@uiw-admin/components'\nimport { Button } from 'uiw'\nconst Demo = () => {\n  const [ drawerVisible,setDrawerVisible ] = useState( false )\n  const [ isView,setIsView] = useState( false )\n    return (\n     <div>\n       <ProDrawer \n          visible={drawerVisible} \n          onClose={()=>setDrawerVisible(false)}\n          buttons={[{ label: isView?'\u8868\u5355\u6a21\u5f0f':'\u67e5\u770b\u6a21\u5f0f', type:\"primary\" , onClick:()=>setIsView(!isView)}]}\n        >\n         <ProForm\n          readOnly={isView}\n          formType=\"pure\"\n          formDatas={ [\n             {\n               label: 'input',\n               key: 'input',\n               widget: 'input',\n               initialValue: '',\n               widgetProps: {},\n               span:\"24\",\n             },\n          ]}\n       />\n       </ProDrawer>\n      <Button type=\"primary\" onClick={()=>setDrawerVisible(true)}>\u6253\u5f00\u5f39\u6846</Button>\n     </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u62bd\u5c49\u6309\u94ae\u6743\u9650\n> \u6211\u4eec\u53ef\u4ee5\u901a\u8fc7path\u4e0e\u767b\u9646\u65f6\u83b7\u53d6\u7684\u6309\u94ae\u6743\u9650\u83dc\u5355\u8fdb\u884c\u5339\u914d,\u4ece\u800c\u63a7\u5236\u6309\u94ae\u7684\u6743\u9650\n```jsx\nimport ReactDOM from 'react-dom';\nimport React from 'react';\nimport { ProDrawer } from '@uiw-admin/components'\nimport { Button } from 'uiw'\nconst Demo = () => {\n    return (\n       <ProDrawer\n        visible={drawerVisible}\n        onClose={()=>setDrawerVisible(false)}\n        buttons={[\n          { label: '\u53d6\u6d88', type:\"primary\" , onClick: ()=>setDrawerVisible(false) },\n          {\n            label: '\u4fdd\u5b58',\n            type:\"primary\",\n            onClick: ()=>{},\n            path:\"/demo/drawer\"\n          },\n        ]}\n      >\n        <div>\u96c6\u6210\u4e86Button</div>\n      </ProDrawer>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n\n\n## Props\n\n#### \u57fa\u7840\u53c2\u6570\n[\u7ee7\u627f\u4e8euiw,\u8bf7\u53c2\u8003Drawer\u5176\u4f59\u53c2\u6570](https://uiwjs.github.io/#/components/drawer)\n\n| \u53c2\u6570    | \u8bf4\u660e     | \u7c7b\u578b           | \u9ed8\u8ba4\u503c |\n| :------ | :------- | :------------- | :----- |\n| visible | \u663e\u793a\u9690\u85cf | boolean        | -      |\n| title   | \u6807\u9898     | string         | -     |\n| onClose | \u5173\u95ed\u4e8b\u4ef6 | ()=>void       | null   |\n| width   | Drawer\u5bbd | number         | 1000   |\n| buttons | \u6309\u94ae\u96c6\u5408 | ButtonsProps[] | []     |\n\n\n#### ButtonsProps\n[\u7ee7\u627f\u4e8euiw,\u8bf7\u53c2\u8003Button\u5176\u4f59\u53c2\u6570](https://uiwjs.github.io/#/components/button)\n\n| \u53c2\u6570     | \u8bf4\u660e         | \u7c7b\u578b    | \u9ed8\u8ba4\u503c |\n| :------- | :----------- | :------ | :----- |\n| label    | \u6309\u94ae\u6587\u672c     | string  | -      |\n| show     | \u662f\u5426\u5c55\u793a\u6309\u94ae | boolean | true   |\n| path     | \u6743\u9650         | string  | -      |\n| disabled | \u662f\u5426\u7981\u7528     | boolean | false  |\n\n\n\n\n## \u8d21\u732e\u8005\n\n\u611f\u8c22\u6240\u6709\u7684\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u5f00\u53d1\u8005\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u529b\u91cf\u3002\n\n<a href=\"https://github.com/uiwjs/uiw-admin/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg\" />\n</a>\n\n## License\n\nLicensed under the MIT License."}}]);
//# sourceMappingURL=8124.79bc341d.chunk.js.map