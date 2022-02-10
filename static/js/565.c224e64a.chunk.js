"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[565],{5565:function(n,t,e){e.r(t),t.default='\u6743\u9650\u7ec4\u4ef6\n===\n\n## Installation\n\n```bash\nnpm i @uiw-admin/authorized --save\n```\n\n## AuthPage \u9875\u9762\u6743\u9650\u7ec4\u4ef6\n\n```ts\ninterface AuthorizedProps {\n  /** \u662f\u5426\u5df2\u7ecf\u767b\u5f55 */ \n  authority?: boolean;\n  children: JSX.Element;\n  /** \u672a\u767b\u5f55\u91cd\u5b9a\u5411\u8def\u5f84 \u9ed8\u8ba4 /login */ \n  redirectPath?: string;\n}\n```\n\n```tsx\nimport AuthPage  from "@uiw-admin/authorized"\n\nexport default ()=>{\n\n  return <AuthPage authority={false} redirectPath="/login">\u5c55\u793a</AuthPage>\n\n}\n\n```\n\n## getAuthPath\n\n> \u5224\u65ad\u662f\u5426\u6709\u6743\u9650\n\n```ts\n\ntype getAuthPath = (path?: string)=>boolean \n\n```\n\n```ts\nimport {getAuthPath}  from "@uiw-admin/authorized"\n\nconst isAuth = getAuthPath("/api/path")\n\n```\n\n\n## AuthBtn \n\n> \u5916\u5c42\u5d4c\u5957 \u7ec4\u4ef6\uff0c\u5224\u65ad\u5b50\u7ec4\u4ef6\u662f\u5426\u6709\u6743\u9650\u5c55\u793a\u6216\u4f7f\u7528\n\n```ts\nexport interface AuthBtnProps {\n  /** \u8def\u5f84 */\n  path?: string;\n  /** \u7981\u7528 \u72b6\u6001 \u5c55\u793a   \u9002\u7528\u4e8e \u5b58\u5728 disabled \u5c5e\u6027\u7684\u7ec4\u4ef6  */\n  disabled?: boolean;\n  children: React.ReactNode;\n}\n```\n\n## \u6848\u4f8b\n\n```tsx\n\nimport React from "react"\nimport { getAuthPath,AuthBtn } from "@uiw-admin/authorized"\n\nconst Demos = ()=>{\n  return <div>\n    <AuthBtn path="/dom/save" >\n      \u5b50\u96c6\u6e32\u67d3\n    </AuthBtn>\n    <AuthBtn path="/dom/edit" disabled >\n      \u5b50\u96c6\u6e32\u67d32\n    </AuthBtn>\n  </div>\n}\nexport default Demos\n```\n\n## \u8d21\u732e\u8005\n\n\u611f\u8c22\u6240\u6709\u7684\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u5f00\u53d1\u8005\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u529b\u91cf\u3002\n\n<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">\n  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />\n</a>\n\n## License\n\nLicensed under the MIT License.'}}]);
//# sourceMappingURL=565.c224e64a.chunk.js.map