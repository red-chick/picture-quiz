(this["webpackJsonppicture-quiz"]=this["webpackJsonppicture-quiz"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(6),s=n.n(a),u=(n(12),n(2)),r=n(4),o=n.n(r),j=[{name:"\uc544\uc774\ub9b0",image:n.p+"static/media/irin.5b81e766.jpg"},{name:"\uc544\uc774\uc720",image:n.p+"static/media/iu.f376f7d1.jpg"},{name:"\uac15\ud638\ub3d9",image:n.p+"static/media/kanghodong.998fc4d5.jpg"},{name:"\uae40\ub3d9\ud604",image:n.p+"static/media/kimdonghyun.11b9723b.jpeg"}];var b,f,l=function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current&&n.current()}),t);return function(){return clearInterval(e)}}}),[t])},O=n(7),p=function(){var e,t,n=(e=0,t=b.length,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e),c=Object(O.a)({},b[n]);return b.splice(n,1),c},g=function(){b=JSON.parse(JSON.stringify(j)),f=p()};g();var d=function(){var e=Object(c.useState)(f),t=Object(u.a)(e,2),n=t[0],i=t[1];console.log("person",n);return Object(c.useEffect)((function(){return g}),[]),[n,function(){i(p())}]},h=new(window.SpeechRecognition||window.webkitSpeechRecognition);h.lang="ko-KR";var m=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){h.onresult=function(e){e.results[e.results.length-1].isFinal&&i(e.results[e.results.length-1][0].transcript)}}),[]);return[n,function(){h.start()},function(){h.abort(),i("")}]},v=n(3),x=n.n(v),S=n(1),_=function(e){var t=e.finishGame,n=Object(c.useState)(3),i=Object(u.a)(n,2),a=i[0],s=i[1],r=Object(c.useState)(0),o=Object(u.a)(r,2),b=o[0],f=o[1],O=d(),p=Object(u.a)(O,2),g=p[0],h=p[1],v=m(),_=Object(u.a)(v,3),w=_[0],k=_[1],P=_[2],z=Object(c.useState)(""),N=Object(u.a)(z,2),E=N[0],A=N[1],Q=Object(c.useState)(!1),C=Object(u.a)(Q,2),F=C[0],M=C[1];return Object(c.useEffect)((function(){b===j.length&&t(b)}),[b,t]),l((function(){a>=0&&s(a-1)}),1e3),Object(c.useEffect)((function(){0===a&&(F?(P(),t(b)):(k(),M(!0),s(5)))}),[a,F,b,P,k,M,s,t]),Object(c.useEffect)((function(){w&&(P(),M(!1),w.includes(g.name)?(s(5),f((function(e){return e+1})),A(g.name),h()):t(b))}),[w,g,b,P,s,f,A,h,t]),F?Object(S.jsxs)("div",{className:x.a.QuizPage,children:[a>1&&Object(S.jsx)("span",{className:x.a.center,children:a-2}),Object(S.jsx)("img",{src:g.image,alt:"\uc778\ubb3c\ud034\uc988"})]}):a>3?Object(S.jsxs)("div",{className:x.a.QuizPage,children:[E," \uc815\ub2f5!"]}):Object(S.jsx)("div",{className:x.a.QuizPage,children:a})},w=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(-1),s=Object(u.a)(a,2),r=s[0],b=s[1],f=function(){i(!0),b(-1)};return n?Object(S.jsx)(_,{finishGame:function(e){i(!1),b(e)}}):r===j.length?Object(S.jsxs)("div",{className:o.a.App,children:[Object(S.jsx)("h1",{children:"\ubaa8\ub4e0 \ubb38\uc81c \ub9de\ucd94\uae30 \uc131\uacf5!"}),Object(S.jsx)("button",{onClick:f,children:"\ub2e4\uc2dc \uc2dc\uc791"})]}):r>=0?Object(S.jsxs)("div",{className:o.a.App,children:[Object(S.jsxs)("h1",{children:["\ub561! ",r,"\uac1c \ub9de\ucda4!"]}),Object(S.jsx)("button",{onClick:f,children:"\ub2e4\uc2dc \uc2dc\uc791"})]}):Object(S.jsxs)("div",{className:o.a.App,children:[Object(S.jsx)("h1",{children:"\uc2e0\uc11c\uc720\uae30 \uc778\ubb3c\ud034\uc988"}),Object(S.jsx)("button",{onClick:f,children:"\uc2dc\uc791\ud558\uae30"})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(w,{})}),document.getElementById("root")),k()},3:function(e,t,n){e.exports={QuizPage:"QuizPage_QuizPage__73kPK",center:"QuizPage_center__3R9qK"}},4:function(e,t,n){e.exports={App:"App_App__16ZpL",grow:"App_grow__vmVwo"}}},[[14,1,2]]]);
//# sourceMappingURL=main.e460185a.chunk.js.map