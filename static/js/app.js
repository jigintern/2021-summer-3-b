(function(e){function t(t){for(var n,r,a=t[0],c=t[1],u=t[2],l=0,g=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&g.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(g.length)g.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},o={app:0},i=[];function r(e){return a.p+"js/"+({about:"about"}[e]||e)+".js"}function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.e=function(e){var t=[],s=o[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise((function(t,n){s=o[e]=[t,n]}));t.push(s[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=r(e);var u=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var s=o[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,s[1](u)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0190":function(e,t,s){},"2d04":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("7a23"),o={class:"wrapper"},i={class:"navbar is-link"},r={class:"navbar-brand"},a=Object(n["g"])("span",{class:"icon"},[Object(n["g"])("i",{class:"icon v-md-custom-icon-home3"})],-1),c=Object(n["g"])("strong",null,"みんスポ！",-1),u=Object(n["g"])("span",{"aria-hidden":"true"},null,-1),l=Object(n["g"])("span",{"aria-hidden":"true"},null,-1),d=Object(n["g"])("span",{"aria-hidden":"true"},null,-1),g=[u,l,d],b=Object(n["g"])("div",{class:"navbar-start"},null,-1),m={class:"navbar-end"},p={class:"navbar-item"},f={class:"buttons"},O=Object(n["h"])("アカウント"),j=Object(n["h"])("Log in"),h=Object(n["g"])("span",{class:"icon v-md-custom-icon-earth"},null,-1),v=Object(n["g"])("span",null,"世界のアクティブ",-1),y=Object(n["g"])("div",{class:"lds-dual-ring"},null,-1),w=[y],I={class:"section"},_=Object(n["g"])("footer",{class:"fotter"},[Object(n["g"])("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1);function D(e,t,s,u,l,d){var y=Object(n["z"])("router-link"),D=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["f"])("div",o,[Object(n["g"])("nav",i,[Object(n["g"])("div",r,[Object(n["i"])(y,{to:"/",class:"navbar-item"},{default:Object(n["F"])((function(){return[a,c]})),_:1}),Object(n["g"])("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:t[0]||(t[0]=function(e){return l.showMobileMenu=!l.showMobileMenu})},g)]),Object(n["g"])("div",{class:Object(n["o"])(["navbar-menu",{"is-active":l.showMobileMenu}]),id:"navbar-menu"},[b,Object(n["g"])("div",m,[Object(n["g"])("div",p,[Object(n["g"])("div",f,[e.$store.state.isAuthenticated?(Object(n["s"])(),Object(n["d"])(y,{key:0,to:"/my-account",class:"button is-light"},{default:Object(n["F"])((function(){return[O]})),_:1})):(Object(n["s"])(),Object(n["d"])(y,{key:1,to:"/log-in",class:"button is-light"},{default:Object(n["F"])((function(){return[j]})),_:1})),Object(n["i"])(y,{to:"/active-users",class:"button is-warning"},{default:Object(n["F"])((function(){return[h,v]})),_:1})])])])],2)]),Object(n["g"])("div",{class:Object(n["o"])(["is-loading-bar has-text-centered",{"is-loading":e.$store.state.isLoading}])},w,2),Object(n["g"])("section",I,[Object(n["i"])(D)]),_])}var x=s("bc3a"),M=s.n(x),k=s("4b44"),S={data:function(){return{user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]},showMobileMenu:!1,is_loading:!1,set_fitness:null}},beforeCreate:function(){this.$store.commit("initializeStore")},mounted:function(){this.is_loading=this.$store.state.is_loading,this.user=this.$store.state.user},methods:{},computed:{}};s("5dbd");S.render=D;var F=S,$=(s("d3b7"),s("3ca3"),s("ddb0"),s("6c02")),H=s("5502"),L=Object(H["a"])({state:{isAuthenticated:!1,settion:"",user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]},isLoading:!1},mutations:{initializeStore:function(e){'""'!==localStorage.getItem("session")?(e.session=localStorage.getItem("session"),e.isAuthenticated=!0,localStorage.getItem("user")?e.user=JSON.parse(localStorage.getItem("user")):e.user={ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]}):(e.session="",e.isAuthenticated=!1),console.log(e)},setIsLoading:function(e,t){e.isLoading=t},setSession:function(e,t){e.session=t,e.isAuthenticated=!0,localStorage.setItem("session",JSON.stringify(e.session))},removeSession:function(e){e.session="",e.isAuthenticated=!1,localStorage.setItem("session",JSON.stringify(e.session))},setUser:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(e.user))},removeUser:function(e){e.user={ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]},localStorage.setItem("user",JSON.stringify(e.user))}},actions:{},modules:{}}),U={class:"home"},R=Object(n["g"])("section",{class:"hero is-medium is-info md-6"},[Object(n["g"])("div",{class:"hero-body has-text-centered"},[Object(n["g"])("p",{class:"title mb-6"},"みんスポ！"),Object(n["g"])("p",{class:"subtitle"}," みんなでスポーツしましょう！ ")])],-1),B={class:"columns is-multiline"},A=Object(n["g"])("div",{class:"column is-12"},[Object(n["g"])("h2",{class:"is-size-2 has-text-centered"},"アクティブなフレンド")],-1);function C(e,t,s,o,i,r){var a=Object(n["z"])("UserBox");return Object(n["s"])(),Object(n["f"])("div",U,[R,Object(n["g"])("div",B,[A,(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(i.Myfriends,(function(e){return Object(n["s"])(),Object(n["d"])(a,{key:e.ID,user:e,onAddFriend:function(t){return r.addFriend_Box(e.ID)}},null,8,["user","onAddFriend"])})),128))])])}var P=s("1da1");s("99af"),s("96cf"),s("b0c0");Object(n["v"])("data-v-7f09587c");var z={class:"column is-2 is-narrow"},J={class:"box"},N={class:"is-size-6 lineClamp title has-text-primary"},E=Object(n["g"])("span",{class:"icon is-small"},[Object(n["g"])("i",{class:"icon v-md-custom-icon-user-plus"})],-1),G=[E],q={key:0,class:"is-size-6 lineClamp subtitle"},T=Object(n["g"])("span",{class:"icon v-md-custom-icon-fire"},null,-1),V={key:1,class:"is-size-6 lineClamp subtitle"},Y=Object(n["g"])("span",{class:"icon v-md-custom-icon-leaf"},null,-1),K=Object(n["h"])(" 休息 "),Q=[Y,K];function W(e,t,s,o,i,r){return Object(n["s"])(),Object(n["f"])("div",z,[Object(n["g"])("div",J,[Object(n["g"])("p",N,[Object(n["h"])(Object(n["B"])(s.user.name)+" ",1),Object(n["g"])("a",{class:"","aria-label":"reply",onClick:t[0]||(t[0]=function(){return r.addFriend&&r.addFriend.apply(r,arguments)})},G)]),s.user.now_fitness?(Object(n["s"])(),Object(n["f"])("p",q,[T,Object(n["h"])(" "+Object(n["B"])(s.user.now_fitness),1)])):(Object(n["s"])(),Object(n["f"])("p",V,Q))])])}Object(n["t"])();var X={name:"UserBox",props:{user:Object},methods:{addFriend:function(){this.$emit("add-friend")}}};s("f190");X.render=W,X.__scopeId="data-v-7f09587c";var Z=X,ee={name:"Home",data:function(){return{Myfriends:[],user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]},add_friend_ID:""}},components:{UserBox:Z},mounted:function(){this.user=this.$store.state.user,this.GetMyfriends(),document.title="Myfriends | MinSpo!!",console.log("user: ",this.user)},methods:{GetMyfriends:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user.ID,session:e.user.session},console.log("formData:",s),t.next=5,M.a.post("/api/friend_data",s).then((function(t){console.log(t.data),"success"==t.data.type?e.Myfriends=t.data.message:(e.$store.commit("removeSession"),e.$store.commit("removeUser"),console.log(error),e.$router.push("/log-in")),console.log("activeuser:",e.Myfriends)})).catch((function(t){e.$store.commit("removeSession"),e.$store.commit("removeUser"),console.log(t),e.$router.push("/log-in")}));case 5:e.$store.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()},addFriend_Box:function(e){this.add_friend_ID=e,this.addFriend(),console.log("addfriend")},addFriend:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user.ID,session:e.user.session,friend_ID:e.add_friend_ID},console.log("formData :",s),t.next=5,M.a.post("/api/add_friend",s).then((function(t){console.log(t.data),e.add_friend_ID=null,"success"==t.data.type?Object(k["toast"])({message:"フレンド追加",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):"user not found"==t.data.message?Object(k["toast"])({message:"ユーザーが存在しません",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):"can not add yourself"==t.data.message?Object(k["toast"])({message:"あなたのIDです",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):"already added"==t.data.message?Object(k["toast"])({message:"既に登録しています",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):console.log("some warning")})).catch((function(t){if(t.response)for(var s in t.response.data)e.errors.push("".concat(s,": ").concat(t.response.data[s]));else e.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(t))}));case 5:e.$store.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()}}};ee.render=C;var te=ee,se={class:"page-log-in"},ne={class:"columns"},oe={class:"column is-4 is-offset-4"},ie=Object(n["g"])("h1",{class:"title"},"ログイン",-1),re={class:"field"},ae=Object(n["g"])("label",null,"ユーザーID",-1),ce={class:"control"},ue={class:"field"},le=Object(n["g"])("label",null,"パスワード",-1),de={class:"control"},ge={key:0,class:"notification is-danger"},be=Object(n["g"])("div",{class:"field"},[Object(n["g"])("div",{class:"control"},[Object(n["g"])("button",{class:"button is-dark"},"ログイン")])],-1),me=Object(n["g"])("hr",null,null,-1),pe=Object(n["h"])(" Or "),fe=Object(n["h"])("クリック"),Oe=Object(n["h"])(" サインアップ ");function je(e,t,s,o,i,r){var a=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",se,[Object(n["g"])("div",ne,[Object(n["g"])("div",oe,[ie,Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["H"])((function(){return r.submitForm&&r.submitForm.apply(r,arguments)}),["prevent"]))},[Object(n["g"])("div",re,[ae,Object(n["g"])("div",ce,[Object(n["G"])(Object(n["g"])("input",{type:"text",class:"input","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.user_id=e})},null,512),[[n["D"],i.user_id]])])]),Object(n["g"])("div",ue,[le,Object(n["g"])("div",de,[Object(n["G"])(Object(n["g"])("input",{type:"password",class:"input","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.password=e})},null,512),[[n["D"],i.password]])])]),i.errors.length?(Object(n["s"])(),Object(n["f"])("div",ge,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(i.errors,(function(e){return Object(n["s"])(),Object(n["f"])("p",{key:e},Object(n["B"])(e),1)})),128))])):Object(n["e"])("",!0),be,me,pe,Object(n["i"])(a,{to:"/sign-up"},{default:Object(n["F"])((function(){return[fe]})),_:1}),Oe],32)])])])}var he=s("0b26"),ve=s.n(he),ye={name:"LogIn",data:function(){return{user_id:"",password:"",errors:[]}},mounted:function(){document.title="Log In | MinSpo"},methods:{submitForm:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user_id,pass:ve()(e.password)},localStorage.removeItem("settion"),console.log("formData :",s),t.next=6,M.a.post("/api/login",s).then((function(t){console.log("response :",t),"success"==t.data.type?(e.$store.commit("setSession",t.data.message.session),localStorage.setItem("session",t.data.message.session),e.$store.commit("setUser",t.data.message),e.$router.push("/my-account")):t.data.message?Object(k["toast"])({message:"ユーザーが存在しません。ユーザー名(ID)を確認してください。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):Object(k["toast"])({message:"パスワードが間違っています。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})})).catch((function(t){if(t.response)for(var s in t.response.data)e.errors.push("".concat(s,": ").concat(t.response.data[s]));else e.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(t))}));case 6:e.$store.commit("setIsLoading",!1);case 7:case"end":return t.stop()}}),t)})))()}}};ye.render=je;var we=ye,Ie={class:"page-sign-up"},_e={class:"columns"},De={class:"column is-4 is-offset-4"},xe=Object(n["g"])("h1",{class:"title"},"サインアップ",-1),Me={class:"field"},ke=Object(n["g"])("label",null,"ユーザー名",-1),Se={class:"control"},Fe={class:"field"},$e=Object(n["g"])("label",null,"パスワード",-1),He={class:"control"},Le={class:"field"},Ue=Object(n["g"])("label",null,"パスワード(確認)",-1),Re={class:"control"},Be={key:0,class:"notification is-danger"},Ae=Object(n["g"])("div",{class:"field"},[Object(n["g"])("div",{class:"control"},[Object(n["g"])("button",{class:"button is-dark"},"サインイン")])],-1),Ce=Object(n["g"])("hr",null,null,-1),Pe=Object(n["h"])(" Or "),ze=Object(n["h"])("クリック"),Je=Object(n["h"])(" ログイン ");function Ne(e,t,s,o,i,r){var a=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",Ie,[Object(n["g"])("div",_e,[Object(n["g"])("div",De,[xe,Object(n["g"])("form",{onSubmit:t[3]||(t[3]=Object(n["H"])((function(){return r.submitForm&&r.submitForm.apply(r,arguments)}),["prevent"]))},[Object(n["g"])("div",Me,[ke,Object(n["g"])("div",Se,[Object(n["G"])(Object(n["g"])("input",{type:"text",class:"input","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.username=e})},null,512),[[n["D"],i.username]])])]),Object(n["g"])("div",Fe,[$e,Object(n["g"])("div",He,[Object(n["G"])(Object(n["g"])("input",{type:"password",class:"input","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.password=e})},null,512),[[n["D"],i.password]])])]),Object(n["g"])("div",Le,[Ue,Object(n["g"])("div",Re,[Object(n["G"])(Object(n["g"])("input",{type:"password",class:"input","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.password2=e})},null,512),[[n["D"],i.password2]])])]),i.errors.length?(Object(n["s"])(),Object(n["f"])("div",Be,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(i.errors,(function(e){return Object(n["s"])(),Object(n["f"])("p",{key:e},Object(n["B"])(e),1)})),128))])):Object(n["e"])("",!0),Ae,Ce,Pe,Object(n["i"])(a,{to:"/log-in"},{default:Object(n["F"])((function(){return[ze]})),_:1}),Je],32)])])])}var Ee={name:"SignUp",data:function(){return{username:"",password:"",password2:"",errors:[],user_id:null}},methods:{submitForm:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.commit("setIsLoading",!0),e.errors=[],""===e.username&&e.errors.push("The username is missing"),""===e.password&&e.errors.push("The password is too short"),e.password!==e.password2&&e.errors.push("The passwords doesn't match"),e.errors.length){t.next=9;break}return s={name:e.username,pass:ve()(e.password)},t.next=9,M.a.post("/api/register",s).then((function(t){if("success"==t.data.type){console.log(t.data),e.user_id=t.data.message.ID,Object(k["toast"])({message:"アカウントが登録されました。ログインします。",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"});var s={ID:t.data.message.ID,pass:t.data.message.pass};e.login(s)}else Object(k["toast"])({message:"問題が発生しました。",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})})).catch((function(t){if(t.response){for(var s in t.response.data)e.errors.push("".concat(s,": ").concat(t.response.data[s]));console.log(JSON.stringify(t.response.data))}else t.message&&(e.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(t)))}));case 9:e.$store.commit("setIsLoading",!1);case 10:case"end":return t.stop()}}),t)})))()},login:function(e){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.$store.commit("setIsLoading",!0),localStorage.removeItem("settion"),console.log("formData :",e),s.next=5,M.a.post("/api/login",e).then((function(e){console.log("response :",e),"success"==e.data.type?(t.$store.commit("setSession",e.data.message.session),localStorage.setItem("session",e.data.message.session),t.$store.commit("setUser",e.data.message),t.$router.push("/my-account")):e.data.message?Object(k["toast"])({message:"ユーザーが存在しません。ユーザー名(ID)を確認してください。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):Object(k["toast"])({message:"パスワードが間違っています。",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})})).catch((function(e){if(e.response)for(var s in e.response.data)t.errors.push("".concat(s,": ").concat(e.response.data[s]));else t.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(e))}));case 5:t.$store.commit("setIsLoading",!1);case 6:case"end":return s.stop()}}),s)})))()}}};Ee.render=Ne;var Ge=Ee,qe={class:"home"},Te=Object(n["g"])("section",{class:"hero is-medium is-info md-6"},[Object(n["g"])("div",{class:"hero-body has-text-centered"},[Object(n["g"])("p",{class:"title mb-6"},"みんスポ！"),Object(n["g"])("p",{class:"subtitle"}," みんなでスポーツしましょう！ ")])],-1),Ve={class:"columns is-multiline"},Ye=Object(n["g"])("div",{class:"column is-12"},[Object(n["g"])("h2",{class:"is-size-2 has-text-centered"},"すべてのユーザー")],-1);function Ke(e,t,s,o,i,r){var a=Object(n["z"])("UserBox");return Object(n["s"])(),Object(n["f"])("div",qe,[Te,Object(n["g"])("div",Ve,[Ye,(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(i.activeUsers,(function(e){return Object(n["s"])(),Object(n["d"])(a,{key:e.ID,user:e,onAddFriend:function(t){return r.addFriend_Box(e.ID)}},null,8,["user","onAddFriend"])})),128))])])}var Qe={name:"Home",data:function(){return{activeUsers:[],user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]},friend_ID:""}},components:{UserBox:Z},mounted:function(){this.user=this.$store.state.user,this.GetActiveUsers(),document.title="ActiveUsers | MinSpo!!",console.log(this.user)},methods:{GetActiveUsers:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),t.next=3,M.a.get("api/get_active").then((function(t){console.log(t.data),"success"==t.data.type?(e.activeUsers=t.data.message,console.log("activeuser:",e.activeUsers)):Object(k["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})})).catch((function(e){console.log(e),Object(k["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})}));case 3:e.$store.commit("setIsLoading",!1);case 4:case"end":return t.stop()}}),t)})))()},addFriend_Box:function(e){this.add_friend_ID=e,this.addFriend(),console.log("addfriend")},addFriend:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user.ID,session:e.user.session,friend_ID:e.add_friend_ID},console.log("formData :",s),t.next=5,M.a.post("/api/add_friend",s).then((function(t){console.log(t.data),e.add_friend_ID=null,"success"==t.data.type?Object(k["toast"])({message:"フレンド追加",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):"user not found"==t.data.message?Object(k["toast"])({message:"ユーザーが存在しません",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):"can not add yourself"==t.data.message?Object(k["toast"])({message:"あなたのIDです",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):"already added"==t.data.message?Object(k["toast"])({message:"既に登録しています",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):console.log("some warning")})).catch((function(t){if(t.response)for(var s in t.response.data)e.errors.push("".concat(s,": ").concat(t.response.data[s]));else e.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(t))}));case 5:e.$store.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()}}};Qe.render=Ke;var We=Qe,Xe={class:"page-my-account"},Ze={class:"columns"},et={class:"column"},tt={class:"columns is-desktop"},st={class:"tabs is-left"},nt={class:"column"},ot={class:"title is-4"},it={class:"column"},rt={class:"button is-link is-rounded"},at={class:"field has-addons"},ct={class:"control"},ut=Object(n["g"])("span",{class:"icon"},[Object(n["g"])("i",{class:"icon v-md-custom-icon-fire"})],-1),lt=[ut],dt={class:"control"},gt=Object(n["g"])("span",{class:"icon"},[Object(n["g"])("i",{class:"icon v-md-custom-icon-leaf"})],-1),bt=[gt],mt={class:"tabs is-right"},pt={key:0,class:"columns is-multiline"},ft={class:"column is-12"},Ot={class:"field has-addons"},jt={class:"control"},ht={class:"control"},vt=Object(n["g"])("span",{class:"icon"},[Object(n["g"])("i",{class:"icon v-md-custom-icon-quill"})],-1),yt=[vt],wt={key:1,class:"columns is-multiline"},It=["onClick"],_t={class:"modal-content"},Dt={class:"card"},xt={class:"card-content"},Mt={class:"content"},kt=Object(n["h"])(" 本当にログアウトしますか？ "),St=Object(n["g"])("p",{class:"has-text-grey"}," ログインページから再度ログインできます。 ",-1),Ft={class:"has-text-grey"},$t=Object(n["h"])(" あなたのIDは "),Ht={style:{color:"red"}},Lt=Object(n["h"])(" です。IDは次回のログインで必要です。 "),Ut=Object(n["g"])("br",null,null,-1);function Rt(e,t,s,o,i,r){var a=Object(n["z"])("UserBox");return Object(n["s"])(),Object(n["f"])("div",Xe,[Object(n["g"])("div",Ze,[Object(n["g"])("div",et,[Object(n["g"])("div",tt,[Object(n["g"])("div",st,[Object(n["g"])("div",nt,[Object(n["g"])("h1",ot,Object(n["B"])(i.user.name)+"（ID："+Object(n["B"])(i.user.ID)+"）のページ ",1)])]),Object(n["g"])("div",it,[Object(n["g"])("button",rt," now："+Object(n["B"])(i.user.fitness),1)])]),Object(n["g"])("div",at,[Object(n["g"])("div",ct,[Object(n["G"])(Object(n["g"])("input",{type:"text",class:"input",placeholder:"運動を設定",name:"query","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.set_fitness=e})},null,512),[[n["D"],i.set_fitness]])]),Object(n["g"])("button",{class:"button is-warning",onClick:t[1]||(t[1]=function(){return r.changeFitness&&r.changeFitness.apply(r,arguments)})},lt),Object(n["g"])("div",dt,[Object(n["g"])("button",{class:"button is-success",onClick:t[2]||(t[2]=function(){return r.finishFitness&&r.finishFitness.apply(r,arguments)})},bt)])]),Object(n["g"])("div",mt,[Object(n["g"])("ul",null,[Object(n["g"])("li",{class:Object(n["o"])(["",{"is-active":i.showMyFriend}])},[Object(n["g"])("a",{onClick:t[3]||(t[3]=function(){return r.getMyfriends&&r.getMyfriends.apply(r,arguments)}),class:"has-text-info"}," フレンド ")],2),Object(n["g"])("li",{class:Object(n["o"])(["",{"is-active":i.showMyHistory}])},[Object(n["g"])("a",{onClick:t[4]||(t[4]=function(){return r.getMyHistory&&r.getMyHistory.apply(r,arguments)}),class:"has-text-info"}," 履歴 ")],2),Object(n["g"])("li",null,[Object(n["g"])("a",{class:"show-modal has-text-danger","data-target":"my-modal",onClick:t[5]||(t[5]=function(){return r.showModalEdit&&r.showModalEdit.apply(r,arguments)})},"ログアウト")])])]),i.showMyFriend?(Object(n["s"])(),Object(n["f"])("div",pt,[Object(n["g"])("div",ft,[Object(n["g"])("div",Ot,[Object(n["g"])("div",jt,[Object(n["G"])(Object(n["g"])("input",{type:"text",class:"input",placeholder:"ユーザーID 追加",name:"query","onUpdate:modelValue":t[6]||(t[6]=function(e){return i.add_friend_ID=e})},null,512),[[n["D"],i.add_friend_ID]])]),Object(n["g"])("div",ht,[Object(n["g"])("button",{class:"button is-warning",onClick:t[7]||(t[7]=function(){return r.addFriend&&r.addFriend.apply(r,arguments)})},yt)])])]),(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(i.Myfriends,(function(e){return Object(n["s"])(),Object(n["d"])(a,{key:e.ID,user:e,onAddFriend:function(t){return r.addFriend_Box(e.ID)}},null,8,["user","onAddFriend"])})),128))])):Object(n["e"])("",!0),i.showMyHistory?(Object(n["s"])(),Object(n["f"])("div",wt,[Object(n["g"])("ul",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(i.Myhistory,(function(e){return Object(n["s"])(),Object(n["f"])("li",{class:"column is-2 is-narrow",key:e.fitness},[Object(n["g"])("button",{class:"button is-success is-rounded",onClick:function(t){return r.fitness_btn(e.fitness)}},Object(n["B"])(e.fitness),9,It)])})),128))])])):Object(n["e"])("",!0),Object(n["g"])("div",{class:Object(n["o"])(["modal",{"is-active":i.showModal}])},[Object(n["g"])("div",{onClick:t[8]||(t[8]=function(){return r.showModalEdit&&r.showModalEdit.apply(r,arguments)}),class:"modal-background"}),Object(n["g"])("div",_t,[Object(n["g"])("div",Dt,[Object(n["g"])("div",xt,[Object(n["g"])("div",Mt,[kt,St,Object(n["g"])("p",Ft,[$t,Object(n["g"])("span",Ht,Object(n["B"])(i.user.ID),1),Lt]),Ut,Object(n["g"])("p",null,Object(n["B"])(r.currentDateTime()),1)]),Object(n["g"])("div",{class:"button is-danger",onClick:t[9]||(t[9]=function(){return r.logout&&r.logout.apply(r,arguments)})},"ログアウト")])])]),Object(n["g"])("button",{onClick:t[10]||(t[10]=function(){return r.showModalEdit&&r.showModalEdit.apply(r,arguments)}),class:"modal-close is-large","aria-label":"close"})],2)])])])}s("4de4");var Bt={name:"MyAccount",components:{UserBox:Z},data:function(){return{user:{ID:null,name:"",session:null,is_active:!1,fitness:"",friend_ID:[]},Myfriends:[],Myhistory:[],showModal:!1,showMyFriend:!0,showMyHistory:!1,add_friend_ID:null,set_fitness:""}},mounted:function(){document.title="My account | MinSpo!!",this.user=this.$store.state.user,console.log("user:",this.user),this.getMyfriends()},methods:{fitness_btn:function(e){this.set_fitness=e,this.changeFitness()},polling:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:setInterval((function(){e.getMyfriends(),console.log("myfriend:",e.Myfriends)}),1e4);case 1:case"end":return t.stop()}}),t)})))()},logout:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s={ID:e.user.ID,session:e.user.session},t.next=3,M.a.post("/api/logout",s).then((function(t){console.log("response:",t),e.$store.commit("removeSession"),e.$store.commit("removeUser"),e.$router.push("/"),location.reload()}));case 3:case"end":return t.stop()}}),t)})))()},addFriend_Box:function(e){this.add_friend_ID=e,this.addFriend()},showModalEdit:function(){this.showModal=!this.showModal},getMyfriends:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user.ID,session:e.user.session},console.log("formData:",s),t.next=5,M.a.post("/api/friend_data",s).then((function(t){console.log(t),"success"==t.data.type?(e.Myfriends=t.data.message,e.showMyHistory=!1,e.showMyFriend=!0):Object(k["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}),console.log("activeuser:",e.Myfriends)})).catch((function(e){console.log(e)}));case 5:e.$store.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()},getMyHistory:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user.ID,session:e.user.session},console.log("formData:",s),t.next=5,M.a.post("/api/get_history",s).then((function(t){console.log(t),"success"==t.data.type?(e.Myhistory=t.data.message.filter((function(e){return"start"==e.tag})),e.showMyFriend=!1,e.showMyHistory=!0):Object(k["toast"])({message:"Something went wrong. Please try again.",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}),console.log("activeuser:",e.Myfriends)})).catch((function(e){console.log(e)}));case 5:e.$store.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()},addFriend:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),s={ID:e.user.ID,session:e.user.session,friend_ID:e.add_friend_ID},console.log("formData :",s),t.next=5,M.a.post("/api/add_friend",s).then((function(t){console.log(t.data),e.add_friend_ID=null,"success"==t.data.type?(e.getMyfriends(),Object(k["toast"])({message:"フレンド追加",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})):"user not found"==t.data.message?Object(k["toast"])({message:"ユーザーが存在しません",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):"can not add yourself"==t.data.message?Object(k["toast"])({message:"あなたのIDです",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):"already added"==t.data.message?Object(k["toast"])({message:"既に登録しています",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}):console.log("some warning")})).catch((function(t){if(t.response)for(var s in t.response.data)e.errors.push("".concat(s,": ").concat(t.response.data[s]));else e.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(t))}));case 5:e.$store.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()},changeFitness:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.set_fitness){t.next=6;break}return s={ID:e.user.ID,session:e.user.session,fitness:e.set_fitness},t.next=4,M.a.post("/api/fitness",s).then((function(t){console.log("response:",t),"success"==t.data.type&&(e.user.fitness=e.set_fitness,e.$store.commit("setUser",e.user),Object(k["toast"])({message:"運動を設定しました",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"}))}));case 4:t.next=7;break;case 6:Object(k["toast"])({message:"運動を記入してください",type:"is-danger",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"});case 7:e.set_fitness="";case 8:case"end":return t.stop()}}),t)})))()},finishFitness:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.user.fitness){t.next=9;break}if(console.log(e.user),s={ID:e.user.ID,session:e.user.session,fitness:null},!e.user.fitness){t.next=6;break}return t.next=6,M.a.post("/api/fitness",s).then((function(e){Object(k["toast"])({message:"休憩します",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})}));case 6:e.user.fitness="",t.next=10;break;case 9:Object(k["toast"])({message:"すでに休憩中です",type:"is-warning",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"});case 10:case"end":return t.stop()}}),t)})))()},currentDateTime:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),s=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),n=t+" "+s;return n}}};Bt.render=Rt;var At=Bt,Ct=[{path:"/",name:"Home",component:te,meta:{requireLogin:!0}},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/log-in",name:"LogIn",component:we},{path:"/sign-up",name:"SignUp",component:Ge},{path:"/active-users",name:"ActiveUsers",component:We,meta:{requireLogin:!0}},{path:"/my-account",name:"MyAccount",component:At,meta:{requireLogin:!0}}],Pt=Object($["a"])({history:Object($["b"])("/"),routes:Ct});Pt.beforeEach((function(e,t,s){e.matched.some((function(e){return e.meta.requireLogin}))&&!L.state.isAuthenticated?s({name:"LogIn",query:{to:e.path}}):s()}));var zt=Pt;s("0190"),s("b277");M.a.defaults.baseURL="https://3b.intern.jigd.info",Object(n["c"])(F).use(L).use(zt).mount("#app")},"5dbd":function(e,t,s){"use strict";s("c165")},b277:function(e,t,s){},c165:function(e,t,s){},f190:function(e,t,s){"use strict";s("2d04")}});
//# sourceMappingURL=app.js.map