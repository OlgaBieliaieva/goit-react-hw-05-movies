/*! For license information please see 541.6e97f962.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[541],{541:function(e,o,c){c.r(o);var n=c(439),t=c(791),i=c(689),a=c(402),s=c(184);o.default=function(){var e=(0,i.UO)().movieId,o=Number(e),c=(0,t.useState)([]),r=(0,n.Z)(c,2),l=r[0],u=r[1];return console.log(o),(0,t.useEffect)((function(){o?(0,a.Ku)(o).then((function(e){console.log(e.data),u(e.data.cast)})).catch((function(e){console.log(e.message)})):console.log("gjh,b")}),[o]),console.log(l),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Cast"}),l.length>0&&(0,s.jsx)("ul",{children:l.map((function(e){var o=e.profile_path,c=e.name,n=e.character,t=e.id;return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(o),alt:c}),(0,s.jsx)("p",{children:c}),(0,s.jsxs)("p",{children:["Character: ",n]})]},t)}))})]})}},402:function(e,o,c){c.d(o,{Ku:function(){return s},Pg:function(){return a},fI:function(){return r}});var n=c(243),t="https://api.themoviedb.org/3/movie/",i={api_key:"2ffe18644d276784f1ed0436b355498e"};function a(e){i.movie_id=e,console.log(e);try{var o=n.Z.get("".concat(t).concat(i.movie_id,"?api_key=").concat(i.api_key));return console.log(o),o}catch(c){console.log(c.message)}}function s(e){i.movie_id=e,console.log(e);try{var o=n.Z.get("".concat(t).concat(i.movie_id,"/credits?api_key=").concat(i.api_key));return console.log(o),o}catch(c){console.log(c.message)}}function r(e){i.movie_id=e,console.log(e);try{var o=n.Z.get("".concat(t).concat(i.movie_id,"/reviews?api_key=").concat(i.api_key));return console.log(o),o}catch(c){console.log(c.message)}}}}]);
//# sourceMappingURL=541.6e97f962.chunk.js.map