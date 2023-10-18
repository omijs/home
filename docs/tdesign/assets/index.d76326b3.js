import{H as p,p as u,W as E,$ as A,D as B,c as m}from"./index.79a2e431.js";import"./index.2c50cc92.js";import"./space.81e99772.js";import"./button.d4c0131e.js";import"./index.ed35924c.js";import{p as g}from"./marked.esm.01ee1597.js";import"./clsx.f76af8a1.js";import"./lodash.966b3234.js";import"./index.01b533f1.js";import"./parseTNode.6312bff6.js";import"./loading.67f1284a.js";import"./dom.ca39bf0a.js";import"./helper.a6745112.js";var h=Object.defineProperty,D=Object.getOwnPropertyDescriptor,C=(s,t,n,o)=>{for(var e=o>1?void 0:o?D(t,n):t,r=s.length-1,i;r>=0;r--)(i=s[r])&&(e=(o?i(t,n,e):i(e))||e);return o&&e&&h(t,n,e),e};let c=class extends E{render(){return u(u.f,null,u("t-message",{class:"top",theme:"info",content:"\u8C03\u7528\u5173\u95ED\u51FD\u6570\u5173\u95ED\u4FE1\u606F\u63D0\u793A\u6846"}))}};c.css=" .top{position:fixed;top:3%;left:45%;z-index:9999;display:none;}";c=C([A("message-close")],c);p(u("message-close",null),"body");var y=Object.defineProperty,T=Object.getOwnPropertyDescriptor,f=(s,t,n,o)=>{for(var e=o>1?void 0:o?T(t,n):t,r=s.length-1,i;r>=0;r--)(i=s[r])&&(e=(o?i(t,n,e):i(e))||e);return o&&e&&y(t,n,e),e};let F=class extends E{render(){return u(u.f,null,u("t-space",{class:"all",direction:"vertical",size:"medium"},u("t-message",{duration:1e3,theme:"info",content:"\u8FD9\u662F\u7B2C\u4E00\u6761\u6D88\u606F"}),u("t-message",{duration:2e3,theme:"warning",content:"\u8FD9\u662F\u7B2C\u4E8C\u6761\u6D88\u606F"}),u("t-message",{duration:3e3,theme:"error",content:"\u8FD9\u662F\u7B2C\u4E09\u6761\u6D88\u606F"})))}};F.css=`
    .all{position:fixed;top:3%;left:45%;z-index:9999;display:none;}
    `;F=f([A("message-close-all")],F);p(u("message-close-all",null),"body");var l;const b=g(`
## API
### Message Props

\u540D\u79F0 | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u8BF4\u660E | \u5FC5\u4F20
--  |  --  |  --  |  --  |  -- 
className |	String |	- |	\u7C7B\u540D |	N
style |	Object |	- 	| \u6837\u5F0F\uFF0CTS \u7C7B\u578B\uFF1AReact.CSSProperties |	N
closeBtn	| TNode	| undefined |	\u5173\u95ED\u6309\u94AE\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u3002\u503C\u4E3A true \u663E\u793A\u9ED8\u8BA4\u5173\u95ED\u6309\u94AE\uFF0C\u503C\u4E3A false \u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE\u3002\u503C\u7C7B\u578B\u4E3A string \u5219\u76F4\u63A5\u663E\u793A\u503C\uFF0C\u5982\uFF1A\u201C\u5173\u95ED\u201D\u3002\u4E5F\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u6309\u94AE\u3002TS \u7C7B\u578B\uFF1Astring - boolean - TNode\u3002\u901A\u7528\u7C7B\u578B\u5B9A\u4E49 | N
content |	TNode |	- |	\u7528\u4E8E\u81EA\u5B9A\u4E49\u6D88\u606F\u5F39\u51FA\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1Astring - TNode\u3002\u901A\u7528\u7C7B\u578B\u5B9A\u4E49 |	N
duration |	Number | 3000 |	\u6D88\u606F\u5185\u7F6E\u8BA1\u65F6\u5668\uFF0C\u8BA1\u65F6\u5230\u8FBE\u65F6\u4F1A\u89E6\u53D1 duration-end \u4E8B\u4EF6\u3002\u5355\u4F4D\uFF1A\u6BEB\u79D2\u3002\u503C\u4E3A 0 \u5219\u8868\u793A\u6CA1\u6709\u8BA1\u65F6\u5668\u3002|	N
icon |	TNode |	true |	\u7528\u4E8E\u81EA\u5B9A\u4E49\u6D88\u606F\u524D\u9762\u7684\u56FE\u6807\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E theme \u8BBE\u5B9A\u7684\u56FE\u6807\u3002\u503C\u4E3A false \u5219\u4E0D\u663E\u793A\u56FE\u6807\uFF0C\u503C\u4E3A true \u663E\u793A theme \u8BBE\u5B9A\u56FE\u6807\u3002TS \u7C7B\u578B\uFF1Aboolean - TNode\u3002\u901A\u7528\u7C7B\u578B\u5B9A\u4E49 |	N
theme |	String |	info |	\u6D88\u606F\u7EC4\u4EF6\u98CE\u683C\u3002\u53EF\u9009\u9879\uFF1Ainfo/success/warning/error/question/loading\u3002TS \u7C7B\u578B\uFF1AMessageThemeList type MessageThemeList = 'info' -'success' - 'warning' - 'error' - 'question' - 'loading'\u3002\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49 |	N
onClose |	Function ||	TS \u7C7B\u578B\uFF1A(context: { trigger: 'close-click' - 'duration-end', e?: MouseEvent }) => void \u5173\u95ED\u6D88\u606F\u65F6\u89E6\u53D1 |	N
onCloseBtnClick |	Function ||	TS \u7C7B\u578B\uFF1A(context: { e: MouseEvent }) => void \u5F53\u5173\u95ED\u6309\u94AE\u5B58\u5728\u65F6\uFF0C\u7528\u6237\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u89E6\u53D1 |	N
onDurationEnd |	Function ||	TS \u7C7B\u578B\uFF1A() => void \u8BA1\u65F6\u7ED3\u675F\u540E\u89E6\u53D1 | 	N
`);let a=0,d=document.querySelector("body > message-close").shadowRoot.querySelector("t-message");document.querySelector("body > message-close-all").shadowRoot.querySelector("t-space");document.querySelector("body");B("page-message",(l=class extends E{constructor(){super(...arguments),this.tab=["demo","api","design"],this.tdDocHeader=m(),this.tdDocTabs=m(),this.updateTab=s=>{this.updateProps({tab:s})},this.closeToggle=()=>{a===1?(a=0,d.style.display="none"):(a=1,d.style.display="block")},this.openAll=()=>{},this.closeAll=()=>{}}isShow(s){return this.props.tab===s?{display:"block"}:{display:"none"}}installed(){const s=this.tdDocTabs.current;s.onchange=({detail:t})=>{this.updateTab(t)}}render(s,t){return u(u.f,null,u("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),u("div",{style:"padding:24px"},u("h2",null,"Message\u5168\u5C40\u63D0\u793A"),u("demo-wrapper",null,u("t-space",{direction:"vertical",size:"large"},u("t-message",{theme:"info",content:"This is my info"}),u("t-message",{theme:"success",content:"This is my success"}),u("t-message",{theme:"warning",content:"This is my warning"}),u("t-message",{theme:"error",content:"This is my error"}))),u("h2",null,"\u5E26\u5173\u95ED\u6309\u94AE\u7684\u5168\u5C40\u63D0\u793A"),u("demo-wrapper",null,u("t-space",{direction:"vertical",size:"large"},u("t-message",{theme:"info",content:"This is my info",closeBtn:!0}),u("t-message",{theme:"success",content:"This is my success",closeBtn:!0}),u("t-message",{theme:"warning",content:"This is my warning",closeBtn:!0}),u("t-message",{theme:"error",content:"This is my error",closeBtn:!0}))),u("h2",null,"\u52A0\u8F7D\u76F8\u5E94\u65F6\u95F4\u81EA\u52A8\u5173\u95ED"),u("demo-wrapper",null,u("t-space",{direction:"vertical",size:"large"},u("t-message",{duration:3e3,theme:"info",content:"This is my info (3s)"}),u("t-message",{duration:5e3,theme:"success",content:"This is my success (5s)"}),u("t-message",{duration:8e3,theme:"warning",content:"This is my warning (8s)"}),u("t-message",{duration:1e4,theme:"error",content:"This is my error (10s)"}))),u("h2",null,"\u4F7F\u7528\u5173\u95ED\u51FD\u6570\u63A7\u5236\u5168\u5C40\u63D0\u793A"),u("demo-wrapper",null,u("t-button",{theme:"primary",onClick:this.closeToggle},"\u81EA\u7531\u63A7\u5236\u5173\u95ED\u65F6\u673A\uFF08\u6253\u5F00/\u5173\u95ED\uFF09"),u("messsage-close",null)),u("h2",null,"\u5173\u95ED\u591A\u6761\u5168\u5C40\u63D0\u793A"),u("demo-wrapper",null,u("div",null,"\u5F85\u5B8C\u5584"),u("t-space",null,u("t-button",{theme:"primary",onClick:this.openAll},"\u70B9\u51FB\u6253\u5F00\u591A\u4E2A\u6D88\u606F"),u("t-button",{theme:"primary",onClick:this.closeAll},"\u70B9\u51FB\u5173\u95ED\u6240\u6709\u6D88\u606F")),u("message-close-all",null)),u("div",{direction:"vertical",style:"width:100%",dangerouslySetInnerHTML:{__html:b}})))}},l.defaultProps={tab:"demo"},l.propTypes={tab:String},l));
