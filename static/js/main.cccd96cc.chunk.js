(this["webpackJsonptesting-app"]=this["webpackJsonptesting-app"]||[]).push([[0],{15:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(4),i=a(2),o=a(3),s=(a(15),a(0)),d=a.n(s),c=a(9),p=a.n(c),l=a(6),h=a(14),u=a.p+"static/media/eyeball.b62f76e1.png",m=(a.p,a.p+"static/media/ii3.324fc83f.png"),w=a.p+"static/media/ii2.36f14ff0.png",f=a.p+"static/media/ii1.7f307da2.png",j=a.p+"static/media/bgfill.321cace6.png",b=a.p+"static/media/crowpic10.a3187bc1.png",v=a.p+"static/media/foreground0.b36c48a4.png",g=a.p+"static/media/bricktexture0.3306dde5.png",y=a(10),O=(a(24),a(7)),k={height:720},A=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).sceneSetup=function(){var t=e.el.clientWidth,a=e.el.clientHeight;e.scene=new l.m,e.camera=new l.h(75,t/a,.1,1e3),e.camera.position.z=45,e.timeNow=Date.now(),e.controls=new h.a(e.camera,e.el),e.renderer=new l.s,e.renderer.setSize(t,a),e.el.appendChild(e.renderer.domElement)},e.addCustomSceneObjects=function(){var t=(new l.p).load(g);new l.g({map:t});e.scene.background=t;var a=(new l.p).load(j),n=new l.i(45,45,4,4),r=(new l.p).load(v),i=new l.i(45,45,4,4),o=(new l.p).load(b),s=new l.i(45,45,4,4),d=new l.g({map:a,depthTest:!1,transparent:!0}),c=new l.g({map:r,depthTest:!1,transparent:!0}),p=new l.g({map:o,depthTest:!1,transparent:!0});e.pln1=new l.f(n,d),e.pln2=new l.f(i,c),e.pln3=new l.f(s,p),e.pln1.position.z=-5.3,e.pln2.position.z=-3.2,e.pln3.position.z=-1.1,Array(5).fill().forEach(e.addstar),Array(5).fill().forEach(e.addstar2),Array(5).fill().forEach(e.addstar3),Array(5).fill().forEach(e.addstar4),e.scene.add(e.pln1),e.scene.add(e.pln2),e.scene.add(e.pln3)},e.addstar=function(){var t=(new l.p).load(u),a=l.e.randFloatSpread(60),n=new l.k({size:a,map:t,depthTest:!1,transparent:!0});n.opacity=0;for(var r=new l.a,i=[],o=0;o<500;o++){var s=2e3*Math.random()-1e3,d=2e3*Math.random()-1e3,c=2e3*Math.random()-1e3;i.push(s,d,c)}r.setAttribute("position",new l.c(i,3)),e.star=new l.j(r,n),e.scene.add(e.star)},e.addstar2=function(){var t=(new l.p).load(m),a=l.e.randFloatSpread(60),n=new l.k({size:a,map:t,depthTest:!1,transparent:!0});n.opacity=0;for(var r=new l.a,i=[],o=0;o<500;o++){var s=2e3*Math.random()-1e3,d=2e3*Math.random()-1e3,c=2e3*Math.random()-1e3;i.push(s,d,c)}r.setAttribute("position",new l.c(i,3)),e.star=new l.j(r,n),e.scene.add(e.star)},e.addstar3=function(){var t=(new l.p).load(w),a=l.e.randFloatSpread(60),n=new l.k({size:a,map:t,depthTest:!1,transparent:!0});n.opacity=0;for(var r=new l.a,i=[],o=0;o<500;o++){var s=2e3*Math.random()-250,d=2e3*Math.random()-250,c=2e3*Math.random()-250;i.push(s,d,c)}r.setAttribute("position",new l.c(i,3)),e.star=new l.j(r,n),e.scene.add(e.star)},e.addstar4=function(){var t=(new l.p).load(f),a=l.e.randFloatSpread(60),n=new l.k({size:a,map:t,depthTest:!1,transparent:!0});n.opacity=0;for(var r=new l.a,i=[],o=0;o<500;o++){var s=2e3*Math.random()-1e3,d=2e3*Math.random()-1e3,c=2e3*Math.random()-1e3;i.push(s,d,c)}r.setAttribute("position",new l.c(i,3)),e.star=new l.j(r,n),e.scene.add(e.star)},e.startAnimationLoop=function(){var t=e.timeNow,a=Math.abs(9e-6*(Date.now()-t));a>.1&&(e.pln1.position.z+=.0125,e.pln2.position.z+=.025,e.pln3.position.z+=.05,e.pln1.material.opacity-=5e-4,e.pln2.material.opacity-=.001,e.pln3.material.opacity-=.0015),e.camera.lookAt(e.scene.position);for(var n=0;n<e.scene.children.length;n++){var r=e.scene.children[n];r instanceof l.j&&(r.rotation.y=a*(n<4?n+1:-(n+1)),r.material.opacity<=.5&&(r.material.opacity+=.001))}e.renderer.render(e.scene,e.camera),e.requestID=window.requestAnimationFrame(e.startAnimationLoop)},e.handleWindowResize=function(){var t=e.el.clientWidth,a=e.el.clientHeight;e.renderer.setSize(t,a),e.camera.aspect=t/a,e.camera.updateProjectionMatrix()},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.sceneSetup(),this.addCustomSceneObjects(),this.startAnimationLoop(),window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize),window.cancelAnimationFrame(this.requestID),this.controls.dispose()}},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{style:k,ref:function(t){return e.el=t}})}}]),a}(s.Component),M=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isMounted:!0},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state.isMounted,a=void 0===t||t;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(y.b,{dark:!0,elevation:2,children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsxs)("h1",{children:["Jayde Marie Bell - Artist Portfolio",Object(O.jsx)(y.c,{dark:!0})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)(y.a,{dark:!0,large:!0,rounded:!0,children:"Home"}),Object(O.jsx)(y.a,{dark:!0,large:!0,rounded:!0,children:"About"}),Object(O.jsx)(y.a,{dark:!0,large:!0,rounded:!0,children:"Contact"}),Object(O.jsx)(y.a,{onClick:function(){return e.setState((function(e){return{isMounted:!e.isMounted}}))},dark:!0,large:!0,rounded:!0,children:"Vis"}),Object(O.jsx)(y.c,{dark:!0})]})]})})}),a&&Object(O.jsx)(A,{})]})}}]),a}(d.a.Component),z=document.getElementById("root");p.a.render(Object(O.jsx)(M,{}),z)}},[[26,1,2]]]);
//# sourceMappingURL=main.cccd96cc.chunk.js.map