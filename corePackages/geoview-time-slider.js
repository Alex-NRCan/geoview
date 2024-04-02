/*! Package:geoview-time-slider: 0.1.0 - "3948cff4c694c320e02298434fa790d022e31bb8" - 2024-04-02T19:29:56.484Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{52568:(e,t,i)=>{i.d(t,{b:()=>m});var n=i(80669),r=i(23133),o=i(82734),l=i(59290),a=i(17089),s=i(99317),c=i(73963),u=i(18755),d=i(78330);function p(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,f()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var m=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=p(this,t,[].concat(r)),(0,c.A)((0,a.A)(e),"value",void 0),(0,c.A)((0,a.A)(e),"footerProps",void 0),e}return(0,s.A)(t,e),(0,r.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){var e,t;this.value=null===(e=this.map())||void 0===e?void 0:e.footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),null===(t=this.map())||void 0===t||t.footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&(null===(e=this.map())||void 0===e||e.footerBarApi.removeTab(this.footerProps.id))}},{key:"onSelected",value:function(){d.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}]),t}(u.G)},45093:(e,t,i)=>{var n=i(23133),r=i(80669),o=i(82734),l=i(59290),a=i(17089),s=i(99317),c=i(73963),u=i(73943),d=i(89268),p=i(9613),f=i(52568),m=i(40048),g=i(41955),h=i(27994),v=i(3761),y=i(44315),x=i(78330),w=i(98459),A=i(67201),S=i(91808),j=i(30227),b=i(26166),P=i(20027),D=i(32777),L=i(54279),O=i(80038),T=i(9028),k=i(18554),I=i(62423),C=i(17173),F=i(69983),E=i(80678);const R=["className","children","classes","IconComponent","input","inputProps","variant"],V=["root"],M=(0,E.jsx)(I.A,{}),z=b.forwardRef((function(e,t){const i=(0,C.A)({name:"MuiNativeSelect",props:e}),{className:n,children:r,classes:o={},IconComponent:l=k.A,input:a=M,inputProps:s}=i,c=(0,j.A)(i,R),u=(0,T.A)(),d=(0,O.A)({props:i,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,D.A)({root:["root"]},F.w,t)})((0,S.A)({},i,{classes:o})),f=(0,j.A)(o,V);return(0,E.jsx)(b.Fragment,{children:b.cloneElement(a,(0,S.A)({inputComponent:L.Ay,inputProps:(0,S.A)({children:r,classes:f,IconComponent:l,variant:d.variant,type:void 0},s,a?a.props.inputProps:{}),ref:t},c,{className:(0,P.A)(p.root,a.props.className,n)}))})}));z.muiName="Select";const N=z;var B=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelContainer:{border:"2px solid ".concat(e.palette.primary.main),borderRadius:"5px",backgroundColor:e.palette.common.white},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function H(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function G(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?H(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):H(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function U(e){var t=window.cgpv,i=e.config,n=e.layerPath,r=e.mapId,o=t.react,l=t.ui,a=o.useState,s=o.useRef,c=o.useEffect,u=l.elements,d=u.Grid,p=u.Slider,f=u.Typography,v=u.Checkbox,x=u.Tooltip,S=u.IconButton,j=u.LockIcon,b=u.LockOpenIcon,P=u.ArrowLeftIcon,D=u.PlayArrowIcon,L=u.PauseIcon,O=u.ArrowRightIcon,T=u.SwitchRightIcon,k=u.SwitchLeftIcon,I=(0,g.A)(),C=B(I),F=a(!1),R=(0,m.A)(F,2),V=R[0],M=R[1],z=s(),H=s(),U=s(),Q=(0,y.Gg)(),q=Q.setTitle,J=Q.setDefaultValue,K=Q.setDescription,Y=Q.setValues,W=Q.setLocked,_=Q.setReversed,X=Q.setDelay,$=Q.setFiltering,Z=(0,y.ky)()[n],ee=Z.title,te=Z.description,ie=Z.name,ne=Z.defaultValue,re=Z.discreteValues,oe=Z.range,le=Z.minAndMax,ae=Z.field,se=Z.fieldAlias,ce=Z.filtering,ue=Z.singleHandle,de=Z.values,pe=Z.delay,fe=Z.locked,me=Z.reversed;c((function(){var e,t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));void 0===ee&&q(n,(0,h.getLocalizedValue)(null==t?void 0:t.title,r)||""),void 0===te&&K(n,(0,h.getLocalizedValue)(null==t?void 0:t.description,r)||""),void 0===fe&&W(n,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===me&&_(n,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===ne&&J(n,(null==t?void 0:t.defaultValue)||"")}),[]),c((function(){var e,t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?Y(n,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):oe.includes(null==t?void 0:t.defaultValue)?Y(n,[new Date(null==t?void 0:t.defaultValue).getTime()]):Y(n,[new Date(oe[0]).getTime()]))}),[i,n,oe,$,Y]);var ge,he=oe.map((function(e){return new Date(e).getTime()})),ve=le[1]-le[0],ye=new Date(le[1]).getDate()-new Date(le[0]).getDate(),xe=new Date(le[1]).getFullYear()-new Date(le[0]).getFullYear();0===ye&&ve<864e5?ge="day":0===xe&&(ge="year");var we=[];if(oe.length<4&&re){var Ae=(new Date(oe[oe.length-1]).getTime()-new Date(oe[0]).getTime())/4;we=[le[0],le[0]+Ae,le[0]+2*Ae,le[0]+3*Ae,le[1]]}else we=oe.length<6||ue?he:[le[0],new Date(oe[Math.round(oe.length/4)]).getTime(),new Date(oe[Math.round(oe.length/2)]).getTime(),new Date(oe[Math.round(3*oe.length/4)]).getTime(),le[1]];for(var Se=[],je=0;je<we.length;je++)Se.push({value:we[je],label:ge?"".concat("day"===ge?new Date(we[je]).toTimeString().split(" ")[0]:new Date(we[je]).toISOString().slice(5,10)):new Date(we[je]).toISOString().slice(0,10)});function be(){if(ue&&!re){var e,t=he.indexOf(de[0]);e=he[t]===le[0]?he.length-1:t-1,Y(n,[he[e]])}else if(ue){var i=(le[1]-le[0])/20,r=de[0]-i<le[0]?le[1]:de[0]-i;Y(n,[r])}else{var o=(0,m.A)(de,2),l=o[0],a=o[1];if(!U.current){if(a-l>(le[1]-le[0])/5)return U.current=(le[1]-le[0])/5,void Y(n,[a-U.current,a]);U.current=a-l}if(fe&&me){if(l===le[0]&&(l=a),(l-=U.current)<le[0])l=(0,m.A)(le,1)[0]}else if(fe){if((a-=U.current)<l&&(a=l),a===l)a=(0,m.A)(le,2)[1]}else{if(a>H.current&&l===H.current?a=H.current:a-=U.current,a<=le[0])a=(0,m.A)(le,2)[1];if((l=a-U.current)<le[0])l=(0,m.A)(le,1)[0];l<H.current&&a>H.current&&(l=H.current)}Y(n,[l,a])}}function Pe(){if(ue&&!re){var e,t=he.indexOf(de[0]);e=he[t]===le[1]?0:t+1,Y(n,[he[e]])}else if(ue){var i=(le[1]-le[0])/20,r=de[0]+i>le[1]?le[0]:de[0]+i;Y(n,[r])}else{var o=(0,m.A)(de,2),l=o[0],a=o[1];if(!U.current){if(a-l>(le[1]-le[0])/5)return U.current=(le[1]-le[0])/5,void Y(n,[l,l+U.current]);U.current=a-l}if(fe&&me){if((l+=U.current)>=a)l=(0,m.A)(le,1)[0]}else if(fe){if(a===le[1]&&(a=l),(a+=U.current)>le[1])a=(0,m.A)(le,2)[1]}else{if(l<H.current&&a===H.current?l=H.current:l+=U.current,l>=le[1])l=(0,m.A)(le,1)[0];if((a=l+U.current)>le[1])a=(0,m.A)(le,2)[1];a>H.current&&l<H.current&&(a=H.current)}Y(n,[l,a])}}function De(){return me?fe?(0,h.getLocalizedMessage)(r,"timeSlider.slider.unlockRight"):(0,h.getLocalizedMessage)(r,"timeSlider.slider.lockRight"):fe?(0,h.getLocalizedMessage)(r,"timeSlider.slider.unlockLeft"):(0,h.getLocalizedMessage)(r,"timeSlider.slider.lockLeft")}return c((function(){V&&(z.current=me?window.setTimeout((function(){return be()}),pe):window.setTimeout((function(){return Pe()}),pe))}),[de,ce,me,fe]),c((function(){V&&(me?be():Pe())}),[V]),(0,E.jsx)(d,{children:(0,E.jsxs)("div",{style:C.rightPanelContainer,children:[(0,E.jsxs)(d,{container:!0,sx:C.rightPanelBtnHolder,children:[(0,E.jsx)(d,{item:!0,xs:9,children:(0,E.jsxs)(f,{component:"div",sx:G(G({},C.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(ee||ie),void 0!==ge&&" (".concat("day"===ge?new Date(ne).toLocaleDateString():new Date(ne).getFullYear(),")")]})}),(0,E.jsx)(d,{item:!0,xs:3,children:(0,E.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,E.jsx)(x,{title:ce?(0,h.getLocalizedMessage)(r,"timeSlider.slider.disableFilter"):(0,h.getLocalizedMessage)(r,"timeSlider.slider.enableFilter"),placement:"top",enterDelay:1e3,children:(0,E.jsx)(v,{checked:ce,onChange:function(e,t){return $(n,i=t),void(i||(clearInterval(z.current),M(!1)));var i}})})})})]}),(0,E.jsx)(d,{item:!0,xs:12,children:(0,E.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,E.jsx)(p,{sliderId:n,mapId:r,style:{width:"80%",color:"primary"},min:le[0],max:le[1],value:de,valueLabelFormat:function(e){return function(e){return"day"===ge?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===ge?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}(e)},marks:Se,step:re?.1:null,customOnChange:function(e){return function(e){clearTimeout(z.current),M(!1),U.current=void 0,Y(n,e)}(e)}},de[1]?de[1]+de[0]:de[0])})}),(0,E.jsx)(d,{item:!0,xs:12,children:(0,E.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!ue&&(0,E.jsx)(S,{className:"style1","aria-label":De(),tooltip:De(),tooltipPlacement:"top",onClick:function(){return clearTimeout(z.current),void W(n,!fe)},children:fe?(0,E.jsx)(j,{}):(0,E.jsx)(b,{})}),(0,E.jsx)(S,{className:"style1","aria-label":(0,h.getLocalizedMessage)(r,"timeSlider.slider.back"),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:V||!ce,onClick:function(){return H.current=me?de[1]:de[0],void be()},children:(0,E.jsx)(P,{})}),(0,E.jsx)(S,{className:"style1","aria-label":V?(0,h.getLocalizedMessage)(r,"timeSlider.slider.pauseAnimation"):(0,h.getLocalizedMessage)(r,"timeSlider.slider.playAnimation"),tooltip:V?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!ce,onClick:function(){return clearTimeout(z.current),H.current=me?de[1]:de[0],void M(!V)},children:V?(0,E.jsx)(L,{}):(0,E.jsx)(D,{})}),(0,E.jsx)(S,{className:"style1","aria-label":(0,h.getLocalizedMessage)(r,"timeSlider.slider.forward"),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:V||!ce,onClick:function(){return e=(0,m.A)(de,1),H.current=e[0],void Pe();var e},children:(0,E.jsx)(O,{})}),(0,E.jsx)(S,{className:"style1","aria-label":(0,h.getLocalizedMessage)(r,"timeSlider.slider.changeDirection"),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(z.current),_(n,!me),void(V&&(me?be():Pe()))},children:me?(0,E.jsx)(T,{}):(0,E.jsx)(k,{})}),(0,E.jsxs)(w.A,{sx:{width:"150px"},children:[(0,E.jsx)(A.A,{variant:"standard",children:(0,h.getLocalizedMessage)(r,"timeSlider.slider.timeDelay")}),(0,E.jsxs)(N,{defaultValue:pe,inputProps:{name:"timeDelay",onChange:function(e){return function(e){X(n,e.target.value)}(e)}},children:[(0,E.jsx)("option",{value:500,children:"0.5s"}),(0,E.jsx)("option",{value:750,children:"0.75s"}),(0,E.jsx)("option",{value:1e3,children:"1.0s"}),(0,E.jsx)("option",{value:1500,children:"1.5s"}),(0,E.jsx)("option",{value:2e3,children:"2.0s"}),(0,E.jsx)("option",{value:3e3,children:"3.0s"}),(0,E.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),te&&(0,E.jsx)(d,{item:!0,xs:12,children:(0,E.jsx)(f,{component:"div",sx:{px:"20px",py:"5px"},children:te})}),se&&(0,E.jsx)(d,{item:!0,xs:12,children:(0,E.jsx)(f,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(se," (").concat(ae,")")})})]})})}function Q(e){var t=e.mapId,i=e.configObj,n=window.cgpv.react,r=n.useState,o=n.useCallback,l=n.useMemo,a=n.useEffect,s=(0,g.A)(),c=B(s),u=r(),d=(0,m.A)(u,2),f=d[0],w=d[1],A=(0,y.wE)(),S=(0,y.ky)(),j=o((function(e){x.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),w(e.layerPath)}),[]),b=function(e){return e.filtering?1===e.values.length?new Date(e.values[0]).toISOString().slice(0,19):"".concat(new Date(e.values[0]).toISOString().slice(0,19)," - ").concat(new Date(e.values[1]).toISOString().slice(0,19)):null},P=l((function(){x.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",S);return A.map((function(e){return{layerPath:e,timeSliderLayerInfo:S[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:e.timeSliderLayerInfo.name,layerPath:e.layerPath,layerFeatures:b(e.timeSliderLayerInfo),tooltip:(t=e.timeSliderLayerInfo,(0,E.jsxs)(p.Box,{sx:{display:"flex",alignContent:"center","& svg ":{width:"0.75em",height:"0.75em"}},children:[t.name,t.filtering&&": ".concat(b(t))]})),layerStatus:"loaded",queryStatus:"processed"};var t}))}),[S,A]);return a((function(){x.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",P,f),f&&!P.map((function(e){return e.layerPath})).includes(f)&&w("")}),[P,f]),(0,E.jsxs)(v.PE,{selectedLayerPath:f,onLayerListClicked:j,layerList:P,children:[f&&(0,E.jsx)(U,{mapId:t,config:i,layerPath:f},f),!f&&(0,E.jsxs)(p.Paper,{sx:{padding:"2rem"},children:[(0,E.jsx)(p.Typography,{variant:"h3",gutterBottom:!0,sx:c.timeSliderInstructionsTitle,children:(0,h.getLocalizedMessage)(t,"timeSlider.instructions")}),(0,E.jsx)(p.Typography,{component:"p",sx:c.timeSliderInstructionsBody,children:(0,h.getLocalizedMessage)(t,"timeSlider.instructions")})]})]})}const q=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1}},"required":["sliders","suportedLanguages"]}'),J=JSON.parse('{"suportedLanguages":["en","fr"],"sliders":[]}');function K(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function Y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?K(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):K(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function W(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,_()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_=function(){return!!e})()}var X=function(e){function t(){var e;(0,r.A)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return e=W(this,t,[].concat(n)),(0,c.A)((0,a.A)(e),"schema",(function(){return q})),(0,c.A)((0,a.A)(e),"defaultConfig",(function(){return(0,u.NK)(J)})),(0,c.A)((0,a.A)(e),"translations",(0,u.NK)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"},instructions:"Time Slider Instructions"}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"},instructions:"Instructions Curseur Temporel"}}})),(0,c.A)((0,a.A)(e),"onCreateContentProps",(function(){return e.configObj.sliders.forEach((function(t){if(t.temporalDimension){var i={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:d.FHQ.dateUtilities.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};d.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],i)}if(t.defaultValue){var n=t.layerPaths[0],r=d.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(n).layerTemporalDimension[n];d.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(n).setTemporalDimension(n,Y(Y({},r),{},{default:t.defaultValue}))}})),{id:"time-slider",value:e.value,label:"timeSlider.title",icon:(0,E.jsx)(p.TimeSliderIcon,{}),content:(0,E.jsx)(Q,{mapId:e.pluginProps.mapId,configObj:e.configObj})}})),e}return(0,s.A)(t,e),(0,n.A)(t)}(f.b);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.KX)(X)}},e=>{var t;t=45093,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map