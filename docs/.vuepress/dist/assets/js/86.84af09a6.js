(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{214:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),s("ul",[s("li",[t._v("必须指定样式中的宽度和高度，否则无法工作。")]),s("li",[t._v("不支持内嵌子组件。")]),s("li",[t._v("图片地址，建议以CDN的形式引入，但是也可以指定为一个相对路径，参考: "),s("a",{attrs:{href:"http://weex.apache.org/cn/guide/advanced/path.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("资源路径"),s("OutboundLink")],1),t._v(" 。")]),s("li",[t._v("Weex 没有内置的图片下载器，因为相关的下载、缓存、解码机制非常复杂，一些开源的图片库已经处理得很好， 所以在使用 "),s("code",[t._v("<image>")]),t._v(" 之前，请在客户端先接入相应的图片处理工具，参考: "),s("a",{attrs:{href:"http://weex.apache.org/cn/references/android-apis.html#Adapter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"http://weex.apache.org/cn/references/ios-apis.html#Handler-like-Android-Adapter",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS"),s("OutboundLink")],1),t._v("。")]),s("li",[t._v("支持的图片格式——Weex 没有提供必须支持的图片格式列表，主要依赖于你正在使用的图片处理工具。")])])]),t._m(3),t._m(4),t._m(5),t._m(6),s("ul",[s("li",[t._v("contain：缩放图片以完全装入 "),s("code",[t._v("<image>")]),t._v(" 区域，可能背景区部分空白。 ("),s("a",{attrs:{href:"http://dotwe.org/vue/89be94dcd1fec73b77246ec46c678914",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),s("OutboundLink")],1),t._v(")")]),s("li",[t._v("cover：缩放图片以完全覆盖 "),s("code",[t._v("<image>")]),t._v(" 区域，可能图片部分看不见。 ("),s("a",{attrs:{href:"http://dotwe.org/vue/bcc12eb2321c1416fee518735646e059",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),s("OutboundLink")],1),t._v(")")]),s("li",[t._v("stretch："),s("code",[t._v("默认值")]),t._v("，按照 "),s("code",[t._v("<image>")]),t._v(" 区域的宽高比例缩放图片。("),s("a",{attrs:{href:"http://dotwe.org/vue/dcf82a112bd49139685753ba20909a20",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),s("OutboundLink")],1),t._v(")")])]),t._m(7),s("p",[s("code",[t._v("<image>")]),t._v(" 组件除了支持 "),s("router-link",{attrs:{to:"/guide/common-events.html"}},[t._v("通用事件")]),t._v("外，还支持 "),s("code",[t._v("load事件")]),t._v("：当加载完 "),s("code",[t._v("src")]),t._v(" 指定的图片时，"),s("code",[t._v("load")]),t._v(" 事件将被触发。")],1),t._m(8),t._m(9),t._m(10),s("p",[s("a",{attrs:{href:"http://dotwe.org/vue/4996b4d1e055168e0cb5cbf817b42249",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考示例"),s("OutboundLink")],1),s("IPhoneImg",{attrs:{imgSrc:"https://img.alicdn.com/tfs/TB1lRQ4n9zqK1RjSZFLXXcn2XXa-544-960.gif"}})],1),t._m(11),s("p",[t._m(12),s("Badge",{attrs:{text:"0.16.0+",type:"warn",vertical:"middle"}}),s("br"),t._v("\n保存图片内容到本地文件或相册，此操作可能需要设备相关权限。")],1),s("p",[t._v("使用方法：在 "),s("code",[t._v("<image>")]),t._v(" 标签上增加 "),s("code",[t._v("ref")]),t._v(" 属性 (Vue.js "),s("a",{attrs:{href:"https://vuejs.org/v2/guide/docss-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements",target:"_blank",rel:"noopener noreferrer"}},[t._v("Child Component Refs"),s("OutboundLink")],1),t._v(")")]),t._m(13),s("p",[t._v("获取组件引用并使用 "),s("code",[t._v("save")]),t._v(" 方法，查看 "),s("a",{attrs:{href:"http://dotwe.org/vue/204cafec46aa8e23485a94cfb2c39cfa",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整示例"),s("OutboundLink")],1),t._v(":")]),t._m(14),s("p",[t._v("参数说明：")]),t._m(15),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),s("p",[t._v("必须加入 NSPhotoLibraryAddUsageDescription (iOS 11) 以获得访问 iOS 系统相册权限。参考："),s("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cocoa Keys"),s("OutboundLink")],1),t._v("。")])]),t._m(16),s("p",[s("a",{attrs:{href:"http://dotwe.org/vue/11da331116b74515a4d74ae9707f85a9",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片 "),s("code",[t._v("contain")]),t._v(" 属性"),s("OutboundLink")],1),s("br"),s("a",{attrs:{href:"http://dotwe.org/vue/bcc12eb2321c1416fee518735646e059",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片 "),s("code",[t._v("cover")]),t._v(" 属性"),s("OutboundLink")],1),s("br"),s("a",{attrs:{href:"http://dotwe.org/vue/dcf82a112bd49139685753ba20909a20",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片 "),s("code",[t._v("stretch")]),t._v(" 属性"),s("OutboundLink")],1),s("br"),s("a",{attrs:{href:"http://dotwe.org/vue/204cafec46aa8e23485a94cfb2c39cfa",target:"_blank",rel:"noopener noreferrer"}},[t._v("组件方法 "),s("code",[t._v("save")]),t._v(" 示例"),s("OutboundLink")],1),s("br"),s("a",{attrs:{href:"http://dotwe.org/vue/213ef53ec275cbd550d9ebea9f81acf0",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("load")]),t._v(" 事件示例"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image","aria-hidden":"true"}},[this._v("#")]),this._v(" <image>")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("<image>")]),this._v(" 用于在界面中显示单个图片。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),s("span",{attrs:{class:"token style-attr language-css"}},[s("span",{attrs:{class:"token attr-name"}},[t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token property"}},[t._v("width")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("500px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("500px")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://vuejs.org/images/logo.png"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("属性名")]),s("th",{staticStyle:{width:"40%"}},[t._v("说明")]),s("th",[t._v("类型")]),s("th",{staticStyle:{width:"33%"}},[t._v("值")]),s("th",{staticStyle:{width:"10%"}},[t._v("默认值")])])]),s("tbody",[s("tr",[s("td",[t._v("src")]),s("td",[t._v("要显示图片的 URL")]),s("td",[t._v("string")]),s("td",[t._v("{ URL / Base64 }")]),s("td",[t._v("-")])]),s("tr",[s("td",[t._v("placeholder")]),s("td",[t._v("占位图的 URL，当由 "),s("code",[t._v("src")]),t._v(" 表示的图片下载完成并展示后将被删除")]),s("td",[t._v("string")]),s("td",[t._v("{ URL / Base64 }")]),s("td",[t._v("-")])]),s("tr",[s("td",[t._v("resize")]),s("td",[t._v("说明见下文")]),s("td",[t._v("string")]),s("td",[t._v("cover / contain / stretch")]),s("td",[t._v("stretch")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"resize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resize","aria-hidden":"true"}},[this._v("#")]),this._v(" resize")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1Lik8nVzqK1RjSZFCXXbbxVXa-1620-538.png",width:"700"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("load")]),this._v(" 事件参数 "),a("code",[this._v("event")]),this._v("：")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("success："),s("code",[t._v("{ Boolean }")]),t._v("，标记图片是否成功加载")]),s("li",[t._v("size："),s("code",[t._v("{ Object }")]),t._v("，加载的图片大小对象\n"),s("ul",[s("li",[t._v("naturalWidth: "),s("code",[t._v("{ Number }")]),t._v(" 图片宽度，如果图片加载失败则为0")]),s("li",[t._v("naturalHeight: "),s("code",[t._v("{ Number }")]),t._v(" 图片高度，如果图片加载失败则为0")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@load")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onload"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token style-attr language-css"}},[s("span",{attrs:{class:"token attr-name"}},[t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token property"}},[t._v("width")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("300px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("300px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://gw.alicdn.com/tps/TB1bEMYKXXXXXaLaXXXXXXXXXXX-360-388.png"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n  module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    methods "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      onload "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"组件方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件方法")])},function(){var t=this.$createElement,a=this._self._c||t;return a("strong",[a("code",[this._v("save")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("poster"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("path/to/image.png"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" $image "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("poster\n$image"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("save")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Do something to hanlde success")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errorDesc"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Do something to hanlde failure")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("callback: "),s("code",[t._v("{ Function }")]),t._v(" 在图片被写入到本地文件或相册后的回调，回调参数\n"),s("ul",[s("li",[t._v("result: "),s("code",[t._v("{ Object }")]),t._v(" 回调结果对象，属性列表\n"),s("ul",[s("li",[t._v("success: "),s("code",[t._v("{ Boolean }")]),t._v(" 标记图片是否已写入完成")]),s("li",[t._v("errorDesc: "),s("code",[t._v("{ String }")]),t._v(" 如果图像没有成功写入，该字符串包含了详细的错误描述")])])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Demo")])}],!1,null,null,null);e.options.__file="image.md";a.default=e.exports}}]);