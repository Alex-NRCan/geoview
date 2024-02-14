/*! Package:geoview-time-slider: 0.1.0 - "6154fc33b8cb2f3f22038e1be7e4192a7f346d4b" - 2024-02-14T17:55:49.994Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[752],{46272:(e,t,i)=>{i.d(t,{k:()=>m});var r=i(81144),n=i(9332),o=i(51112),l=i(61992),a=i(36704),c=i(38424),s=i(6976),u=i(72628),d=i(40568);function p(e,t,i){return t=(0,l.c)(t),(0,o.c)(e,f()?Reflect.construct(t,i||[],(0,l.c)(e).constructor):t.apply(e,i))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var m=function(e){function t(){var e;(0,r.c)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return e=p(this,t,[].concat(n)),(0,s.c)((0,a.c)(e),"value",void 0),(0,s.c)((0,a.c)(e),"footerProps",void 0),e}return(0,c.c)(t,e),(0,n.c)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){var e,t;this.value=null===(e=this.map())||void 0===e?void 0:e.footerBar.tabs.length,this.footerProps=this.onCreateContentProps(),null===(t=this.map())||void 0===t||t.footerBar.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&(null===(e=this.map())||void 0===e||e.footerBar.removeTab(this.footerProps.id))}},{key:"onSelected",value:function(){d.QE.logTraceCore("FOOTER-PLUGIN - onSelected")}}]),t}(u.k)},55068:(e,t,i)=>{var r=i(9332),n=i(81144),o=i(51112),l=i(61992),a=i(36704),c=i(38424),s=i(6976),u=i(144),d=i(97264),p=i(46272),f=i(89568),m=i(33376),g=i(93264),h=i(88696),v=i(40568),y=i(49032),x=i(46388),S=i(51216),j=i(23387),w=i(60940),b=i(6912),L=i(16844),k=i(53584),P=i(74176),I=i(36288),D=i(31164),T=i(85512),C=i(28728),O=i(87220),E=i(46315);const R=["className","children","classes","IconComponent","input","inputProps","variant"],A=["root"],F=(0,E.jsx)(T.c,{}),M=w.forwardRef((function(e,t){const i=(0,C.c)({name:"MuiNativeSelect",props:e}),{className:r,children:n,classes:o={},IconComponent:l=D.c,input:a=F,inputProps:c}=i,s=(0,j.c)(i,R),u=(0,I.c)(),d=(0,P.c)({props:i,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,L.c)({root:["root"]},O.Q,t)})((0,S.c)({},i,{classes:o})),f=(0,j.c)(o,A);return(0,E.jsx)(w.Fragment,{children:w.cloneElement(a,(0,S.c)({inputComponent:k.cp,inputProps:(0,S.c)({children:n,classes:f,IconComponent:l,variant:d.variant,type:void 0},c,a?a.props.inputProps:{}),ref:t},s,{className:(0,b.c)(p.root,a.props.className,r)}))})}));M.muiName="Select";const z=M;var B=i(49448),N=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelContainer:{border:"2px solid ".concat(e.palette.primary.main),borderRadius:"5px",backgroundColor:e.palette.common.white},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function V(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function U(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?V(Object(i),!0).forEach((function(t){(0,s.c)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):V(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function H(e){var t=window.cgpv,i=e.config,r=e.layerPath,n=e.mapId,o=t.react,l=t.ui,a=o.useState,c=o.useRef,s=o.useEffect,u=l.elements,d=u.Grid,p=u.Slider,g=u.Typography,v=u.Checkbox,S=u.Tooltip,j=u.IconButton,w=u.LockIcon,b=u.LockOpenIcon,L=u.ArrowLeftIcon,k=u.PlayArrowIcon,P=u.PauseIcon,I=u.ArrowRightIcon,D=u.SwitchRightIcon,T=u.SwitchLeftIcon,C=(0,m.c)(),O=N(C),R=a(!1),A=(0,f.c)(R,2),F=A[0],M=A[1],V=c(),H=c(),q=c(),Q=(0,h.K4)(),G=Q.setTitle,J=Q.setDescription,W=Q.setDefaultValue,Y=Q.setValues,_=Q.setLocked,K=Q.setReversed,$=Q.setDelay,X=Q.setFiltering,Z=(0,h.qi)()[r],ee=Z.title,te=Z.description,ie=Z.name,re=Z.defaultValue,ne=Z.range,oe=Z.minAndMax,le=Z.field,ae=Z.fieldAlias,ce=Z.filtering,se=Z.singleHandle,ue=Z.values,de=Z.delay,pe=Z.locked,fe=Z.reversed;s((function(){var e,t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));void 0===ee&&G(r,(0,B.getLocalizedValue)(null==t?void 0:t.title,n)||""),void 0===te&&J(r,(0,B.getLocalizedValue)(null==t?void 0:t.description,n)||""),void 0===re&&W(r,(null==t?void 0:t.defaultValue)||""),void 0===pe&&_(r,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===fe&&K(r,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed))}),[]);var me,ge=ne.map((function(e){return new Date(e).getTime()})),he=oe[1]-oe[0],ve=new Date(oe[1]).getDate()-new Date(oe[0]).getDate(),ye=new Date(oe[1]).getFullYear()-new Date(oe[0]).getFullYear();0===ve&&he<864e5?me="day":0===ye&&(me="year");var xe=[];xe=ne.length<6||se?ge:[oe[0],new Date(ne[Math.round(ne.length/4)]).getTime(),new Date(ne[Math.round(ne.length/2)]).getTime(),new Date(ne[Math.round(3*ne.length/4)]).getTime(),oe[1]];for(var Se=[],je=0;je<xe.length;je++)Se.push({value:xe[je],label:me?"".concat("day"===me?new Date(xe[je]).toTimeString().split(" ")[0]:new Date(xe[je]).toISOString().slice(5,10)):new Date(xe[je]).toISOString().slice(0,10)});function we(){if(se){var e,t=ge.indexOf(ue[0]);e=ge[t]===oe[0]?ge.length-1:t-1,Y(r,[ge[e]])}else{var i=(0,f.c)(ue,2),n=i[0],o=i[1];if(!q.current){if(o-n>(oe[1]-oe[0])/5)return q.current=(oe[1]-oe[0])/5,void Y(r,[o-q.current,o]);q.current=o-n}if(pe&&fe){if(n===oe[0]&&(n=o),(n-=q.current)<oe[0])n=(0,f.c)(oe,1)[0]}else if(pe){if((o-=q.current)<n&&(o=n),o===n)o=(0,f.c)(oe,2)[1]}else{if(o>H.current&&n===H.current?o=H.current:o-=q.current,o<=oe[0])o=(0,f.c)(oe,2)[1];if((n=o-q.current)<oe[0])n=(0,f.c)(oe,1)[0];n<H.current&&o>H.current&&(n=H.current)}Y(r,[n,o])}}function be(){if(se){var e,t=ge.indexOf(ue[0]);e=ge[t]===oe[1]?0:t+1,Y(r,[ge[e]])}else{var i=(0,f.c)(ue,2),n=i[0],o=i[1];if(!q.current){if(o-n>(oe[1]-oe[0])/5)return q.current=(oe[1]-oe[0])/5,void Y(r,[n,n+q.current]);q.current=o-n}if(pe&&fe){if((n+=q.current)>=o)n=(0,f.c)(oe,1)[0]}else if(pe){if(o===oe[1]&&(o=n),(o+=q.current)>oe[1])o=(0,f.c)(oe,2)[1]}else{if(n<H.current&&o===H.current?n=H.current:n+=q.current,n>=oe[1])n=(0,f.c)(oe,1)[0];if((o=n+q.current)>oe[1])o=(0,f.c)(oe,2)[1];o>H.current&&n<H.current&&(o=H.current)}Y(r,[n,o])}}function Le(){return fe?pe?(0,B.getLocalizedMessage)(n,"timeSlider.slider.unlockRight"):(0,B.getLocalizedMessage)(n,"timeSlider.slider.lockRight"):pe?(0,B.getLocalizedMessage)(n,"timeSlider.slider.unlockLeft"):(0,B.getLocalizedMessage)(n,"timeSlider.slider.lockLeft")}return s((function(){F&&(V.current=fe?window.setTimeout((function(){return we()}),de):window.setTimeout((function(){return be()}),de))}),[ue,ce,fe,pe]),s((function(){F&&(fe?we():be())}),[F]),(0,E.jsx)(d,{children:(0,E.jsxs)("div",{style:O.rightPanelContainer,children:[(0,E.jsxs)(d,{container:!0,sx:O.rightPanelBtnHolder,children:[(0,E.jsx)(d,{item:!0,xs:9,children:(0,E.jsxs)(g,{component:"div",sx:U(U({},O.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(ee||ie),void 0!==me&&" (".concat("day"===me?new Date(re).toLocaleDateString():new Date(re).getFullYear(),")")]})}),(0,E.jsx)(d,{item:!0,xs:3,children:(0,E.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,E.jsx)(S,{title:ce?(0,B.getLocalizedMessage)(n,"timeSlider.slider.disableFilter"):(0,B.getLocalizedMessage)(n,"timeSlider.slider.enableFilter"),placement:"top",enterDelay:1e3,children:(0,E.jsx)(v,{checked:ce,onChange:function(e,t){return X(r,i=t),void(i||(clearInterval(V.current),M(!1)));var i}})})})})]}),(0,E.jsx)(d,{item:!0,xs:12,children:(0,E.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,E.jsx)(p,{sliderId:r,mapId:n,style:{width:"80%",color:"primary"},min:oe[0],max:oe[1],defaultValue:Number(re),value:ue,valueLabelFormat:function(e){return function(e){return"day"===me?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===me?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}(e)},marks:Se,step:se?null:.1,customOnChange:function(e){return function(e){clearTimeout(V.current),M(!1),q.current=void 0,Y(r,e)}(e)}},ue[1]?ue[1]+ue[0]:ue[0])})}),(0,E.jsx)(d,{item:!0,xs:12,children:(0,E.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!se&&(0,E.jsx)(j,{"aria-label":Le(),tooltip:Le(),tooltipPlacement:"top",onClick:function(){return clearTimeout(V.current),void _(r,!pe)},children:pe?(0,E.jsx)(w,{}):(0,E.jsx)(b,{})}),(0,E.jsx)(j,{"aria-label":(0,B.getLocalizedMessage)(n,"timeSlider.slider.back"),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:F||!ce,onClick:function(){return H.current=fe?ue[1]:ue[0],void we()},children:(0,E.jsx)(L,{})}),(0,E.jsx)(j,{"aria-label":F?(0,B.getLocalizedMessage)(n,"timeSlider.slider.pauseAnimation"):(0,B.getLocalizedMessage)(n,"timeSlider.slider.playAnimation"),tooltip:F?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!ce,onClick:function(){return clearTimeout(V.current),H.current=fe?ue[1]:ue[0],void M(!F)},children:F?(0,E.jsx)(P,{}):(0,E.jsx)(k,{})}),(0,E.jsx)(j,{"aria-label":(0,B.getLocalizedMessage)(n,"timeSlider.slider.forward"),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:F||!ce,onClick:function(){return e=(0,f.c)(ue,1),H.current=e[0],void be();var e},children:(0,E.jsx)(I,{})}),(0,E.jsx)(j,{"aria-label":(0,B.getLocalizedMessage)(n,"timeSlider.slider.changeDirection"),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(V.current),K(r,!fe),void(F&&(fe?we():be()))},children:fe?(0,E.jsx)(D,{}):(0,E.jsx)(T,{})}),(0,E.jsxs)(y.c,{sx:{width:"150px"},children:[(0,E.jsx)(x.c,{variant:"standard",children:(0,B.getLocalizedMessage)(n,"timeSlider.slider.timeDelay")}),(0,E.jsxs)(z,{defaultValue:de,inputProps:{name:"timeDelay",onChange:function(e){return function(e){$(r,e.target.value)}(e)}},children:[(0,E.jsx)("option",{value:500,children:"0.5s"}),(0,E.jsx)("option",{value:750,children:"0.75s"}),(0,E.jsx)("option",{value:1e3,children:"1.0s"}),(0,E.jsx)("option",{value:1500,children:"1.5s"}),(0,E.jsx)("option",{value:2e3,children:"2.0s"}),(0,E.jsx)("option",{value:3e3,children:"3.0s"}),(0,E.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),te&&(0,E.jsx)(d,{item:!0,xs:12,children:(0,E.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:te})}),ae&&(0,E.jsx)(d,{item:!0,xs:12,children:(0,E.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(ae," (").concat(le,")")})})]})})}function q(e){var t=e.mapId,i=e.configObj,r=window.cgpv.react,n=r.useState,o=r.useCallback,l=r.useMemo,a=r.useEffect,c=(0,m.c)(),s=N(c),p=n(),y=(0,f.c)(p,2),x=y[0],S=y[1],j=(0,h.ak)(),w=(0,h.qi)(),b=o((function(e){v.QE.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),S(e.layerPath)}),[]),L=l((function(){return v.QE.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",w),j.map((function(e){return{layerPath:e,timeSliderLayerInfo:w[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:e.timeSliderLayerInfo.name,layerPath:e.layerPath,tooltip:e.timeSliderLayerInfo.name,layerStatus:"loaded",queryStatus:"processed"}}))}),[j,w]);return a((function(){v.QE.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",L,x),x&&!L.map((function(e){return e.layerPath})).includes(x)&&S("")}),[L,x]),(0,E.jsxs)(g._W,{selectedLayerPath:x,onLayerListClicked:b,layerList:L,children:[x&&(0,E.jsx)(H,{mapId:t,config:i,layerPath:x},x),!x&&(0,E.jsxs)(d.Paper,{sx:{padding:"2rem"},children:[(0,E.jsx)(d.Typography,{variant:"h3",gutterBottom:!0,sx:s.timeSliderInstructionsTitle,children:(0,u.IDR)(t,"timeSlider.instructions")}),(0,E.jsx)(d.Typography,{component:"p",sx:s.timeSliderInstructionsBody,children:(0,u.IDR)(t,"timeSlider.instructions")})]})]})}const Q=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1}},"required":["sliders","suportedLanguages"]}'),G=JSON.parse('{"suportedLanguages":["en","fr"],"sliders":[]}');function J(e,t,i){return t=(0,l.c)(t),(0,o.c)(e,W()?Reflect.construct(t,i||[],(0,l.c)(e).constructor):t.apply(e,i))}function W(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(W=function(){return!!e})()}var Y=function(e){function t(){var e;(0,n.c)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=J(this,t,[].concat(r)),(0,s.c)((0,a.c)(e),"schema",(function(){return Q})),(0,s.c)((0,a.c)(e),"defaultConfig",(function(){return(0,u.Itl)(G)})),(0,s.c)((0,a.c)(e),"translations",(0,u.Itl)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"},instructions:"Time Slider Instructions"}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"},instructions:"Instructions Curseur Temporel"}}})),(0,s.c)((0,a.c)(e),"onCreateContentProps",(function(){return{id:"time-slider",value:e.value,label:"timeSlider.title",icon:(0,E.jsx)(d.TimeSliderIcon,{}),content:(0,E.jsx)(q,{mapId:e.pluginProps.mapId,configObj:e.configObj})}})),e}return(0,c.c)(t,e),(0,r.c)(t)}(p.k);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.Utj)(Y)}},e=>{var t;t=55068,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map