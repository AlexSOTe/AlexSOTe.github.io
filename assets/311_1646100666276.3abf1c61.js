const u=[{id:"0",title:"document.execCommand()\u590D\u5236\u9875\u9762\u4E1C\u897F\u5931\u8D25",desc:"",reason:"",solution:"\u4F7F\u7528navigator.clipboard API",isResolve:!1},{id:"1",title:"post\u65B9\u5F0F\u4E0B\u8F7Dexcel\u6587\u4EF6\u4E71\u7801",desc:"js\u4E0B\u8F7D\u6587\u4EF6POST\u65B9\u6CD5\uFF0C\u540E\u53F0\u8FD4\u56DE\u4E00\u4E2A\u6D41\uFF0C\u4E0B\u8F7D\u4E0B\u6765\u6587\u4EF6\u5185\u5BB9\u4E71\u7801",reason:"\u672A\u8BBE\u7F6EresponseType",solution:"axios\u8BBE\u7F6E\u7B2C\u4E09\u4E2A\u53C2\u6570\u4E3A { responseType: 'blob' }",isResolve:!0},{id:"2",title:"navigator.clipboard.writeText\u8C03\u7528\u5931\u8D25",desc:"navigator.clipboard.writeText\u8C03\u7528\u65F6\u62A5writeText of undefined",reason:"\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6216\u8005PromissionsAPI\u53EA\u80FD\u5728https\u7684\u65F6\u5019\u8C03\u7528",solution:`\u6539\u7528
const input = document.getElementById('shareInput');
document.body.appendChild(input);
input.value = url;
input.select();
document.execCommand('Copy');
\u8001API`,isResolve:!0},{id:"3",title:"\u5217\u8868\u5206\u9875\u6570\u636E\u524D\u7AEF\u4F7F\u7528localStorage\u6682\u5B58\u7136\u540E\u540C\u610F\u63D0\u4EA4\u7684\u65F6\u5019\uFF0C\u4F1A\u6709\u5F88\u591A\u9EBB\u70E6\u95EE\u9898",desc:"\u6BCF\u6B21\u4FEE\u6539\u90FD\u9700\u8981\u505A\u53D6\u51FA\u6765\u3001\u4FEE\u6539\u3001\u5B58\u5165\u64CD\u4F5C\uFF0C\u8981\u8003\u8651\u5230\u6BCF\u4E2A\u6570\u636E\u7684\u5404\u79CD\u72B6\u6001\u7684\u8BFB\u53D6\u4FEE\u6539\u8FD8\u539F\uFF0C\u6D89\u53CA\u5230\u5206\u9875\u7684\u65F6\u5019\u4E5F\u65F6\u5F88\u96BE\u5904\u7406",reason:"\u524D\u7AEF\u591A\u4E86\u5F88\u591A\u4E0D\u5FC5\u8981\u7684\u5DE5\u4F5C\u91CF\uFF0C\u5C24\u5176\u662F\u5B58\u53D6\u7684\u6570\u636E\u662F\u591A\u7EF4\u6570\u7EC4\u7684\u65F6\u5019\uFF0C\u7B80\u76F4\u8BA9\u4EBA\u53D1\u75AF TvT",solution:"\u5217\u8868\u6570\u636E\u4FEE\u6539\u7684\u524D\u7AEF\u6682\u5B58\u65B9\u5F0F\u4E0D\u5408\u7406\uFF0C\u4E0D\u5E94\u8BE5\u4F7F\u7528",isResolve:!0}];export{u as J};
