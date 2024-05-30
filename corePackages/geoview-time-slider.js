/*! Package:geoview-time-slider: 0.1.0 - "1c72a99c82e68cc0384e081e147a2c57893e7e9b" - 2024-05-30T16:56:22.581Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{46483:(e,t,i)=>{i.d(t,{b:()=>f});var n=i(70640),r=i(32814),o=i(71149),a=i(99979),l=i(38096),s=i(64426),c=i(50196),u=i(60854);function d(e,t,i){return t=(0,a.A)(t),(0,o.A)(e,p()?Reflect.construct(t,i||[],(0,a.A)(e).constructor):t.apply(e,i))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var f=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=d(this,t,[].concat(r)),(0,s.A)(e,"value",void 0),(0,s.A)(e,"footerProps",void 0),e}return(0,l.A)(t,e),(0,r.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){this.value=this.mapViewer().footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),this.mapViewer().footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){this.value&&this.mapViewer().footerBarApi.removeTab(this.footerProps.id)}},{key:"onSelected",value:function(){u.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}])}(c.G)},88231:(e,t,i)=>{var n=i(70640),r=i(32814),o=i(71149),a=i(66138),l=i(99979),s=i(38096),c=i(64426),u=i(76262),d=i(34028),p=i(33142),f=i(46483),m=i(98030),g=i(6106),h=i(47361),v=i(78383),y=i(21160),w=i(28187),b=i(60854),x=i(94145),S=i(90645),A=i(5323),j=i(51559),P=i(73342),D=i(30538),L=i(87286),I=i(32829),T=i(64049),k=i(73336),O=i(39230),E=i(69216),C=i(20553),V=i(87507),F=i(61165),M=i(97282);const R=["className","children","classes","IconComponent","input","inputProps","variant"],z=["root"],N=(0,M.jsx)(C.A,{}),B=D.forwardRef((function(e,t){const i=(0,V.A)({name:"MuiNativeSelect",props:e}),{className:n,children:r,classes:o={},IconComponent:a=E.A,input:l=N,inputProps:s}=i,c=(0,P.A)(i,R),u=(0,O.A)(),d=(0,k.A)({props:i,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,I.A)({root:["root"]},F.w,t)})((0,j.A)({},i,{classes:o})),f=(0,P.A)(o,z);return(0,M.jsx)(D.Fragment,{children:D.cloneElement(l,(0,j.A)({inputComponent:T.Ay,inputProps:(0,j.A)({children:r,classes:f,IconComponent:a,variant:d.variant,type:void 0},s,l?l.props.inputProps:{}),ref:t},c,{className:(0,L.A)(p.root,l.props.className,n)}))})}));B.muiName="Select";const G=B;var H=i(79913),U=i(31726),K=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function W(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function Y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?W(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):W(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function q(e){b.vF.logTraceRender("geoview-time-slider/time-slider",e);var t=window.cgpv,i=e.config,n=e.layerPath,r=e.mapId,o=t.react,a=t.ui,l=o.useState,s=o.useRef,c=o.useEffect,u=o.useCallback,d=a.elements,p=d.Grid,f=d.Slider,m=d.Typography,g=d.Checkbox,v=d.Tooltip,w=d.IconButton,j=d.LockIcon,P=d.LockOpenIcon,D=d.ArrowLeftIcon,L=d.PlayArrowIcon,I=d.PauseIcon,T=d.ArrowRightIcon,k=d.SwitchRightIcon,O=d.SwitchLeftIcon,E=(0,x.A)(),C=K(E),V=l(!1),F=(0,h.A)(V,2),R=F[0],z=F[1],N=s(),B=s(),W=s(),q=(0,y.Gg)(),J=q.setTitle,_=q.setDefaultValue,X=q.setDescription,$=q.setValues,Q=q.setLocked,Z=q.setReversed,ee=q.setDelay,te=q.setFiltering,ie=(0,U.t)(),ne=(0,y.ky)()[n],re=ne.title,oe=ne.description,ae=ne.name,le=ne.defaultValue,se=ne.discreteValues,ce=ne.range,ue=ne.minAndMax,de=ne.field,pe=ne.fieldAlias,fe=ne.filtering,me=ne.singleHandle,ge=ne.values,he=ne.delay,ve=ne.locked,ye=ne.reversed;c((function(){var e;b.vF.logTraceUseEffect("TIME-SLIDER - mount");var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));void 0===re&&J(n,(0,H.getLocalizedValue)(null==t?void 0:t.title,ie)||""),void 0===oe&&X(n,(0,H.getLocalizedValue)(null==t?void 0:t.description,ie)||""),void 0===ve&&Q(n,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===ye&&Z(n,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===le&&_(n,(null==t?void 0:t.defaultValue)||"")}),[]),c((function(){var e;b.vF.logTraceUseEffect("TIME-SLIDER - config layerPath",i,n);var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?$(n,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):ce.includes(null==t?void 0:t.defaultValue)?$(n,[new Date(null==t?void 0:t.defaultValue).getTime()]):$(n,[new Date(ce[0]).getTime()]))}),[i,n,ce,te,$]);var we,be=ce.map((function(e){return new Date(e).getTime()})),xe=ue[1]-ue[0],Se=new Date(ue[1]).getDate()-new Date(ue[0]).getDate(),Ae=new Date(ue[1]).getFullYear()-new Date(ue[0]).getFullYear();0===Se&&xe<864e5?we="day":0===Ae&&(we="year");var je=[];if(ce.length<4&&se){var Pe=(new Date(ce[ce.length-1]).getTime()-new Date(ce[0]).getTime())/4;je=[ue[0],ue[0]+Pe,ue[0]+2*Pe,ue[0]+3*Pe,ue[1]]}else je=ce.length<6||me?be:[ue[0],new Date(ce[Math.round(ce.length/4)]).getTime(),new Date(ce[Math.round(ce.length/2)]).getTime(),new Date(ce[Math.round(3*ce.length/4)]).getTime(),ue[1]];for(var De=[],Le=0;Le<je.length;Le++)De.push({value:je[Le],label:we?"".concat("day"===we?new Date(je[Le]).toTimeString().split(" ")[0]:new Date(je[Le]).toISOString().slice(5,10)):new Date(je[Le]).toISOString().slice(0,10)});function Ie(){if(me&&!se){var e,t=be.indexOf(ge[0]);e=be[t]===ue[0]?be.length-1:t-1,$(n,[be[e]])}else if(me){var i=(ue[1]-ue[0])/20,r=ge[0]-i<ue[0]?ue[1]:ge[0]-i;$(n,[r])}else{var o=(0,h.A)(ge,2),a=o[0],l=o[1];if(!W.current){if(l-a>(ue[1]-ue[0])/5)return W.current=(ue[1]-ue[0])/5,void $(n,[l-W.current,l]);W.current=l-a}if(ve&&ye){if(a===ue[0]&&(a=l),(a-=W.current)<ue[0])a=(0,h.A)(ue,1)[0]}else if(ve){if((l-=W.current)<a&&(l=a),l===a)l=(0,h.A)(ue,2)[1]}else{if(l>B.current&&a===B.current?l=B.current:l-=W.current,l<=ue[0])l=(0,h.A)(ue,2)[1];if((a=l-W.current)<ue[0])a=(0,h.A)(ue,1)[0];a<B.current&&l>B.current&&(a=B.current)}$(n,[a,l])}}function Te(){if(me&&!se){var e,t=be.indexOf(ge[0]);e=be[t]===ue[1]?0:t+1,$(n,[be[e]])}else if(me){var i=(ue[1]-ue[0])/20,r=ge[0]+i>ue[1]?ue[0]:ge[0]+i;$(n,[r])}else{var o=(0,h.A)(ge,2),a=o[0],l=o[1];if(!W.current){if(l-a>(ue[1]-ue[0])/5)return W.current=(ue[1]-ue[0])/5,void $(n,[a,a+W.current]);W.current=l-a}if(ve&&ye){if((a+=W.current)>=l)a=(0,h.A)(ue,1)[0]}else if(ve){if(l===ue[1]&&(l=a),(l+=W.current)>ue[1])l=(0,h.A)(ue,2)[1]}else{if(a<B.current&&l===B.current?a=B.current:a+=W.current,a>=ue[1])a=(0,h.A)(ue,1)[0];if((l=a+W.current)>ue[1])l=(0,h.A)(ue,2)[1];l>B.current&&a<B.current&&(l=B.current)}$(n,[a,l])}}function ke(){return ye?ve?(0,H.getLocalizedMessage)("timeSlider.slider.unlockRight",ie):(0,H.getLocalizedMessage)("timeSlider.slider.lockRight",ie):ve?(0,H.getLocalizedMessage)("timeSlider.slider.unlockLeft",ie):(0,H.getLocalizedMessage)("timeSlider.slider.lockLeft",ie)}c((function(){b.vF.logTraceUseEffect("TIME-SLIDER - values filtering",ge,fe),R&&(N.current=ye?window.setTimeout((function(){return Ie()}),he):window.setTimeout((function(){return Te()}),he))}),[ge,fe,ye,ve]),c((function(){b.vF.logTraceUseEffect("TIME-SLIDER - isPlaying",R),R&&(ye?Ie():Te())}),[R]);var Oe=u((function(e){b.vF.logTraceUseCallback("TIME-SLIDER - handleSliderChange",n),clearTimeout(N.current),z(!1),W.current=void 0,$(n,e)}),[n,$]),Ee=u((function(e){return b.vF.logTraceUseCallback("TIME-SLIDER - handleLabelFormat",we),"day"===we?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===we?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}),[we]);return(0,M.jsx)(p,{children:(0,M.jsxs)("div",{children:[(0,M.jsxs)(p,{container:!0,sx:C.rightPanelBtnHolder,children:[(0,M.jsx)(p,{item:!0,xs:9,children:(0,M.jsxs)(m,{component:"div",sx:Y(Y({},C.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(re||ae),void 0!==we&&" (".concat("day"===we?new Date(le).toLocaleDateString():new Date(le).getFullYear(),")")]})}),(0,M.jsx)(p,{item:!0,xs:3,children:(0,M.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,M.jsx)(v,{title:fe?(0,H.getLocalizedMessage)("timeSlider.slider.disableFilter",ie):(0,H.getLocalizedMessage)("timeSlider.slider.enableFilter",ie),placement:"top",enterDelay:1e3,children:(0,M.jsx)(g,{checked:fe,onChange:function(e,t){return te(n,i=t),void(i||(clearInterval(N.current),z(!1)));var i}})})})})]}),(0,M.jsx)(p,{item:!0,xs:12,children:(0,M.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,M.jsx)(f,{sliderId:n,mapId:r,style:{width:"80%",color:"primary"},min:ue[0],max:ue[1],value:ge,marks:De,step:se?.1:null,onChangeCommitted:Oe,onValueDisplay:Ee},ge[1]?ge[1]+ge[0]:ge[0])})}),(0,M.jsx)(p,{item:!0,xs:12,children:(0,M.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!me&&(0,M.jsx)(w,{className:"buttonOutline","aria-label":ke(),tooltip:ke(),tooltipPlacement:"top",onClick:function(){return clearTimeout(N.current),void Q(n,!ve)},children:ve?(0,M.jsx)(j,{}):(0,M.jsx)(P,{})}),(0,M.jsx)(w,{className:"buttonOutline","aria-label":(0,H.getLocalizedMessage)("timeSlider.slider.back",ie),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:R||!fe,onClick:function(){return B.current=ye?ge[1]:ge[0],void Ie()},children:(0,M.jsx)(D,{})}),(0,M.jsx)(w,{className:"buttonOutline","aria-label":R?(0,H.getLocalizedMessage)("timeSlider.slider.pauseAnimation",ie):(0,H.getLocalizedMessage)("timeSlider.slider.playAnimation",ie),tooltip:R?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!fe,onClick:function(){return clearTimeout(N.current),B.current=ye?ge[1]:ge[0],void z(!R)},children:R?(0,M.jsx)(I,{}):(0,M.jsx)(L,{})}),(0,M.jsx)(w,{className:"buttonOutline","aria-label":(0,H.getLocalizedMessage)("timeSlider.slider.forward",ie),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:R||!fe,onClick:function(){return e=(0,h.A)(ge,1),B.current=e[0],void Te();var e},children:(0,M.jsx)(T,{})}),(0,M.jsx)(w,{className:"buttonOutline","aria-label":(0,H.getLocalizedMessage)("timeSlider.slider.changeDirection",ie),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(N.current),Z(n,!ye),void(R&&(ye?Ie():Te()))},children:ye?(0,M.jsx)(k,{}):(0,M.jsx)(O,{})}),(0,M.jsxs)(S.A,{sx:{width:"150px"},children:[(0,M.jsx)(A.A,{variant:"standard",children:(0,H.getLocalizedMessage)("timeSlider.slider.timeDelay",ie)}),(0,M.jsxs)(G,{defaultValue:he,inputProps:{name:"timeDelay",onChange:function(e){return function(e){ee(n,e.target.value)}(e)}},children:[(0,M.jsx)("option",{value:500,children:"0.5s"}),(0,M.jsx)("option",{value:750,children:"0.75s"}),(0,M.jsx)("option",{value:1e3,children:"1.0s"}),(0,M.jsx)("option",{value:1500,children:"1.5s"}),(0,M.jsx)("option",{value:2e3,children:"2.0s"}),(0,M.jsx)("option",{value:3e3,children:"3.0s"}),(0,M.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),oe&&(0,M.jsx)(p,{item:!0,xs:12,children:(0,M.jsx)(m,{component:"div",sx:{px:"20px",py:"5px"},children:oe})}),pe&&(0,M.jsx)(p,{item:!0,xs:12,children:(0,M.jsx)(m,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(pe," (").concat(de,")")})})]})})}function J(e){var t=e.mapId,i=e.configObj,n=window.cgpv.react,r=n.useState,o=n.useCallback,a=n.useMemo,l=n.useEffect,s=r(),c=(0,h.A)(s,2),u=c[0],d=c[1],f=(0,w.wE)(),m=(0,y.ky)(),g=o((function(e){b.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),d(e.layerPath)}),[]),x=function(e){return e.filtering?1===e.values.length?new Date(e.values[0]).toISOString().slice(0,19):"".concat(new Date(e.values[0]).toISOString().slice(0,19)," - ").concat(new Date(e.values[1]).toISOString().slice(0,19)):null},S=a((function(){b.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",m);return f.map((function(e){return{layerPath:e,timeSliderLayerInfo:m[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:e.timeSliderLayerInfo.name,layerPath:e.layerPath,layerFeatures:x(e.timeSliderLayerInfo),tooltip:(t=e.timeSliderLayerInfo,(0,M.jsxs)(p.Box,{sx:{display:"flex",alignContent:"center","& svg ":{width:"0.75em",height:"0.75em"}},children:[t.name,t.filtering&&": ".concat(x(t))]})),layerStatus:"loaded",queryStatus:"processed"};var t}))}),[m,f]);l((function(){b.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",S,u),u&&!S.map((function(e){return e.layerPath})).includes(u)&&d("")}),[S,u]);var A=o((function(e){e&&d("")}),[d]);return(0,M.jsx)(v.PE,{selectedLayerPath:u,onLayerListClicked:g,layerList:S,onGuideIsOpen:A,guideContentIds:["timeSlider"],children:u&&(0,M.jsx)(q,{mapId:t,config:i,layerPath:u},u)})}const _=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}}},"required":["sliders"]}'),X={sliders:[]};function $(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function Q(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?$(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function Z(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,ee()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function ee(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(ee=function(){return!!e})()}function te(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}var ie=new WeakSet,ne=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return te(e=Z(this,t,[].concat(r)),ie),(0,c.A)(e,"translations",(0,u.NK)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"}}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"}}}})),e}return(0,s.A)(t,e),(0,r.A)(t,[{key:"schema",value:function(){return _}},{key:"defaultConfig",value:function(){return(0,u.NK)(X)}},{key:"onCreateContentProps",value:function(){var e=this;return this.configObj.sliders.forEach((function(t){if(t.temporalDimension){var i={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:d.P.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};m.d.getMapViewerLayerAPI(e.pluginProps.mapId).getGeoviewLayerHybrid(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],i)}if(t.defaultValue){var n=t.layerPaths[0],r=m.d.getMapViewerLayerAPI(e.pluginProps.mapId).getGeoviewLayerHybrid(n).getTemporalDimension(n);m.d.getMapViewerLayerAPI(e.pluginProps.mapId).getGeoviewLayerHybrid(n).setTemporalDimension(n,Q(Q({},r),{},{default:t.defaultValue}))}})),{id:"time-slider",value:this.value,label:"timeSlider.title",icon:(0,M.jsx)(p.TimeSliderIcon,{}),content:(0,M.jsx)(J,{mapId:this.pluginProps.mapId,configObj:this.configObj})}}},{key:"onAdd",value:function(){var e=this;this.mapViewer().onMapLayersProcessed((function(){var t=e.mapViewer().layer.getLayerEntryConfigIds(),i=function(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i;throw new TypeError("Private element is not present on this object")}(ie,e,re).call(e,t);i&&i.forEach((function(t){var i=e.mapViewer().layer.getLayerEntryConfig(t);g.t.checkInitTimeSliderLayerAndApplyFilters(e.pluginProps.mapId,i)}))})),(0,a.A)((0,l.A)(t.prototype),"onAdd",this).call(this)}}])}(f.b);function re(e){var t=this;return e.filter((function(e){return t.mapViewer().layer.getGeoviewLayerHybrid(e).getTemporalDimension(e)}))}window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.KX)(ne)}},e=>{var t;t=88231,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map