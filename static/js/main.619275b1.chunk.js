(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{11:function(e,t,c){},14:function(e){e.exports=JSON.parse('[{"articul":"28f4s","title":"Product Name","cost":70,"image":"https://cdn2.iconfinder.com/data/icons/summer-flat-11/272/summer-vacation-ice-cream-on-cone-food-1024.png"},{"articul":"122qw84s","title":"Product Name","cost":100,"image":"https://cdn2.iconfinder.com/data/icons/summer-flat-11/272/summer-citrus-fruit-food-tropical-juice-orange-1024.png"},{"articul":"28ssaq4s","title":"Product Name","cost":130,"image":"https://cdn2.iconfinder.com/data/icons/summer-flat-11/272/summer-vacation-beach-coconut-juice-drink-milk-1024.png"},{"articul":"238lp4s","title":"Product Name","cost":40,"image":"https://cdn2.iconfinder.com/data/icons/summer-flat-11/272/summer-vacation-watermelon-food-fruit-water-melon-1024.png"}]')},25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c.n(a),s=c(8),n=c.n(s),r=c(4),o=(c(25),c(7)),l=(c(26),c(6)),d=Object(l.b)({name:"cart",initialState:{value:0,cart:{}},reducers:{increment:function(e,t){var c=t.payload;void 0===e.cart[c]&&(e.cart[c]=0),e.cart[c]++},add:function(e){e.value++},minus:function(e,t){var c=t.payload;1===e.cart[c]?(delete e.cart[c],e.value--):0!==e.cart[c]&&(e.cart[c]--,e.value--)},remove:function(e,t){var c=t.payload;delete e.cart[c],e.value=0}}}),m=d.actions,u=m.increment,j=m.add,b=m.minus,O=m.remove,x=function(e){return e.cart.cart},h=function(e){return e.cart.value},p=d.reducer,g=c(1);var f=function(e){var t=Object(r.c)(h);return Object(g.jsxs)("div",{className:"Nav",children:[Object(g.jsx)("ul",{className:"Nav-list",children:e.main.map((function(e){return Object(g.jsx)("li",{className:"Nav-link",children:Object(g.jsx)(o.b,{to:e.link,className:"Nav-link",children:e.name})})}))}),Object(g.jsxs)("div",{className:"Nav-cart",children:[Object(g.jsx)(o.b,{to:"./cart",className:"Cart-img",children:Object(g.jsx)("img",{src:"https://cdn1.iconfinder.com/data/icons/feather-2/24/shopping-cart-1024.png",alt:"cart"})}),Object(g.jsx)("div",{className:"Cart-number",children:t})]})]})};function v(e){return Object(g.jsx)("div",{className:!0,children:Object(g.jsx)(f,{main:e.main})})}function N(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442- \u043c\u0430\u0433\u0430\u0437\u0438\u043d"}),Object(g.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsa magnam non ea temporibus obcaecati dignissimos qui dolorem dolore velit? Commodi perferendis aliquam quisquam unde deserunt velit ab quam maxime."}),Object(g.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsa magnam non ea temporibus obcaecati dignissimos qui dolorem dolore velit? Commodi perferendis aliquam quisquam unde deserunt velit ab quam maxime."}),Object(g.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsa magnam non ea temporibus obcaecati dignissimos qui dolorem dolore velit? Commodi perferendis aliquam quisquam unde deserunt velit ab quam maxime."}),Object(g.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsa magnam non ea temporibus obcaecati dignissimos qui dolorem dolore velit? Commodi perferendis aliquam quisquam unde deserunt velit ab quam maxime."}),Object(g.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsa magnam non ea temporibus obcaecati dignissimos qui dolorem dolore velit? Commodi perferendis aliquam quisquam unde deserunt velit ab quam maxime."})]})}function q(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"\xa0\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(g.jsxs)("ul",{class:"footer__contact",children:[Object(g.jsx)("li",{children:"8 (888) 123 45 78"}),Object(g.jsx)("li",{children:"contact@online.store"})]})]})}function k(e){return Object(g.jsxs)("div",{className:"good-field card",children:[Object(g.jsx)("img",{src:e.image,alt:"",className:"card-img"}),Object(g.jsx)("h5",{className:"card-title text-center",children:e.title}),Object(g.jsxs)("p",{className:"card-text",children:[e.cost," \u20bd"]}),Object(g.jsx)("div",{className:"btn-add",children:Object(g.jsx)("button",{className:"add-to-cart btn btn-outline-secondary btn-pizza btn-start","data-key":e.articul,children:"\u041a\u0443\u043f\u0438\u0442\u044c"})})]})}c(11);var y=c(14),w=Object(l.b)({name:"good",initialState:{good:y},reducers:{}}),C=function(e){return e.good.good},L=w.reducer;function Q(){var e=Object(r.c)(C),t=Object(r.b)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"good-field",onClick:function(e){e.preventDefault();var c=e.target;if(!c.classList.contains("add-to-cart"))return!0;t(u(c.getAttribute("data-key"))),t(j())},children:e.map((function(e){return Object(g.jsx)(k,{title:e.title,cost:e.cost,image:e.image,articul:e.articul},e.articul)}))})})}var A=function(){return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}),Object(g.jsx)(Q,{})]})};function P(e){return Object(g.jsx)("tbody",{children:Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{className:"table-row-text",children:[Object(g.jsx)("img",{src:e.image,alt:e.title,className:"img-to-cart"}),e.title]}),Object(g.jsx)("td",{className:"table-row-btn",children:Object(g.jsx)("button",{className:"plus-good","data-key":e.articul,children:"+"})}),Object(g.jsxs)("td",{className:"table-row-btn",children:[e.count," \u0448\u0442"]}),Object(g.jsx)("td",{className:"table-row-btn",children:Object(g.jsx)("button",{className:"minus-good","data-key":e.articul,children:"-"})}),Object(g.jsxs)("td",{className:"table-row-td",children:[e.totalCost," \u0440\u0443\u0431"]}),Object(g.jsx)("td",{className:"table-row-td",children:Object(g.jsx)("button",{className:"remove-good","data-key":e.articul,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})})}c(28);function S(){var e=Object(r.c)(x),t=Object(r.c)(C),c=Object(r.b)(),a=t.reduce((function(e,t){return e[t.articul]=t,e}),{}),i=0;return Object.keys(e).map((function(t){return i+=a[t].cost*e[t]})),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"cart-title",children:"\u0422\u043e\u0432\u0430\u0440\u044b \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0435:"}),Object(g.jsx)("table",{className:"cart-field",onClick:function(e){e.preventDefault();var t=e.target;if(t.classList.contains("minus-good"))console.log("minus"),c(b(t.getAttribute("data-key")));else if(t.classList.contains("plus-good"))c(u(t.getAttribute("data-key"))),c(j());else{if(!t.classList.contains("remove-good"))return!0;c(O(t.getAttribute("data-key")))}},children:Object.keys(e).map((function(t){return Object(g.jsx)(P,{image:a[t].image,articul:t,title:a[t].title,cost:a[t].cost,count:e[t],totalCost:a[t].cost*e[t]},a[t].aticul+1)}))}),Object(g.jsxs)("h2",{children:["\u041a \u043e\u043f\u043b\u0430\u0442\u0435: ",i," \u0440\u0443\u0431."]})]})})}var J=c(2),z=[{link:"/",name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},{link:"/catalog",name:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"},{link:"/contact",name:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}];var D=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(o.a,{children:[Object(g.jsx)(v,{main:z}),Object(g.jsxs)(J.c,{children:[Object(g.jsx)(J.a,{exact:!0,path:"/",element:Object(g.jsx)(N,{})}),Object(g.jsx)(J.a,{path:"/catalog",element:Object(g.jsx)(A,{})}),Object(g.jsx)(J.a,{path:"/contact",element:Object(g.jsx)(q,{})}),Object(g.jsx)(J.a,{path:"/cart",element:Object(g.jsx)(S,{})})]})]})})},F=Object(l.a)({reducer:{cart:p,good:L}});n.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(r.a,{store:F,children:Object(g.jsx)(D,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.619275b1.chunk.js.map