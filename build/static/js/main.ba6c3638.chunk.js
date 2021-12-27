(this["webpackJsonptrading-dashboard"]=this["webpackJsonptrading-dashboard"]||[]).push([[0],{269:function(e,t,a){},273:function(e,t){},276:function(e,t){},293:function(e,t){},294:function(e,t){},368:function(e,t){},370:function(e,t){},379:function(e,t){},381:function(e,t){},411:function(e,t,a){},515:function(e,t,a){},516:function(e,t,a){"use strict";a.r(t);var c=a(7),n=a.n(c),i=a(238),r=a.n(i),s=(a(269),a(35)),l=a(239),o=a.n(l),j=(a(9),a(131),a(520)),u=a(243),b=a.n(u),d=(a(411),a(17)),v=function(e){var t=e.ticker,a=e.interval,n=e.highlight,i=void 0===n?null:n,r=Object(c.useState)(null),l=Object(s.a)(r,2),o=l[0],u=l[1],v=Object(c.useState)(null),h=Object(s.a)(v,2),O=h[0],m=h[1],p=Object(c.useState)(null),x=Object(s.a)(p,2),g=x[0],k=x[1];Object(c.useEffect)((function(){a!==g&&(f(),k(a))}),[a]);var f=function(){var e="https://api.coingecko.com/api/v3/coins/".concat(t,"/market_chart?vs_currency=usd&days=").concat(a);b.a.get(e).then((function(e){var t=e.data.prices.map((function(e){return{x:e[0],y:e[1]}}));u(t);var a=0,c=1/0;e.data.prices.forEach((function(e){e[1]>a&&(a=e[1]),e[1]<c&&(c=e[1])}));var n={current:N(e.data.prices[e.data.prices.length-1][1]),highestPrice:N(a),lowestPrice:N(c),currentMC:w(e.data.market_caps[e.data.market_caps.length-1][1]),currentVolume:w(e.data.total_volumes[e.data.total_volumes.length-1][1])};m(n)}))},N=function(e){return new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:4}).format(e)},w=function(e){return new Intl.NumberFormat("en-US",{style:"decimal",notation:"compact",compactDisplay:"short"}).format(e)};return Object(d.jsxs)("div",{className:"graph",children:[Object(d.jsxs)("p",{className:"graph-name",children:[Object(d.jsx)("span",{className:"ticker "+(i?"highlight":""),children:t})," "+(null===O||void 0===O?void 0:O.current),Object(d.jsx)("br",{}),"H "+(null===O||void 0===O?void 0:O.highestPrice),Object(d.jsx)("br",{}),"L "+(null===O||void 0===O?void 0:O.lowestPrice)]}),Object(d.jsxs)("p",{className:"graph-details",children:["M "+(null===O||void 0===O?void 0:O.currentMC),Object(d.jsx)("br",{}),"V "+(null===O||void 0===O?void 0:O.currentVolume)]}),Object(d.jsx)("div",{className:"graph-holder",children:o&&Object(d.jsx)(j.a,{style:{data:{stroke:"#fff",strokeWidth:2}},width:428,height:140,padding:{top:20,bottom:6,left:6,right:6},interpolation:"linear",data:o})})]})},h=(a(515),function(){var e=[{label:"1D",value:1},{label:"7D",value:7},{label:"1M",value:30},{label:"3M",value:90},{label:"6M",value:180}],t=Object(c.useState)(e[1].value),a=Object(s.a)(t,2),n=a[0],i=a[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.a,{fonts:[{font:"Roboto Mono",weights:[400,700]}],subsets:["latin-ext"]}),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("div",{className:"menu-holder",children:e.map((function(e){return Object(d.jsx)("button",{className:n===e.value?"active":"inactive",onClick:function(){return i(e.value)},children:e.label},e.value)}))}),Object(d.jsx)("p",{className:"graph-group-name",children:"MAIN L1"}),Object(d.jsxs)("div",{className:"graphs",children:[Object(d.jsx)(v,{ticker:"bitcoin",interval:n}),Object(d.jsx)(v,{ticker:"ethereum",interval:n}),Object(d.jsx)(v,{ticker:"solana",interval:n}),Object(d.jsx)(v,{ticker:"avalanche-2",interval:n}),Object(d.jsx)(v,{ticker:"terra-luna",interval:n}),Object(d.jsx)(v,{ticker:"tezos",interval:n})]}),Object(d.jsx)("p",{className:"graph-group-name",children:"SOL ECO"}),Object(d.jsxs)("div",{className:"graphs",children:[Object(d.jsx)(v,{ticker:"raydium",interval:n}),Object(d.jsx)(v,{ticker:"serum",interval:n}),Object(d.jsx)(v,{ticker:"orca",interval:n,highlight:!0}),Object(d.jsx)(v,{ticker:"samoyedcoin",interval:n}),Object(d.jsx)(v,{ticker:"step-finance",interval:n}),Object(d.jsx)(v,{ticker:"mango-markets",interval:n})]}),Object(d.jsx)("p",{className:"graph-group-name",children:"ETH ECO"}),Object(d.jsxs)("div",{className:"graphs",children:[Object(d.jsx)(v,{ticker:"aave",interval:n}),Object(d.jsx)(v,{ticker:"sushi",interval:n}),Object(d.jsx)(v,{ticker:"matic-network",interval:n}),Object(d.jsx)(v,{ticker:"uniswap",interval:n}),Object(d.jsx)(v,{ticker:"curve-dao-token",interval:n}),Object(d.jsx)(v,{ticker:"chainlink",interval:n})]}),Object(d.jsx)("p",{className:"graph-group-name",children:"BNB ECO"}),Object(d.jsxs)("div",{className:"graphs",children:[Object(d.jsx)(v,{ticker:"binancecoin",interval:n}),Object(d.jsx)(v,{ticker:"swipe",interval:n}),Object(d.jsx)(v,{ticker:"pancakeswap-token",interval:n}),Object(d.jsx)(v,{ticker:"bakerytoken",interval:n}),Object(d.jsx)(v,{ticker:"superfarm",interval:n}),Object(d.jsx)(v,{ticker:"force-protocol",interval:n})]})]})]})}),O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,521)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),O()}},[[516,1,2]]]);
//# sourceMappingURL=main.ba6c3638.chunk.js.map