"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{659:function(t,n,e){e.d(n,{Z:function(){return f}});var r=e(731),a=e(689),c="MoviesList_list__Isf2-",u="MoviesList_title__NU7hE",i="MoviesList_item__57z78",s="MoviesList_link__azm3V",o=e(184),f=function(t){var n=t.movies,e=t.titlePage,f=void 0===e?null:e,p=(0,a.TH)();return(0,o.jsxs)(o.Fragment,{children:[f&&(0,o.jsx)("h1",{className:u,children:f}),(0,o.jsx)("ul",{className:c,children:n.map((function(t){var n=t.id,e=t.title,a=t.name;return(0,o.jsx)("li",{className:i,children:(0,o.jsx)(r.rU,{to:"/movies/".concat(n),state:{from:p},className:s,children:e||a})},n)}))})]})}},415:function(t,n,e){e.r(n);var r=e(885),a=e(791),c=e(237),u=e(659),i=e(184);n.default=function(){var t=(0,a.useState)(null),n=(0,r.Z)(t,2),e=n[0],s=n[1];if((0,a.useEffect)((function(){c.rj().then((function(t){s(t.results)})).catch(console.log)}),[]),e)return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(u.Z,{movies:e,titlePage:"Trending today"})})}},237:function(t,n,e){e.d(n,{GC:function(){return f},M1:function(){return l},Pg:function(){return p},rj:function(){return o},tx:function(){return v}});var r=e(861),a=e(757),c=e.n(a),u=e(388),i="7009e44e23ea061e2491e1997fc3bc6e",s="https://api.themoviedb.org/3/",o=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"trending/movie/day?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"search/movie?api_key=").concat(i,"&query=").concat(n,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.93fe6dac.chunk.js.map