(this.webpackJsonpgreenhouse=this.webpackJsonpgreenhouse||[]).push([[0],{23:function(e,t,r){},24:function(e,t,r){},25:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),i=r(17),a=r.n(i),s=r(9),u=(r(23),r(2)),j=r.p+"static/media/greenhouse-day.def73286.jpg",o=r.p+"static/media/greenhouse-night.4fe2c013.jpg",m=(r(24),r(25),r(8)),h=r(1),d=Object(c.createContext)(),l=function(){return Object(c.useContext)(d)};function b(e){var t=e.children,r=Object(c.useState)("day"),n=Object(m.a)(r,2),i=n[0],a=n[1];return Object(h.jsx)(d.Provider,{value:{themeName:i,setThemeName:a},children:t})}var O=function(){var e=l(),t=e.themeName,r=e.setThemeName;return Object(h.jsxs)("div",{className:"light-switch ".concat(t),children:[Object(h.jsx)("div",{className:"day"==t?"on":"off",onClick:function(){return r("day")},children:"DAY"}),Object(h.jsx)("div",{className:"night"==t?"on":"off",onClick:function(){return r("night")},children:"NIGHT"})]})},x=(r(27),Object(c.createContext)()),f=function(){return Object(c.useContext)(x)};function v(e){var t=Object(c.useState)("50"),r=Object(m.a)(t,2),n=r[0],i=r[1],a=Object(c.useState)("40"),s=Object(m.a)(a,2),u=s[0],j=s[1];return Object(h.jsx)(x.Provider,{value:{temperature:n,setTemperature:i,humidity:u,setHumidity:j},children:e.children})}var g=function(){var e=f(),t=e.temperature,r=e.humidity;return Object(h.jsxs)("div",{className:"climate-stats",children:[Object(h.jsxs)("div",{className:"temperature",children:["Temperature ",t,"\xb0F"]}),Object(h.jsxs)("div",{className:"humidity",children:["Humidity ",r,"%"]})]})};var y=function(){var e=l().themeName;return Object(h.jsxs)("section",{children:[Object(h.jsx)("img",{className:"greenhouse-img",src:"day"==e?j:o,alt:"greenhouse"}),Object(h.jsx)(O,{}),Object(h.jsx)(g,{})]})};r(28);var p=function(){return Object(h.jsxs)("nav",{children:[Object(h.jsx)(s.b,{exact:!0,to:"/",children:"Greenhouse"}),Object(h.jsx)(s.b,{to:"/thermometer",children:"Thermometer"}),Object(h.jsx)(s.b,{to:"/hygrometer",children:"Hygrometer"})]})},N=r(7),T=r(12);r(37);var C=function(e){var t=f(),r=t.temperature,n=t.setTemperature,i=Object(c.useState)(50),a=Object(m.a)(i,2),s=a[0],u=a[1];return Object(c.useEffect)((function(){var e=Math.abs(r-s),t=r-s>0?1:-1;e&&setTimeout((function(){return u(s+t)}),1e3)}),[r,s]),Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:"Thermometer"}),Object(h.jsxs)("div",{className:"actual-temp",children:["Actual Temperature: ",s,"\xb0F"]}),Object(h.jsx)(T.a,{value:r,onAfterChange:function(e){return n(e)},className:"thermometer-slider",thumbClassName:"thermometer-thumb",trackClassName:"thermometer-track",ariaLabel:"Thermometer",orientation:"vertical",min:0,max:120,renderThumb:function(e,t){return Object(h.jsx)("div",Object(N.a)(Object(N.a)({},e),{},{children:t.valueNow}))},renderTrack:function(e,t){return Object(h.jsx)("div",Object(N.a)(Object(N.a)({},e),{},{index:t.index}))},invert:!0,pearling:!0,minDistance:1})]})};r(38);var k=function(){var e=f(),t=e.humidity,r=e.setHumidity,n=Object(c.useState)(40),i=Object(m.a)(n,2),a=i[0],s=i[1];return Object(c.useEffect)((function(){var e=Math.abs(t-a),r=t-a>0?1:-1;if(e){console.log("\n humidity",t),console.log("(humidity * 0.02).toFixed(2)",(.02*t).toFixed(2)),console.log("actualHumidity",a),console.log("humidityDifference",e);var c=r*Math.min((.02*t).toFixed(2),e);console.log("stepHumidity",c);var n=+(a+c).toFixed(2);console.log("newValue",n),setTimeout((function(){return s(n)}),1e3)}}),[t,a]),Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:"Hygrometer"}),Object(h.jsxs)("div",{className:"actual-humid",children:["Actual Humidity: ",a,"%"]}),Object(h.jsx)(T.a,{value:t,onAfterChange:function(e){r(e)},className:"hygrometer-slider",thumbClassName:"hygrometer-thumb",trackClassName:"hygrometer-track",ariaLabel:"Hygrometer",orientation:"vertical",min:0,max:100,renderThumb:function(e,t){return Object(h.jsx)("div",Object(N.a)(Object(N.a)({},e),{},{children:t.valueNow}))},renderTrack:function(e,t){return Object(h.jsx)("div",Object(N.a)(Object(N.a)({},e),{},{index:t.index}))},invert:!0,pearling:!0,minDistance:1})]})};var H=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{path:"/thermometer",children:Object(h.jsx)(C,{})}),Object(h.jsx)(u.a,{path:"/hygrometer",children:Object(h.jsx)(k,{})}),Object(h.jsx)(u.a,{path:"/",children:Object(h.jsx)(y,{})})]})]})};function F(){return Object(h.jsx)(b,{children:Object(h.jsx)(v,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(H,{})})})})}a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.759ce69f.chunk.js.map