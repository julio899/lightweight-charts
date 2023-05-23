"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(a),u=r,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||i;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={slug:"/",id:"intro",sidebar_position:0},l="Getting started",o={unversionedId:"intro",id:"intro",title:"Getting started",description:"Requirements",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/lightweight-charts/docs/next/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/",id:"intro",sidebar_position:0},sidebar:"docsSidebar",next:{title:"Series types",permalink:"/lightweight-charts/docs/next/series-types"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Build variants",id:"build-variants",level:3},{value:"Creating a chart",id:"creating-a-chart",level:2},{value:"Creating a series",id:"creating-a-series",level:2},{value:"Setting and updating a data",id:"setting-and-updating-a-data",level:2},{value:"Setting the data to a series",id:"setting-the-data-to-a-series",level:3},{value:"Updating the data in a series",id:"updating-the-data-in-a-series",level:3}],d={toc:p},h="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"First of all, Lightweight Charts\u2122 is ",(0,r.kt)("em",{parentName:"p"},"a client-side")," library.\nThis means that it does not and cannot work on the server-side (i.e. NodeJS), at least out of the box."),(0,r.kt)("p",null,"The code of ",(0,r.kt)("inlineCode",{parentName:"p"},"lightweight-charts")," package is targeted to ",(0,r.kt)("a",{parentName:"p",href:"https://262.ecma-international.org/7.0/"},(0,r.kt)("em",{parentName:"a"},"es2016")," language specification"),".\nThus, all the browsers you will have to work with should support this language revision (see ",(0,r.kt)("a",{parentName:"p",href:"https://kangax.github.io/compat-table/es2016plus/"},"this compatibility table"),").\nIf you need to support the previous revisions, you could try to setup a transpilation of the package to the target you need to support in your build system (e.g. by using Babel).\nIf you'll have any issues with that, please raise an issue on github with the details and we'll investigate possible ways to solve it."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The first thing you need to do to use ",(0,r.kt)("inlineCode",{parentName:"p"},"lightweight-charts")," is to install it from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm install --save lightweight-charts\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that the package is shipped with TypeScript declarations, so you can easily use it within TypeScript code.")),(0,r.kt)("h3",{id:"build-variants"},"Build variants"),(0,r.kt)("p",null,"The library ships with the following build variants:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Dependencies included"),(0,r.kt)("th",{parentName:"tr",align:null},"Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"ES module"),(0,r.kt)("th",{parentName:"tr",align:null},"CommonJS \u26a0\ufe0f"),(0,r.kt)("th",{parentName:"tr",align:null},"IIFE (",(0,r.kt)("inlineCode",{parentName:"th"},"window.LightweightCharts"),")"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"PROD"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lightweight-charts.production.mjs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lightweight-charts.production.cjs")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"DEV"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lightweight-charts.development.mjs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lightweight-charts.development.cjs")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Yes (standalone)"),(0,r.kt)("td",{parentName:"tr",align:null},"PROD"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lightweight-charts.standalone.production.mjs")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lightweight-charts.standalone.production.js"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Yes (standalone)"),(0,r.kt)("td",{parentName:"tr",align:null},"DEV"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lightweight-charts.standalone.development.mjs")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lightweight-charts.standalone.development.js"))))),(0,r.kt)("p",null,"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Deprecation note:")," CommonJS support will be removed from the library at the start of 2024."),(0,r.kt)("h2",{id:"creating-a-chart"},"Creating a chart"),(0,r.kt)("p",null,"Once the library has been installed in your repo you're ready to create your first chart."),(0,r.kt)("p",null,"First of all, in a file where you would like to create a chart you need to import the library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createChart } from 'lightweight-charts';\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#createchart"},(0,r.kt)("inlineCode",{parentName:"a"},"createChart"))," is the entry-point for creating charts. You can use it to create as many charts as you need:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createChart } from 'lightweight-charts';\n\n// ...\n\n// somewhere in your code\nconst firstChart = createChart(document.getElementById('firstContainer'));\nconst secondChart = createChart(document.getElementById('secondContainer'));\n")),(0,r.kt)("p",null,"The result of this function is a ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi"},(0,r.kt)("inlineCode",{parentName:"a"},"IChartApi"))," object, which you need to use to work with a chart instance."),(0,r.kt)("h2",{id:"creating-a-series"},"Creating a series"),(0,r.kt)("p",null,"Once your chart is created it is ready to display data."),(0,r.kt)("p",null,"The basic primitive to display a data is ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},"a series"),".\nThere are different types of series:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Area"),(0,r.kt)("li",{parentName:"ul"},"Bar"),(0,r.kt)("li",{parentName:"ul"},"Baseline"),(0,r.kt)("li",{parentName:"ul"},"Candlestick"),(0,r.kt)("li",{parentName:"ul"},"Histogram"),(0,r.kt)("li",{parentName:"ul"},"Line")),(0,r.kt)("p",null,"To create a series with desired type you need to use appropriate method from ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi"},(0,r.kt)("inlineCode",{parentName:"a"},"IChartApi")),".\nAll of them have the same naming ",(0,r.kt)("inlineCode",{parentName:"p"},"add<type>Series"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"<type>")," is a type of a series you'd like to create:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createChart } from 'lightweight-charts';\n\nconst chart = createChart(container);\n\nconst areaSeries = chart.addAreaSeries();\nconst barSeries = chart.addBarSeries();\nconst baselineSeries = chart.addBaselineSeries();\n// ... and so on\n")),(0,r.kt)("p",null,"Please look at ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/series-types"},"this page")," for more information about different series types."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("strong",{parentName:"p"},"a series cannot be transferred from one type to another one")," since different series types have different data and options types."),(0,r.kt)("h2",{id:"setting-and-updating-a-data"},"Setting and updating a data"),(0,r.kt)("p",null,"Once your chart and series are created it's time to set data to the series."),(0,r.kt)("p",null,"Note that regardless of the series type, the API calls are the same (the type of the data might be different though)."),(0,r.kt)("h3",{id:"setting-the-data-to-a-series"},"Setting the data to a series"),(0,r.kt)("p",null,"To set the data (or to replace all data items) to a series you need to use ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi#setdata"},(0,r.kt)("inlineCode",{parentName:"a"},"ISeriesApi.setData"))," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"chart replaceThemeConstants",chart:!0,replaceThemeConstants:!0},"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst areaSeries = chart.addAreaSeries({\n    lineColor: LINE_LINE_COLOR, topColor: AREA_TOP_COLOR,\n    bottomColor: AREA_BOTTOM_COLOR,\n});\nareaSeries.setData([\n    { time: '2018-12-22', value: 32.51 },\n    { time: '2018-12-23', value: 31.11 },\n    { time: '2018-12-24', value: 27.02 },\n    { time: '2018-12-25', value: 27.32 },\n    { time: '2018-12-26', value: 25.17 },\n    { time: '2018-12-27', value: 28.89 },\n    { time: '2018-12-28', value: 25.46 },\n    { time: '2018-12-29', value: 23.92 },\n    { time: '2018-12-30', value: 22.68 },\n    { time: '2018-12-31', value: 22.67 },\n]);\n\nconst candlestickSeries = chart.addCandlestickSeries({\n    upColor: BAR_UP_COLOR, downColor: BAR_DOWN_COLOR, borderVisible: false,\n    wickUpColor: BAR_UP_COLOR, wickDownColor: BAR_DOWN_COLOR,\n});\ncandlestickSeries.setData([\n    { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },\n    { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },\n    { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },\n    { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },\n    { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },\n    { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },\n    { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },\n    { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },\n    { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },\n    { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },\n]);\n\nchart.timeScale().fitContent();\n")),(0,r.kt)("h3",{id:"updating-the-data-in-a-series"},"Updating the data in a series"),(0,r.kt)("p",null,"In a case when your data is updated (e.g. real-time updates) you might want to update the chart as well."),(0,r.kt)("p",null,"But using ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi#setdata"},(0,r.kt)("inlineCode",{parentName:"a"},"ISeriesApi.setData"))," very often might affect the performance and we do not recommend to do this.\nAlso it replaces all series data with the new one, and probably this is not what you're looking for."),(0,r.kt)("p",null,"Thus, to update the data you can use a method ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi#update"},(0,r.kt)("inlineCode",{parentName:"a"},"ISeriesApi.update")),".\nIt allows you to update the last data item or add a new one much faster without affecting the performance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createChart } from 'lightweight-charts';\n\nconst chart = createChart(container);\n\nconst areaSeries = chart.addAreaSeries();\nareaSeries.setData([\n    // ... other data items\n    { time: '2018-12-31', value: 22.67 },\n]);\n\nconst candlestickSeries = chart.addCandlestickSeries();\ncandlestickSeries.setData([\n    // ... other data items\n    { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },\n]);\n\n// sometime later\n\n// update the most recent bar\nareaSeries.update({ time: '2018-12-31', value: 25 });\ncandlestickSeries.update({ time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 112 });\n\n// creating the new bar\nareaSeries.update({ time: '2019-01-01', value: 20 });\ncandlestickSeries.update({ time: '2019-01-01', open: 112, high: 112, low: 100, close: 101 });\n")))}c.isMDXComponent=!0}}]);