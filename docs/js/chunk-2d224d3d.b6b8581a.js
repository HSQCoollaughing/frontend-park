(window["webpackJsonp_frontend-park"]=window["webpackJsonp_frontend-park"]||[]).push([["chunk-2d224d3d"],{e293:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page-container"},[t("div",{attrs:{id:"webgl-output"}})])}],o=t("5a89"),a={components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){this.init()},methods:{init:function(){var e=new o["l"],n=new o["j"](45,window.innerWidth/(window.innerHeight-60),.1,1e3);this.createAxes(e),this.createPlane(e),this.createCube(e),this.createSphere(e),this.createRenderer(e,n)},createRenderer:function(e,n){var t=new o["o"];t.setClearColor(new o["d"](0)),t.setSize(window.innerWidth,window.innerHeight-60),n.position.set(-30,40,50),n.lookAt(e.position),document.getElementById("webgl-output").appendChild(t.domElement),t.render(e,n)},createAxes:function(e){var n=new o["a"](20);e.add(n)},createPlane:function(e){var n=new o["k"](80,80),t=new o["h"]({color:11184810}),r=new o["g"](n,t);r.rotation.x=-.5*Math.PI,r.position.set(0,0,0),e.add(r)},createCube:function(e){var n=new o["b"](4,4,4),t=new o["h"]({color:16711680,wireframe:!0}),r=new o["g"](n,t);r.position.set(5,5,5),e.add(r)},createSphere:function(e){var n=new o["m"](4,20,20),t=new o["h"]({color:7829503,wireframe:!0}),r=new o["g"](n,t);r.position.set(-15,5,5),e.add(r)}}},c=a,d=t("2877"),s=Object(d["a"])(c,r,i,!1,null,"46db707c",null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d224d3d.b6b8581a.js.map