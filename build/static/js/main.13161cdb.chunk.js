(this["webpackJsonptrading-dashboard"]=this["webpackJsonptrading-dashboard"]||[]).push([[0],{315:function(e,t,i){},319:function(e,t){},322:function(e,t){},339:function(e,t){},340:function(e,t){},414:function(e,t){},416:function(e,t){},425:function(e,t){},427:function(e,t){},457:function(e,t,i){},562:function(e,t,i){},563:function(e,t,i){"use strict";i.r(t);var a=i(3),n=i.n(a),c=i(289),r=i.n(c),s=(i(315),i(38)),l=i(290),o=i.n(l),j=(i(10),i(167),i(573)),d=i(572),b=i(575),u=i(576),v=i(574),h=i(294),p=i.n(h),f=(i(457),i(14)),m=function(e){var t=e.ticker,i=e.interval,n=e.viewType,c=e.highlight,r=void 0===c?null:c,l=Object(a.useState)(null),o=Object(s.a)(l,2),h=o[0],m=o[1],O=Object(a.useState)(null),x=Object(s.a)(O,2),k=x[0],g=x[1],y=Object(a.useState)(null),w=Object(s.a)(y,2),N=w[0],T=w[1],S=Object(a.useState)(null),C=Object(s.a)(S,2),F=C[0],W=C[1],M=Object(a.useState)(null),L=Object(s.a)(M,2),E=L[0],_=L[1],I=20,P=428,D=100;Object(a.useEffect)((function(){i!==E&&(z(),_(i))}),[i]);var z=function(){var e="https://api.coingecko.com/api/v3/coins/".concat(t,"/market_chart?vs_currency=usd&days=").concat(i);p.a.get(e).then((function(e){console.log("response",e);var t=e.data.prices.map((function(e){return{x:e[0],y:e[1]}}));m(t);var i=e.data.market_caps.map((function(e){return{x:e[0],y:e[1]}}));g(i);for(var a=[],n=0;n<t.length;n++){var c=t[n],r=i[n].y/c.y;a.push({x:t[n].x,y:r})}T(a);var s=0,l=1/0;e.data.prices.forEach((function(e){e[1]>s&&(s=e[1]),e[1]<l&&(l=e[1])}));var o={first:B(e.data.prices[0][1]),current:B(e.data.prices[e.data.prices.length-1][1]),highestPrice:B(s),lowestPrice:B(l),currentMC:V(e.data.market_caps[e.data.market_caps.length-1][1]),currentVolume:V(e.data.total_volumes[e.data.total_volumes.length-1][1])};W(o)}))},B=function(e){return new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:4}).format(e)},V=function(e){return new Intl.NumberFormat("en-US",{style:"decimal",notation:"compact",compactDisplay:"short"}).format(e)};return Object(f.jsxs)("div",{className:"graph",children:[Object(f.jsxs)("p",{className:"graph-name",children:[Object(f.jsx)("span",{className:"ticker "+(r?"highlight":""),children:t})," "+(null===F||void 0===F?void 0:F.current),Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:"indicator",children:"H "}),null===F||void 0===F?void 0:F.highestPrice,Object(f.jsx)("span",{className:"indicator",children:" L "}),null===F||void 0===F?void 0:F.lowestPrice]}),Object(f.jsxs)("p",{className:"graph-details",children:[Object(f.jsx)("span",{className:"indicator",children:"M "}),null===F||void 0===F?void 0:F.currentMC,Object(f.jsx)("span",{className:"indicator",children:" V "}),null===F||void 0===F?void 0:F.currentVolume]}),!n&&h&&Object(f.jsx)("div",{className:"graph-holder",children:Object(f.jsx)(j.a,{style:{data:{stroke:Number(null===F||void 0===F?void 0:F.current)>Number(null===F||void 0===F?void 0:F.first)?"#c5ffc7":"#f994b0",strokeWidth:2}},width:P,height:D,padding:{top:I,bottom:6,left:6,right:6},interpolation:"linear",data:h})}),n&&h&&Object(f.jsx)("div",{className:"graph-holder",children:Object(f.jsxs)(d.a,{width:P,height:D,padding:{top:I,bottom:6,left:6,right:6},containerComponent:Object(f.jsx)(b.a,{labels:function(e){var t=e.datum;return B(t.y)},labelComponent:Object(f.jsx)(u.a,{style:{fill:"#000",fontSize:12},flyoutStyle:{fill:"#fff",stroke:"#0000ff",strokeWidth:0,margin:6}})}),children:[Object(f.jsx)(j.a,{style:{data:{stroke:Number(null===F||void 0===F?void 0:F.current)>Number(null===F||void 0===F?void 0:F.first)?"#c5ffc7":"#f994b0",strokeWidth:2}},width:P,height:D,padding:{top:I,bottom:6,left:6,right:6},interpolation:"linear",data:h}),Object(f.jsx)(v.a,{orientation:"bottom",tickFormat:function(){return""},style:{axis:{stroke:"#fff",strokeWidth:0},tickLabels:{fill:"#fff"}}})]})}),n&&k&&Object(f.jsx)("div",{className:"graph-holder",children:Object(f.jsxs)(d.a,{width:P,height:D,padding:{top:I,bottom:6,left:6,right:6},containerComponent:Object(f.jsx)(b.a,{labels:function(e){var t=e.datum;return V(t.y)},labelComponent:Object(f.jsx)(u.a,{style:{fill:"#000",fontSize:12},flyoutStyle:{fill:"#fff",stroke:"#0000ff",strokeWidth:0,margin:6}})}),children:[Object(f.jsx)(j.a,{style:{data:{stroke:"#bae4fd",strokeWidth:2}},width:P,height:D,padding:{top:I,bottom:6,left:6,right:6},interpolation:"linear",data:k}),Object(f.jsx)(v.a,{orientation:"bottom",tickFormat:function(){return""},style:{axis:{stroke:"#fff",strokeWidth:0},tickLabels:{fill:"#fff"}}})]})}),n&&N&&Object(f.jsx)("div",{className:"graph-holder",children:Object(f.jsxs)(d.a,{width:P,height:D,padding:{top:I,bottom:6,left:6,right:6},containerComponent:Object(f.jsx)(b.a,{labels:function(e){var t=e.datum;return V(t.y)},labelComponent:Object(f.jsx)(u.a,{style:{fill:"#000",fontSize:12},flyoutStyle:{fill:"#fff",stroke:"#0000ff",strokeWidth:0,margin:6}})}),children:[Object(f.jsx)(j.a,{style:{data:{stroke:"#fff",strokeWidth:2}},width:P,height:D,padding:{top:I,bottom:6,left:6,right:6},interpolation:"linear",data:N}),Object(f.jsx)(v.a,{orientation:"bottom",tickFormat:function(){return""},style:{axis:{stroke:"#fff",strokeWidth:0},tickLabels:{fill:"#fff"}}})]})})]})},O=(i(562),function(){var e=[{label:"1D",value:1},{label:"7D",value:7},{label:"1M",value:30},{label:"3M",value:90},{label:"6M",value:180}],t=Object(a.useState)(e[1].value),i=Object(s.a)(t,2),n=i[0],c=i[1],r=Object(a.useState)(0),l=Object(s.a)(r,2),j=l[0],d=l[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.a,{fonts:[{font:"Roboto Mono",weights:[400,700]}],subsets:["latin-ext"]}),Object(f.jsxs)("div",{className:"app",children:[Object(f.jsxs)("div",{className:"menu-holder",children:[e.map((function(e){return Object(f.jsx)("button",{className:n===e.value?"active":"inactive",onClick:function(){return c(e.value)},children:e.label},e.value)})),Object(f.jsx)("div",{className:"menu-spacer"}),Object(f.jsx)("button",{className:1===j?"active":"inactive",onClick:function(){return d(0===j?1:0)},children:"INF"},1e4)]}),Object(f.jsx)("p",{className:"graph-group-name",children:"MAIN L1"}),Object(f.jsxs)("div",{className:"graphs",children:[Object(f.jsx)(m,{ticker:"bitcoin",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"ethereum",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"solana",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"avalanche-2",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"terra-luna",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"tezos",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"near",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"joe",interval:n,viewType:j})]}),Object(f.jsx)("p",{className:"graph-group-name",children:"SOL ECO"}),Object(f.jsxs)("div",{className:"graphs",children:[Object(f.jsx)(m,{ticker:"raydium",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"serum",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"orca",interval:n,highlight:!0,viewType:j}),Object(f.jsx)(m,{ticker:"samoyedcoin",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"step-finance",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"mango-markets",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"apricot",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"solfarm",interval:n,viewType:j}),"apricot"]}),Object(f.jsx)("p",{className:"graph-group-name",children:"ETH ECO"}),Object(f.jsxs)("div",{className:"graphs",children:[Object(f.jsx)(m,{ticker:"aave",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"sushi",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"matic-network",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"uniswap",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"curve-dao-token",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"chainlink",interval:n,viewType:j})]}),Object(f.jsx)("p",{className:"graph-group-name",children:"BNB ECO"}),Object(f.jsxs)("div",{className:"graphs",children:[Object(f.jsx)(m,{ticker:"binancecoin",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"swipe",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"pancakeswap-token",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"bakerytoken",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"superfarm",interval:n,viewType:j}),Object(f.jsx)(m,{ticker:"force-protocol",interval:n,viewType:j})]})]})]})}),x=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,577)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;i(e),a(e),n(e),c(e),r(e)}))};r.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),x()}},[[563,1,2]]]);
//# sourceMappingURL=main.13161cdb.chunk.js.map