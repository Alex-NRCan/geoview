/*! Package:geoview-time-slider: 0.1.0 - "1fbdcdf1c25975f4826569f396d45ffa7b4eed41" - 2024-04-04T14:17:22.073Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{63253:(e,t,i)=>{i.d(t,{b:()=>f});var r=i(73676),n=i(92338),o=i(91609),l=i(43703),a=i(79524),s=i(19830),c=i(43238),u=i(53327);function d(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,p()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var f=function(e){function t(){var e;(0,r.A)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return e=d(this,t,[].concat(n)),(0,s.A)(e,"value",void 0),(0,s.A)(e,"footerProps",void 0),e}return(0,a.A)(t,e),(0,n.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){var e,t;this.value=null===(e=this.map())||void 0===e?void 0:e.footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),null===(t=this.map())||void 0===t||t.footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&(null===(e=this.map())||void 0===e||e.footerBarApi.removeTab(this.footerProps.id))}},{key:"onSelected",value:function(){u.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}])}(c.G)},492:(e,t,i)=>{var r=i(92338),n=i(73676),o=i(91609),l=i(43703),a=i(79524),s=i(19830),c=i(60996),u=i(56635),d=i(95292),p=i(63253),f=i(71901),m=i(67058),g=i(62519),h=i(13252),v=i(31836),y=i(53327),x=i(15528),w=i(30450),S=i(12115),j=i(49290),b=i(26166),A=i(20027),P=i(13149),D=i(48960),L=i(29993),O=i(61923),T=i(88113),k=i(82078),I=i(85366),C=i(50716),F=i(80678);const E=["className","children","classes","IconComponent","input","inputProps","variant"],R=["root"],V=(0,F.jsx)(k.A,{}),M=b.forwardRef((function(e,t){const i=(0,I.A)({name:"MuiNativeSelect",props:e}),{className:r,children:n,classes:o={},IconComponent:l=T.A,input:a=V,inputProps:s}=i,c=(0,j.A)(i,E),u=(0,O.A)(),d=(0,L.A)({props:i,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,P.A)({root:["root"]},C.w,t)})((0,S.A)({},i,{classes:o})),f=(0,j.A)(o,R);return(0,F.jsx)(b.Fragment,{children:b.cloneElement(a,(0,S.A)({inputComponent:D.Ay,inputProps:(0,S.A)({children:n,classes:f,IconComponent:l,variant:d.variant,type:void 0},s,a?a.props.inputProps:{}),ref:t},c,{className:(0,A.A)(p.root,a.props.className,r)}))})}));M.muiName="Select";const z=M;var N=i(3807),B=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelContainer:{border:"2px solid ".concat(e.palette.primary.main),borderRadius:"5px",backgroundColor:e.palette.common.white},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function H(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function G(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?H(Object(i),!0).forEach((function(t){(0,s.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):H(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function U(e){var t=window.cgpv,i=e.config,r=e.layerPath,n=e.mapId,o=t.api,l=t.react,a=t.ui,s=l.useState,c=l.useRef,u=l.useEffect,d=a.elements,p=d.Grid,g=d.Slider,y=d.Typography,S=d.Checkbox,j=d.Tooltip,b=d.IconButton,A=d.LockIcon,P=d.LockOpenIcon,D=d.ArrowLeftIcon,L=d.PlayArrowIcon,O=d.PauseIcon,T=d.ArrowRightIcon,k=d.SwitchRightIcon,I=d.SwitchLeftIcon,C=(0,m.A)(),E=B(C),R=s(!1),V=(0,f.A)(R,2),M=V[0],H=V[1],U=c(),Q=c(),q=c(),J=(0,h.Gg)(),K=J.setTitle,Y=J.setDefaultValue,W=J.setDescription,_=J.setValues,X=J.setLocked,$=J.setReversed,Z=J.setDelay,ee=J.setFiltering,te=(0,v.t)(),ie=(0,h.ky)()[r],re=ie.title,ne=ie.description,oe=ie.name,le=ie.defaultValue,ae=ie.discreteValues,se=ie.range,ce=ie.minAndMax,ue=ie.field,de=ie.fieldAlias,pe=ie.filtering,fe=ie.singleHandle,me=ie.values,ge=ie.delay,he=ie.locked,ve=ie.reversed;u((function(){var e,t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));void 0===re&&K(r,(0,N.getLocalizedValue)(null==t?void 0:t.title,te)||""),void 0===ne&&W(r,(0,N.getLocalizedValue)(null==t?void 0:t.description,te)||""),void 0===he&&X(r,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===ve&&$(r,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===le&&Y(r,(null==t?void 0:t.defaultValue)||"")}),[]),u((function(){var e,t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?_(r,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):se.includes(null==t?void 0:t.defaultValue)?_(r,[new Date(null==t?void 0:t.defaultValue).getTime()]):_(r,[new Date(se[0]).getTime()]))}),[i,r,se,ee,_]);var ye,xe=se.map((function(e){return new Date(e).getTime()})),we=ce[1]-ce[0],Se=new Date(ce[1]).getDate()-new Date(ce[0]).getDate(),je=new Date(ce[1]).getFullYear()-new Date(ce[0]).getFullYear();0===Se&&we<864e5?ye="day":0===je&&(ye="year");var be=[];if(se.length<4&&ae){var Ae=(new Date(se[se.length-1]).getTime()-new Date(se[0]).getTime())/4;be=[ce[0],ce[0]+Ae,ce[0]+2*Ae,ce[0]+3*Ae,ce[1]]}else be=se.length<6||fe?xe:[ce[0],new Date(se[Math.round(se.length/4)]).getTime(),new Date(se[Math.round(se.length/2)]).getTime(),new Date(se[Math.round(3*se.length/4)]).getTime(),ce[1]];for(var Pe=[],De=0;De<be.length;De++)Pe.push({value:be[De],label:ye?"".concat("day"===ye?new Date(be[De]).toTimeString().split(" ")[0]:new Date(be[De]).toISOString().slice(5,10)):new Date(be[De]).toISOString().slice(0,10)});function Le(){if(fe&&!ae){var e,t=xe.indexOf(me[0]);e=xe[t]===ce[0]?xe.length-1:t-1,_(r,[xe[e]])}else if(fe){var i=(ce[1]-ce[0])/20,n=me[0]-i<ce[0]?ce[1]:me[0]-i;_(r,[n])}else{var o=(0,f.A)(me,2),l=o[0],a=o[1];if(!q.current){if(a-l>(ce[1]-ce[0])/5)return q.current=(ce[1]-ce[0])/5,void _(r,[a-q.current,a]);q.current=a-l}if(he&&ve){if(l===ce[0]&&(l=a),(l-=q.current)<ce[0])l=(0,f.A)(ce,1)[0]}else if(he){if((a-=q.current)<l&&(a=l),a===l)a=(0,f.A)(ce,2)[1]}else{if(a>Q.current&&l===Q.current?a=Q.current:a-=q.current,a<=ce[0])a=(0,f.A)(ce,2)[1];if((l=a-q.current)<ce[0])l=(0,f.A)(ce,1)[0];l<Q.current&&a>Q.current&&(l=Q.current)}_(r,[l,a])}}function Oe(){if(fe&&!ae){var e,t=xe.indexOf(me[0]);e=xe[t]===ce[1]?0:t+1,_(r,[xe[e]])}else if(fe){var i=(ce[1]-ce[0])/20,n=me[0]+i>ce[1]?ce[0]:me[0]+i;_(r,[n])}else{var o=(0,f.A)(me,2),l=o[0],a=o[1];if(!q.current){if(a-l>(ce[1]-ce[0])/5)return q.current=(ce[1]-ce[0])/5,void _(r,[l,l+q.current]);q.current=a-l}if(he&&ve){if((l+=q.current)>=a)l=(0,f.A)(ce,1)[0]}else if(he){if(a===ce[1]&&(a=l),(a+=q.current)>ce[1])a=(0,f.A)(ce,2)[1]}else{if(l<Q.current&&a===Q.current?l=Q.current:l+=q.current,l>=ce[1])l=(0,f.A)(ce,1)[0];if((a=l+q.current)>ce[1])a=(0,f.A)(ce,2)[1];a>Q.current&&l<Q.current&&(a=Q.current)}_(r,[l,a])}}function Te(){return ve?he?o.utilities.core.getLocalizedMessage("timeSlider.slider.unlockRight",te):o.utilities.core.getLocalizedMessage("timeSlider.slider.lockRight",te):he?o.utilities.core.getLocalizedMessage("timeSlider.slider.unlockLeft",te):o.utilities.core.getLocalizedMessage("timeSlider.slider.lockLeft",te)}return u((function(){M&&(U.current=ve?window.setTimeout((function(){return Le()}),ge):window.setTimeout((function(){return Oe()}),ge))}),[me,pe,ve,he]),u((function(){M&&(ve?Le():Oe())}),[M]),(0,F.jsx)(p,{children:(0,F.jsxs)("div",{style:E.rightPanelContainer,children:[(0,F.jsxs)(p,{container:!0,sx:E.rightPanelBtnHolder,children:[(0,F.jsx)(p,{item:!0,xs:9,children:(0,F.jsxs)(y,{component:"div",sx:G(G({},E.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(re||oe),void 0!==ye&&" (".concat("day"===ye?new Date(le).toLocaleDateString():new Date(le).getFullYear(),")")]})}),(0,F.jsx)(p,{item:!0,xs:3,children:(0,F.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,F.jsx)(j,{title:pe?o.utilities.core.getLocalizedMessage("timeSlider.slider.disableFilter",te):o.utilities.core.getLocalizedMessage("timeSlider.slider.enableFilter",te),placement:"top",enterDelay:1e3,children:(0,F.jsx)(S,{checked:pe,onChange:function(e,t){return ee(r,i=t),void(i||(clearInterval(U.current),H(!1)));var i}})})})})]}),(0,F.jsx)(p,{item:!0,xs:12,children:(0,F.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,F.jsx)(g,{sliderId:r,mapId:n,style:{width:"80%",color:"primary"},min:ce[0],max:ce[1],value:me,valueLabelFormat:function(e){return function(e){return"day"===ye?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===ye?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}(e)},marks:Pe,step:ae?.1:null,customOnChange:function(e){return function(e){clearTimeout(U.current),H(!1),q.current=void 0,_(r,e)}(e)}},me[1]?me[1]+me[0]:me[0])})}),(0,F.jsx)(p,{item:!0,xs:12,children:(0,F.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!fe&&(0,F.jsx)(b,{className:"style1","aria-label":Te(),tooltip:Te(),tooltipPlacement:"top",onClick:function(){return clearTimeout(U.current),void X(r,!he)},children:he?(0,F.jsx)(A,{}):(0,F.jsx)(P,{})}),(0,F.jsx)(b,{className:"style1","aria-label":o.utilities.core.getLocalizedMessage("timeSlider.slider.back",te),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:M||!pe,onClick:function(){return Q.current=ve?me[1]:me[0],void Le()},children:(0,F.jsx)(D,{})}),(0,F.jsx)(b,{className:"style1","aria-label":M?o.utilities.core.getLocalizedMessage("timeSlider.slider.pauseAnimation",te):o.utilities.core.getLocalizedMessage("timeSlider.slider.playAnimation",te),tooltip:M?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!pe,onClick:function(){return clearTimeout(U.current),Q.current=ve?me[1]:me[0],void H(!M)},children:M?(0,F.jsx)(O,{}):(0,F.jsx)(L,{})}),(0,F.jsx)(b,{className:"style1","aria-label":o.utilities.core.getLocalizedMessage("timeSlider.slider.forward",te),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:M||!pe,onClick:function(){return e=(0,f.A)(me,1),Q.current=e[0],void Oe();var e},children:(0,F.jsx)(T,{})}),(0,F.jsx)(b,{className:"style1","aria-label":o.utilities.core.getLocalizedMessage("timeSlider.slider.changeDirection",te),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(U.current),$(r,!ve),void(M&&(ve?Le():Oe()))},children:ve?(0,F.jsx)(k,{}):(0,F.jsx)(I,{})}),(0,F.jsxs)(x.A,{sx:{width:"150px"},children:[(0,F.jsx)(w.A,{variant:"standard",children:o.utilities.core.getLocalizedMessage("timeSlider.slider.timeDelay",te)}),(0,F.jsxs)(z,{defaultValue:ge,inputProps:{name:"timeDelay",onChange:function(e){return function(e){Z(r,e.target.value)}(e)}},children:[(0,F.jsx)("option",{value:500,children:"0.5s"}),(0,F.jsx)("option",{value:750,children:"0.75s"}),(0,F.jsx)("option",{value:1e3,children:"1.0s"}),(0,F.jsx)("option",{value:1500,children:"1.5s"}),(0,F.jsx)("option",{value:2e3,children:"2.0s"}),(0,F.jsx)("option",{value:3e3,children:"3.0s"}),(0,F.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),ne&&(0,F.jsx)(p,{item:!0,xs:12,children:(0,F.jsx)(y,{component:"div",sx:{px:"20px",py:"5px"},children:ne})}),de&&(0,F.jsx)(p,{item:!0,xs:12,children:(0,F.jsx)(y,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(de," (").concat(ue,")")})})]})})}function Q(e){var t=e.mapId,i=e.configObj,r=window.cgpv,n=r.api,o=r.react,l=o.useState,a=o.useCallback,s=o.useMemo,c=o.useEffect,u=(0,m.A)(),p=B(u),x=l(),w=(0,f.A)(x,2),S=w[0],j=w[1],b=(0,h.wE)(),A=(0,h.ky)(),P=(0,v.t)(),D=a((function(e){y.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),j(e.layerPath)}),[]),L=function(e){return e.filtering?1===e.values.length?new Date(e.values[0]).toISOString().slice(0,19):"".concat(new Date(e.values[0]).toISOString().slice(0,19)," - ").concat(new Date(e.values[1]).toISOString().slice(0,19)):null},O=s((function(){y.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",A);return b.map((function(e){return{layerPath:e,timeSliderLayerInfo:A[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:e.timeSliderLayerInfo.name,layerPath:e.layerPath,layerFeatures:L(e.timeSliderLayerInfo),tooltip:(t=e.timeSliderLayerInfo,(0,F.jsxs)(d.Box,{sx:{display:"flex",alignContent:"center","& svg ":{width:"0.75em",height:"0.75em"}},children:[t.name,t.filtering&&": ".concat(L(t))]})),layerStatus:"loaded",queryStatus:"processed"};var t}))}),[A,b]);return c((function(){y.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",O,S),S&&!O.map((function(e){return e.layerPath})).includes(S)&&j("")}),[O,S]),(0,F.jsxs)(g.PE,{selectedLayerPath:S,onLayerListClicked:D,layerList:O,children:[S&&(0,F.jsx)(U,{mapId:t,config:i,layerPath:S},S),!S&&(0,F.jsxs)(d.Paper,{sx:{padding:"2rem"},children:[(0,F.jsx)(d.Typography,{variant:"h3",gutterBottom:!0,sx:p.timeSliderInstructionsTitle,children:n.utilities.core.getLocalizedMessage("timeSlider.instructions",P)}),(0,F.jsx)(d.Typography,{component:"p",sx:p.timeSliderInstructionsBody,children:n.utilities.core.getLocalizedMessage("timeSlider.instructions",P)})]})]})}const q=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1}},"required":["sliders","suportedLanguages"]}'),J=JSON.parse('{"suportedLanguages":["en","fr"],"sliders":[]}');function K(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function Y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?K(Object(i),!0).forEach((function(t){(0,s.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):K(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function W(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,_()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_=function(){return!!e})()}var X=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=W(this,t,[].concat(r)),(0,s.A)(e,"schema",(function(){return q})),(0,s.A)(e,"defaultConfig",(function(){return(0,c.NK)(J)})),(0,s.A)(e,"translations",(0,c.NK)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"},instructions:"Time Slider Instructions"}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"},instructions:"Instructions Curseur Temporel"}}})),(0,s.A)(e,"onCreateContentProps",(function(){return e.configObj.sliders.forEach((function(t){if(t.temporalDimension){var i={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:u.FHQ.utilities.date.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],i)}if(t.defaultValue){var r=t.layerPaths[0],n=u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(r).layerTemporalDimension[r];u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(r).setTemporalDimension(r,Y(Y({},n),{},{default:t.defaultValue}))}})),{id:"time-slider",value:e.value,label:"timeSlider.title",icon:(0,F.jsx)(d.TimeSliderIcon,{}),content:(0,F.jsx)(Q,{mapId:e.pluginProps.mapId,configObj:e.configObj})}})),e}return(0,a.A)(t,e),(0,r.A)(t)}(p.b);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,c.KX)(X)}},e=>{var t;t=492,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map