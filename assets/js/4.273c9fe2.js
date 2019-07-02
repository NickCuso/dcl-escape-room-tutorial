(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(e,t,n){e.exports=n.p+"assets/img/defaultScene.a3379034.png"},188:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_00-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_00-setup","aria-hidden":"true"}},[e._v("#")]),e._v(" 00: Setup")]),e._v(" "),a("p",[e._v("Primary resource --\x3e https://docs.decentraland.org/")]),e._v(" "),a("p",[e._v("Install NodeJS")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm init\nnpm i decentraland\nnpm i -d decentraland-ecs \nnpx dcl init\n")])])]),a("p",[e._v("TODO do we need the decentraland-ecs or does that come from dcl init?")]),e._v(" "),a("p",[e._v("Then run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm run start\n")])])]),a("p",[e._v('to see the "game" running in your browser.  If you have Metamask installed it will prompt you to connect before the page finishes loading (but it also works without metamask).')]),e._v(" "),a("p",[e._v("It should look something like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:n(184),alt:"Default Scene"}})]),e._v(" "),a("p",[e._v("Frame rate for debugging in top left")]),e._v(" "),a("p",[e._v("Chat in bottom left.  It actually works when players are connected to the same server.  Try it by using a second tab.")]),e._v(" "),a("p",[e._v("A spinning box in the scene")]),e._v(" "),a("p",[e._v("You can walk (wasd or arrows) around and jump (space).")]),e._v(" "),a("p",[e._v("once you "),a("code",[e._v("npm run start")]),e._v(" you open a second command prompt and run "),a("code",[e._v("npm run watch")]),e._v(".  Then anytime you make a change it will recompile and you simply refresh the browser to see your updates")]),e._v(" "),a("p",[e._v("delete the example contents inside "),a("code",[e._v("game.ts")]),e._v(" (done in playground)")]),e._v(" "),a("p",[e._v("Add a model:")]),e._v(" "),a("p",[e._v("Add this to "),a("code",[e._v("game.ts")]),e._v(" (this is the entire file ATM)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('const scene = new Entity()\nscene.addComponent(new GLTFShape("models/scene.glb"))\nscene.addComponent(new Transform({rotation: Quaternion.Euler(0,180,0)}))\nengine.addEntity(scene)\n')])])])])},[],!1,null,null,null);t.default=s.exports}}]);