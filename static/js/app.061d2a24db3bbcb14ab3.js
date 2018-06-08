webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"brown"},[e("div",{attrs:{id:"navbar"}},[e("div",{staticClass:"nav-wrapper"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("\n                    Link2Beans\n                ")])],1)])])])},staticRenderFns:[]},i={name:"app",components:{Navbar:a("VU/8")(null,n,!1,null,null,null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},o=a("VU/8")(i,r,!1,null,null,null).exports,c=a("/ocq"),d=a("Sazm"),l=a.n(d),u=(a("3VHS"),l.a.initializeApp({apiKey:"AIzaSyAgzCTWfhAd5SWSjw37O0onY41gi2i8dgk",authDomain:"notes-9d940.firebaseapp.com",databaseURL:"https://notes-9d940.firebaseio.com",projectId:"notes-9d940",storageBucket:"notes-9d940.appspot.com",messagingSenderId:"1086860832565"}).firestore()),f={name:"dashboard",data:function(){return{cafes:[]}},created:function(){var t=this;u.collection("cafes").orderBy("name").get().then(function(e){e.forEach(function(e){var a={id:e.id,cafe_id:e.data().cafe_id,address:e.data().address,name:e.data().name,station:e.data().station};t.cafes.push(a)})})}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[t._m(0),t._v(" "),t._l(t.cafes,function(e){return a("li",{key:e.cafe_id,staticClass:"collection-item"},[t._v("\n            #"+t._s(e.cafe_id)+" "),a("span",{staticClass:"brown-text"},[t._v(t._s(e.name))]),t._v("@"+t._s(e.address)+" "),a("div",{staticClass:"chip"},[t._v(t._s(e.station))]),t._v(" "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-cafe",params:{cafe_id:e.cafe_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large brown",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h4",[this._v("Cafes List")])])}]},m=a("VU/8")(f,v,!1,null,null,null).exports,p={name:"new-cafe",data:function(){return{cafe_id:null,name:null,address:null,station:null}},methods:{saveCafe:function(){var t=this;u.collection("cafes").add({cafe_id:this.cafe_id,name:this.name,address:this.address,station:this.station}).then(function(e){return t.$router.push("/")}).catch(function(t){return console.log(err)})}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-cafe"}},[a("h4",[t._v("New Cafe")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.saveCafe(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cafe_id,expression:"cafe_id"}],attrs:{type:"text",required:""},domProps:{value:t.cafe_id},on:{input:function(e){e.target.composing||(t.cafe_id=e.target.value)}}}),t._v(" "),a("label",[t._v("Cafe ID")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("label",[t._v("Name")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",required:""},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),a("label",[t._v("Address")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.station,expression:"station"}],attrs:{type:"text",required:""},domProps:{value:t.station},on:{input:function(e){e.target.composing||(t.station=e.target.value)}}}),t._v(" "),a("label",[t._v("Station")])])]),t._v(" "),a("button",{staticClass:"btn brown",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn brown",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},h=a("VU/8")(p,_,!1,null,null,null).exports,C={name:"view-cafe",data:function(){return{cafe_id:null,name:null,address:null,station:null}},beforeRouteEnter:function(t,e,a){u.collection("cafes").where("cafe_id","==",t.params.cafe_id).get().then(function(t){t.forEach(function(t){a(function(e){e.cafe_id=t.data().cafe_id,e.address=t.data().address,e.name=t.data().name,e.station=t.data().station})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;u.collection("cafes").where("cafe_id","==",this.$route.params.cafe_id).get().then(function(e){e.forEach(function(e){t.cafe_id=e.data().cafe_id,t.address=e.data().address,t.name=e.data().name,t.station=e.data().station})})},deleteCafe:function(){var t=this;confirm("Are you sure?")&&u.collection("cafes").where("cafe_id","==",this.$route.params.cafe_id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"view-cafe"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-item"},[a("div",{staticClass:"chip"},[t._v(t._s(t.station))])]),t._v(" "),a("li",{staticClass:"collection-header"},[a("h4",[t._v(t._s(t.name))])]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v(t._s(t.address))])]),t._v(" "),a("router-link",{staticClass:"btn brown",attrs:{to:"/"}},[t._v("Back")]),t._v(" "),a("button",{staticClass:"btn brown",on:{click:t.deleteCafe}},[t._v("Delete")]),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large brown",attrs:{to:{name:"edit-cafe",params:{cafe_id:t.cafe_id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},b=a("VU/8")(C,w,!1,null,null,null).exports,g={name:"edit-cafe",data:function(){return{cafe_id:null,name:null,address:null,station:null}},beforeRouteEnter:function(t,e,a){u.collection("cafes").where("cafe_id","==",t.params.cafe_id).get().then(function(t){t.forEach(function(t){a(function(e){e.cafe_id=t.data().cafe_id,e.address=t.data().address,e.name=t.data().name,e.station=t.data().station})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;u.collection("cafes").where("cafe_id","==",this.$route.params.cafe_id).get().then(function(e){e.forEach(function(e){t.cafe_id=e.data().cafe_id,t.address=e.data().address,t.name=e.data().name,t.station=e.data().station})})},updateCafe:function(){var t=this;u.collection("cafes").where("cafe_id","==",this.$route.params.cafe_id).get().then(function(e){e.forEach(function(e){e.ref.update({cafe_id:t.cafe_id,name:t.name,address:t.address,station:t.station}).then(function(){t.$router.push({name:"view-cafe",params:{cafe_id:t.cafe_id}})})})})}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"edit-cafe"}},[a("h4",[t._v("Edit Cafe")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.updateCafe(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cafe_id,expression:"cafe_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:t.cafe_id},on:{input:function(e){e.target.composing||(t.cafe_id=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",required:""},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.station,expression:"station"}],attrs:{type:"text",required:""},domProps:{value:t.station},on:{input:function(e){e.target.composing||(t.station=e.target.value)}}})])]),t._v(" "),a("button",{staticClass:"btn brown",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn brown",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},y=a("VU/8")(g,x,!1,null,null,null).exports;s.a.use(c.a);var E=new c.a({routes:[{path:"/",name:"dashboard",component:m},{path:"/new",name:"new-cafe",component:h},{path:"/edit/:cafe_id",name:"edit-cafe",component:y},{path:"/:cafe_id",name:"view-cafe",component:b}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:E,components:{App:o},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.061d2a24db3bbcb14ab3.js.map