(this["webpackJsonpcustom-lib"]=this["webpackJsonpcustom-lib"]||[]).push([[0],{36:function(e,t,a){e.exports=a(84)},41:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(30),r=a.n(c),o=(a(41),a(1)),i=a(4),s=a(11),d=(a(42),function(e){var t=e.label,a=e.sublabel,n=(e.children,Object(o.a)(e,["label","sublabel","children"])),c=Object(i.g)();return l.a.createElement("div",{className:"header-container"},l.a.createElement("div",{className:"header-content"},l.a.createElement(s.b,{to:"/home",className:"moi-button"},l.a.createElement("div",{className:"moi-icon"})),l.a.createElement("div",null,l.a.createElement("p",{className:"header-label"},t),l.a.createElement("p",{className:"header-sublabel"},a))),l.a.createElement("div",{className:"header-buttons"},l.a.createElement(s.b,{to:"/Home",className:"routes"},l.a.createElement("span",{className:"".concat("/Home"===c.pathname?"highlight":"")}," Home ")),l.a.createElement("p",Object.assign({className:"routes",onClick:function(){window.open("https://github.com/iremlaya/custom-lib","_blank")}},n),"GitHub"),l.a.createElement(s.b,{to:"/Demo",className:"routes"},l.a.createElement("span",{className:"".concat("/Demo"===c.pathname?"highlight":"")}," JotForm ")),l.a.createElement(s.b,{to:"/About",className:"routes"},l.a.createElement("span",{className:"".concat("/About"===c.pathname?"highlight":"")}," About "))))});d.defaultProps={label:"Header"};var u=d,m=a(3),f=a(14),b=a(2),p=a(32),v=a(33),h=a(35),E=a(34),y={required:{rule:function(){return/\S/},formatter:function(e){return"".concat(e," is required.")}},numeric:{rule:function(){return/^\d+$/},formatter:function(e){return"".concat(e," should contain only numbers.")}},email:{rule:function(){return/\S+@\S+\.\S+/},formatter:function(e){return"".concat(e," should be valid.")}},phone:{rule:function(){return/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/},formatter:function(e){return"".concat(e," should be valid.")}}},g=(a(47),Object(n.createContext)({fields:{},errors:{}})),j=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;Object(p.a)(this,a),(n=t.call(this,e)).validateField=function(e){for(var t="",a=n.state.fields[e],l=a.value,c=a.validate,r=a.displayName,o=a.customRules,i=void 0===o?{}:o,s=c?c.split("|"):"",d=[],u=0;u<s.length;u++){var m=s[u];""!==m&&d.push(m)}if(d.length){for(var p in d){var v=d[p],h=y[v]||i[v];if("required"!==v&&!l||h.rule().test(l.toString())||(console.log("error"),t=h.formatter.apply(null,[r||e])),""!==t)break}n.setState((function(a){return Object(b.a)(Object(b.a)({},a),{},{errors:Object(b.a)(Object(b.a)({},a.errors),{},Object(f.a)({},e,t))})}))}},n.setFields=function(e,t){var a=t.id,l=t.value;e&&e.persist();var c=n.state.fields[a];n.addField({field:Object(b.a)(Object(b.a)({},c),{},{value:e?e.currentTarget.value:l})})},n.setFile=function(e,t){var a=t.id;t.value;e&&e.persist();var l=n.state.fields[a];n.addField({field:Object(b.a)(Object(b.a)({},l),{},{value:""})})},n.validateForm=function(e){var t=n.state,a=t.shouldValidateForm,l=t.fields,c=l[e];if(console.log("in form: "),console.log(l),a){if(c)return void(c.shouldValidateField&&n.validateField(c));for(var r in l){var o=l[r];o&&n.validateField(o.id)}}};var l=n.props,c=l.isDisabled,r=void 0!==c&&c,o=l.shouldValidateForm,i=l.defaultClasses;return n.state={fields:{},errors:{},shouldValidateForm:o,defaultClasses:i,isDisabled:r,isFetching:!1},n}return Object(v.a)(a,[{key:"addField",value:function(e){var t=e.field,a=t.id;if(t=Object(b.a)({value:""},t),!a)throw new Error("please add 'id' field to the input: ".concat(t));this.setState((function(e){return Object(b.a)(Object(b.a)({},e),{},{fields:Object(b.a)(Object(b.a)({},e.fields),{},Object(f.a)({},a,t))})}))}},{key:"render",value:function(){var e=this,t=this.state,a={fields:t.fields,errors:t.errors,addField:function(t){e.addField(t)},setFields:this.setFields,validateField:this.validateField,validateForm:this.validateForm,setFile:this.setFile};return l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{className:"form-wrapper",action:"",style:Object(b.a)(Object(b.a)({},this.props.style),{},{paddingTop:"10vh"})},l.a.createElement(g.Provider,{value:a},this.props.children)))}}]),a}(n.Component),O=(a(48),function(e){var t=e.id,a=e.error,c=e.errorText,r=Object(o.a)(e,["id","error","errorText"]),i=Object(n.useContext)(g),s=i.fields,d=i.setFields,u=i.addField,m=i.errors,f=i.validateField,p=s[t]||{},v=m[t]||"",h=p.name,E=p.rows,y=p.value,j=p.validate,O=p.placeholder,x=p.label,N=void 0===x?"":x,w=p.type,k=void 0===w?"text":w,C=p.events,F=void 0===C?{}:C,D=p.classes,S=void 0===D?{}:D,_=p.basic,T=void 0===_||_,z=p.phoneNumber,L=F.onChange,P=Object(o.a)(F,["onChange"]),B=(S.contClass,S.fieldClass);S.errorClass;Object(n.useEffect)((function(){u({field:Object(b.a)({id:t},r),value:""})}),[]);var R=Object(b.a)(Object(b.a)({},P),{},{id:t,name:h,type:k,value:y,validate:j,placeholder:O,className:B,onChange:function(e){try{d(e,p)}catch(a){throw a}"function"===typeof L&&L(Object(b.a)(Object(b.a)({},p),{},{value:e.target.value}))}});return"textarea"===k&&(delete R.type,delete R.value,R.defaultValue=y,R.rows=E||2),p&&void 0!==p.value?l.a.createElement("div",{className:"ti-container"},l.a.createElement("p",{className:"ti-label"},N),"textarea"===k?l.a.createElement("textarea",{className:"ti-input long ".concat(v||a?"error":""),type:"text",value:p&&p.value,onChange:function(e){return d(e,p)},placeholder:"Aa",onBlur:function(){return p?f(t):null}}):l.a.createElement("input",{className:"ti-input ".concat(T?"default":""," ").concat(v||a?"error":""),type:"text",value:p&&p.value,onChange:function(e){return d(e,p)},placeholder:"".concat(z?"(5xx)-xxxxxxx":T?"Enter here":"Aa"),onBlur:function(){return p?f(t):null}}),l.a.createElement("p",{className:"ti-error"},a?c:v)):""});O.defaultProps={long:!1,id:null};var x=O,N=a(8),w=a.n(N),k=(a(49),function(e){var t=e.ghost,a=e.backgroundColor,c=e.size,r=(e.label,e.displayName),i=e.onClick,s=(e.classes,e.loadingClass,e.loadingText),d=Object(o.a)(e,["ghost","backgroundColor","size","label","displayName","onClick","classes","loadingClass","loadingText"]),u=Object(n.useContext)(g),m=u.validateForm,f=u.formData,b=void 0===f?{}:f,p=u.setFormData,v=u.fields,h=(b.defaultClasses,b.isFetching),E=b.errors,y=t?"storybook-button--ghost":"storybook-button--default",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.apiErrors,a=void 0===t?"":t,n={apiErrors:a,isFetching:!1};p(n)};return l.a.createElement("button",Object.assign({type:"submit",className:["storybook-button","storybook-button--".concat(c),y].join(" "),style:a&&{backgroundColor:a}},d,{onClick:function(e){e.preventDefault(),h||(m(),console.log(E),E&&0===Object.values(E).join("").length||i({fields:v,finishRequest:j}))}}),h?s:r)});k.defaultProps={backgroundColor:null,ghost:!1,displayName:"default",size:"medium",validateForm:w.a.func.isRequired,setFormData:w.a.func.isRequired,formData:w.a.shape({defaultClasses:w.a.shape({labelClass:"",contClass:"",errorClass:"",fieldClass:""}),isFetching:w.a.bool,errors:w.a.object})};var C=k,F=(a(50),function(e){var t=e.searchable,a=e.multiSelect,c=e.list,r=e.id,i=e.label,s=Object(o.a)(e,["searchable","multiSelect","list","id","label"]),d=Object(n.useState)(!1),u=Object(m.a)(d,2),f=u[0],p=u[1],v=Object(n.useState)(""),h=Object(m.a)(v,2),E=h[0],y=h[1],j=Object(n.useState)(""),O=Object(m.a)(j,2),x=O[0],N=O[1],w=Object(n.useState)([]),k=Object(m.a)(w,2),C=k[0],F=k[1],D=Object(n.useRef)(null),S=Object(n.useRef)(null),_=Object(n.useContext)(g),T=_.fields,z=_.addField,L=(_.removeField,_.formData),P=void 0===L?{}:L,B=_.setFields,R=(P.defaultClasses,P.isFetching,P.errors,T[r]||{});Object(n.useEffect)((function(){function e(e){D.current&&!D.current.contains(e.target)&&p(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[D]),Object(n.useEffect)((function(){var e=setTimeout((function(){f?window.addEventListener("click",p(!1)):window.removeEventListener("click",p(!1))}),0);return function(){return clearTimeout(e)}}),[]),Object(n.useEffect)((function(){window.removeEventListener("click",p(!1))}),[]),Object(n.useEffect)((function(){z({field:Object(b.a)({id:r},s),value:""})}),[]);var A=function(){p(!f),N(""),f&&S.current&&(S.current.focus(),N(""))},I=function(e){return!(!C||!C.some((function(t){return t.id===e.id})))};return l.a.createElement("div",{className:"dd-container"},l.a.createElement("p",{className:"dd-label"},i),l.a.createElement("div",{ref:D,className:"dd-wrapper ".concat(f?"dd-open":""),onClick:A,onKeyDown:function(e){13===e.keyCode&&A()},role:"button",tabIndex:0},a?l.a.createElement("div",{className:"dd-header"},C.map((function(e){return l.a.createElement("div",{className:"dd-header-multi-title"},e.title," ")}))):t?l.a.createElement("input",{ref:S,className:"dd-list-search-bar",placeholder:E||"Enter the keyword...",onChange:function(e){return function(e){N(e.target.value.toLowerCase())}(e)}}):l.a.createElement("div",{className:"dd-header"},E?l.a.createElement("div",{className:"dd-header-chosen"},E):l.a.createElement("div",{className:"dd-header-title"},"Collections")),f&&l.a.createElement("ul",{className:"dd-list ".concat(t?"searchable":""),onClick:function(e){return e.stopPropagation()}},function(){var e=c;return x.length&&(e=c.filter((function(e){return e.title.toLowerCase().slice(0,x.length).includes(x)})).sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0}))),e.length?e.map((function(e){return l.a.createElement("li",{className:"dd-list-item".concat(I(e)?" dd-list-item-selected":""),key:e.id,onClick:function(t){return function(e,t){p(!1),a||F((function(){return C.pop()})),y(t.title),F((function(){return C.concat(t)})),R.value=t.title,B(null,R)}(0,e)}},l.a.createElement("p",{className:"item-text"},e.title))})):l.a.createElement("div",{className:"dd-list-item no-result"},t[1])}())))});F.defaultProps={searchable:!1,listOpen:!1,headerTitle:"Title",onClick:function(){console.log("pressed")}};var D=F,S=(a(51),function(e){var t=e.id,a=e.list,c=e.label,r=Object(o.a)(e,["id","list","label"]),i=Object(n.useState)(!1),s=Object(m.a)(i,2),d=s[0],u=s[1],f=Object(n.useState)(""),p=Object(m.a)(f,2),v=p[0],h=p[1],E=Object(n.useState)(""),y=Object(m.a)(E,2),j=y[0],O=y[1],x=Object(n.useRef)(null),N=Object(n.useRef)(null),w=Object(n.useContext)(g),k=w.fields,C=w.addField,F=(w.removeField,w.formData,w.setFields),D=k[t]||{};Object(n.useEffect)((function(){function e(e){x.current&&!x.current.contains(e.target)&&u(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[x]),Object(n.useEffect)((function(){var e=setTimeout((function(){d?window.addEventListener("click",u(!1)):window.removeEventListener("click",u(!1))}),0);return function(){return clearTimeout(e)}}),[]),Object(n.useEffect)((function(){window.removeEventListener("click",u(!1))}),[]),Object(n.useEffect)((function(){C({field:Object(b.a)({id:t},r),value:""})}),[]);var S=function(){u(!d),h(""),d&&N.current&&(N.current.focus(),h(""))},_=function(e){return!(!j||j!==e.title)},T=function(){h(""),O(""),u(!1)};return l.a.createElement("div",null,l.a.createElement("p",{className:"dd-label"},c),l.a.createElement("div",{ref:x,className:"searchbar-wrapper ".concat(d?"dd-open":""),onClick:S,onKeyDown:function(e){13===e.keyCode&&S()},role:"button",tabIndex:0},l.a.createElement("div",null,j&&l.a.createElement("div",{className:"cancel",onClick:T}),j?l.a.createElement("div",{className:"search-bold"}):l.a.createElement("div",{className:"search-fade"}),l.a.createElement("input",{ref:N,className:"searchbar-list-search-bar",value:j,placeholder:"Enter the keyword...",onChange:function(e){return function(e){u(!0),h(e.target.value.toLowerCase()),O(e.target.value)}(e)}})),d&&l.a.createElement("ul",{className:"searchbar-list searchable",onClick:function(e){return e.stopPropagation()}},function(){var e=a;return v.length&&(e=a.filter((function(e){return e.title.toLowerCase().slice(0,v.length).includes(v)})).sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0}))),e.length?e.map((function(e){return l.a.createElement("li",{className:"searchbar-list-item".concat(_(e)?" searchbar-list-item-selected":""),key:e.id,onClick:function(t){return function(e,t){u(!1),O(t.title),D.value=t,F(e,D)}(t,e)}},e.title)})):l.a.createElement("div",{className:"dd-list-item no-result"}," ")}())))});S.defaultProps={searchable:!1,listOpen:!1,headerTitle:"Title",onClick:function(){console.log("pressed")}};var _=S,T=(a(52),function(e){var t=e.id,a=Object(o.a)(e,["id"]),c=Object(n.useContext)(g),r=c.fields,i=c.addField,s=r[t]||{},d=s.label,u=void 0===d?"":d;return Object(n.useEffect)((function(){i({field:Object(b.a)({id:t},a),value:""})}),[]),s&&void 0!==s.value?l.a.createElement("div",{className:"headertext-container"},l.a.createElement("p",{className:"headertext-label"},u)):""});T.defaultProps={id:null};var z=T,L=function(e){var t=e.id,a=(e.label,e.onFileUpload,Object(o.a)(e,["id","label","onFileUpload"])),c=Object(n.useState)(null),r=Object(m.a)(c,2),i=(r[0],r[1],Object(n.useContext)(g)),s=i.fields,d=i.addField,u=i.errors,f=i.setFile,p=s[t]||{};u[t];return Object(n.useEffect)((function(){d({field:Object(b.a)({id:t},a),value:new FormData})}),[]),l.a.createElement("div",null,l.a.createElement("input",{type:"file",id:"file",onChange:function(e){var t=e.target.files[0],a=new FormData;a.append("myFile",t,t.name),p.value=a,f(e,p)}}),l.a.createElement("label",{for:"file"},"Upload"))},P=(a(53),function(e){e.primary;var t=e.backgroundColor,a=(e.size,e.label,e.checked),c=Object(o.a)(e,["primary","backgroundColor","size","label","checked"]),r=Object(n.useState)(!!a),i=Object(m.a)(r,2),s=i[0],d=i[1];return l.a.createElement("button",Object.assign({type:"button",className:"radio ".concat(s&&a?" checked":" unchecked"),style:t&&{backgroundColor:t},onClick:function(){d(!s)}},c),s&&a&&l.a.createElement("div",{className:"check-radio"}))});P.defaultProps={checked:!1};var B=P,R=(a(54),function(e){e.primary;var t=e.backgroundColor,a=(e.size,e.label,e.checked),c=Object(o.a)(e,["primary","backgroundColor","size","label","checked"]),r=Object(n.useState)(!!a),i=Object(m.a)(r,2),s=i[0],d=i[1];return l.a.createElement("button",Object.assign({type:"button",className:"checkbox ".concat(s?" checked":" unchecked"),style:t&&{backgroundColor:t},onClick:function(){d(!s)}},c),s&&l.a.createElement("div",{className:"check"}))});R.defaultProps={checked:!1};var A=R,I=(a(55),a(56),function(e){var t=e.id,a=e.label,c=e.multiple,r=e.choices,i=Object(o.a)(e,["id","label","multiple","choices"]),s=Object(n.useState)([]),d=Object(m.a)(s,2),u=d[0],f=d[1],p=Object(n.useState)([]),v=Object(m.a)(p,2),h=v[0],E=v[1],y=Object(n.useContext)(g),j=y.fields,O=y.addField,x=y.setFields,N=j[t]||{};Object(n.useEffect)((function(){O({field:Object(b.a)({id:t},i),value:""})}),[]);var w=function(e){return!(!u.includes(e)&&h.includes(e))&&(!!u.includes(e)||null)};return l.a.createElement("div",Object.assign({className:"choicebox-container"},i),l.a.createElement("div",{className:"choicebox-wrapper"},l.a.createElement("p",{className:"cb-label"},a),l.a.createElement("ul",{onClick:function(e){return e.stopPropagation()}},r.map((function(e){return l.a.createElement("li",{className:"cb-row",key:e.id,onClick:function(t){return function(e,t){c||f((function(){return u.pop()})),u.includes(t)?f((function(){return u.splice(u.indexOf(t),1)})):(f((function(){return u.concat(t)})),E((function(){return h.concat(t)}))),N.value=t.title,x(null,N)}(0,e)}},c?l.a.createElement(A,null):l.a.createElement(B,{checked:w(e)}),l.a.createElement("p",{className:"cb-choice"},e.title))})))))});I.defaultProps={multiple:!1,label:"",id:null,choices:[],onClick:function(){console.log("pressed")}};var q=I,H=(a(12),a(77),function(e){var t=e.code;Object(o.a)(e,["code"]);return l.a.createElement("div",{className:"ccard-wrapper"},l.a.createElement("div",{className:"ccard-cover",style:{background:"".concat(t)}}),l.a.createElement("div",{className:"ccard-body-wrapper"},l.a.createElement("p",{className:"ccard-code"},t)))}),J=(a(78),function(e){var t=e.id,a=e.header,n=e.footer,c=e.body,r=e.link;Object(o.a)(e,["id","header","footer","body","link"]);return l.a.createElement("div",{className:"card-wrapper"},l.a.createElement("div",{className:"card-cover"},l.a.createElement("div",{className:"card-cover-content ".concat("pcm"===t?"one":"two")})),l.a.createElement("div",{className:"card-body-wrapper"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"card-header"},a),l.a.createElement("div",{className:"card-content"},c),l.a.createElement("div",{className:"card-button"},l.a.createElement("span",{className:"c-highlight"},l.a.createElement("a",{className:"card-button-text",href:r,target:"_blank"},n))))))});J.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};var V=J,U=(a(79),function(e){var t=e.header,a=e.subheader,n=e.style;Object(o.a)(e,["header","subheader","style"]);return l.a.createElement("div",{className:"tcard-wrapper"},l.a.createElement("p",{className:"tcard-header",style:n},t),l.a.createElement("p",{className:"tcard-subheader"},a))}),G=(a(80),function(e){var t=e.header,a=e.body,n=e.footer,c=e.footerAlt,r=Object(o.a)(e,["header","body","footer","footerAlt"]),i=function(e){r.onClose&&r.onClose(e)};return{render:function(){return r.show?l.a.createElement("div",{className:"modal-container"},l.a.createElement("div",{className:"modal-cover"},l.a.createElement("div",{className:"modal-cover-content"})),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"modal-header"},t),l.a.createElement("div",{className:"modal-content"},a),l.a.createElement("div",{className:"modal-button"},l.a.createElement("button",{onClick:i,className:"modal-footer"},n),l.a.createElement("button",{onClick:i,className:"modal-footer-alt"},c)))):null}}}),K=(a(81),function(e){e.header;var t=e.body,a=(e.footer,e.footerAlt,Object(o.a)(e,["header","body","footer","footerAlt"]));return{render:function(){return a.show?l.a.createElement("div",{className:"popup-container"},l.a.createElement("div",{className:"popup-cover"},l.a.createElement("div",{className:"popup-cover-content"})),l.a.createElement("div",{className:"popup-body"},l.a.createElement("div",{className:"popup-content"},t))):null}}}),M=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],r=function(e){c(!a)},o=Object(n.useState)(!1),i=Object(m.a)(o,2),s=i[0],d=i[1],u=function(e){d(!s)},f=[{id:0,title:"Daisies",selected:!1},{id:1,title:"Lilies",selected:!1},{id:2,title:"Orchids",selected:!1},{id:2,title:"Roses",selected:!1}];return l.a.createElement("div",null,l.a.createElement(j,null,l.a.createElement(z,{id:"ht",label:"color palette."}),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingBottom:"10vh"}},l.a.createElement(H,{id:"cc",code:"#BE52F2"}),l.a.createElement(H,{id:"cc",code:"#DBA5F5"}),l.a.createElement(H,{id:"cc",code:"#6979F8"}),l.a.createElement(H,{id:"cc",code:"#1A051D"}),l.a.createElement(H,{id:"cc",code:"#D0C9D6"})),l.a.createElement(z,{id:"ht1",label:"typography."}),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingBottom:"10vh"}},l.a.createElement(U,{id:"cc",header:"Heading 2",style:{fontFamily:"SF Pro Display",fontSize:"22px",lineHeight:"28px"},subheader:"SF Pro Display SB, 22px L28"}),l.a.createElement(U,{id:"cc",header:"Body 1",style:{fontFamily:"SF Pro Text",fontSize:"15px",lineHeight:"20px"},subheader:"SF Pro Text R, 15px L20"})),l.a.createElement(z,{id:"bt",label:"buttons."}),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",paddingBottom:"10vh"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",paddingRight:"20vh"}},l.a.createElement(C,{ghost:!0,size:"large",displayName:"ghost",onClick:function(){return console.log("click")}}),l.a.createElement(C,{size:"large",onClick:function(){return console.log("click")}})),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},l.a.createElement(C,{ghost:!0,size:"small",displayName:"ghost",onClick:function(){return console.log("click")}}),l.a.createElement(C,{size:"small",onClick:function(){return console.log("click")}}))),l.a.createElement(z,{id:"if",label:"input forms."}),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",paddingBottom:"15vh"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",paddingRight:"30vh",justifyContent:"space-between"}},l.a.createElement(x,{id:"tim",label:"default"}),l.a.createElement(x,{id:"tim0",error:!0,errorText:"this field is required"})),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},l.a.createElement(x,{id:"tim1",type:"textarea",label:"text box"}),l.a.createElement(x,{id:"tim2",basic:!1}))),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",paddingBottom:"10vh"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",paddingRight:"30vh"}},l.a.createElement(D,{id:"ddm",label:"dropdown",list:f})),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},l.a.createElement(D,{id:"ddm1",label:"multiselect",multiSelect:!0,list:f}))),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",paddingBottom:"10vh"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",paddingRight:"24vh"}},l.a.createElement(q,{id:"cbm",style:{width:"30vh"},label:"single choice list",choices:f})),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},l.a.createElement(q,{id:"cbm1",style:{width:"30vh"},label:"multi choice list",multiple:!0,choices:f}))),l.a.createElement("div",{style:{paddingBottom:"10vh"}},l.a.createElement(_,{style:{paddingBottom:"10vh"},id:"searchbar",label:"Searchbar",list:f})),l.a.createElement(z,{id:"ifpc",label:"cards."}),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",paddingBottom:"10vh"}},l.a.createElement("div",{style:{paddingRight:"22vh"}},l.a.createElement(V,{id:"pcm",header:"Repetition",footer:"Read more",coverLink:"../assets/book1.jpg",link:"https://www.nobelprize.org/prizes/literature/2019/handke/prose/",body:"Alone during the day, in my room or out of doors, I thought \u0430bout the waiter more than about my \u0440\u0430r\u0435nts"})),l.a.createElement(V,{id:"pcm1",header:"Voices from Chernobyl",footer:"Read more",coverLink:"/home/irem/Desktop/jotform/custom-lib/src/assets/book2.jpg",link:"https://www.nobelprize.org/prizes/literature/2015/alexievich/prose/",body:"There was a black cloud, and hard rain. The puddles were yellow and green, like someone had poured paint into them. They said it was dust from the flowers. Grandma made us stay in the cellar. She got down on her knees and prayed. And she taught us, too. \u201cPray! It\u2019s the end of the world. It\u2019s God\u2019s punishment for our sins.\u201d "})),l.a.createElement(z,{id:"ifmd",label:"modals."}),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",paddingBottom:"10vh"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",paddingRight:"37vh"}},l.a.createElement(C,{displayName:"click me!",onClick:function(e){r()}}),a?l.a.createElement(G,{onClose:r,show:!0,header:"Allow Notifications",body:"Allow notifications so we can keep you updated about newest features!",footer:"allow",footerAlt:"don't allow"}):null),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},l.a.createElement(C,{displayName:"...and me!",onClick:function(e){u()}}),s?l.a.createElement(K,{onClose:u,show:!0,body:"Hey I just popped out here."}):null))))},W=(a(82),function(){return l.a.createElement("div",{className:"about-container"},l.a.createElement("div",{className:"about-h-wrapper"},l.a.createElement("span",{className:"about-header"},"Thank you everyone!"),l.a.createElement("p",{className:"about-content"},"I'm very glad to have had the opportunity to work here and push myself to learn many cool things.")))}),$=(a(83),["c7e30e433971fbdc627e4ffe478a0095","cdfd7881caa5b60de7278561c124747d"]),Q=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),o=Object(m.a)(r,2),i=o[0],s=o[1],d=Object(n.useState)(null),u=Object(m.a)(d,2),f=u[0],b=u[1],p=Object(n.useState)(null),v=Object(m.a)(p,2),h=v[0],E=v[1];Object(n.useEffect)((function(){window.JF.initialize({apiKey:$[0]})}),[]),Object(n.useEffect)((function(){if(f){var e=f.fields["jotform-id"].value;console.log(e),c(!0),window.JF.getFormQuestions(e,(function(e){s(e),c(!1)}))}}),[f]),Object(n.useEffect)((function(){if(i){var e=[],t=Object.values(i);t.sort((function(e,t){return parseInt(e.order)>parseInt(t.order)?1:-1}));for(var a=0;a<t.length;a++){var n=t[a],c="".concat(n.type,"_").concat(n.qid),r="No"===n.required?"":"required";if("control_head"===n.type)e.push(l.a.createElement(z,{id:c,label:n.text}));else if("control_fullname"===n.type)e.push(l.a.createElement(x,{id:c,validate:"".concat(r),label:n.text}));else if("control_email"===n.type)e.push(l.a.createElement(x,{id:c,validate:"".concat(r,"|email"),label:n.text}));else if("control_address"===n.type)e.push(l.a.createElement(x,{type:"textarea",id:c,validate:"".concat(r),label:n.text}));else if("control_phone"===n.type)e.push(l.a.createElement(x,{id:c,phoneNumber:!0,validate:"".concat(r,"|phone"),label:n.text}));else if("control_dropdown"===n.type){for(var o=n.options.split("|"),s=[],d=0;d<o.length;d++){var u={id:d,selected:!1,title:o[d]};s.push(u)}e.push(l.a.createElement(D,{id:c,label:n.text,list:s}))}else if("control_textbox"===n.type){var m="Phone"===n.text;e.push(l.a.createElement(x,{id:c,phoneNumber:m,validate:"".concat(m?"phone":"","|").concat(r),label:n.text}))}else if("control_textarea"===n.type)e.push(l.a.createElement(x,{type:"textarea",id:c,validate:"".concat(r),label:n.text}));else if("control_button"===n.type)e.push(l.a.createElement(C,{onClick:function(e){return y(e)},displayName:n.text,id:c,size:"medium"}));else if("control_fileupload"===n.type)e.push(l.a.createElement(L,{id:c,label:"".concat(""!==n.text?n.text:"File Select")}));else if("control_radio"===n.type){for(var f=n.options.split("|"),b=[],p=0;p<f.length;p++){var v={id:p,selected:!1,title:f[p]};b.push(v)}e.push(l.a.createElement(q,{id:c,label:n.text,choices:b}))}else if("control_checkbox"===n.type){for(var h=n.options.split("|"),g=[],j=0;j<h.length;j++){var O={id:j,selected:!1,title:h[j]};g.push(O)}e.push(l.a.createElement(q,{id:c,label:n.text,choices:g,multiple:!0}))}}E(e)}}),[i]);var y=function(e){for(var t=e.fields,a=new Object,n=0,l=Object.entries(t);n<l.length;n++){var r=Object(m.a)(l[n],2),o=r[0],i=r[1],d=o.split("_"),u=d[2];a[u]={};var b=[d[0],"_",d[1]].join("");if(""!==i.value)if("control_fullname"===b){var p=i.value.split(" "),v={first:p[0],last:p[p.length-1]};a[u]=JSON.stringify(v)}else if("control_email"===b)a[u]=i.value;else if("control_address"===b){var h=i.value.split("\n");a[u].addr_line1=h[0],a[u].addr_line2=h[1],a[u].city=h[2],a[u].country=h[3],a[u]=JSON.stringify(a[u])}else if("control_phone"===b){var y=i.value.split("-");a[u].area=y[0],a[u].phone=y[1]}else"control_dropdown"===b||"control_textbox"===b||"control_textarea"===b?a[u]=i.value:"control_button"===b||"control_fileupload"===b||"control_radio"===b&&(a[u]=i.value)}console.log(a);var g=f.fields["jotform-id"].value;c(!0),window.JF.createFormSubmission(g,a,(function(e){c(!1),E(null),s(null)}))};return l.a.createElement("div",null,a?l.a.createElement("div",{className:"loader-container"},l.a.createElement("div",{class:"loader"}),l.a.createElement("p",{className:"loading-text"},"Loading...")):h?l.a.createElement(j,{style:{paddingTop:"none"},shouldValidateForm:!0},h.map((function(e){return l.a.createElement("div",{className:"form-row",style:{paddingTop:"none"}},e)}))):l.a.createElement(j,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"auto",paddingTop:"0"},shouldValidateForm:!0},l.a.createElement(x,{id:"jotform-id",label:"Enter Jotform ID",validate:"numeric|required"}),l.a.createElement(C,{onClick:function(e){return b(e)},displayName:"SUBMIT",size:"medium"})))};var X=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(u,{label:"astrax",sublabel:"component library."}),l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/Home",component:M}),l.a.createElement(i.b,{exact:!0,path:"/"},l.a.createElement(i.a,{to:"/Home"})),l.a.createElement(i.b,{exact:!0,path:"/About",component:W}),l.a.createElement(i.b,{exact:!0,path:"/Demo",component:Q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.0c21f5be.chunk.js.map