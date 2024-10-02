/*! Package:geoview-time-slider: 1.0.0 - "3336eb9590e3b5b305c92780e02910ef32f04256" - 2024-10-02T14:31:27.533Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{54770:(e,t,i)=>{i.d(t,{b:()=>f});var n=i(13718),r=i(47280),a=i(75583),o=i(96645),l=i(94270),s=i(42432),c=i(45973),u=i(6883);function d(e,t,i){return t=(0,o.A)(t),(0,a.A)(e,p()?Reflect.construct(t,i||[],(0,o.A)(e).constructor):t.apply(e,i))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var f=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return e=d(this,t,[].concat(r)),(0,s.A)(e,"value",void 0),(0,s.A)(e,"footerProps",void 0),e}return(0,l.A)(t,e),(0,r.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){this.value=this.mapViewer().footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),this.mapViewer().footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&null!==(e=this.mapViewer())&&void 0!==e&&e.footerBarApi&&this.mapViewer().footerBarApi.removeTab(this.footerProps.id)}},{key:"onSelected",value:function(){u.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}])}(c.G)},35653:(e,t,i)=>{var n=i(13718),r=i(47280),a=i(75583),o=i(96645),l=i(6620),s=i(94270),c=i(42432),u=i(23853),d=i(25079),p=i(96056),f=i(54770),m=i(9145),g=i(1732),h=i(84287),v=i(74816),y=i(47176),w=i(59155),x=i(6883),b=i(24258),S=i(55907),j=i(37312),L=i(83506),P=i(39220),A=i(30538),D=i(87286),T=i(60769),k=i(6834),I=i(3307),O=i(26557),E=i(7135),C=i(5376),F=i(65676),V=i(78818),R=i(97282);const M=(0,R.jsx)(C.A,{}),N=A.forwardRef((function(e,t){const i=(0,F.A)({name:"MuiNativeSelect",props:e}),{className:n,children:r,classes:a={},IconComponent:o=E.A,input:l=M,inputProps:s,variant:c,...u}=i,d=(0,O.A)(),p=(0,I.A)({props:i,muiFormControl:d,states:["variant"]}),f=(e=>{const{classes:t}=e;return(0,T.A)({root:["root"]},V.w,t)})({...i,classes:a}),{root:m,...g}=a;return(0,R.jsx)(A.Fragment,{children:A.cloneElement(l,{inputComponent:k.Ay,inputProps:{children:r,classes:g,IconComponent:o,variant:p.variant,type:void 0,...s,...l?l.props.inputProps:{}},ref:t,...u,className:(0,D.A)(f.root,l.props.className,n)})})}));N.muiName="Select";const B=N;var z=i(76200),G=i(15205),U=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"}}};function H(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function K(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?H(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):H(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function Y(e){x.vF.logTraceRender("geoview-time-slider/time-slider",e);var t=window.cgpv,i=e.config,n=e.layerPath,r=e.mapId,a=t.react,o=t.ui,l=a.useState,s=a.useRef,c=a.useEffect,u=a.useCallback,d=o.elements,f=d.Grid,m=d.Slider,g=d.Typography,v=d.Checkbox,b=d.Tooltip,A=d.IconButton,D=d.LockIcon,T=d.LockOpenIcon,k=d.ArrowLeftIcon,I=d.PlayArrowIcon,O=d.PauseIcon,E=d.ArrowRightIcon,C=d.SwitchRightIcon,F=d.SwitchLeftIcon,V=(0,j.A)(),M=U(V),N=l(!1),H=(0,S.A)(N,2),Y=H[0],q=H[1],_=s(),J=s(),W=s(),X=(0,h.Gg)(),$=X.setTitle,Q=X.setDefaultValue,Z=X.setDescription,ee=X.setValues,te=X.setLocked,ie=X.setReversed,ne=X.setDelay,re=X.setFiltering,ae=(0,G.t)(),oe=(0,h.ky)()[n],le=oe.title,se=oe.description,ce=oe.defaultValue,ue=oe.discreteValues,de=oe.step,pe=oe.range,fe=oe.minAndMax,me=oe.field,ge=oe.fieldAlias,he=oe.filtering,ve=oe.singleHandle,ye=oe.values,we=oe.delay,xe=oe.locked,be=oe.reversed,Se=(0,y.Yo)(),je=w.K.findLayerByPath(Se,n).layerName;c((function(){var e;x.vF.logTraceUseEffect("TIME-SLIDER - mount");var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));void 0===le&&$(n,(0,z.getLocalizedValue)(null==t?void 0:t.title,ae)||""),void 0===se&&Z(n,(0,z.getLocalizedValue)(null==t?void 0:t.description,ae)||""),void 0===xe&&te(n,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===be&&ie(n,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===ce&&Q(n,(null==t?void 0:t.defaultValue)||"")}),[]),c((function(){var e;x.vF.logTraceUseEffect("TIME-SLIDER - config layerPath",i,n);var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?ee(n,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):pe.includes(null==t?void 0:t.defaultValue)?ee(n,[new Date(null==t?void 0:t.defaultValue).getTime()]):ee(n,[new Date(pe[0]).getTime()]))}),[i,n,pe,re,ee]);var Le,Pe=pe.map((function(e){return new Date(e).getTime()})),Ae=fe[1]-fe[0],De=new Date(fe[1]).getDate()-new Date(fe[0]).getDate(),Te=new Date(fe[1]).getFullYear()-new Date(fe[0]).getFullYear();0===De&&Ae<864e5?Le="day":0===Te&&(Le="year");var ke=[];if(pe.length<4&&ue){var Ie=(new Date(pe[pe.length-1]).getTime()-new Date(pe[0]).getTime())/4;ke=[fe[0],fe[0]+Ie,fe[0]+2*Ie,fe[0]+3*Ie,fe[1]]}else ke=pe.length<6||ve?Pe:[fe[0],new Date(pe[Math.round(pe.length/4)]).getTime(),new Date(pe[Math.round(pe.length/2)]).getTime(),new Date(pe[Math.round(3*pe.length/4)]).getTime(),fe[1]];for(var Oe=[],Ee=0;Ee<ke.length;Ee++)Oe.push({value:ke[Ee],label:Le?"".concat("day"===Le?new Date(ke[Ee]).toTimeString().split(" ")[0]:new Date(ke[Ee]).toISOString().slice(5,10)):new Date(ke[Ee]).toISOString().slice(0,10)});function Ce(){if(ve&&!ue){var e,t=Pe.indexOf(ye[0]);e=Pe[t]===fe[0]?Pe.length-1:t-1,ee(n,[Pe[e]])}else if(ve){var i=(fe[1]-fe[0])/20,r=ye[0]-i<fe[0]?fe[1]:ye[0]-i;ee(n,[r])}else{var a=(0,S.A)(ye,2),o=a[0],l=a[1];if(l-o==fe[1]-fe[0])return W.current=(fe[1]-fe[0])/10,void ee(n,[l-W.current,l]);if(W.current||(W.current=l-o),xe&&be){if(o===fe[0]&&(o=l),(o-=W.current)<fe[0])o=(0,S.A)(fe,1)[0]}else if(xe){if((l-=W.current)<o&&(l=o),l===o)l=(0,S.A)(fe,2)[1]}else{if(l>J.current&&o===J.current?l=J.current:l-=W.current,l<=fe[0])l=(0,S.A)(fe,2)[1];if((o=l-W.current)<fe[0])o=(0,S.A)(fe,1)[0];o<J.current&&l>J.current&&(o=J.current)}ee(n,[o,l])}}function Fe(){if(ve&&!ue){var e,t=Pe.indexOf(ye[0]);e=Pe[t]===fe[1]?0:t+1,ee(n,[Pe[e]])}else if(ve){var i=(fe[1]-fe[0])/20,r=ye[0]+i>fe[1]?fe[0]:ye[0]+i;ee(n,[r])}else{var a=(0,S.A)(ye,2),o=a[0],l=a[1];if(l-o==fe[1]-fe[0])return W.current=(fe[1]-fe[0])/10,void ee(n,[o,o+W.current]);if(W.current||(W.current=l-o),xe&&be){if((o+=W.current)>=l)o=(0,S.A)(fe,1)[0]}else if(xe){if(l===fe[1]&&(l=o),(l+=W.current)>fe[1])l=(0,S.A)(fe,2)[1]}else{if(o<J.current&&l===J.current?o=J.current:o+=W.current,o>=fe[1])o=(0,S.A)(fe,1)[0];if((l=o+W.current)>fe[1])l=(0,S.A)(fe,2)[1];l>J.current&&o<J.current&&(l=J.current)}ee(n,[o,l])}}function Ve(){return be?xe?(0,z.getLocalizedMessage)("timeSlider.slider.unlockRight",ae):(0,z.getLocalizedMessage)("timeSlider.slider.lockRight",ae):xe?(0,z.getLocalizedMessage)("timeSlider.slider.unlockLeft",ae):(0,z.getLocalizedMessage)("timeSlider.slider.lockLeft",ae)}c((function(){x.vF.logTraceUseEffect("TIME-SLIDER - values filtering",ye,he),Y&&(_.current=be?window.setTimeout((function(){return Ce()}),we):window.setTimeout((function(){return Fe()}),we))}),[ye,he,be,xe]),c((function(){x.vF.logTraceUseEffect("TIME-SLIDER - isPlaying",Y),Y&&(be?Ce():Fe())}),[Y]);var Re=u((function(e){x.vF.logTraceUseCallback("TIME-SLIDER - handleSliderChange",n),clearTimeout(_.current),q(!1),W.current=void 0,ee(n,e)}),[n,ee]),Me=u((function(e){return x.vF.logTraceUseCallback("TIME-SLIDER - handleLabelFormat",Le),"day"===Le?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===Le?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}),[Le]);return(0,R.jsx)(f,{children:(0,R.jsxs)("div",{children:[(0,R.jsxs)(f,{container:!0,sx:M.rightPanelBtnHolder,children:[(0,R.jsx)(f,{item:!0,xs:9,children:(0,R.jsxs)(g,{component:"div",sx:K(K({},M.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(le||je),void 0!==Le&&" (".concat("day"===Le?new Date(ce).toLocaleDateString():new Date(ce).getFullYear(),")")]})}),(0,R.jsx)(f,{item:!0,xs:3,children:(0,R.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,R.jsx)(b,{title:he?(0,z.getLocalizedMessage)("timeSlider.slider.disableFilter",ae):(0,z.getLocalizedMessage)("timeSlider.slider.enableFilter",ae),placement:"top",enterDelay:1e3,children:(0,R.jsx)(v,{checked:he,onChange:function(e,t){return re(n,i=t),void(i||(clearInterval(_.current),q(!1)));var i}})})})})]}),(0,R.jsx)(f,{item:!0,xs:12,children:(0,R.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,R.jsx)(m,{sliderId:n,mapId:r,style:{width:"80%",color:"primary"},min:fe[0],max:fe[1],value:ye,marks:Oe,step:ue?de||.1:null,onChangeCommitted:Re,onValueLabelFormat:Me},ye[1]?ye[1]+ye[0]:ye[0])})}),(0,R.jsx)(f,{item:!0,xs:12,children:(0,R.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!ve&&(0,R.jsx)(A,{className:"buttonOutline","aria-label":Ve(),tooltip:Ve(),tooltipPlacement:"top",onClick:function(){return clearTimeout(_.current),void te(n,!xe)},children:xe?(0,R.jsx)(D,{}):(0,R.jsx)(T,{})}),(0,R.jsx)(A,{className:"buttonOutline","aria-label":(0,z.getLocalizedMessage)("timeSlider.slider.back",ae),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:Y||!he,onClick:function(){return J.current=be?ye[1]:ye[0],void Ce()},children:(0,R.jsx)(k,{})}),(0,R.jsx)(A,{className:"buttonOutline","aria-label":Y?(0,z.getLocalizedMessage)("timeSlider.slider.pauseAnimation",ae):(0,z.getLocalizedMessage)("timeSlider.slider.playAnimation",ae),tooltip:Y?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!he,onClick:function(){return clearTimeout(_.current),J.current=be?ye[1]:ye[0],void q(!Y)},children:Y?(0,R.jsx)(O,{}):(0,R.jsx)(I,{})}),(0,R.jsx)(A,{className:"buttonOutline","aria-label":(0,z.getLocalizedMessage)("timeSlider.slider.forward",ae),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:Y||!he,onClick:function(){return e=(0,S.A)(ye,1),J.current=e[0],void Fe();var e},children:(0,R.jsx)(E,{})}),(0,R.jsx)(A,{className:"buttonOutline","aria-label":(0,z.getLocalizedMessage)("timeSlider.slider.changeDirection",ae),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(_.current),ie(n,!be),void(Y&&(be?Ce():Fe()))},children:be?(0,R.jsx)(C,{}):(0,R.jsx)(F,{})}),(0,R.jsx)(p.Box,{component:"span",sx:{paddingLeft:"10px"},children:(0,R.jsxs)(L.A,{sx:{width:"150px"},children:[(0,R.jsx)(P.A,{variant:"standard",children:(0,z.getLocalizedMessage)("timeSlider.slider.timeDelay",ae)}),(0,R.jsxs)(B,{defaultValue:we,inputProps:{name:"timeDelay",onChange:function(e){return function(e){ne(n,e.target.value)}(e)}},children:[(0,R.jsx)("option",{value:500,children:"0.5s"}),(0,R.jsx)("option",{value:750,children:"0.75s"}),(0,R.jsx)("option",{value:1e3,children:"1.0s"}),(0,R.jsx)("option",{value:1500,children:"1.5s"}),(0,R.jsx)("option",{value:2e3,children:"2.0s"}),(0,R.jsx)("option",{value:3e3,children:"3.0s"}),(0,R.jsx)("option",{value:5e3,children:"5.0s"})]})]})})]})}),se&&(0,R.jsx)(f,{item:!0,xs:12,children:(0,R.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:se})}),ge&&(0,R.jsx)(f,{item:!0,xs:12,children:(0,R.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat((0,z.getLocalizedMessage)("timeSlider.slider.temporalField",ae)).concat(ge," (").concat(me,")")})})]})})}function q(e){var t=e.mapId,i=e.configObj,n=window.cgpv.react,r=n.useCallback,a=n.useMemo,o=n.useEffect,l=(0,v.wE)(),s=(0,h.ky)(),c=(0,h.h4)(),u=(0,h.Gg)().setSelectedLayerPath,d=(0,y.Yo)(),f=r((function(e){x.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),u(e.layerPath)}),[u]),m=function(e){return e.filtering?1===e.values.length?new Date(e.values[0]).toISOString().slice(0,19):"".concat(new Date(e.values[0]).toISOString().slice(0,19)," - ").concat(new Date(e.values[1]).toISOString().slice(0,19)):null},S=a((function(){x.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",s);return l.map((function(e){return{layerPath:e,timeSliderLayerInfo:s[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:w.K.findLayerByPath(d,e.layerPath).layerName,layerPath:e.layerPath,layerFeatures:m(e.timeSliderLayerInfo),tooltip:(i=e.timeSliderLayerInfo,n=w.K.findLayerByPath(d,e.layerPath).layerName,(0,R.jsxs)(p.Box,{sx:{display:"flex",alignContent:"center","& svg ":{width:"0.75em",height:"0.75em"}},children:[n,i.filtering&&": ".concat(m(i))]})),layerStatus:"loaded",queryStatus:"processed",layerUniqueId:"".concat(t,"-").concat(b.DF.TIME_SLIDER,"-").concat(e.layerPath)};var i,n}))}),[d,s,l,t]);o((function(){x.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",S,c),c&&!S.map((function(e){return e.layerPath})).includes(c)&&u("")}),[S,c,u]);var j=r((function(e){e&&u("")}),[u]);return(0,R.jsx)(g.PE,{selectedLayerPath:c,onLayerListClicked:f,layerList:S,onGuideIsOpen:j,guideContentIds:["timeSlider"],children:c?(0,R.jsx)(Y,{mapId:t,config:i,layerPath:c},c):null})}const _=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}}},"required":["sliders"]}'),J={sliders:[]};function W(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function X(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?W(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):W(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function $(e,t,i){return t=(0,o.A)(t),(0,a.A)(e,Q()?Reflect.construct(t,i||[],(0,o.A)(e).constructor):t.apply(e,i))}function Q(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Q=function(){return!!e})()}function Z(e,t){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.add(e)}var ee=new WeakSet,te=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return Z(e=$(this,t,[].concat(r)),ee),(0,c.A)(e,"translations",(0,u.NK)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay",temporalField:"Temporal Field: "}}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation",temporalField:"Champ temporel: "}}}})),e}return(0,s.A)(t,e),(0,r.A)(t,[{key:"schema",value:function(){return _}},{key:"defaultConfig",value:function(){return(0,u.NK)(J)}},{key:"onCreateContentProps",value:function(){var e=this;return this.configObj.sliders.forEach((function(t){if(t.temporalDimension){var i,n={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:d.P.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};null===(i=e.mapViewer().layer.getGeoviewLayerHybrid(t.layerPaths[0]))||void 0===i||i.setTemporalDimension(t.layerPaths[0],n)}if(t.defaultValue){var r,a,o=t.layerPaths[0],l=null===(r=e.mapViewer().layer.getGeoviewLayerHybrid(o))||void 0===r?void 0:r.getTemporalDimension(o);if(l)null===(a=e.mapViewer().layer.getGeoviewLayerHybrid(o))||void 0===a||a.setTemporalDimension(o,X(X({},l),{},{default:t.defaultValue}))}})),{id:"time-slider",value:this.value,label:"timeSlider.title",icon:(0,R.jsx)(p.TimeSliderIcon,{}),content:(0,R.jsx)(q,{mapId:this.pluginProps.mapId,configObj:this.configObj})}}},{key:"onAdd",value:function(){var e,i,n,r,a,s=this;this.mapViewer().mapLayersLoaded?this.initTimeSliderPlugin():this.mapViewer().onMapLayersLoaded((function(){s.initTimeSliderPlugin()})),(e=t,i="onAdd",n=this,r=3,a=(0,l.A)((0,o.A)(1&r?e.prototype:e),i,n),2&r&&"function"==typeof a?function(e){return a.apply(n,e)}:a)([])}},{key:"initTimeSliderPlugin",value:function(){var e=this,t=this.mapViewer().layer.getLayerEntryConfigIds(),i=function(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i;throw new TypeError("Private element is not present on this object")}(ee,this,ie).call(this,t);i&&i.forEach((function(t){var i=e.mapViewer().layer.getLayerEntryConfig(t);m.t.checkInitTimeSliderLayerAndApplyFilters(e.pluginProps.mapId,i)}))}}])}(f.b);function ie(e){var t=this;return e.filter((function(e){var i;return null===(i=t.mapViewer().layer.getGeoviewLayerHybrid(e))||void 0===i?void 0:i.getTemporalDimension(e)}))}window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.KX)(te)}},e=>{var t;t=35653,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map