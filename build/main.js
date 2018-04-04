webpackJsonp([7],{105:function(n,t,e){"use strict";var l=e(108);e.d(t,"a",function(){return l.a});var a=e(193);e.d(t,"b",function(){return a.a});e(174)},106:function(n,t,e){"use strict";e(111),e(179),e(180),e(267)},108:function(n,t,e){"use strict";e.d(t,"a",function(){return l});e(3),e(51);var l=function(){function n(n,t){this.toastCtrl=n,this.alertCtrl=t}return n.prototype.presentToast=function(n){this.toastCtrl.create({message:n,duration:3e3,cssClass:"text-center"}).present()},n.prototype.createAlert=function(n){var t=this;this.alertCtrl.create({title:n.title,message:n.message,inputs:n.inputs,buttons:[{text:n.noText,handler:function(n){}},{text:n.yesText,handler:function(e){return n.yesFunction(e).then(function(e){return t.presentToast(n.yesToastThen)}).catch(function(e){return t.presentToast(n.yesToastCatch)})}}]}).present()},n}()},109:function(n,t,e){"use strict";e.d(t,"a",function(){return l});e(3);var l=function(){return function(){}}()},111:function(n,t,e){"use strict";e.d(t,"a",function(){return u});e(3);var l=e(322),a=(e.n(l),e(139)),u=(e.n(a),e(140),e(51),e(72),function(){function n(n,t,e,l,a,u){this.plt=n,this.afAuth=t,this.db=e,this.googlePlus=l,this.storage=a,this.loadingCtrl=u}return n.prototype.signInGoogle=function(){return this.showLoader(),this.plt.is("cordova")?this.nativeloginUser():this.browserGoogleLogin()},n.prototype.browserGoogleLogin=function(){var n=this,t=new l.auth.GoogleAuthProvider;return this.oAuthLogin(t).catch(function(t){return n.loading.dismiss()})},n.prototype.oAuthLogin=function(n){var t=this;return this.afAuth.auth.signInWithPopup(n).then(function(n){return t.updateUserData(n)})},n.prototype.nativeloginUser=function(){var n=this;return this.googlePlus.login({webClientId:"588101161325-f3p5ulsoe22ok3gbblq8itej4msbfvht.apps.googleusercontent.com"}).then(function(t){return n.oAuthNativeLogin(t)}).catch(function(t){return n.loading.dismiss()})},n.prototype.oAuthNativeLogin=function(n){var t=this,e=l.auth.GoogleAuthProvider.credential(n.idToken);return this.afAuth.auth.signInAndRetrieveDataWithCredential(e).then(function(n){return t.updateUserData(n)})},n.prototype.updateUserData=function(n){var t={uid:n.user.uid,email:n.user.email,displayName:n.user.displayName,photoURL:n.user.photoURL};return n.additionalUserInfo.isNewUser&&this.db.list("/users/"+t.uid).set("profile",t),this.loading.dismiss(),this.storage.set("user",JSON.stringify(t))},n.prototype.getUserData=function(){return this.storage.get("user")},n.prototype.signOut=function(){var n=this;return this.storage.clear().then(function(t){return n.fireBaseSignOut()})},n.prototype.fireBaseSignOut=function(){var n=this;return this.afAuth.auth.signOut().then(function(t){return n.plt.is("cordova")?n.nativeSignOut():Promise.resolve(null)})},n.prototype.nativeSignOut=function(){return this.googlePlus.disconnect()},n.prototype.showLoader=function(){this.loading=this.loadingCtrl.create({content:"Please wait..."}),this.loading.present()},n}())},174:function(n,t,e){"use strict";e.d(t,"a",function(){return u});e(3);var l=e(105),a=e(168),u=(e(51),function(){function n(){}return t=n,n.forRoot=function(){return{ngModule:t,providers:[l.a,l.b,a.a]}},n;var t}())},179:function(n,t,e){"use strict";e.d(t,"a",function(){return u});e(3);var l=e(35),a=(e.n(l),e(72),e(406)),u=(e.n(a),function(){function n(n,t){this.db=n,this.storage=t}return n.prototype.getTodoList=function(){var n=this;return this.storage.get("user").then(function(t){var e=JSON.parse(t);return n.baseUrl="/users/"+e.uid+"/todo-lists",n.todoLists=n.db.list(n.baseUrl),n.todoLists.valueChanges()})},n.prototype.addList=function(n){var t=this.todoLists.push({});return n.id=t.key,n.date=Date.now(),t.set(n)},n.prototype.deleteList=function(n){return this.todoLists.remove(n.id)},n.prototype.updateList=function(n,t){return n.name=t,this.todoLists.set(n.id,n)},n.prototype.getOneList=function(n){return this.db.object(this.baseUrl+"/"+n+"/").valueChanges()},n.prototype.getArrayList=function(n,t){var e=this,l=[];return this.baseUrl="/users/"+n.uid+"/todo-lists",this.todoLists=this.db.list(this.baseUrl),t.forEach(function(n){return l.push(e.db.object(e.baseUrl+"/"+n).valueChanges())}),Object(a.combineLatest)(l)},n.prototype.addItem=function(n,t){var e=this.buildAngularFireListOfItems(n).push({});return t.id=e.key,e.set(t)},n.prototype.deleteItem=function(n,t){return this.buildAngularFireListOfItems(n).remove(t.id)},n.prototype.updateItem=function(n,t){return this.buildAngularFireListOfItems(n).set(t.id,t)},n.prototype.buildAngularFireListOfItems=function(n){return this.db.list(this.baseUrl+"/"+n.id+"/items/")},n}())},180:function(n,t,e){"use strict";e.d(t,"a",function(){return l});e(3),e(72);var l=function(){function n(n,t){this.db=n,this.storage=t}return n.prototype.ngOnInit=function(){this.getUser()},n.prototype.getUidsSharedWithMe=function(){return this.getUids("shared-with-me")},n.prototype.getUidsIShareWith=function(){return this.getUids("i-share-with")},n.prototype.getUids=function(n){var t=this;return this.getUser().then(function(e){return t.getSettings(t.getAngularFireList(t.user.uid,n))})},n.prototype.getUser=function(){var n=this;return this.storage.get("user").then(function(t){return n.user=JSON.parse(t)})},n.prototype.getSettings=function(n){return n.valueChanges().map(function(n){return n.map(function(n){return n.uid})})},n.prototype.addSharedWithMe=function(n){var t=this,e=this.getAngularFireList(this.user.uid,"shared-with-me",n.uid),l=this.getAngularFireList(this.user.uid,"shared-with-me",n.uid+"/todo-lists");return e.set("uid",n.uid).then(function(t){return l.set(n.todoList.id,n.todoList)}).then(function(e){return t.notifyISharedWith(n)})},n.prototype.notifyISharedWith=function(n){var t=this.getAngularFireList(n.uid,"i-share-with",this.user.uid),e=this.getAngularFireList(n.uid,"i-share-with",this.user.uid+"/todo-lists");return t.set("uid",this.user.uid).then(function(t){return e.set(n.todoList.id,n.todoList)})},n.prototype.deleteSharedUser=function(n,t){var e=t?"shared-with-me":"i-share-with",l=this.getAngularFireList(n.uid,t?"i-share-with":"shared-with-me"),a=this.getAngularFireList(this.user.uid,e);return l.remove(this.user.uid).then(function(t){return a.remove(n.uid)})},n.prototype.getSharedUserData=function(n){return this.db.object("/users/"+n+"/profile").valueChanges()},n.prototype.getAngularFireList=function(n,t,e){return void 0===e&&(e=""),this.db.list("/users/"+n+"/"+t+"/"+e)},n.prototype.checkUserExists=function(n){},n.prototype.getIdListsShared=function(n){var t=this;return this.getUser().then(function(e){return t.getAngularFireList(t.user.uid,"shared-with-me",n+"/todo-lists").valueChanges().map(function(n){return n.map(function(n){return n.id})})})},n}()},181:function(n,t,e){"use strict";e.d(t,"a",function(){return a});e(3);var l=e(0),a=function(){function n(){this.onClickSearch=new l.l,this.onChangeDisplay=new l.l}return n.prototype.clickSearch=function(){this.onClickSearch.emit()},n.prototype.changeDisplay=function(){this.cardOrList=!this.cardOrList,this.onChangeDisplay.emit()},n}()},193:function(n,t,e){"use strict";e.d(t,"a",function(){return l});e(3),e(168),e(51);var l=function(){function n(n,t){this.plt=n,this.camera=t,this.options={destinationType:this.camera.DestinationType.DATA_URL,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,targetHeight:300}}return n.prototype.getPictureMedia=function(){return this.plt.is("cordova")?this.nativeGetPictureMedia():this.browserReadyGetPictureMedia()},n.prototype.nativeGetPictureMedia=function(){return this.options.sourceType=this.camera.PictureSourceType.CAMERA,this.options.correctOrientation=!0,this.imgToString()},n.prototype.imgToString=function(){var n=this;return this.camera.getPicture(this.options).then(function(n){return"data:image/jpeg;base64,"+n},function(n){return""+n}).then(function(t){return n.loadImageNative(t)})},n.prototype.browserReadyGetPictureMedia=function(){var n=this;return document.getElementById("camera-browser").style.display="unset",document.getElementById("task-description").style.display="none",navigator.mediaDevices.getUserMedia({audio:!0,video:{width:533,height:300}}).then(function(t){return n.stream=t,n.video=document.getElementById("video"),n.canvas=document.getElementById("picture"),n.video.srcObject=t,n.video.play(),!1}).catch(function(n){return alert("there was an error "+n),n})},n.prototype.browserGetPicture=function(){var n=this;return new Promise(function(t){n.canvas.getContext("2d").drawImage(n.video,0,0,300,300),t(n.canvas.toDataURL("image/jpeg",.6))})},n.prototype.cancelTakePicture=function(){this.stream&&this.stream.getTracks().forEach(function(n){return n.stop()}),document.getElementById("camera-browser").style.display="none",document.getElementById("task-description").style.display="unset"},n.prototype.getPictureLibrary=function(){return this.plt.is("cordova")?this.nativeGetPictureLibrary():this.browserReadyGetPictureLibrary()},n.prototype.nativeGetPictureLibrary=function(){return this.options.sourceType=this.camera.PictureSourceType.PHOTOLIBRARY,this.imgToString()},n.prototype.browserReadyGetPictureLibrary=function(){var n=this,t=document.getElementById("imgInput");return new Promise(function(e){t.onchange=function(t){var l=(t.target||window.event.srcElement).files,a=new FileReader,u=new Image;n.canvas=document.getElementById("picture"),a.onload=function(t){u.onload=function(t){n.canvas.getContext("2d").drawImage(u,0,0,300,300),e(n.canvas.toDataURL("image/jpeg",.6))},u.src=a.result},a.readAsDataURL(l[0])},t.click()})},n.prototype.loadImageNative=function(n){return new Promise(function(t){var e=new Image,l=document.getElementById("picture");e.onload=function(n){l.getContext("2d").drawImage(e,0,0,300,300)},e.src=n,t(n)})},n}()},204:function(n,t){function e(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=204},224:function(n,t,e){var l={"../pages/auth/auth.module.ngfactory":[417,4],"../pages/details/details.module.ngfactory":[418,2],"../pages/home/home.module.ngfactory":[419,1],"../pages/item-details/item-details.module.ngfactory":[420,5],"../pages/modal/modal.module.ngfactory":[421,6],"../pages/share-my-notes/share-my-notes.module.ngfactory":[422,0],"../pages/shared-with-me/shared-with-me.module.ngfactory":[423,3]};function a(n){var t=l[n];return t?e.e(t[1]).then(function(){return e(t[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}a.keys=function(){return Object.keys(l)},a.id=224,n.exports=a},267:function(n,t,e){"use strict";e.d(t,"a",function(){return l});e(3),e(140),e(106),e(72);var l=function(){return function(){}}()},288:function(n,t,e){"use strict";e.d(t,"b",function(){return r}),t.c=s,e.d(t,"a",function(){return c});var l=e(0),a=e(32),u=e(2),o=e(78),i=e(109),r=l.X({encapsulation:2,styles:[],data:{}});function s(n){return l._22(0,[(n()(),l._20(-1,null,["\n  "])),(n()(),l.Z(1,0,null,null,14,"div",[["padding",""],["text-center",""]],null,null,null,null,null)),(n()(),l._20(-1,null,["\n  "])),(n()(),l.Z(3,0,null,null,1,"ion-icon",[["color","gray"],["role","img"],["style","font-size: 200px;"]],[[2,"hide",null]],null,null,null,null)),l.Y(4,147456,null,0,a.a,[u.a,l.j,l.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),l._20(-1,null,["\n  "])),(n()(),l.Z(6,0,null,null,2,"h1",[["color","gray"],["ion-text",""],["text-center",""]],null,null,null,null,null)),l.Y(7,16384,null,0,o.a,[u.a,l.j,l.z],{color:[0,"color"]},null),(n()(),l._20(8,null,["",""])),(n()(),l._20(-1,null,["\n  "])),(n()(),l.Z(10,0,null,null,4,"h3",[["color","gray"],["ion-text",""],["text-center",""]],null,null,null,null,null)),l.Y(11,16384,null,0,o.a,[u.a,l.j,l.z],{color:[0,"color"]},null),(n()(),l._20(12,null,["","\n    "])),(n()(),l.Z(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l._20(14,null,["",""])),(n()(),l._20(-1,null,["\n"]))],function(n,t){n(t,4,0,"gray",l._2(1,"",t.component.icon,""));n(t,7,0,"gray");n(t,11,0,"gray")},function(n,t){var e=t.component;n(t,3,0,l._13(t,4)._hidden),n(t,8,0,e.h1Text),n(t,12,0,e.h3Text),n(t,14,0,e.h3Textsecond)})}var c=l.V("empty-list",i.a,function(n){return l._22(0,[(n()(),l.Z(0,0,null,null,1,"empty-list",[],null,null,null,s,r)),l.Y(1,49152,null,0,i.a,[],null,null)],null,null)},{icon:"icon",h1Text:"h1Text",h3Text:"h3Text",h3Textsecond:"h3Textsecond"},{},[])},289:function(n,t,e){"use strict";e.d(t,"b",function(){return P}),t.c=C,e.d(t,"a",function(){return S});var l=e(0),a=e(46),u=e(23),o=e(2),i=e(32),r=e(301),s=e(36),c=e(11),d=e(6),h=e(24),g=e(134),m=e(29),p=e(164),_=e(55),f=e(302),y=e(79),b=e(15),v=e(181),P=l.X({encapsulation:2,styles:[],data:{}});function L(n){return l._22(0,[(n()(),l.Z(0,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],[[8,"hidden",0]],[[null,"click"]],function(n,t,e){var l=!0;"click"===t&&(l=!1!==n.component.changeDisplay()&&l);return l},a.b,a.a)),l.Y(1,1097728,[[2,4]],0,u.a,[[8,""],o.a,l.j,l.z],null,null),(n()(),l._20(-1,0,["\n        "])),(n()(),l.Z(3,0,null,0,1,"ion-icon",[["name","list"],["role","img"]],[[2,"hide",null]],null,null,null,null)),l.Y(4,147456,null,0,i.a,[o.a,l.j,l.z],{name:[0,"name"]},null),(n()(),l._20(-1,0,["\n      "]))],function(n,t){n(t,4,0,"list")},function(n,t){n(t,0,0,!t.component.cardOrList),n(t,3,0,l._13(t,4)._hidden)})}function w(n){return l._22(0,[(n()(),l.Z(0,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],[[8,"hidden",0]],[[null,"click"]],function(n,t,e){var l=!0;"click"===t&&(l=!1!==n.component.changeDisplay()&&l);return l},a.b,a.a)),l.Y(1,1097728,[[2,4]],0,u.a,[[8,""],o.a,l.j,l.z],null,null),(n()(),l._20(-1,0,["\n        "])),(n()(),l.Z(3,0,null,0,1,"ion-icon",[["name","grid"],["role","img"]],[[2,"hide",null]],null,null,null,null)),l.Y(4,147456,null,0,i.a,[o.a,l.j,l.z],{name:[0,"name"]},null),(n()(),l._20(-1,0,["\n      "]))],function(n,t){n(t,4,0,"grid")},function(n,t){n(t,0,0,t.component.cardOrList),n(t,3,0,l._13(t,4)._hidden)})}function C(n){return l._22(0,[(n()(),l._20(-1,null,["\n  "])),(n()(),l.Z(1,0,null,null,34,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,r.b,r.a)),l.Y(2,49152,null,0,s.a,[c.a,[2,d.a],[2,h.a],o.a,l.j,l.z],{color:[0,"color"]},null),(n()(),l._20(-1,3,["\n        "])),(n()(),l.Z(4,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(n,t,e){var a=!0;"click"===t&&(a=!1!==l._13(n,6).toggle()&&a);return a},a.b,a.a)),l.Y(5,1097728,[[1,4]],0,u.a,[[8,""],o.a,l.j,l.z],null,null),l.Y(6,1064960,null,0,g.a,[m.a,[2,d.a],[2,u.a],[2,s.a]],{menuToggle:[0,"menuToggle"]},null),l.Y(7,16384,null,1,p.a,[o.a,l.j,l.z,[2,_.a],[2,s.a]],null,null),l._18(603979776,1,{_buttons:1}),(n()(),l._20(-1,0,["\n            "])),(n()(),l.Z(10,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),l.Y(11,147456,null,0,i.a,[o.a,l.j,l.z],{name:[0,"name"]},null),(n()(),l._20(-1,0,["\n        "])),(n()(),l._20(-1,3,["\n  "])),(n()(),l.Z(14,0,null,3,2,"ion-title",[],null,null,null,f.b,f.a)),l.Y(15,49152,null,0,y.a,[o.a,l.j,l.z,[2,_.a],[2,s.a]],null,null),(n()(),l._20(16,0,["",""])),(n()(),l._20(-1,3,["\n  "])),(n()(),l.Z(18,0,null,2,16,"ion-buttons",[["end",""]],null,null,null,null,null)),l.Y(19,16384,null,1,p.a,[o.a,l.j,l.z,[2,_.a],[2,s.a]],null,null),l._18(603979776,2,{_buttons:1}),(n()(),l._20(-1,null,["\n      "])),(n()(),l.U(16777216,null,null,1,null,L)),l.Y(23,16384,null,0,b.j,[l.I,l.F],{ngIf:[0,"ngIf"]},null),(n()(),l._20(-1,null,["\n      "])),(n()(),l.U(16777216,null,null,1,null,w)),l.Y(26,16384,null,0,b.j,[l.I,l.F],{ngIf:[0,"ngIf"]},null),(n()(),l._20(-1,null,["\n      "])),(n()(),l.Z(28,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(n,t,e){var l=!0;"click"===t&&(l=!1!==n.component.clickSearch()&&l);return l},a.b,a.a)),l.Y(29,1097728,[[2,4]],0,u.a,[[8,""],o.a,l.j,l.z],null,null),(n()(),l._20(-1,0,["\n        "])),(n()(),l.Z(31,0,null,0,1,"ion-icon",[["name","search"],["role","img"]],[[2,"hide",null]],null,null,null,null)),l.Y(32,147456,null,0,i.a,[o.a,l.j,l.z],{name:[0,"name"]},null),(n()(),l._20(-1,0,["\n      "])),(n()(),l._20(-1,null,["\n  "])),(n()(),l._20(-1,3,["\n  "]))],function(n,t){var e=t.component;n(t,2,0,"primary");n(t,6,0,"");n(t,11,0,"menu"),n(t,23,0,e.enabledChangeDisplay),n(t,26,0,e.enabledChangeDisplay);n(t,32,0,"search")},function(n,t){var e=t.component;n(t,1,0,l._13(t,2)._hidden,l._13(t,2)._sbPadding),n(t,4,0,l._13(t,6).isHidden),n(t,10,0,l._13(t,11)._hidden),n(t,16,0,e.title),n(t,31,0,l._13(t,32)._hidden)})}var S=l.V("nav-bar",v.a,function(n){return l._22(0,[(n()(),l.Z(0,0,null,null,1,"nav-bar",[],null,null,null,C,P)),l.Y(1,49152,null,0,v.a,[],null,null)],null,null)},{title:"title",enabledChangeDisplay:"enabledChangeDisplay",cardOrList:"cardOrList"},{onClickSearch:"onClickSearch",onChangeDisplay:"onChangeDisplay"},[])},303:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e(47),a=e(0),u=(e(3),e(51),e(103)),o=e(104),i=(e(106),e(105),function(){function n(n,t,e,l,a,u){var o=this;this.statusBar=e,this._AuthProvider=a,this.alert=u,this.rootPage="AuthPage",n.ready().then(function(){o.statusBar.backgroundColorByHexString("#33000000"),l.hide()}),t.viewDidEnter.subscribe(function(n){return o.getUserData()})}return n.prototype.getUserData=function(){var n=this;this._AuthProvider.getUserData().then(function(t){console.log("user from storage:",t),console.log("rootPage:",n.rootPage),t?(n.user=JSON.parse(t),"AuthPage"==n.rootPage&&(n.rootPage="HomePage")):"AuthPage"!=n.rootPage&&n.signOut()})},n.prototype.goToMyNotes=function(){this.rootPage="HomePage"},n.prototype.goToMySharedNotes=function(){this.rootPage="SharedWithMePage"},n.prototype.goToShareMyNotes=function(){this.rootPage="ShareMyNotesPage"},n.prototype.confirmSignOut=function(){var n=this;this.alert.createAlert({title:"Sign Out?",message:"You may loose all cached notes!",inputs:[],noText:"Cancel",yesText:"Yes",yesToastThen:"Succesfuly signed out",yesToastCatch:"Something wrong happened",yesFunction:function(t){return n.signOut()}})},n.prototype.signOut=function(){var n=this._AuthProvider.signOut();return this.rootPage="AuthPage",n.catch(function(n){return console.log("error:",n)})},n.prototype.closeMenu=function(){},n.prototype.dragMenu=function(){},n}()),r=function(){return function(){}}(),s=e(64),c=e(290),d=e(291),h=e(292),g=e(293),m=e(294),p=e(295),_=e(296),f=e(297),y=e(298),b=e(289),v=e(288),P=e(415),L=e(44),w=e(90),C=e(29),S=e(2),Y=e(5),j=e(33),k=e(9),T=e(12),I=e(11),M=e(107),O=e(6),A=e(78),Z=e(299),z=e(28),U=e(24),D=e(173),x=e(19),N=e(17),F=e(53),R=e(75),E=e(133),H=e(54),B=e(32),G=e(416),W=e(68),J=e(41),X=e(18),q=e(111),K=e(108),V=a.X({encapsulation:2,styles:[],data:{}});function Q(n){return a._22(0,[(n()(),a.Z(0,0,null,null,126,"ion-menu",[["id","myMenu"],["role","navigation"]],null,[[null,"ionClose"],[null,"ionDrag"],[null,"ionOpen"]],function(n,t,e){var l=!0,a=n.component;"ionClose"===t&&(l=!1!==a.closeMenu()&&l);"ionDrag"===t&&(l=!1!==a.dragMenu()&&l);"ionOpen"===t&&(l=!1!==a.dragMenu()&&l);return l},P.b,P.a)),a._17(6144,null,L.a,null,[w.a]),a.Y(2,245760,null,2,w.a,[C.a,a.j,S.a,Y.a,a.z,j.a,k.l,T.a,I.a],{content:[0,"content"],id:[1,"id"]},{ionDrag:"ionDrag",ionOpen:"ionOpen",ionClose:"ionClose"}),a._18(335544320,1,{menuContent:0}),a._18(335544320,2,{menuNav:0}),(n()(),a._20(-1,0,["\n  "])),(n()(),a.Z(6,0,null,0,16,"ion-header",[["class","navigation-drawer"]],null,null,null,null,null)),a.Y(7,16384,null,0,M.a,[S.a,a.j,a.z,[2,O.a]],null,null),(n()(),a._20(-1,null,["\n    "])),(n()(),a.Z(9,0,null,null,12,"div",[["class","profil"]],null,null,null,null,null)),(n()(),a._20(-1,null,["\n      "])),(n()(),a.Z(11,0,null,null,0,"img",[["alt","avatar"],["class","profil-img"]],[[8,"src",4]],null,null,null,null)),(n()(),a._20(-1,null,["\n      "])),(n()(),a.Z(13,0,null,null,7,"p",[["class","profil-text"],["color","light"],["ion-text",""]],null,null,null,null,null)),a.Y(14,16384,null,0,A.a,[S.a,a.j,a.z],{color:[0,"color"]},null),(n()(),a._20(-1,null,["\n        "])),(n()(),a.Z(16,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),a._20(17,null,["",""])),(n()(),a._20(-1,null,["\n        "])),(n()(),a.Z(19,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a._20(20,null,["","\n      "])),(n()(),a._20(-1,null,["\n    "])),(n()(),a._20(-1,null,["\n  "])),(n()(),a._20(-1,0,["\n  "])),(n()(),a.Z(24,0,null,0,101,"ion-content",[["padding-vertical",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Z.b,Z.a)),a.Y(25,4374528,[[1,4]],0,z.a,[S.a,Y.a,T.a,a.j,a.z,I.a,j.a,a.u,[2,O.a],[2,U.a]],null,null),(n()(),a._20(-1,1,["\n    "])),(n()(),a.Z(27,0,null,1,23,"ion-item",[["class","item item-block"],["no-lines",""]],null,null,null,D.b,D.a)),a.Y(28,1097728,null,3,x.a,[N.a,S.a,a.j,a.z,[2,F.a]],null,null),a._18(335544320,3,{contentLabel:0}),a._18(603979776,4,{_buttons:1}),a._18(603979776,5,{_icons:1}),a.Y(32,16384,null,0,R.a,[],null,null),(n()(),a._20(-1,2,["\n      "])),(n()(),a.Z(34,0,null,4,12,"button",[["class","item item-block"],["ion-item",""],["item-right",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var l=!0,u=n.component;"click"===t&&(l=!1!==a._13(n,40).close()&&l);"click"===t&&(l=!1!==u.goToMyNotes()&&l);return l},D.b,D.a)),a.Y(35,1097728,null,3,x.a,[N.a,S.a,a.j,a.z,[2,F.a]],null,null),a._18(335544320,6,{contentLabel:0}),a._18(603979776,7,{_buttons:1}),a._18(603979776,8,{_icons:1}),a.Y(39,16384,null,0,R.a,[],null,null),a.Y(40,16384,null,0,E.a,[C.a],{menuClose:[0,"menuClose"]},null),(n()(),a._20(-1,2,["\n        "])),(n()(),a.Z(42,0,null,1,3,"ion-label",[["ion-text",""]],null,null,null,null,null)),a.Y(43,16384,[[6,4],[3,4]],0,H.a,[S.a,a.j,a.z,[8,null],[8,null],[8,null],[8,null]],{color:[0,"color"]},null),a.Y(44,16384,null,0,A.a,[S.a,a.j,a.z],{color:[0,"color"]},null),(n()(),a._20(-1,null,["My notes"])),(n()(),a._20(-1,2,["\n      "])),(n()(),a._20(-1,2,["\n      "])),(n()(),a.Z(48,0,null,0,1,"ion-icon",[["item-left",""],["name","list-box"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(49,147456,[[5,4]],0,B.a,[S.a,a.j,a.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),a._20(-1,2,["\n    "])),(n()(),a._20(-1,1,["\n    "])),(n()(),a.Z(52,0,null,1,23,"ion-item",[["class","item item-block"],["no-lines",""]],null,null,null,D.b,D.a)),a.Y(53,1097728,null,3,x.a,[N.a,S.a,a.j,a.z,[2,F.a]],null,null),a._18(335544320,9,{contentLabel:0}),a._18(603979776,10,{_buttons:1}),a._18(603979776,11,{_icons:1}),a.Y(57,16384,null,0,R.a,[],null,null),(n()(),a._20(-1,2,["\n      "])),(n()(),a.Z(59,0,null,4,12,"button",[["class","item item-block"],["ion-item",""],["item-right",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var l=!0,u=n.component;"click"===t&&(l=!1!==a._13(n,65).close()&&l);"click"===t&&(l=!1!==u.goToMySharedNotes()&&l);return l},D.b,D.a)),a.Y(60,1097728,null,3,x.a,[N.a,S.a,a.j,a.z,[2,F.a]],null,null),a._18(335544320,12,{contentLabel:0}),a._18(603979776,13,{_buttons:1}),a._18(603979776,14,{_icons:1}),a.Y(64,16384,null,0,R.a,[],null,null),a.Y(65,16384,null,0,E.a,[C.a],{menuClose:[0,"menuClose"]},null),(n()(),a._20(-1,2,["\n        "])),(n()(),a.Z(67,0,null,1,3,"ion-label",[["ion-text",""]],null,null,null,null,null)),a.Y(68,16384,[[12,4],[9,4]],0,H.a,[S.a,a.j,a.z,[8,null],[8,null],[8,null],[8,null]],{color:[0,"color"]},null),a.Y(69,16384,null,0,A.a,[S.a,a.j,a.z],{color:[0,"color"]},null),(n()(),a._20(-1,null,["Shared with me"])),(n()(),a._20(-1,2,["\n      "])),(n()(),a._20(-1,2,["\n      "])),(n()(),a.Z(73,0,null,0,1,"ion-icon",[["item-left",""],["name","people"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(74,147456,[[11,4]],0,B.a,[S.a,a.j,a.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),a._20(-1,2,["\n    "])),(n()(),a._20(-1,1,["\n    "])),(n()(),a.Z(77,0,null,1,23,"ion-item",[["class","item item-block"]],null,null,null,D.b,D.a)),a.Y(78,1097728,null,3,x.a,[N.a,S.a,a.j,a.z,[2,F.a]],null,null),a._18(335544320,15,{contentLabel:0}),a._18(603979776,16,{_buttons:1}),a._18(603979776,17,{_icons:1}),a.Y(82,16384,null,0,R.a,[],null,null),(n()(),a._20(-1,2,["\n      "])),(n()(),a.Z(84,0,null,4,12,"button",[["class","item item-block"],["ion-item",""],["item-right",""],["menuClose",""],["no-lines",""]],null,[[null,"click"]],function(n,t,e){var l=!0,u=n.component;"click"===t&&(l=!1!==a._13(n,90).close()&&l);"click"===t&&(l=!1!==u.goToShareMyNotes()&&l);return l},D.b,D.a)),a.Y(85,1097728,null,3,x.a,[N.a,S.a,a.j,a.z,[2,F.a]],null,null),a._18(335544320,18,{contentLabel:0}),a._18(603979776,19,{_buttons:1}),a._18(603979776,20,{_icons:1}),a.Y(89,16384,null,0,R.a,[],null,null),a.Y(90,16384,null,0,E.a,[C.a],{menuClose:[0,"menuClose"]},null),(n()(),a._20(-1,2,["\n        "])),(n()(),a.Z(92,0,null,1,3,"ion-label",[["ion-text",""]],null,null,null,null,null)),a.Y(93,16384,[[18,4],[15,4]],0,H.a,[S.a,a.j,a.z,[8,null],[8,null],[8,null],[8,null]],{color:[0,"color"]},null),a.Y(94,16384,null,0,A.a,[S.a,a.j,a.z],{color:[0,"color"]},null),(n()(),a._20(-1,null,["Share my notes"])),(n()(),a._20(-1,2,["\n      "])),(n()(),a._20(-1,2,["\n      "])),(n()(),a.Z(98,0,null,0,1,"ion-icon",[["item-left",""],["name","md-share"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(99,147456,[[17,4]],0,B.a,[S.a,a.j,a.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),a._20(-1,2,["\n    "])),(n()(),a._20(-1,1,["\n    "])),(n()(),a.Z(102,0,null,1,22,"ion-item",[["class","item item-block"],["no-lines",""]],null,null,null,D.b,D.a)),a.Y(103,1097728,null,3,x.a,[N.a,S.a,a.j,a.z,[2,F.a]],null,null),a._18(335544320,21,{contentLabel:0}),a._18(603979776,22,{_buttons:1}),a._18(603979776,23,{_icons:1}),a.Y(107,16384,null,0,R.a,[],null,null),(n()(),a._20(-1,2,["\n      "])),(n()(),a.Z(109,0,null,4,11,"button",[["class","item item-block"],["ion-item",""],["item-right",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var l=!0,u=n.component;"click"===t&&(l=!1!==a._13(n,115).close()&&l);"click"===t&&(l=!1!==u.confirmSignOut()&&l);return l},D.b,D.a)),a.Y(110,1097728,null,3,x.a,[N.a,S.a,a.j,a.z,[2,F.a]],null,null),a._18(335544320,24,{contentLabel:0}),a._18(603979776,25,{_buttons:1}),a._18(603979776,26,{_icons:1}),a.Y(114,16384,null,0,R.a,[],null,null),a.Y(115,16384,null,0,E.a,[C.a],{menuClose:[0,"menuClose"]},null),(n()(),a._20(-1,2,["\n        "])),(n()(),a.Z(117,0,null,1,2,"ion-label",[],null,null,null,null,null)),a.Y(118,16384,[[24,4],[21,4]],0,H.a,[S.a,a.j,a.z,[8,null],[8,null],[8,null],[8,null]],null,null),(n()(),a._20(-1,null,[" Sign Out"])),(n()(),a._20(-1,2,["\n      "])),(n()(),a._20(-1,2,["\n      "])),(n()(),a.Z(122,0,null,0,1,"ion-icon",[["item-left",""],["name","log-out"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(123,147456,[[23,4]],0,B.a,[S.a,a.j,a.z],{name:[0,"name"]},null),(n()(),a._20(-1,2,["\n    "])),(n()(),a._20(-1,1,["\n  "])),(n()(),a._20(-1,0,["\n"])),(n()(),a._20(-1,null,["\n"])),(n()(),a.Z(128,0,null,null,2,"ion-nav",[],null,null,null,G.b,G.a)),a._17(6144,null,L.a,null,[W.a]),a.Y(130,4374528,[["content",4]],0,W.a,[[2,O.a],[2,U.a],I.a,S.a,Y.a,a.j,a.u,a.z,a.i,k.l,J.a,[2,X.a],T.a,a.k],{root:[0,"root"]},null),(n()(),a._20(-1,null,["\n"]))],function(n,t){var e=t.component;n(t,2,0,a._13(t,130),"myMenu");n(t,14,0,"light");n(t,40,0,""),n(t,43,0,"HomePage"==e.rootPage?"primary":"gray"),n(t,44,0,"HomePage"==e.rootPage?"primary":"gray");n(t,49,0,"HomePage"==e.rootPage?"primary":"gray","list-box");n(t,65,0,""),n(t,68,0,"SharedWithMePage"==e.rootPage?"primary":"gray"),n(t,69,0,"SharedWithMePage"==e.rootPage?"primary":"gray");n(t,74,0,"SharedWithMePage"==e.rootPage?"primary":"gray","people");n(t,90,0,""),n(t,93,0,"ShareMyNotesPage"==e.rootPage?"primary":"gray"),n(t,94,0,"ShareMyNotesPage"==e.rootPage?"primary":"gray");n(t,99,0,"ShareMyNotesPage"==e.rootPage?"primary":"gray","md-share");n(t,115,0,"");n(t,123,0,"log-out"),n(t,130,0,e.rootPage)},function(n,t){var e=t.component;n(t,11,0,a._2(1,"",null==e.user?null:e.user.photoURL,"")),n(t,17,0,null==e.user?null:e.user.displayName),n(t,20,0,null==e.user?null:e.user.email),n(t,24,0,a._13(t,25).statusbarPadding,a._13(t,25)._hasRefresher),n(t,48,0,a._13(t,49)._hidden),n(t,73,0,a._13(t,74)._hidden),n(t,98,0,a._13(t,99)._hidden),n(t,122,0,a._13(t,123)._hidden)})}var $=a.V("ng-component",i,function(n){return a._22(0,[(n()(),a.Z(0,0,null,null,1,"ng-component",[],null,null,null,Q,V)),a.Y(1,49152,null,0,i,[Y.a,I.a,u.a,o.a,q.a,K.a],null,null)],null,null)},{},{},[]),nn=e(15),tn=e(150),en=e(22),ln=e(268),an=e(31),un=e(137),on=e(69),rn=e(269),sn=e(266),cn=e(140),dn=e(132),hn=e(179),gn=e(180),mn=e(125),pn=e(127),_n=e(149),fn=e(43),yn=e(169),bn=e(66),vn=e(52),Pn=e(114),Ln=e(86),wn=e(157),Cn=e(152),Sn=e(163),Yn=e(168),jn=e(193),kn=e(287),Tn=e(151),In=e(135),Mn=e(153),On=e(72),An=e(267),Zn=e(174),zn=e(109),Un=a.W(r,[s.b],function(n){return a._10([a._11(512,a.i,a.S,[[8,[c.a,d.a,h.a,g.a,m.a,p.a,_.a,f.a,y.a,b.a,v.a,$]],[3,a.i],a.s]),a._11(5120,a.r,a._9,[[3,a.r]]),a._11(4608,nn.l,nn.k,[a.r,[2,nn.t]]),a._11(5120,a.b,a._0,[]),a._11(5120,a.p,a._6,[]),a._11(5120,a.q,a._7,[]),a._11(4608,l.c,l.q,[nn.d]),a._11(6144,a.D,null,[l.c]),a._11(4608,l.f,tn.a,[]),a._11(5120,l.d,function(n,t,e,a,u){return[new l.k(n,t),new l.o(e),new l.n(a,u)]},[nn.d,a.u,nn.d,nn.d,l.f]),a._11(4608,l.e,l.e,[l.d,a.u]),a._11(135680,l.m,l.m,[nn.d]),a._11(4608,l.l,l.l,[l.e,l.m]),a._11(6144,a.B,null,[l.l]),a._11(6144,l.p,null,[l.m]),a._11(4608,a.G,a.G,[a.u]),a._11(4608,l.h,l.h,[nn.d]),a._11(4608,l.i,l.i,[nn.d]),a._11(4608,en.o,en.o,[]),a._11(4608,en.d,en.d,[]),a._11(4608,ln.h,ln.m,[nn.d,a.w,ln.k]),a._11(4608,ln.n,ln.n,[ln.h,ln.l]),a._11(5120,ln.a,function(n){return[n]},[ln.n]),a._11(4608,ln.j,ln.j,[]),a._11(6144,ln.i,null,[ln.j]),a._11(4608,ln.g,ln.g,[ln.i]),a._11(6144,ln.b,null,[ln.g]),a._11(5120,ln.f,ln.o,[ln.b,[2,ln.a]]),a._11(4608,ln.c,ln.c,[ln.f]),a._11(5120,an.b,an.f,[an.c,an.d]),a._11(5120,un.a,un.c,[an.b]),a._11(5120,on.a,on.c,[an.b]),a._11(4608,rn.a,rn.a,[an.b,[2,rn.c]]),a._11(5120,sn.a,sn.c,[sn.b]),a._11(4608,cn.a,cn.a,[]),a._11(4608,dn.a,dn.a,[I.a,S.a]),a._11(4608,q.a,q.a,[Y.a,un.a,on.a,cn.a,sn.a,dn.a]),a._11(4608,hn.a,hn.a,[on.a,sn.a]),a._11(4608,gn.a,gn.a,[on.a,sn.a]),a._11(4608,mn.a,mn.a,[I.a,S.a]),a._11(4608,pn.a,pn.a,[I.a,S.a]),a._11(4608,_n.a,_n.a,[]),a._11(4608,N.a,N.a,[]),a._11(4608,fn.a,fn.a,[Y.a]),a._11(4608,j.a,j.a,[S.a,Y.a,a.u,T.a]),a._11(5120,nn.g,yn.c,[nn.r,[2,nn.a],S.a]),a._11(4608,nn.f,nn.f,[nn.g]),a._11(5120,bn.b,bn.d,[I.a,bn.a]),a._11(5120,X.a,X.b,[I.a,bn.b,nn.f,vn.b,a.i]),a._11(4608,Pn.a,Pn.a,[I.a,S.a,X.a]),a._11(4608,Ln.a,Ln.a,[I.a,S.a]),a._11(4608,wn.a,wn.a,[I.a,S.a,X.a]),a._11(4608,Cn.a,Cn.a,[S.a,Y.a,T.a,I.a,k.l]),a._11(4608,Sn.a,Sn.a,[I.a,S.a]),a._11(4608,J.a,J.a,[Y.a,S.a]),a._11(4608,K.a,K.a,[Sn.a,pn.a]),a._11(4608,Yn.a,Yn.a,[]),a._11(4608,jn.a,jn.a,[Y.a,Yn.a]),a._11(4608,u.a,u.a,[]),a._11(4608,o.a,o.a,[]),a._11(512,nn.c,nn.c,[]),a._11(512,a.k,kn.a,[]),a._11(256,S.b,{},[]),a._11(1024,Tn.a,Tn.b,[]),a._11(1024,Y.a,Y.b,[l.b,Tn.a,a.u]),a._11(1024,S.a,S.c,[S.b,Y.a]),a._11(512,T.a,T.a,[Y.a]),a._11(512,C.a,C.a,[]),a._11(512,I.a,I.a,[S.a,Y.a,[2,C.a]]),a._11(512,k.l,k.l,[I.a]),a._11(256,bn.a,{links:[{loadChildren:"../pages/auth/auth.module.ngfactory#AuthPageModuleNgFactory",name:"AuthPage",segment:"auth",priority:"low",defaultHistory:[]},{loadChildren:"../pages/details/details.module.ngfactory#DetailsPageModuleNgFactory",name:"DetailsPage",segment:"details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"HomePage",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/item-details/item-details.module.ngfactory#ItemDetailsPageModuleNgFactory",name:"ItemDetailsPage",segment:"item-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/modal/modal.module.ngfactory#ModalPageModuleNgFactory",name:"ModalPage",segment:"modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/share-my-notes/share-my-notes.module.ngfactory#ShareMyNotesPageModuleNgFactory",name:"ShareMyNotesPage",segment:"share-my-notes",priority:"low",defaultHistory:[]},{loadChildren:"../pages/shared-with-me/shared-with-me.module.ngfactory#SharedWithMePageModuleNgFactory",name:"SharedWithMePage",segment:"shared-with-me",priority:"low",defaultHistory:[]}]},[]),a._11(512,a.h,a.h,[]),a._11(512,In.a,In.a,[a.h]),a._11(1024,vn.b,vn.c,[In.a,a.o]),a._11(1024,a.c,function(n,t,e,a,u,o,i,r,s,c,d,h,g){return[l.s(n),Mn.a(t),_n.b(e,a),Cn.b(u,o,i,r,s),vn.d(c,d,h,g)]},[[2,a.t],S.a,Y.a,T.a,S.a,Y.a,T.a,I.a,k.l,S.a,bn.a,vn.b,a.u]),a._11(512,a.d,a.d,[[2,a.c]]),a._11(131584,a.f,a.f,[a.u,a.T,a.o,a.k,a.i,a.d]),a._11(512,a.e,a.e,[a.f]),a._11(512,l.a,l.a,[[3,l.a]]),a._11(512,en.m,en.m,[]),a._11(512,en.e,en.e,[]),a._11(512,en.l,en.l,[]),a._11(512,yn.a,yn.a,[]),a._11(512,ln.e,ln.e,[]),a._11(512,ln.d,ln.d,[]),a._11(512,an.a,an.a,[]),a._11(512,un.b,un.b,[]),a._11(512,on.b,on.b,[]),a._11(512,rn.b,rn.b,[]),a._11(512,On.a,On.a,[]),a._11(512,An.a,An.a,[]),a._11(512,yn.b,yn.b,[]),a._11(512,Zn.a,Zn.a,[]),a._11(512,r,r,[]),a._11(256,ln.k,"XSRF-TOKEN",[]),a._11(256,ln.l,"X-XSRF-TOKEN",[]),a._11(256,an.c,{apiKey:"AIzaSyAzamPI7qF93z18oStf4b_iuyJ5ROhtTvo",authDomain:"m2gi-ionic-21b7b.firebaseapp.com",databaseURL:"https://m2gi-ionic-21b7b.firebaseio.com",projectId:"m2gi-ionic-21b7b",storageBucket:"m2gi-ionic-21b7b.appspot.com",messagingSenderId:"588101161325"},[]),a._11(256,an.d,void 0,[]),a._11(256,sn.b,null,[]),a._11(256,vn.a,zn.a,[]),a._11(256,s.a,i,[]),a._11(256,nn.a,"/",[])])});Object(a.M)(),Object(l.j)().bootstrapModuleFactory(Un)}},[303]);