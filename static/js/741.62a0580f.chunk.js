"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[741],{7741:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(9439),s=n(2791),a=n(1087),i=n(7689),o=n(5861),c=n(7757),u=n.n(c),l=n(1243),f="https://api.themoviedb.org/3/search/movie?",h={api_key:"2ffe18644d276784f1ed0436b355498e",page:1};function v(){return(v=(0,o.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.query=t.toLowerCase().trim(),n=new URLSearchParams(h),e.prev=2,e.next=5,l.Z.get("".concat(f).concat(n));case 5:return r=e.sent,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var _=function(e){return v.apply(this,arguments)},p="Movies_pageContainer__fVQLq",m="Movies_search__Lis1s",d="Movies_searchField__VVuRR",g="Movies_searchButton__I-A1L",x="Movies_error__MUEG+",j="Movies_moviesList__Rop+n",w="Movies_link__koirl",b=n(184);var k=function(){var e,t=(0,a.lr)(),n=(0,r.Z)(t,2),o=n[0],c=n[1],u=null!==(e=o.get("movie_title"))&&void 0!==e?e:"",l=(0,s.useState)([]),f=(0,r.Z)(l,2),h=f[0],v=f[1],k=(0,s.useState)(""),y=(0,r.Z)(k,2),M=y[0],N=y[1],Z=(0,s.useState)(""),L=(0,r.Z)(Z,2),R=L[0],S=L[1],C=(0,i.TH)();return(0,s.useEffect)((function(){0!==u.length&&_(u).then((function(e){v(e.data.results),S(e.status)})).catch((function(e){N(e.message)}))}),[u]),(0,b.jsxs)("main",{className:p,children:[(0,b.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault(e);var t=e.target[0].value;c(""!==t?{movie_title:t}:{})},children:[(0,b.jsx)("label",{children:(0,b.jsx)("input",{className:d,type:"text",placeholder:"start searching",autoComplete:"off"})}),(0,b.jsx)("button",{className:g,type:"submit",children:"Search"})]}),M&&(0,b.jsx)("p",{className:x,children:"Results not found"}),200===R&&0===h.length&&(0,b.jsx)("p",{className:x,children:"Results not found"}),h.length>0&&(0,b.jsx)("ul",{className:j,children:h.map((function(e){var t=e.title,n=e.id;return(0,b.jsx)("li",{className:w,children:(0,b.jsx)(a.rU,{to:"".concat(n),state:{from:C},children:t})},n)}))})]})}},5861:function(e,t,n){function r(e,t,n,r,s,a,i){try{var o=e[a](i),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(r,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function o(e){r(i,s,a,o,c,"next",e)}function c(e){r(i,s,a,o,c,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return s}})}}]);
//# sourceMappingURL=741.62a0580f.chunk.js.map