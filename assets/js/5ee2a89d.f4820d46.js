"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2188],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=l(a),d=i,f=h["".concat(s,".").concat(d)]||h[d]||m[d]||n;return a?r.createElement(f,p(p({ref:t},c),{},{components:a})):r.createElement(f,p({ref:t},c))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,p=new Array(n);p[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:i,p[1]=o;for(var l=2;l<n;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9879:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=a(7462),i=(a(7294),a(3905));const n={id:"SeriesPartialOptionsMap",title:"Interface: SeriesPartialOptionsMap",sidebar_label:"SeriesPartialOptionsMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},p=void 0,o={unversionedId:"api/interfaces/SeriesPartialOptionsMap",id:"api/interfaces/SeriesPartialOptionsMap",title:"Interface: SeriesPartialOptionsMap",description:"Represents the type of partial options for each series type.",source:"@site/docs/api/interfaces/SeriesPartialOptionsMap.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesPartialOptionsMap",permalink:"/lightweight-charts/docs/next/api/interfaces/SeriesPartialOptionsMap",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SeriesPartialOptionsMap",title:"Interface: SeriesPartialOptionsMap",sidebar_label:"SeriesPartialOptionsMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},l=[{value:"Properties",id:"properties",level:2},{value:"Bar",id:"bar",level:3},{value:"Candlestick",id:"candlestick",level:3},{value:"Area",id:"area",level:3},{value:"Baseline",id:"baseline",level:3},{value:"Line",id:"line",level:3},{value:"Histogram",id:"histogram",level:3}],c={toc:l},h="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents the type of partial options for each series type."),(0,i.kt)("p",null,"For example a bar series has options represented by ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#barseriespartialoptions"},"BarSeriesPartialOptions"),"."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"bar"},"Bar"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Bar"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/BarStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"BarStyleOptions"))," & ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("p",null,"The type of bar series partial options."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"candlestick"},"Candlestick"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Candlestick"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/CandlestickStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"CandlestickStyleOptions"))," & ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("p",null,"The type of candlestick series partial options."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"area"},"Area"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Area"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/AreaStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"AreaStyleOptions"))," & ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("p",null,"The type of area series partial options."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"baseline"},"Baseline"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Baseline"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/BaselineStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"BaselineStyleOptions"))," & ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("p",null,"The type of baseline series partial options."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"line"},"Line"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Line"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LineStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"LineStyleOptions"))," & ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("p",null,"The type of line series partial options."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"histogram"},"Histogram"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Histogram"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HistogramStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"HistogramStyleOptions"))," & ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("p",null,"The type of histogram series partial options."))}m.isMDXComponent=!0}}]);