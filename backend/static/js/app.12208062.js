(function(e){function t(t){for(var n,r,i=t[0],c=t[1],u=t[2],l=0,g=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&g.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(g.length)g.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},o={app:0},a=[];function r(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0bd34545"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(e){var t=[],s=o[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise((function(t,n){s=o[e]=[t,n]}));t.push(s[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var s=o[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,s[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0275":function(e,t,s){"use strict";s("b7fa")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("7a23"),o={class:"wrapper"},a={class:"navbar is-link"},r={class:"navbar-brand"},i=Object(n["g"])("span",{class:"icon"},[Object(n["g"])("i",{class:"icon v-md-custom-icon-home3"})],-1),c=Object(n["g"])("strong",null,"みんスポ！",-1),u=Object(n["g"])("span",{"aria-hidden":"true"},null,-1),l=Object(n["g"])("span",{"aria-hidden":"true"},null,-1),d=Object(n["g"])("span",{"aria-hidden":"true"},null,-1),g=[u,l,d],b=Object(n["g"])("div",{class:"navbar-start"},[Object(n["g"])("div",{class:"navbar-item"},[Object(n["g"])("form",{method:"get",action:"#"},[Object(n["g"])("div",{class:"field has-addons"},[Object(n["g"])("div",{class:"control"},[Object(n["g"])("input",{type:"text",class:"input",placeholder:"ユーザー名",name:"query"})]),Object(n["g"])("div",{class:"control"},[Object(n["g"])("button",{class:"button is-warning"},[Object(n["g"])("span",{class:"icon"},[Object(n["g"])("i",{class:"icon v-md-custom-icon-search"})])])])])])])],-1),m={class:"navbar-end"},p={class:"navbar-item"},O={class:"buttons"},f=Object(n["h"])("アカウント"),j=Object(n["h"])("Log in"),h=Object(n["g"])("span",{class:"icon v-md-custom-icon-earth"},null,-1),v=Object(n["g"])("span",null,"世界のアクティブ",-1),y=Object(n["g"])("div",{class:"lds-dual-ring"},null,-1),w=[y],I={class:"section"},M=Object(n["g"])("footer",{class:"fotter"},[Object(n["g"])("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1);function S(e,t,s,u,l,d){var y=Object(n["z"])("router-link"),S=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["f"])("div",o,[Object(n["g"])("nav",a,[Object(n["g"])("div",r,[Object(n["i"])(y,{to:"/",class:"navbar-item"},{default:Object(n["F"])((function(){return[i,c]})),_:1}),Object(n["g"])("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:t[0]||(t[0]=function(e){return l.showMobileMenu=!l.showMobileMenu})},g)]),Object(n["g"])("div",{class:Object(n["o"])(["navbar-menu",{"is-active":l.showMobileMenu}]),id:"navbar-menu"},[b,Object(n["g"])("div",m,[Object(n["g"])("div",p,[Object(n["g"])("div",O,[e.$store.state.isAuthenticated?(Object(n["s"])(),Object(n["d"])(y,{key:0,to:"/my-account",class:"button is-light"},{default:Object(n["F"])((function(){return[f]})),_:1})):(Object(n["s"])(),Object(n["d"])(y,{key:1,to:"/log-in",class:"button is-light"},{default:Object(n["F"])((function(){return[j]})),_:1})),Object(n["i"])(y,{to:"/active-users",class:"button is-warning"},{default:Object(n["F"])((function(){return[h,v]})),_:1})])])])],2)]),Object(n["g"])("div",{class:Object(n["o"])(["is-loading-bar has-text-centered",{"is-loading":e.$store.state.isLoading}])},w,2),Object(n["g"])("section",I,[Object(n["i"])(S)]),M])}var D=s("bc3a"),_=s.n(D),x={data:function(){return{showMobileMenu:!1,is_loading:!1}},beforeCreate:function(){this.$store.commit("initializeStore")},mounted:function(){},computed:{}};s("5961");x.render=S;var k=x,L=(s("d3b7"),s("3ca3"),s("ddb0"),s("6c02")),U=s("5502"),H=Object(U["a"])({state:{isAuthenticated:!1,settion:"",user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]},isLoading:!1},mutations:{initializeStore:function(e){'""'!==localStorage.getItem("session")?(e.session=localStorage.getItem("session"),e.isAuthenticated=!0,localStorage.getItem("user")?e.user=JSON.parse(localStorage.getItem("user")):e.user={ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]}):(e.session="",e.isAuthenticated=!1),console.log(e)},setIsLoading:function(e,t){e.isLoading=t},setSession:function(e,t){e.session=t,e.isAuthenticated=!0,localStorage.setItem("session",JSON.stringify(e.session))},removeSession:function(e){e.session="",e.isAuthenticated=!1,localStorage.setItem("session",JSON.stringify(e.session))},setUser:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(e.user))},removeUser:function(e){e.user={ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]},localStorage.setItem("user",JSON.stringify(e.user))}},actions:{},modules:{}}),$={class:"home"},F=Object(n["g"])("section",{class:"hero is-medium is-info md-6"},[Object(n["g"])("div",{class:"hero-body has-text-centered"},[Object(n["g"])("p",{class:"title mb-6"},"みんスポ！"),Object(n["g"])("p",{class:"subtitle"}," みんなでスポーツしましょう！ ")])],-1),P={class:"columns is-multiline"},R=Object(n["g"])("div",{class:"column is-12"},[Object(n["g"])("h2",{class:"is-size-2 has-text-centered"},"アクティブなフレンド")],-1);function A(e,t,s,o,a,r){var i=Object(n["z"])("UserBox");return Object(n["s"])(),Object(n["f"])("div",$,[F,Object(n["g"])("div",P,[R,(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(a.Myfriends,(function(e){return Object(n["s"])(),Object(n["d"])(i,{key:e.ID,user:e},null,8,["user"])})),128))])])}var C=s("1da1"),z=(s("96cf"),s("4b44"));s("b0c0");Object(n["v"])("data-v-17d1d033");var B={class:"column is-3 is-narrow"},J={class:"box"},E={class:"is-size-6 lineClamp title has-text-primary"},G={key:0,class:"is-size-6 lineClamp subtitle"},N=Object(n["g"])("span",{class:"icon v-md-custom-icon-fire"},null,-1),T={key:1,class:"is-size-6 lineClamp subtitle"},q=Object(n["g"])("span",{class:"icon v-md-custom-icon-leaf"},null,-1),V=[q];function Y(e,t,s,o,a,r){return Object(n["s"])(),Object(n["f"])("div",B,[Object(n["g"])("div",J,[Object(n["g"])("p",E,Object(n["B"])(s.user.name),1),s.user.fitness?(Object(n["s"])(),Object(n["f"])("p",G,[N,Object(n["h"])(" "+Object(n["B"])(s.user.fitness),1)])):(Object(n["s"])(),Object(n["f"])("p",T,V))])])}Object(n["t"])();var K={name:"UserBox",props:{user:Object}};s("0275");K.render=Y,K.__scopeId="data-v-17d1d033";var Q=K,W={name:"Home",data:function(){return{Myfriends:[],user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]}}},components:{UserBox:Q},mounted:function(){this.user=this.$store.state.user,this.GetMyfriends(),document.title="Myfriends | MinSpo!!",console.log("user: ",this.user)},methods:{GetMyfriends:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user.ID,session:e.user.session},console.log("formData:",s),t.next=5,_.a.post("/api/friend_data",s).then((function(t){console.log(t.data),"success"==t.data.type?e.Myfriends=t.data.message:Object(z["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}),console.log("activeuser:",e.Myfriends)})).catch((function(e){console.log(e),Object(z["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})}));case 5:e.$store.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()}}};W.render=A;var X=W,Z={class:"page-log-in"},ee={class:"columns"},te={class:"column is-4 is-offset-4"},se=Object(n["g"])("h1",{class:"title"},"Log in",-1),ne={class:"field"},oe=Object(n["g"])("label",null,"ユーザーID",-1),ae={class:"control"},re={class:"field"},ie=Object(n["g"])("label",null,"Password",-1),ce={class:"control"},ue={key:0,class:"notification is-danger"},le=Object(n["g"])("div",{class:"field"},[Object(n["g"])("div",{class:"control"},[Object(n["g"])("button",{class:"button is-dark"},"Log in")])],-1),de=Object(n["g"])("hr",null,null,-1),ge=Object(n["h"])(" Or "),be=Object(n["h"])("click here"),me=Object(n["h"])(" to sign up! ");function pe(e,t,s,o,a,r){var i=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",Z,[Object(n["g"])("div",ee,[Object(n["g"])("div",te,[se,Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["H"])((function(){return r.submitForm&&r.submitForm.apply(r,arguments)}),["prevent"]))},[Object(n["g"])("div",ne,[oe,Object(n["g"])("div",ae,[Object(n["G"])(Object(n["g"])("input",{type:"text",class:"input","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.user_id=e})},null,512),[[n["D"],a.user_id]])])]),Object(n["g"])("div",re,[ie,Object(n["g"])("div",ce,[Object(n["G"])(Object(n["g"])("input",{type:"password",class:"input","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[n["D"],a.password]])])]),a.errors.length?(Object(n["s"])(),Object(n["f"])("div",ue,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(a.errors,(function(e){return Object(n["s"])(),Object(n["f"])("p",{key:e},Object(n["B"])(e),1)})),128))])):Object(n["e"])("",!0),le,de,ge,Object(n["i"])(i,{to:"/sign-up"},{default:Object(n["F"])((function(){return[be]})),_:1}),me],32)])])])}s("99af");var Oe=s("0b26"),fe=s.n(Oe),je={name:"LogIn",data:function(){return{user_id:"",password:"",errors:[]}},mounted:function(){document.title="Log In | MinSpo"},methods:{submitForm:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user_id,pass:fe()(e.password)},localStorage.removeItem("settion"),console.log("formData :",s),t.next=6,_.a.post("/api/login",s).then((function(t){console.log("response :",t),"success"==t.data.type?(e.$store.commit("setSession",t.data.message.session),localStorage.setItem("session",t.data.message.session),e.$store.commit("setUser",t.data.message),e.$router.push("/my-account")):t.data.message?Object(z["toast"])({message:"ユーザーが存在しません。ユーザー名(ID)を確認してください。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):Object(z["toast"])({message:"パスワードが間違っています。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})})).catch((function(t){if(t.response)for(var s in t.response.data)e.errors.push("".concat(s,": ").concat(t.response.data[s]));else e.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(t))}));case 6:e.$store.commit("setIsLoading",!1);case 7:case"end":return t.stop()}}),t)})))()}}};je.render=pe;var he=je,ve={class:"page-sign-up"},ye={class:"columns"},we={class:"column is-4 is-offset-4"},Ie=Object(n["g"])("h1",{class:"title"},"Sign up",-1),Me={class:"field"},Se=Object(n["g"])("label",null,"Username",-1),De={class:"control"},_e={class:"field"},xe=Object(n["g"])("label",null,"Password",-1),ke={class:"control"},Le={class:"field"},Ue=Object(n["g"])("label",null,"Repeat password",-1),He={class:"control"},$e={key:0,class:"notification is-danger"},Fe=Object(n["g"])("div",{class:"field"},[Object(n["g"])("div",{class:"control"},[Object(n["g"])("button",{class:"button is-dark"},"Sign up")])],-1),Pe=Object(n["g"])("hr",null,null,-1),Re=Object(n["h"])(" Or "),Ae=Object(n["h"])("click here"),Ce=Object(n["h"])(" to log in! ");function ze(e,t,s,o,a,r){var i=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",ve,[Object(n["g"])("div",ye,[Object(n["g"])("div",we,[Ie,Object(n["g"])("form",{onSubmit:t[3]||(t[3]=Object(n["H"])((function(){return r.submitForm&&r.submitForm.apply(r,arguments)}),["prevent"]))},[Object(n["g"])("div",Me,[Se,Object(n["g"])("div",De,[Object(n["G"])(Object(n["g"])("input",{type:"text",class:"input","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[n["D"],a.username]])])]),Object(n["g"])("div",_e,[xe,Object(n["g"])("div",ke,[Object(n["G"])(Object(n["g"])("input",{type:"password",class:"input","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[n["D"],a.password]])])]),Object(n["g"])("div",Le,[Ue,Object(n["g"])("div",He,[Object(n["G"])(Object(n["g"])("input",{type:"password",class:"input","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password2=e})},null,512),[[n["D"],a.password2]])])]),a.errors.length?(Object(n["s"])(),Object(n["f"])("div",$e,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(a.errors,(function(e){return Object(n["s"])(),Object(n["f"])("p",{key:e},Object(n["B"])(e),1)})),128))])):Object(n["e"])("",!0),Fe,Pe,Re,Object(n["i"])(i,{to:"/log-in"},{default:Object(n["F"])((function(){return[Ae]})),_:1}),Ce],32)])])])}var Be={name:"SignUp",data:function(){return{username:"",password:"",password2:"",errors:[],user_id:null}},methods:{submitForm:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.commit("setIsLoading",!0),e.errors=[],""===e.username&&e.errors.push("The username is missing"),""===e.password&&e.errors.push("The password is too short"),e.password!==e.password2&&e.errors.push("The passwords doesn't match"),e.errors.length){t.next=9;break}return s={name:e.username,pass:fe()(e.password)},t.next=9,_.a.post("/api/register",s).then((function(t){if("success"==t.data.type){console.log(t.data),e.user_id=t.data.message.ID,Object(z["toast"])({message:"アカウントが登録されました。ログインします。",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"});var s={ID:t.data.message.ID,pass:t.data.message.pass};e.login(s)}else Object(z["toast"])({message:"問題が発生しました。",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})})).catch((function(t){if(t.response){for(var s in t.response.data)e.errors.push("".concat(s,": ").concat(t.response.data[s]));console.log(JSON.stringify(t.response.data))}else t.message&&(e.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(t)))}));case 9:e.$store.commit("setIsLoading",!1);case 10:case"end":return t.stop()}}),t)})))()},login:function(e){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.$store.commit("setIsLoading",!0),localStorage.removeItem("settion"),console.log("formData :",e),s.next=5,_.a.post("/api/login",e).then((function(e){console.log("response :",e),"success"==e.data.type?(t.$store.commit("setSession",e.data.message.session),localStorage.setItem("session",e.data.message.session),t.$store.commit("setUser",e.data.message),t.$router.push("/my-account")):e.data.message?Object(z["toast"])({message:"ユーザーが存在しません。ユーザー名(ID)を確認してください。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):Object(z["toast"])({message:"パスワードが間違っています。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})})).catch((function(e){if(e.response)for(var s in e.response.data)t.errors.push("".concat(s,": ").concat(e.response.data[s]));else t.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(e))}));case 5:t.$store.commit("setIsLoading",!1);case 6:case"end":return s.stop()}}),s)})))()}}};Be.render=ze;var Je=Be,Ee={class:"home"},Ge=Object(n["g"])("section",{class:"hero is-medium is-info md-6"},[Object(n["g"])("div",{class:"hero-body has-text-centered"},[Object(n["g"])("p",{class:"title mb-6"},"みんスポ！"),Object(n["g"])("p",{class:"subtitle"}," みんなでスポーツしましょう！ ")])],-1),Ne={class:"columns is-multiline"},Te=Object(n["g"])("div",{class:"column is-12"},[Object(n["g"])("h2",{class:"is-size-2 has-text-centered"},"アクティブなユーザー")],-1);function qe(e,t,s,o,a,r){var i=Object(n["z"])("UserBox");return Object(n["s"])(),Object(n["f"])("div",Ee,[Ge,Object(n["g"])("div",Ne,[Te,(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(a.activeUsers,(function(e){return Object(n["s"])(),Object(n["d"])(i,{key:e.ID,user:e},null,8,["user"])})),128))])])}var Ve={name:"Home",data:function(){return{activeUsers:[],user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]}}},components:{UserBox:Q},mounted:function(){this.user=this.$store.state.user,this.GetActiveUsers(),document.title="ActiveUsers | MinSpo!!",console.log(this.user)},methods:{GetActiveUsers:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),t.next=3,_.a.get("api/get_active").then((function(t){console.log(t.data),"success"==t.data.type?(e.activeUsers=t.data.message,console.log("activeuser:",e.activeUsers)):Object(z["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})})).catch((function(e){console.log(e),Object(z["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})}));case 3:e.$store.commit("setIsLoading",!1);case 4:case"end":return t.stop()}}),t)})))()}}};Ve.render=qe;var Ye=Ve,Ke={class:"page-my-account"},Qe={class:"tabs is-left"},We={class:"title"},Xe={class:"tabs is-right"},Ze={key:0,class:"columns is-multiline"},et={class:"column is-12"},tt={class:"field has-addons"},st={class:"control"},nt={class:"control"},ot=Object(n["g"])("span",{class:"icon"},[Object(n["g"])("i",{class:"icon v-md-custom-icon-quill"})],-1),at=[ot],rt={key:1,class:"columns is-multiline"},it={class:"modal-content"},ct={class:"card"},ut={class:"card-content"},lt={class:"content"},dt=Object(n["h"])(" 本当にログアウトしますか？ "),gt=Object(n["g"])("p",{class:"has-text-grey"}," ログインページから再度ログインできます ",-1),bt=Object(n["g"])("br",null,null,-1);function mt(e,t,s,o,a,r){var i=Object(n["z"])("UserBox");return Object(n["s"])(),Object(n["f"])("div",Ke,[Object(n["g"])("div",Qe,[Object(n["g"])("h1",We,Object(n["B"])(a.user.name)+"のアカウントページ",1)]),Object(n["g"])("div",Xe,[Object(n["g"])("ul",null,[Object(n["g"])("li",{class:Object(n["o"])(["",{"is-active":a.showMyFriend}])},[Object(n["g"])("a",{onClick:t[0]||(t[0]=function(){return r.getMyfriends&&r.getMyfriends.apply(r,arguments)}),class:"has-text-info"}," フレンド ")],2),Object(n["g"])("li",{class:Object(n["o"])(["",{"is-active":a.showMyHistory}])},[Object(n["g"])("a",{onClick:t[1]||(t[1]=function(){return r.getMyHistory&&r.getMyHistory.apply(r,arguments)}),class:"has-text-info"}," これまでのスポーツ ")],2),Object(n["g"])("li",null,[Object(n["g"])("a",{class:"show-modal has-text-danger","data-target":"my-modal",onClick:t[2]||(t[2]=function(){return r.showModalEdit&&r.showModalEdit.apply(r,arguments)})},"ログアウト")])])]),a.showMyFriend?(Object(n["s"])(),Object(n["f"])("div",Ze,[Object(n["g"])("div",et,[Object(n["g"])("div",tt,[Object(n["g"])("div",st,[Object(n["G"])(Object(n["g"])("input",{type:"text",class:"input",placeholder:"ユーザーID 追加",name:"query","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.add_friend_ID=e})},null,512),[[n["D"],a.add_friend_ID]])]),Object(n["g"])("div",nt,[Object(n["g"])("button",{class:"button is-warning",onClick:t[4]||(t[4]=function(){return r.addFriend&&r.addFriend.apply(r,arguments)})},at)])])]),(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(a.Myfriends,(function(e){return Object(n["s"])(),Object(n["d"])(i,{key:e.ID,user:e},null,8,["user"])})),128))])):Object(n["e"])("",!0),a.showMyHistory?(Object(n["s"])(),Object(n["f"])("div",rt,"HISTORY")):Object(n["e"])("",!0),Object(n["g"])("div",{class:Object(n["o"])(["modal",{"is-active":a.showModal}])},[Object(n["g"])("div",{onClick:t[5]||(t[5]=function(){return r.showModalEdit&&r.showModalEdit.apply(r,arguments)}),class:"modal-background"}),Object(n["g"])("div",it,[Object(n["g"])("div",ct,[Object(n["g"])("div",ut,[Object(n["g"])("div",lt,[dt,gt,bt,Object(n["g"])("p",null,Object(n["B"])(r.currentDateTime()),1)]),Object(n["g"])("div",{class:"button is-danger",onClick:t[6]||(t[6]=function(){return r.logout&&r.logout.apply(r,arguments)})},"ログアウト")])])]),Object(n["g"])("button",{onClick:t[7]||(t[7]=function(){return r.showModalEdit&&r.showModalEdit.apply(r,arguments)}),class:"modal-close is-large","aria-label":"close"})],2)])}var pt={name:"MyAccount",components:{UserBox:Q},data:function(){return{user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]},Myfriends:[],showModal:!1,showMyFriend:!0,showMyHistory:!1,add_friend_ID:null}},mounted:function(){document.title="My account | MinSpo!!",this.user=this.$store.state.user,console.log("user:",this.user),this.getMyfriends()},methods:{logout:function(){this.$store.commit("removeSession"),this.$store.commit("removeUser"),this.$router.push("/")},showModalEdit:function(){this.showModal=!this.showModal},getMyfriends:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user.ID,session:e.user.session},console.log("formData:",s),t.next=5,_.a.post("/api/friend_data",s).then((function(t){console.log(t),"success"==t.data.type?(e.Myfriends=t.data.message,e.showMyHistory=!1,e.showMyFriend=!0):Object(z["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}),console.log("activeuser:",e.Myfriends)})).catch((function(e){console.log(e)}));case 5:e.$store.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()},getMyHistory:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.showMyFriend=!1,e.showMyHistory=!0;case 2:case"end":return t.stop()}}),t)})))()},addFriend:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user.ID,session:e.user.session,friend_ID:e.add_friend_ID},console.log("formData :",s),t.next=5,_.a.post("/api/add_friend",s).then((function(t){console.log(t.data),e.add_friend_ID=null,"success"==t.data.type?e.getMyfriends():"not found"==t.data.message?Object(z["toast"])({message:"入力したIDのユーザーが存在しません。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):"can not add yourself"==t.data.message?Object(z["toast"])({message:"入力したIDはあなたのIDです。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):"already added"==t.data.message?Object(z["toast"])({message:"入力したIDのユーザーを既に登録しています",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):console.log("some warning")})).catch((function(t){if(t.response)for(var s in t.response.data)e.errors.push("".concat(s,": ").concat(t.response.data[s]));else e.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(t))}));case 5:e.$store.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()},currentDateTime:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),s=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),n=t+" "+s;return n}}};pt.render=mt;var Ot=pt,ft=[{path:"/",name:"Home",component:X,meta:{requireLogin:!0}},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/log-in",name:"LogIn",component:he},{path:"/sign-up",name:"SignUp",component:Je},{path:"/active-users",name:"ActiveUsers",component:Ye,meta:{requireLogin:!0}},{path:"/my-account",name:"MyAccount",component:Ot,meta:{requireLogin:!0}}],jt=Object(L["a"])({history:Object(L["b"])("/"),routes:ft});jt.beforeEach((function(e,t,s){e.matched.some((function(e){return e.meta.requireLogin}))&&!H.state.isAuthenticated?s({name:"LogIn",query:{to:e.path}}):s()}));var ht=jt;s("b277");_.a.defaults.baseURL="http://localhost:8891",Object(n["c"])(k).use(H).use(ht).mount("#app")},5961:function(e,t,s){"use strict";s("e73c")},b277:function(e,t,s){},b7fa:function(e,t,s){},e73c:function(e,t,s){}});
//# sourceMappingURL=app.12208062.js.map