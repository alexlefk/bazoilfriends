(this.webpackJsonpbazoilfriends=this.webpackJsonpbazoilfriends||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(6),i=n.n(o);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(1),c=n(2),s=n(4),m=n(3),u=function(e){var a=e.name;e.email,e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bq2 shadow-5"},r.a.createElement("img",{alt:"bazoil",src:"https://robohash.org/".concat(a,"?200x200")})," ",r.a.createElement("div",null,r.a.createElement("h2",null," ",a," "))," ")},h=function(e){var a=e.robots;return r.a.createElement("div",null," ",a.map((function(e,n){return r.a.createElement(u,{key:n,id:a[n].id,name:a[n].name})}))," ")},d=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search friends",onChange:a}))},f=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"}},e.children)},b=(n(13),[{id:1,name:"Doctor strange love",username:"Doctor",email:"Sincere@april.biz"},{id:2,name:"\u039c\u03b5\u03bb\u03bb\u03bf\u03bd\u03c4\u03b9\u03ba\u03cc\u03c2 \u03b4\u03ae\u03bc\u03b1\u03c1\u03c7\u03bf\u03c2 \u03a0\u03a1\u03a9\u03a4\u039f\u0399 \u0395\u0394\u03a9",username:"olderTsourou",email:"Shanna@melissa.tv"},{id:3,name:"\u039a\u03ac\u03bd\u03c9 \u03b4\u03cd\u03bf \u03b4\u03bf\u03c5\u03bb\u03b5\u03b9\u03ad\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b2\u03b3\u03c9",username:"baz",email:"Nathan@yesenia.net"},{id:4,name:"\u03c0\u03b1\u03c3\u03c4\u03b9\u03c4\u03c3\u03b9\u03bf",username:"louk",email:"Julianne.OConner@kory.org"},{id:5,name:"mummra",username:"teo",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"\u0399\u03c0\u03c4\u03ac\u03bc\u03b5\u03bd\u03bf\u03c2 \u039f\u03bb\u03bb\u03b1\u03bd\u03b4\u03cc\u03c2",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"\u03a3\u03ba\u03bb\u03b7\u03c1\u03ac \u0395\u03c1\u03b3\u03b1\u03b6\u03cc\u03bc\u03b5\u03bd\u03b7",username:"alexnik",email:"Telly.Hoeger@billy.biz"},{id:8,name:"\u0391\u03c7\u03b9\u03bd\u03cc\u03c2",username:"alexlefk",email:"Sherwood@rosamond.me"},{id:9,name:"\u0393\u03b9\u03b1\u03bd\u03bd\u03b9\u03ce\u03c4\u03b7\u03c2(\u03a7\u03c1\u03c5\u03c3\u03cc\u03c2 \u03c3\u03c4\u03b9\u03c2 \u03ba\u03b1\u03c1\u03b4\u03b9\u03ad\u03c2 \u03bc\u03b1\u03c2)",username:"youngtsourou",email:"Chaim_McDermott@dana.io"},{id:10,name:"I do not have any other friends",username:"nofriends",email:"Rey.Padberg@karina.biz"}]),v=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=a.call(this,e)).state={hasError:!1},t}return Object(c.a)(n,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops. That is not good "):this.props.children}}]),n}(t.Component),g=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:b,searchfield:""},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch({robots:b}).then((function(e){return e.json()})).then((function(a){return e.setState({robots:a})}))}},{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchfield,t=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"}," Bazoil Friends ")," ",r.a.createElement(d,{searchChange:this.onSearchChange})," ",r.a.createElement(f,null,r.a.createElement(v,null,r.a.createElement(h,{robots:t})," ")," ")," "):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null," Loading "),";"," ")}}]),n}(t.Component);n(14);i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.76d01cf0.chunk.js.map