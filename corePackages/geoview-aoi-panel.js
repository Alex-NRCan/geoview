/*! Package:geoview-aoi-panel: 1.0.0 - "785df4fd277b426cd24fa47dc80f0381350e8e05" - 2024-07-22T13:52:47.407Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[206],{28941:(e,t,o)=>{var i=o(59682),n=o(41108),r=o(95947),a=o(89153),l=o(79778),s=o(74780),u=o(49278),p=o(67814),c=o(14818),d=o(97282);function m(e){var t=e.mapId,o=e.config.aoiList,i=window.cgpv,n=i.api,r=i.ui,a=n.maps[t],l=r.elements,s=l.Card,u=l.Box,p=function(e){return{aoiCard:{"& .MuiCard-root":{backgroundColor:e.palette.grey.A700,color:e.palette.primary.light,display:"flex",flexDirection:"column",backgroundClip:"padding-box",border:"2px solid rgba(255,255,255,0.25)",borderRadius:"6px",boxShadow:"none",marginBottom:"16px",width:"300px",transition:"all 0.3s ease-in-out","&:last-child":{marginBottom:"0px"},"&:hover":{border:"2px solid #FFFF00"},"&.active":{border:"2px solid #FFFFFF"}},"& .MuiCardHeader-root":{backgroundColor:"".concat(e.palette.geoViewColor.grey.dark[900]," !important"),color:e.palette.geoViewColor.grey.light[900],fontSize:14,fontWeight:400,margin:0,padding:"0 12px",height:60,width:"100%",order:2},"& .MuiCardContent-root":{order:1,height:190,position:"relative",padding:0,"&:last-child":{padding:0},"& .aoiCardThumbnail":{position:"absolute",height:"100%",width:"100%",overflow:"hidden",border:"1px solid theme.palette.geoViewColor.ccc",display:"flex",align:"center",objectFit:"cover",top:0,left:0},"& .aoiCardThumbnailOverlay":{display:"block",height:"100%",width:"100%",position:"absolute",backgroundColor:e.palette.geoViewColor.grey.lighten(.5,.85),transition:"all 0.3s ease-in-out"}},"&:hover":{cursor:"pointer",borderColor:e.palette.geoViewColor.primary.main,"& .MuiCardContent-root":{"& .aoiCardThumbnailOverlay":{backgroundColor:e.palette.geoViewColor.grey.lighten(.5,.55)}}},"&.active":{borderColor:e.palette.geoViewColor.primary.light[200],"& .MuiCardContent-root":{"& .aoiCardThumbnailOverlay":{backgroundColor:"transparent"}},"&:hover":{borderColor:"rgba(255,255,255,0.75)","& .MuiCardContent-root":{"& .aoiCardThumbnailOverlay":{backgroundColor:"rgba(0,0,0,0)"}}}}}}}(r.useTheme());return(0,d.jsx)(u,{sx:p.aoiCard,children:o.map((function(e,t){return(0,d.jsx)(s,{tabIndex:0,className:"aoiCardThumbnail",onClick:function(){return a.zoomToLngLatExtentOrCoordinate(e.extent,{maxZoom:14})},title:e.aoiTitle,contentCard:(0,d.jsx)(d.Fragment,{children:"string"==typeof e.imageUrl&&(0,d.jsx)(u,{component:"img",src:e.imageUrl,alt:"",className:"aoiCardThumbnail"},t)})},t)}))})}const h=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Area of Interest Panel Schema","type":"object","version":"1.0","comments":"Configuration for GeoView Area of interest package.","additionalProperties":false,"properties":{"isOpen":{"description":"Specifies whether the area of interest panel is initially open or closed","type":"boolean","default":false},"aoiList":{"description":"Area of Interest list from which we can select.","type":"array","items":{"type":"object","additionalProperties":false,"properties":{"imageUrl":{"type":"string"},"aoiTitle":{"type":"string"},"extent":{"type":"array","minItems":4,"maxItems":4,"items":[{"type":"number","minimum":-180,"maximum":180},{"type":"number","minimum":-90,"maximum":90},{"type":"number","minimum":-180,"maximum":180},{"type":"number","minimum":-90,"maximum":90}]}},"required":["aoiTitle","extent"]}},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}}}'),g=JSON.parse('{"isOpen":false,"aoiList":[],"version":"1.0"}');function f(e,t,o){return t=(0,a.A)(t),(0,r.A)(e,v()?Reflect.construct(t,o||[],(0,a.A)(e).constructor):t.apply(e,o))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}var C=function(e){function t(){var e;(0,i.A)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return e=f(this,t,[].concat(n)),(0,s.A)(e,"translations",(0,u.NK)({en:{AoiPanel:{title:"Area of Interest"}},fr:{AoiPanel:{title:"Région d'intérêt"}}})),(0,s.A)(e,"onCreateContent",(function(){return(0,d.jsx)(m,{mapId:e.pluginProps.mapId,config:e.configObj||{}})})),e}return(0,l.A)(t,e),(0,n.A)(t,[{key:"schema",value:function(){return h}},{key:"defaultConfig",value:function(){return(0,u.NK)(g)}},{key:"onCreateButtonProps",value:function(){return{id:"aoi-panel",tooltip:"AoiPanel.title",tooltipPlacement:"right",children:(0,d.jsx)(c.A,{}),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"AoiPanel.title",icon:(0,d.jsx)(c.A,{}),width:350,status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onRemoved",value:function(){}}])}(p.i);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["aoi-panel"]=(0,u.KX)(C)},67814:(e,t,o)=>{o.d(t,{i:()=>c});var i=o(59682),n=o(41108),r=o(95947),a=o(89153),l=o(79778),s=o(74780);function u(e,t,o){return t=(0,a.A)(t),(0,r.A)(e,p()?Reflect.construct(t,o||[],(0,a.A)(e).constructor):t.apply(e,o))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var c=function(e){function t(){var e;(0,i.A)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return e=u(this,t,[].concat(n)),(0,s.A)(e,"buttonPanel",void 0),(0,s.A)(e,"buttonProps",void 0),(0,s.A)(e,"panelProps",void 0),e}return(0,l.A)(t,e),(0,n.A)(t,[{key:"onCreateButtonProps",value:function(){var e=window.cgpv.ui.elements.MapIcon;return{id:"somePluginButton",tooltip:"Some tooltip",tooltipPlacement:"right",children:this.react.createElement(e),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"Some title",icon:'<i class="material-icons">map</i>',width:"80vw",status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onCreateContent",value:function(){return this.react.createElement("div",void 0,"Content for AppBar Plugin on map id ".concat(this.pluginProps.mapId," goes here..."))}},{key:"onAdd",value:function(){this.buttonProps=this.onCreateButtonProps(),this.panelProps=this.onCreateContentProps(),this.panelProps.content=this.onCreateContent(),this.buttonPanel=this.mapViewer().appBarApi.createAppbarPanel(this.buttonProps,this.panelProps,this.buttonProps.id)||void 0}},{key:"onRemove",value:function(){this.api&&this.buttonPanel&&this.mapViewer().appBarApi.removeAppbarPanel(this.buttonPanel.buttonPanelId,this.buttonProps.id)}}])}(o(79724).G)}},e=>{var t;t=28941,e(e.s=t)}]);
//# sourceMappingURL=geoview-aoi-panel.js.map