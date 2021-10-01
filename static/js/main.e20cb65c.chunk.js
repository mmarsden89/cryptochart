(this["webpackJsonpreact-crypto"]=this["webpackJsonpreact-crypto"]||[]).push([[0],{105:function(e,t,n){},212:function(e,t,n){},232:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(84),s=n.n(i),r=n(12),o=(n(94),n(3)),l=(n(95),n(96),n(0)),u=function(e){var t=e.dark,n=Object(l.jsx)("div",{onClick:e.flipTheme,className:"theme-toggle",children:Object(l.jsx)("div",{className:"moon",children:Object(l.jsx)("div",{className:"inner-moon"})})}),a=Object(l.jsx)("div",{onClick:e.flipTheme,className:"theme-toggle",children:Object(l.jsxs)("div",{className:"sun",children:[Object(l.jsx)("div",{className:"sunglasses"}),Object(l.jsx)("div",{className:"sun-smile"})]})});return Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsx)(r.c,{to:"/",children:Object(l.jsx)("div",{className:"navbar-title",children:"CRYPTOCHART"})}),Object(l.jsxs)("nav",{className:"navbar-navigation",children:[Object(l.jsx)(r.c,{exact:!0,to:"/",className:"nav-link",activeClassName:"active-nav-link",children:"HOME"}),Object(l.jsx)(r.c,{to:"/news",className:"nav-link",activeClassName:"active-nav-link",children:"NEWS"}),t?a:n]})]})},j=(n(105),function(e){var t=e.message;return Object(l.jsx)("div",{className:"error-container",children:Object(l.jsx)("p",{children:t||""})})}),d=n(2),m=n(5),b=n(6),h=n.n(b),p=n(15),O=function(e){var t=e.state,n=t.symbol,a=t.symbolList,c=e.functions,i=c.handleChange,s=c.handleNewCoin,r=c.handleBlur;return Object(l.jsxs)("div",{onBlur:r,className:"input-container",children:[Object(l.jsx)("input",{className:"new-coin-input",placeholder:"SYMBOL",value:n,onChange:i,type:"text",autoFocus:!0}),Object(l.jsxs)("div",{className:"coin-search-container",children:[n.length>0&&a.sort().slice(0,10).map((function(e){return Object(l.jsx)("button",{className:"coin-list-item",onClick:s,id:e,children:e},e)})),Object(l.jsx)("button",{className:"cancel",children:"cancel"})]})]})},f=function(e){var t=e.onClick,n=e.timeline;Object(a.useEffect)((function(){}),[n]);var c=["1Y","1M","1W","24H","1H"].map((function(e){return Object(l.jsx)("button",{onClick:t,id:e,className:n===e?"timeline-button active-timeline":"timeline-button",children:e},e)}));return Object(l.jsx)(l.Fragment,{children:c})},v=function(e){var t=e.functions,n=t.deleteCoin,a=t.setNewCoin,c=t.chartButtonClassName,i=e.state,s=i.coinList,r=i.newCoinBoolean,o=e.html.buttonOrInput;return Object(l.jsxs)("div",{className:"coin-button-container",children:[s.map((function(e){return Object(l.jsx)("button",{onClick:r?n:a,id:e,className:c(e),children:e},e)})),o]})},x=function(e){var t=e.state,n=t.percentage,a=t.coinData,c=t.coin;return Object(l.jsxs)("div",{className:"current-price",children:[Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("div",{className:"coin-chart-header",children:c}),Object(l.jsxs)("div",{className:n>0?"percentage positive":"percentage negative",children:[n,"%"]})]}),Object(l.jsx)("div",{className:"price-header",children:"Current Price:"}),Object(l.jsxs)("div",{className:"price-action",children:["$",a[1]&&a[a.length-1].close.toLocaleString(void 0,{minimumFractionDigits:2})]})]})},g=n(89),N=function(){var e=localStorage.getItem("dark");JSON.parse(e)?localStorage.setItem("dark",!1):localStorage.setItem("dark",!0)},y=function(){var e=localStorage.getItem("dark");if(null!==e)return JSON.parse(e);N()},w=n(36),S=n.n(w),C=(n(212),function(e){var t=e.times,n=e.prices,c=e.coinData;Object(a.useEffect)((function(){}),[c,t,n]);var i={labels:t,datasets:[{borderWidth:2,data:n,borderColor:y()?"#3773f5":"rgba(0,82,255, .8)",pointRadius:0,spanGaps:!1}]},s={animation:!1,responsive:!0,maintainAspectRatio:!1,layout:{padding:{top:50}},plugins:{legend:{display:!1},tooltip:{z:100,caretPadding:20,yAlign:"bottom",titleFont:{size:20},titleAlign:"center",bodyAlign:"center",intersect:!1,backgroundColor:"#000",displayColors:!1,callbacks:{title:function(e){return"$"+e[0].formattedValue},label:function(e){return S()(1e3*c[e.dataIndex].time).format("MMMM DD hh:mm A")}}}},scales:{x:{ticks:{align:"start",autoSkip:!0,maxRotation:0,minRotation:0,maxTicksLimit:8,color:y()?"white":"black",font:function(e){var t=e.chart.width,n=Math.round(t/64);return{size:n>10?n:10}}},grid:{display:!1}},y:{display:!1}}};return Object(l.jsx)("div",{className:"line-container",children:Object(l.jsx)(g.a,{data:i,options:s})})}),k=n(22),D=n.n(k),M=function(){var e=Object(p.a)(h.a.mark((function e(t,n,a,c,i,s){var r,o,l,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={"1Y":"https://min-api.cryptocompare.com/data/v2/histoday?fsym=".concat(t,"&tsym=USD&limit=365"),"1M":"https://min-api.cryptocompare.com/data/v2/histoday?fsym=".concat(t,"&tsym=USD&limit=30"),"1W":"https://min-api.cryptocompare.com/data/v2/histohour?fsym=".concat(t,"&tsym=USD&limit=168"),"24H":"https://min-api.cryptocompare.com/data/v2/histominute?fsym=".concat(t,"&tsym=USD&limit=1440&aggregate=5"),"1H":"https://min-api.cryptocompare.com/data/v2/histominute?fsym=".concat(t,"&tsym=USD&limit=60")},e.next=3,D()(r[n]);case 3:return o=e.sent,l=o.data.Data.Data,a(l),c(l.map((function(e){return t=e.time,S()(1e3*t).format("MMM DD");var t}))),i(l.map((function(e){return e.close}))),u=Math.round((l[l.length-1].close-l[0].close)/l[0].close*100*100)/100,s(u),e.abrupt("return",l);case 11:case"end":return e.stop()}}),e)})));return function(t,n,a,c,i,s){return e.apply(this,arguments)}}(),T=M,E=function(){var e=Object(p.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()("https://min-api.cryptocompare.com/data/all/coinlist?summary=true");case 2:return n=e.sent,a=n.data.Data,t(Object.keys(a)),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=E,B=function(e){var t=e.flipError,n=Object(a.useState)([]),c=Object(o.a)(n,2),i=c[0],s=c[1],r=Object(a.useState)([]),u=Object(o.a)(r,2),j=u[0],d=u[1],b=Object(a.useState)("BTC"),g=Object(o.a)(b,2),N=g[0],y=g[1],w=Object(a.useState)([]),S=Object(o.a)(w,2),k=S[0],D=S[1],M=Object(a.useState)("1W"),E=Object(o.a)(M,2),B=E[0],A=E[1],L=Object(a.useState)(["BTC","ETH","ADA","DOGE"]),F=Object(o.a)(L,2),J=F[0],H=F[1],U=Object(a.useState)(!1),R=Object(o.a)(U,2),W=R[0],P=R[1],Y=Object(a.useState)(""),z=Object(o.a)(Y,2),$=z[0],G=z[1],V=Object(a.useState)([]),_=Object(o.a)(V,2),q=_[0],K=_[1],Q=Object(a.useState)(0),X=Object(o.a)(Q,2),Z=X[0],ee=X[1],te=function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(!0),I(K);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(e){if(e.length>0){var t=Object(m.a)(q).filter((function(t){return t.startsWith(e)}));K(t)}else te()},ae=Object(l.jsx)("button",{className:"timeline-button",onClick:te,children:"< + / - >"}),ce=W?Object(l.jsx)(O,{state:{symbol:$,symbolList:q},functions:{handleChange:function(e){var t=e.target.value;G(t.toUpperCase()),ne(t.toUpperCase())},handleNewCoin:function(e){var n=e.target.id,a=Object(m.a)(J);a.includes(n)?t("Already added coin"):a.length>8?t("Too many coins. Please consider deleting unneeded ones"):(a.push(n),H(a),localStorage.setItem("coins",JSON.stringify(a)))},handleBlur:function(){setTimeout((function(){P(!1),G("")}),500)}}}):ae;return Object(a.useEffect)(Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.getItem("coins")?H(JSON.parse(localStorage.getItem("coins"))):localStorage.setItem("coins",JSON.stringify(J)),e.next=3,T(N,B,d,D,s,ee);case 3:e.sent;case 4:case"end":return e.stop()}}),e)}))),[B,N]),Object(l.jsxs)("div",{className:"chart-wrapper-container",children:[Object(l.jsxs)("div",{className:"chart-header-container",children:[Object(l.jsx)(x,{state:{percentage:Z,coinData:j,coin:N}}),Object(l.jsx)(v,{functions:{deleteCoin:function(e){var t=e.target.id,n=Object(m.a)(J),a=J.indexOf(t);n.splice(a,1),H(n),localStorage.setItem("coins",JSON.stringify(n))},setNewCoin:function(e){!function(e){y(e)}(e.target.id)},chartButtonClassName:function(e){var t="timeline-button";return W?t=t.concat(" remove-button"):N===e&&(t=t.concat(" active-timeline")),t}},state:{coinList:J,newCoinBoolean:W},html:{buttonOrInput:ce}}),Object(l.jsx)("div",{className:"button-container",children:Object(l.jsx)(f,{onClick:function(e){var t=e.target.id;A(t)},timeline:B})})]}),Object(l.jsx)(C,{times:k,prices:i,coinData:j})]})},A=(n(35),function(e){var t=e.news.slice(0,50).map((function(e){return Object(l.jsx)(F,{data:e,all:!0},e.id)}));return Object(l.jsxs)("div",{className:"all-news-container",children:[Object(l.jsx)("p",{className:"scroll-for-more",children:"scroll for more"}),t]})}),L=function(e){var t=e.news,n=window.innerHeight,a=Math.round(n/125),c=t.slice(0,a).map((function(e){return Object(l.jsx)(F,{data:e,id:e.id},e.id)}));return Object(l.jsxs)("div",{className:"home-news-container",children:[Object(l.jsx)("div",{className:"empty"}),Object(l.jsx)("div",{className:"for-you",children:"NEWS FOR YOU"}),Object(l.jsxs)("div",{className:"news-container",children:[c,Object(l.jsx)(r.b,{to:"/news",children:Object(l.jsx)("div",{className:"view-more",children:"view more"})})]})]})},F=function(e){var t=e.data,n=t.url,a=t.imageurl,c=t.title,i=t.source,s=e.all;return Object(l.jsxs)("a",{href:n,target:"_blank",className:"news-item-container",title:c,children:[Object(l.jsx)("img",{src:a,className:"news-image"}),Object(l.jsx)("p",{className:"news-title",children:c.replace("$1...")}),s?Object(l.jsxs)("p",{className:"source",children:["(",i,")"]}):null]})},J=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],i=window.location.hash,s=function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()("https://min-api.cryptocompare.com/data/v2/news/?lang=EN");case 2:t=e.sent,c(t.data.Data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),Object(l.jsx)("div",{className:"news-wrapper",children:i.includes("news")?Object(l.jsx)(A,{news:n}):Object(l.jsx)(L,{news:n})})},H=function(){return Object(l.jsx)("div",{style:{height:"calc(100vh - 38px)",width:"calc(100% + 14px)",marginLeft:"-14px",marginTop:"-68px"},children:Object(l.jsx)("iframe",{src:"https://mmarsden89.github.io/404/",title:"404",style:{height:"100%",width:"100%"}})})};var U=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(JSON.parse(y())),s=Object(o.a)(i,2),r=s[0],m=s[1],b=function(){c("")};return Object(a.useEffect)((function(){y()})),Object(l.jsxs)("div",{className:"App "+(r?"theme-dark":"theme-light"),children:[Object(l.jsx)(u,{flipTheme:function(){m(!r),N()},dark:r}),n.length>0&&Object(l.jsx)(j,{message:n}),Object(l.jsx)("div",{className:"component-container",children:Object(l.jsxs)(d.c,{children:[Object(l.jsxs)(d.a,{exact:!0,path:"/",children:[Object(l.jsx)(B,{flipError:function(e){c(e),setTimeout(b,4e3)}}),Object(l.jsx)(J,{})]}),Object(l.jsx)(d.a,{exact:!0,path:"/news",children:Object(l.jsx)(J,{})}),Object(l.jsx)(d.a,{children:Object(l.jsx)(H,{})})]})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,233)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(U,{})})}),document.getElementById("root")),R()},35:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){}},[[232,1,2]]]);
//# sourceMappingURL=main.e20cb65c.chunk.js.map