(function(e){function t(t){for(var n,r,a=t[0],c=t[1],u=t[2],l=0,g=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&g.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(g.length)g.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},o={app:0},i=[];function r(e){return a.p+"js/"+({about:"about"}[e]||e)+".js"}function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.e=function(e){var t=[],s=o[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise((function(t,n){s=o[e]=[t,n]}));t.push(s[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=r(e);var u=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var s=o[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,s[1](u)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("7a23"),o={class:"wrapper"},i={class:"navbar is-link"},r={class:"navbar-brand"},a=Object(n["g"])("span",{class:"icon"},[Object(n["g"])("i",{class:"icon v-md-custom-icon-home3"})],-1),c=Object(n["g"])("strong",null,"みんスポ！",-1),u={key:0,class:" is-3 is-spaced"},l=Object(n["g"])("span",{"aria-hidden":"true"},null,-1),d=Object(n["g"])("span",{"aria-hidden":"true"},null,-1),g=Object(n["g"])("span",{"aria-hidden":"true"},null,-1),b=[l,d,g],m={class:"navbar-start"},p={class:"navbar-item"},f={class:"field has-addons"},O={class:"control"},j=Object(n["g"])("span",{class:"icon"},[Object(n["g"])("i",{class:"icon v-md-custom-icon-fire"})],-1),h=[j],v={class:"control"},y=Object(n["g"])("span",{class:"icon"},[Object(n["g"])("i",{class:"icon v-md-custom-icon-leaf"})],-1),w=[y],I={class:"navbar-end"},D={class:"navbar-item"},M={class:"buttons"},_=Object(n["h"])("アカウント"),x=Object(n["h"])("Log in"),k=Object(n["g"])("span",{class:"icon v-md-custom-icon-earth"},null,-1),S=Object(n["g"])("span",null,"世界のアクティブ",-1),H=Object(n["g"])("div",{class:"lds-dual-ring"},null,-1),L=[H],$={class:"section"},U=Object(n["g"])("footer",{class:"fotter"},[Object(n["g"])("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1);function F(e,t,s,l,d,g){var j=Object(n["z"])("router-link"),y=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["f"])("div",o,[Object(n["g"])("nav",i,[Object(n["g"])("div",r,[Object(n["i"])(j,{to:"/",class:"navbar-item"},{default:Object(n["F"])((function(){return[a,c]})),_:1}),Object(n["i"])(j,{to:"#",class:"navbar-item"},{default:Object(n["F"])((function(){return[d.user.fitness?(Object(n["s"])(),Object(n["f"])("p",u," 現在の運動："+Object(n["B"])(d.user.fitness),1)):Object(n["e"])("",!0)]})),_:1}),Object(n["g"])("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:t[0]||(t[0]=function(e){return d.showMobileMenu=!d.showMobileMenu})},b)]),Object(n["g"])("div",{class:Object(n["o"])(["navbar-menu",{"is-active":d.showMobileMenu}]),id:"navbar-menu"},[Object(n["g"])("div",m,[Object(n["g"])("div",p,[Object(n["g"])("div",f,[Object(n["g"])("div",O,[Object(n["G"])(Object(n["g"])("input",{type:"text",class:"input",placeholder:"運動を設定",name:"query","onUpdate:modelValue":t[1]||(t[1]=function(e){return d.set_fitness=e})},null,512),[[n["D"],d.set_fitness]])]),Object(n["g"])("button",{class:"button is-warning",onClick:t[2]||(t[2]=function(){return g.changeFitness&&g.changeFitness.apply(g,arguments)})},h),Object(n["g"])("div",v,[Object(n["g"])("button",{class:"button is-success",onClick:t[3]||(t[3]=function(){return g.finishFitness&&g.finishFitness.apply(g,arguments)})},w)])])])]),Object(n["g"])("div",I,[Object(n["g"])("div",D,[Object(n["g"])("div",M,[e.$store.state.isAuthenticated?(Object(n["s"])(),Object(n["d"])(j,{key:0,to:"/my-account",class:"button is-light"},{default:Object(n["F"])((function(){return[_]})),_:1})):(Object(n["s"])(),Object(n["d"])(j,{key:1,to:"/log-in",class:"button is-light"},{default:Object(n["F"])((function(){return[x]})),_:1})),Object(n["i"])(j,{to:"/active-users",class:"button is-warning"},{default:Object(n["F"])((function(){return[k,S]})),_:1})])])])],2)]),Object(n["g"])("div",{class:Object(n["o"])(["is-loading-bar has-text-centered",{"is-loading":e.$store.state.isLoading}])},L,2),Object(n["g"])("section",$,[Object(n["i"])(y)]),U])}var R=s("1da1"),P=(s("96cf"),s("bc3a")),C=s.n(P),B=s("4b44"),A={data:function(){return{user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]},showMobileMenu:!1,is_loading:!1,set_fitness:null}},beforeCreate:function(){this.$store.commit("initializeStore")},mounted:function(){this.is_loading=this.$store.state.is_loading,this.user=this.$store.state.user},methods:{changeFitness:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.set_fitness){t.next=12;break}if(console.log(e.user),s={ID:e.user.ID,session:e.user.session,fitness:null},!e.user.fitness){t.next=6;break}return t.next=6,C.a.post("/api/fitness",s);case 6:return n={ID:e.user.ID,session:e.user.session,fitness:e.set_fitness},t.next=9,C.a.post("/api/fitness",n).then((function(t){console.log("response:",t),"success"==t.data.type&&(e.user.fitness=e.set_fitness,e.$store.commit("setUser",e.user),Object(B["toast"])({message:"運動を設定しました",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}))}));case 9:e.set_fitness="",t.next=13;break;case 12:Object(B["toast"])({message:"運動を記入してください",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"});case 13:case"end":return t.stop()}}),t)})))()},finishFitness:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.user.fitness){t.next=9;break}if(console.log(e.user),s={ID:e.user.ID,session:e.user.session,fitness:null},!e.user.fitness){t.next=6;break}return t.next=6,C.a.post("/api/fitness",s).then((function(e){Object(B["toast"])({message:"休憩します",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})}));case 6:e.user.fitness="",t.next=10;break;case 9:Object(B["toast"])({message:"すでに休憩中です",type:"is-warning",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"});case 10:case"end":return t.stop()}}),t)})))()}},computed:{}};s("5701");A.render=F;var z=A,J=(s("d3b7"),s("3ca3"),s("ddb0"),s("6c02")),E=s("5502"),G=Object(E["a"])({state:{isAuthenticated:!1,settion:"",user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]},isLoading:!1},mutations:{initializeStore:function(e){'""'!==localStorage.getItem("session")?(e.session=localStorage.getItem("session"),e.isAuthenticated=!0,localStorage.getItem("user")?e.user=JSON.parse(localStorage.getItem("user")):e.user={ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]}):(e.session="",e.isAuthenticated=!1),console.log(e)},setIsLoading:function(e,t){e.isLoading=t},setSession:function(e,t){e.session=t,e.isAuthenticated=!0,localStorage.setItem("session",JSON.stringify(e.session))},removeSession:function(e){e.session="",e.isAuthenticated=!1,localStorage.setItem("session",JSON.stringify(e.session))},setUser:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(e.user))},removeUser:function(e){e.user={ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]},localStorage.setItem("user",JSON.stringify(e.user))}},actions:{},modules:{}}),N={class:"home"},T=Object(n["g"])("section",{class:"hero is-medium is-info md-6"},[Object(n["g"])("div",{class:"hero-body has-text-centered"},[Object(n["g"])("p",{class:"title mb-6"},"みんスポ！"),Object(n["g"])("p",{class:"subtitle"}," みんなでスポーツしましょう！ ")])],-1),q={class:"columns is-multiline"},V=Object(n["g"])("div",{class:"column is-12"},[Object(n["g"])("h2",{class:"is-size-2 has-text-centered"},"アクティブなフレンド")],-1);function Y(e,t,s,o,i,r){var a=Object(n["z"])("UserBox");return Object(n["s"])(),Object(n["f"])("div",N,[T,Object(n["g"])("div",q,[V,(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(i.Myfriends,(function(e){return Object(n["s"])(),Object(n["d"])(a,{key:e.ID,user:e},null,8,["user"])})),128))])])}s("b0c0");Object(n["v"])("data-v-6a5d5194");var K={class:"column is-2 is-narrow"},Q={class:"box"},W={class:"is-size-6 lineClamp title has-text-primary"},X={key:0,class:"is-size-6 lineClamp subtitle"},Z=Object(n["g"])("span",{class:"icon v-md-custom-icon-fire"},null,-1),ee={key:1,class:"is-size-6 lineClamp subtitle"},te=Object(n["g"])("span",{class:"icon v-md-custom-icon-leaf"},null,-1),se=Object(n["h"])(" 休息 "),ne=[te,se];function oe(e,t,s,o,i,r){return Object(n["s"])(),Object(n["f"])("div",K,[Object(n["g"])("div",Q,[Object(n["g"])("p",W,Object(n["B"])(s.user.name),1),s.user.now_fitness?(Object(n["s"])(),Object(n["f"])("p",X,[Z,Object(n["h"])(" "+Object(n["B"])(s.user.now_fitness),1)])):(Object(n["s"])(),Object(n["f"])("p",ee,ne))])])}Object(n["t"])();var ie={name:"UserBox",props:{user:Object}};s("98e1");ie.render=oe,ie.__scopeId="data-v-6a5d5194";var re=ie,ae={name:"Home",data:function(){return{Myfriends:[],user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]}}},components:{UserBox:re},mounted:function(){this.user=this.$store.state.user,this.GetMyfriends(),document.title="Myfriends | MinSpo!!",console.log("user: ",this.user)},methods:{GetMyfriends:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user.ID,session:e.user.session},console.log("formData:",s),t.next=5,C.a.post("/api/friend_data",s).then((function(t){console.log(t.data),"success"==t.data.type?e.Myfriends=t.data.message:Object(B["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}),console.log("activeuser:",e.Myfriends)})).catch((function(e){console.log(e),Object(B["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})}));case 5:e.$store.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()}}};ae.render=Y;var ce=ae,ue={class:"page-log-in"},le={class:"columns"},de={class:"column is-4 is-offset-4"},ge=Object(n["g"])("h1",{class:"title"},"Log in",-1),be={class:"field"},me=Object(n["g"])("label",null,"ユーザーID",-1),pe={class:"control"},fe={class:"field"},Oe=Object(n["g"])("label",null,"Password",-1),je={class:"control"},he={key:0,class:"notification is-danger"},ve=Object(n["g"])("div",{class:"field"},[Object(n["g"])("div",{class:"control"},[Object(n["g"])("button",{class:"button is-dark"},"Log in")])],-1),ye=Object(n["g"])("hr",null,null,-1),we=Object(n["h"])(" Or "),Ie=Object(n["h"])("click here"),De=Object(n["h"])(" to sign up! ");function Me(e,t,s,o,i,r){var a=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",ue,[Object(n["g"])("div",le,[Object(n["g"])("div",de,[ge,Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["H"])((function(){return r.submitForm&&r.submitForm.apply(r,arguments)}),["prevent"]))},[Object(n["g"])("div",be,[me,Object(n["g"])("div",pe,[Object(n["G"])(Object(n["g"])("input",{type:"text",class:"input","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.user_id=e})},null,512),[[n["D"],i.user_id]])])]),Object(n["g"])("div",fe,[Oe,Object(n["g"])("div",je,[Object(n["G"])(Object(n["g"])("input",{type:"password",class:"input","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.password=e})},null,512),[[n["D"],i.password]])])]),i.errors.length?(Object(n["s"])(),Object(n["f"])("div",he,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(i.errors,(function(e){return Object(n["s"])(),Object(n["f"])("p",{key:e},Object(n["B"])(e),1)})),128))])):Object(n["e"])("",!0),ve,ye,we,Object(n["i"])(a,{to:"/sign-up"},{default:Object(n["F"])((function(){return[Ie]})),_:1}),De],32)])])])}s("99af");var _e=s("0b26"),xe=s.n(_e),ke={name:"LogIn",data:function(){return{user_id:"",password:"",errors:[]}},mounted:function(){document.title="Log In | MinSpo"},methods:{submitForm:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user_id,pass:xe()(e.password)},localStorage.removeItem("settion"),console.log("formData :",s),t.next=6,C.a.post("/api/login",s).then((function(t){console.log("response :",t),"success"==t.data.type?(e.$store.commit("setSession",t.data.message.session),localStorage.setItem("session",t.data.message.session),e.$store.commit("setUser",t.data.message),e.$router.push("/my-account")):t.data.message?Object(B["toast"])({message:"ユーザーが存在しません。ユーザー名(ID)を確認してください。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):Object(B["toast"])({message:"パスワードが間違っています。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})})).catch((function(t){if(t.response)for(var s in t.response.data)e.errors.push("".concat(s,": ").concat(t.response.data[s]));else e.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(t))}));case 6:e.$store.commit("setIsLoading",!1);case 7:case"end":return t.stop()}}),t)})))()}}};ke.render=Me;var Se=ke,He={class:"page-sign-up"},Le={class:"columns"},$e={class:"column is-4 is-offset-4"},Ue=Object(n["g"])("h1",{class:"title"},"Sign up",-1),Fe={class:"field"},Re=Object(n["g"])("label",null,"Username",-1),Pe={class:"control"},Ce={class:"field"},Be=Object(n["g"])("label",null,"Password",-1),Ae={class:"control"},ze={class:"field"},Je=Object(n["g"])("label",null,"Repeat password",-1),Ee={class:"control"},Ge={key:0,class:"notification is-danger"},Ne=Object(n["g"])("div",{class:"field"},[Object(n["g"])("div",{class:"control"},[Object(n["g"])("button",{class:"button is-dark"},"Sign up")])],-1),Te=Object(n["g"])("hr",null,null,-1),qe=Object(n["h"])(" Or "),Ve=Object(n["h"])("click here"),Ye=Object(n["h"])(" to log in! ");function Ke(e,t,s,o,i,r){var a=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",He,[Object(n["g"])("div",Le,[Object(n["g"])("div",$e,[Ue,Object(n["g"])("form",{onSubmit:t[3]||(t[3]=Object(n["H"])((function(){return r.submitForm&&r.submitForm.apply(r,arguments)}),["prevent"]))},[Object(n["g"])("div",Fe,[Re,Object(n["g"])("div",Pe,[Object(n["G"])(Object(n["g"])("input",{type:"text",class:"input","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.username=e})},null,512),[[n["D"],i.username]])])]),Object(n["g"])("div",Ce,[Be,Object(n["g"])("div",Ae,[Object(n["G"])(Object(n["g"])("input",{type:"password",class:"input","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.password=e})},null,512),[[n["D"],i.password]])])]),Object(n["g"])("div",ze,[Je,Object(n["g"])("div",Ee,[Object(n["G"])(Object(n["g"])("input",{type:"password",class:"input","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.password2=e})},null,512),[[n["D"],i.password2]])])]),i.errors.length?(Object(n["s"])(),Object(n["f"])("div",Ge,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(i.errors,(function(e){return Object(n["s"])(),Object(n["f"])("p",{key:e},Object(n["B"])(e),1)})),128))])):Object(n["e"])("",!0),Ne,Te,qe,Object(n["i"])(a,{to:"/log-in"},{default:Object(n["F"])((function(){return[Ve]})),_:1}),Ye],32)])])])}var Qe={name:"SignUp",data:function(){return{username:"",password:"",password2:"",errors:[],user_id:null}},methods:{submitForm:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.commit("setIsLoading",!0),e.errors=[],""===e.username&&e.errors.push("The username is missing"),""===e.password&&e.errors.push("The password is too short"),e.password!==e.password2&&e.errors.push("The passwords doesn't match"),e.errors.length){t.next=9;break}return s={name:e.username,pass:xe()(e.password)},t.next=9,C.a.post("/api/register",s).then((function(t){if("success"==t.data.type){console.log(t.data),e.user_id=t.data.message.ID,Object(B["toast"])({message:"アカウントが登録されました。ログインします。",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"});var s={ID:t.data.message.ID,pass:t.data.message.pass};e.login(s)}else Object(B["toast"])({message:"問題が発生しました。",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})})).catch((function(t){if(t.response){for(var s in t.response.data)e.errors.push("".concat(s,": ").concat(t.response.data[s]));console.log(JSON.stringify(t.response.data))}else t.message&&(e.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(t)))}));case 9:e.$store.commit("setIsLoading",!1);case 10:case"end":return t.stop()}}),t)})))()},login:function(e){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.$store.commit("setIsLoading",!0),localStorage.removeItem("settion"),console.log("formData :",e),s.next=5,C.a.post("/api/login",e).then((function(e){console.log("response :",e),"success"==e.data.type?(t.$store.commit("setSession",e.data.message.session),localStorage.setItem("session",e.data.message.session),t.$store.commit("setUser",e.data.message),t.$router.push("/my-account")):e.data.message?Object(B["toast"])({message:"ユーザーが存在しません。ユーザー名(ID)を確認してください。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):Object(B["toast"])({message:"パスワードが間違っています。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})})).catch((function(e){if(e.response)for(var s in e.response.data)t.errors.push("".concat(s,": ").concat(e.response.data[s]));else t.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(e))}));case 5:t.$store.commit("setIsLoading",!1);case 6:case"end":return s.stop()}}),s)})))()}}};Qe.render=Ke;var We=Qe,Xe={class:"home"},Ze=Object(n["g"])("section",{class:"hero is-medium is-info md-6"},[Object(n["g"])("div",{class:"hero-body has-text-centered"},[Object(n["g"])("p",{class:"title mb-6"},"みんスポ！"),Object(n["g"])("p",{class:"subtitle"}," みんなでスポーツしましょう！ ")])],-1),et={class:"columns is-multiline"},tt=Object(n["g"])("div",{class:"column is-12"},[Object(n["g"])("h2",{class:"is-size-2 has-text-centered"},"アクティブなユーザー")],-1);function st(e,t,s,o,i,r){var a=Object(n["z"])("UserBox");return Object(n["s"])(),Object(n["f"])("div",Xe,[Ze,Object(n["g"])("div",et,[tt,(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(i.activeUsers,(function(e){return Object(n["s"])(),Object(n["d"])(a,{key:e.ID,user:e},null,8,["user"])})),128))])])}var nt={name:"Home",data:function(){return{activeUsers:[],user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]}}},components:{UserBox:re},mounted:function(){this.user=this.$store.state.user,this.GetActiveUsers(),document.title="ActiveUsers | MinSpo!!",console.log(this.user)},methods:{GetActiveUsers:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),t.next=3,C.a.get("api/get_active").then((function(t){console.log(t.data),"success"==t.data.type?(e.activeUsers=t.data.message,console.log("activeuser:",e.activeUsers)):Object(B["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})})).catch((function(e){console.log(e),Object(B["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})}));case 3:e.$store.commit("setIsLoading",!1);case 4:case"end":return t.stop()}}),t)})))()}}};nt.render=st;var ot=nt,it={class:"page-my-account"},rt={class:"tabs is-left"},at={class:"title"},ct={class:"tabs is-right"},ut={key:0,class:"columns is-multiline"},lt={class:"column is-12"},dt={class:"field has-addons"},gt={class:"control"},bt={class:"control"},mt=Object(n["g"])("span",{class:"icon"},[Object(n["g"])("i",{class:"icon v-md-custom-icon-quill"})],-1),pt=[mt],ft={key:1,class:"columns is-multiline"},Ot={class:"modal-content"},jt={class:"card"},ht={class:"card-content"},vt={class:"content"},yt=Object(n["h"])(" 本当にログアウトしますか？ "),wt=Object(n["g"])("p",{class:"has-text-grey"}," ログインページから再度ログインできます。 ",-1),It={class:"has-text-grey"},Dt=Object(n["h"])(" あなたのIDは "),Mt={style:{color:"red"}},_t=Object(n["h"])(" です。IDは次回のログインで必要です。 "),xt=Object(n["g"])("br",null,null,-1);function kt(e,t,s,o,i,r){var a=Object(n["z"])("UserBox");return Object(n["s"])(),Object(n["f"])("div",it,[Object(n["g"])("div",rt,[Object(n["g"])("h1",at,Object(n["B"])(i.user.name)+"（ID："+Object(n["B"])(i.user.ID)+"）のアカウントページ ",1)]),Object(n["g"])("div",ct,[Object(n["g"])("ul",null,[Object(n["g"])("li",{class:Object(n["o"])(["",{"is-active":i.showMyFriend}])},[Object(n["g"])("a",{onClick:t[0]||(t[0]=function(){return r.getMyfriends&&r.getMyfriends.apply(r,arguments)}),class:"has-text-info"}," フレンド ")],2),Object(n["g"])("li",{class:Object(n["o"])(["",{"is-active":i.showMyHistory}])},[Object(n["g"])("a",{onClick:t[1]||(t[1]=function(){return r.getMyHistory&&r.getMyHistory.apply(r,arguments)}),class:"has-text-info"}," これまでのスポーツ ")],2),Object(n["g"])("li",null,[Object(n["g"])("a",{class:"show-modal has-text-danger","data-target":"my-modal",onClick:t[2]||(t[2]=function(){return r.showModalEdit&&r.showModalEdit.apply(r,arguments)})},"ログアウト")])])]),i.showMyFriend?(Object(n["s"])(),Object(n["f"])("div",ut,[Object(n["g"])("div",lt,[Object(n["g"])("div",dt,[Object(n["g"])("div",gt,[Object(n["G"])(Object(n["g"])("input",{type:"text",class:"input",placeholder:"ユーザーID 追加",name:"query","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.add_friend_ID=e})},null,512),[[n["D"],i.add_friend_ID]])]),Object(n["g"])("div",bt,[Object(n["g"])("button",{class:"button is-warning",onClick:t[4]||(t[4]=function(){return r.addFriend&&r.addFriend.apply(r,arguments)})},pt)])])]),(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(i.Myfriends,(function(e){return Object(n["s"])(),Object(n["d"])(a,{key:e.ID,user:e},null,8,["user"])})),128))])):Object(n["e"])("",!0),i.showMyHistory?(Object(n["s"])(),Object(n["f"])("div",ft,"HISTORY")):Object(n["e"])("",!0),Object(n["g"])("div",{class:Object(n["o"])(["modal",{"is-active":i.showModal}])},[Object(n["g"])("div",{onClick:t[5]||(t[5]=function(){return r.showModalEdit&&r.showModalEdit.apply(r,arguments)}),class:"modal-background"}),Object(n["g"])("div",Ot,[Object(n["g"])("div",jt,[Object(n["g"])("div",ht,[Object(n["g"])("div",vt,[yt,wt,Object(n["g"])("p",It,[Dt,Object(n["g"])("span",Mt,Object(n["B"])(i.user.ID),1),_t]),xt,Object(n["g"])("p",null,Object(n["B"])(r.currentDateTime()),1)]),Object(n["g"])("div",{class:"button is-danger",onClick:t[6]||(t[6]=function(){return r.logout&&r.logout.apply(r,arguments)})},"ログアウト")])])]),Object(n["g"])("button",{onClick:t[7]||(t[7]=function(){return r.showModalEdit&&r.showModalEdit.apply(r,arguments)}),class:"modal-close is-large","aria-label":"close"})],2)])}var St={name:"MyAccount",components:{UserBox:re},data:function(){return{user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]},Myfriends:[],Myhistory:[],showModal:!1,showMyFriend:!0,showMyHistory:!1,add_friend_ID:null}},mounted:function(){document.title="My account | MinSpo!!",this.user=this.$store.state.user,console.log("user:",this.user),this.getMyfriends(),console.log("myfriend:",this.Myfriends)},methods:{logout:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s={ID:e.user.ID,session:e.user.session,fitness:null},t.next=3,C.a.post("/api/fitness",s);case 3:return n={ID:e.user.ID,session:e.user.session},t.next=6,C.a.post("/api/logupt",n).then((function(t){console.log("response:",t),e.$store.commit("removeSession"),e.$store.commit("removeUser"),e.$router.push("/"),location.reload()}));case 6:case"end":return t.stop()}}),t)})))()},showModalEdit:function(){this.showModal=!this.showModal},getMyfriends:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user.ID,session:e.user.session},console.log("formData:",s),t.next=5,C.a.post("/api/friend_data",s).then((function(t){console.log(t),"success"==t.data.type?(e.Myfriends=t.data.message,e.showMyHistory=!1,e.showMyFriend=!0):Object(B["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}),console.log("activeuser:",e.Myfriends)})).catch((function(e){console.log(e)}));case 5:e.$store.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()},getMyHistory:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user.ID,session:e.user.session},console.log("formData:",s),t.next=5,C.a.post("/api/get_history",s).then((function(t){console.log(t),"success"==t.data.type?(e.Myhistory=t.data.message,e.showMyFriend=!1,e.showMyHistory=!0):Object(B["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}),console.log("activeuser:",e.Myfriends)})).catch((function(e){console.log(e)}));case 5:e.$store.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()},addFriend:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user.ID,session:e.user.session,friend_ID:e.add_friend_ID},console.log("formData :",s),t.next=5,C.a.post("/api/add_friend",s).then((function(t){console.log(t.data),e.add_friend_ID=null,"success"==t.data.type?e.getMyfriends():"user not found"==t.data.message?Object(B["toast"])({message:"ユーザーが存在しません",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):"can not add yourself"==t.data.message?Object(B["toast"])({message:"あなたのIDです",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):"already added"==t.data.message?Object(B["toast"])({message:"既に登録しています",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):console.log("some warning")})).catch((function(t){if(t.response)for(var s in t.response.data)e.errors.push("".concat(s,": ").concat(t.response.data[s]));else e.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(t))}));case 5:e.$store.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()},currentDateTime:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),s=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),n=t+" "+s;return n}}};St.render=kt;var Ht=St,Lt=[{path:"/",name:"Home",component:ce,meta:{requireLogin:!0}},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/log-in",name:"LogIn",component:Se},{path:"/sign-up",name:"SignUp",component:We},{path:"/active-users",name:"ActiveUsers",component:ot,meta:{requireLogin:!0}},{path:"/my-account",name:"MyAccount",component:Ht,meta:{requireLogin:!0}}],$t=Object(J["a"])({history:Object(J["b"])("/"),routes:Lt});$t.beforeEach((function(e,t,s){e.matched.some((function(e){return e.meta.requireLogin}))&&!G.state.isAuthenticated?s({name:"LogIn",query:{to:e.path}}):s()}));var Ut=$t;s("b277");C.a.defaults.baseURL="https://3b.intern.jigd.info",Object(n["c"])(z).use(G).use(Ut).mount("#app")},5701:function(e,t,s){"use strict";s("6144")},6144:function(e,t,s){},"98e1":function(e,t,s){"use strict";s("d27b")},b277:function(e,t,s){},d27b:function(e,t,s){}});
//# sourceMappingURL=app.js.map