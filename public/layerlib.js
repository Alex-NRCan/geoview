function listenToLegendLayerSetChanges(e,t){cgpv.api.event.on(cgpv.api.eventNames.GET_LEGENDS.LEGENDS_LAYERSET_UPDATED,(t=>{const l='<table class="state"><tr class="state"><th class="state">Name</th><th class="state">Phase</th><th class="state">Status</th></tr>',a=document.getElementById(e),{resultSets:n}=t,d=Object.keys(n).reduce(((e,t)=>{const l=n[t]?.layerName?.en||n[t]?.layerName?.fr||"",{layerPhase:a,layerStatus:d}=n[t];return`${e}<tr class="state"><td class="state">${l}</td><td class="state">${a}</td><td class="state">${d}</td></tr>`}),l);a.innerHTML=d&&d!==l?`${d}</table>`:""}),t)}const addBoundsPolygon=(e,t)=>{const l=cgpv.api.maps[e].transformAndDensifyExtent(t,`EPSG:${cgpv.api.maps[e].currentProjection}`,"EPSG:4326"),{geometry:a}=cgpv.api.maps[e].layer;a.setActiveGeometryGroup(),a.deleteGeometriesFromGroup(0);cgpv.api.maps[e].layer.geometry.addPolygon([l],{style:{strokeColor:"#000",strokeWidth:5,strokeOpacity:.8}})},createInfoTable=(e,t,l,a)=>{const n=document.getElementById(`${t}-${a}`);n.textContent="";const d=document.getElementById(`layer${e.slice(-1)}-${a}-info`);d&&d.remove();const s=document.createElement("div");s.id=`layer${e.slice(-1)}-${a}-info`,n.appendChild(s),Object.keys(l).forEach((t=>{const n=l[t].data[a],d=document.createElement("h1");if(d.innerText=n.length?t:`${t} (empty)`,s.appendChild(d),n.length){let t=document.createElement("h2");t.innerText="Aliases and types",s.appendChild(t);let l=document.createElement("table");l.classList.add("info"),s.appendChild(l);let a=document.createElement("tr");a.classList.add("info"),l.appendChild(a);let d=document.createElement("th");d.classList.add("infoCol1"),a.appendChild(d),Object.keys(n[0].fieldInfo).forEach((e=>{d=document.createElement("th"),d.classList.add("info"),d.innerText=e,a.appendChild(d)})),a=document.createElement("tr"),a.classList.add("info"),l.appendChild(a),d=document.createElement("td"),d.classList.add("infoCol1"),d.innerText="Aliases =>",a.appendChild(d),Object.keys(n[0].fieldInfo).forEach((e=>{d=document.createElement("td"),d.classList.add("info"),d.innerText=n[0].fieldInfo[e].alias,a.appendChild(d)})),a=document.createElement("tr"),a.classList.add("infoCol1"),l.appendChild(a),d=document.createElement("td"),d.classList.add("infoCol1"),d.innerText="Types =>",a.appendChild(d),Object.keys(n[0].fieldInfo).forEach((e=>{d=document.createElement("td"),d.classList.add("info"),d.innerText=n[0].fieldInfo[e].dataType,a.appendChild(d)})),t=document.createElement("h2"),t.innerText="Data",s.appendChild(t),l=document.createElement("table"),l.classList.add("info"),s.appendChild(l);let i=!0;n.forEach((t=>{i&&(a=document.createElement("tr"),a.classList.add("info"),l.appendChild(a),d=document.createElement("th"),d.classList.add("infoCol1"),d.innerText="Symbology",a.appendChild(d),d=document.createElement("th"),d.classList.add("infoCol1"),d.innerText="Zoom To",a.appendChild(d),Object.keys(t.fieldInfo).forEach((e=>{d=document.createElement("th"),d.classList.add("info"),d.innerText=e,a.appendChild(d)})),i=!1),a=document.createElement("tr"),a.classList.add("info"),l.appendChild(a),d=document.createElement("td"),d.classList.add("info"),d.appendChild(t.featureIcon),a.appendChild(d),d=document.createElement("td"),d.classList.add("info"),a.appendChild(d);const n=document.createElement("button");n.innerText="Zoom To Feature",n.addEventListener("click",(l=>{cgpv.api.maps[e].zoomToExtent(t.extent),addBoundsPolygon(e,t.extent)})),d.appendChild(n),Object.keys(t.fieldInfo).forEach((e=>{if(d=document.createElement("td"),d.classList.add("info"),"date"===t.fieldInfo[e].dataType){const{dateUtilities:l}=cgpv.api;d.innerText=t.fieldInfo[e].value}else d.innerText=t.fieldInfo[e].value;a.appendChild(d)}))}))}s.appendChild(document.createElement("br")),s.appendChild(document.createElement("hr"))}))},createTableOfFilter=e=>{let t=document.getElementById(`layer${e.slice(-1)}-buttons-pre`);const l=document.getElementById(`layer${e.slice(-1)}-buttons-table`);l&&l.remove();const a=document.createElement("table");a.id=`layer${e.slice(-1)}-buttons-table`,a.style.width="100%",a.border="1px solid black",t.appendChild(a),cgpv.api.maps?.[e]?.layer?.geoviewLayers&&Object.keys(cgpv.api.maps[e].layer.geoviewLayers).forEach((l=>{const n=cgpv.api.maps[e].layer.geoviewLayers[l];Object.keys(cgpv.api.maps[e].layer.registeredLayers).forEach((d=>{if(d.startsWith(l)){const l=cgpv.api.maps[e].layer.registeredLayers[d],{geoviewRenderer:s}=cgpv.api.maps[e];s.getLegendStyles(l).then((d=>{t=document.createElement("td"),t.border="1px solid black",a.appendChild(t);const s=document.createElement("h1");s.innerText=n.geoviewLayerName.en,t.appendChild(s);const i=document.createElement("h2");i.innerText=`${l?.layerName?.en}`,i.style.height="15px",t.appendChild(i);const o=document.createElement("button");let c=n.getVisible(l);o.innerText=c?void 0===l?.source?.style?"Hide":`Hide style ${l.source.style}`:void 0===l?.source?.style?"Show":`Show style ${l.source.style}`,o.addEventListener("click",(e=>{c=!n.getVisible(l),o.innerText=c?void 0===l?.source?.style?"Hide":`Hide style ${l.source.style}`:void 0===l?.source?.style?"Show":`Show style ${l.source.style}`,n.setVisible(c,l)})),i.appendChild(o),l.style&&Object.keys(l.style).forEach((a=>{const s=document.createElement("p");if(s.innerText=`Geometry = ${a}`,s.style.height="15px",t.appendChild(s),"uniqueValue"===l.style[a].styleType){if(l.style[a].defaultSettings)if("always"===l.style[a].defaultVisible){const e=document.createElement("label");e.innerText="Always show ",e.style.fontSize="15px",e.style.height="15px",t.appendChild(e),t.appendChild(d[a].defaultCanvas);const l=document.createElement("br");l.style.height="1px",t.appendChild(l)}else{const s=document.createElement("button");"yes"===l.style[a].defaultVisible?s.innerText=`Hide ${l.style[a].defaultLabel}`:"no"===l.style[a].defaultVisible&&(s.innerText=`Show ${l.style[a].defaultLabel}`),s.addEventListener("click",(t=>{"yes"===l.style[a].defaultVisible?(l.style[a].defaultVisible="no",s.innerText=`Show ${l.style[a].defaultLabel}`):"no"===l.style[a].defaultVisible&&(l.style[a].defaultVisible="yes",s.innerText=`Hide ${l.style[a].defaultLabel}`);const d=document.getElementById(`checkbox-${e}-${n.geoviewLayerId}`),i=document.getElementById(`filter-input-${e}-${n.geoviewLayerId}`),o="true"===d.value?i.value:n.getLayerFilter(l);n.applyViewFilter(l,o,"true"!==d.value)})),t.appendChild(s),t.appendChild(d[a].defaultCanvas);const i=document.createElement("br");i.style.height="1px",t.appendChild(i)}for(let s=0;s<l.style[a].uniqueValueStyleInfo.length;s++)if("always"===l.style[a].uniqueValueStyleInfo[s].visible){const e=document.createElement("label");e.innerText="Always show ",e.style.fontSize="15px",t.appendChild(e),t.appendChild(d[a].arrayOfCanvas[s]);const l=document.createElement("br");l.style.height="1px",t.appendChild(l)}else{const i=document.createElement("button");"yes"===l.style[a].uniqueValueStyleInfo[s].visible?i.innerText=`Hide ${l.style[a].uniqueValueStyleInfo[s].label}`:"no"===l.style[a].uniqueValueStyleInfo[s].visible&&(i.innerText=`Show ${l.style[a].uniqueValueStyleInfo[s].label}`),i.addEventListener("click",(t=>{const d=l.style[a].uniqueValueStyleInfo[s];"yes"===d.visible?(d.visible="no",i.innerText=`Show ${d.label}`):"no"===d.visible&&(d.visible="yes",i.innerText=`Hide ${d.label}`);const o=document.getElementById(`checkbox-${e}-${n.geoviewLayerId}`),c=document.getElementById(`filter-input-${e}-${n.geoviewLayerId}`),r="true"===o.value?c.value:n.getLayerFilter(l);n.applyViewFilter(l,r,"true"!==o.value)})),t.appendChild(i),t.appendChild(d[a].arrayOfCanvas[s]);const o=document.createElement("br");o.style.height="1px",t.appendChild(o)}}else if("classBreaks"===l.style[a].styleType){if(l.style[a].defaultSettings)if("always"===l.style[a].defaultVisible){const e=document.createElement("label");e.innerText="Always show ",e.style.fontSize="15px",t.appendChild(e),t.appendChild(d[a].defaultCanvas);const l=document.createElement("br");l.style.height="1px",t.appendChild(l)}else{const d=document.createElement("button");"yes"===l.style[a].defaultVisible?d.innerText=`Hide ${l.style[a].defaultLabel}`:"no"===l.style[a].defaultVisible&&(d.innerText=`Show ${l.style[a].defaultLabel}`),d.addEventListener("click",(t=>{"yes"===l.style[a].defaultVisible?(l.style[a].defaultVisible="no",d.innerText=`Show ${l.style[a].defaultLabel}`):"no"===l.style[a].defaultVisible&&(l.style[a].defaultVisible="yes",d.innerText=`Hide ${l.style[a].defaultLabel}`);const s=document.getElementById(`checkbox-${e}-${n.geoviewLayerId}`),i=document.getElementById(`filter-input-${e}-${n.geoviewLayerId}`),o="true"===s.value?i.value:n.getLayerFilter(l);n.applyViewFilter(l,o,"true"!==s.value)})),t.appendChild(d);const s=document.createElement("br");s.style.height="1px",t.appendChild(s)}for(let s=0;s<l.style[a].classBreakStyleInfo.length;s++)if("always"===l.style[a].classBreakStyleInfo[s].visible){const e=document.createElement("label");e.innerText="Always show ",e.style.fontSize="15px",t.appendChild(e),t.appendChild(d[a].arrayOfCanvas[s]);const l=document.createElement("br");l.style.height="1px",t.appendChild(l)}else{const i=document.createElement("button");"yes"===l.style[a].classBreakStyleInfo[s].visible?i.innerText=`Hide ${l.style[a].classBreakStyleInfo[s].label}`:"no"===l.style[a].classBreakStyleInfo[s].visible&&(i.innerText=`Show ${l.style[a].classBreakStyleInfo[s].label}`),i.addEventListener("click",(t=>{const d=l.style[a].classBreakStyleInfo[s];"yes"===d.visible?(d.visible="no",i.innerText=`Show ${d.label}`):"no"===d.visible&&(d.visible="yes",i.innerText=`Hide ${d.label}`);const o=document.getElementById(`checkbox-${e}-${n.geoviewLayerId}`),c=document.getElementById(`filter-input-${e}-${n.geoviewLayerId}`),r="true"===o.value?c.value:n.getLayerFilter(l);n.applyViewFilter(l,r,"true"!==o.value)})),t.appendChild(i),t.appendChild(d[a].arrayOfCanvas[s]);const o=document.createElement("br");o.style.height="1px",t.appendChild(o)}}if(n.getLayerFilter){const a=document.createElement("p");a.innerText="Extra filter: ",t.appendChild(a);const d=document.createElement("input");d.id=`filter-input-${e}-${n.geoviewLayerId}`,d.style.width="50%",a.appendChild(d),d.value=n.getLayerFilter(l)||"";const s=document.createElement("button");s.addEventListener("click",(t=>{const a=document.getElementById(`checkbox-${e}-${n.geoviewLayerId}`);n.applyViewFilter(l,d.value,"true"!==a.value)})),s.innerText="Apply",a.style.width="max-content",a.appendChild(s);const i=document.createElement("input");i.type="checkbox",i.value="false",i.id=`checkbox-${e}-${n.geoviewLayerId}`,i.addEventListener("click",(e=>{i.value="true"===i.value?"false":"true",n.applyViewFilter(l,d.value,"true"!==i.value)})),t.appendChild(i);const o=document.createElement("label");o.innerText="apply only the extra filter",t.appendChild(o)}}))}))}}))}))};function displayLegend(e,t){const l=(e,t)=>{const l=document.createElement("th");l.style="text-align: center; vertical-align: middle;",l.innerHTML=e,t.appendChild(l)},a=(e,t)=>{const l=document.createElement("td");l.style.verticalAlign="middle",l.style.textAlign="center",e?"string"==typeof e?l.innerHTML=e.replaceAll("<","&lt;").replaceAll(">","&gt;"):l.appendChild(e):l.innerHTML="NO LEGEND",t.appendChild(l)},n=document.getElementById(`${e}-table`);n&&n.parentNode.removeChild(n);const d=document.getElementById(`${e}-table-pre`),s=document.createElement("table");s.id=`${e}-table`,s.border="1",s.style="width:50%",d.appendChild(s);let i=!0;Object.keys(t).forEach((e=>{const n=t[e];if(i){i=!1;const e=document.createElement("tr");s.appendChild(e),l("Layer Path",e),l("Status/Label",e),l("Symbology",e)}if(n?.data?.legend)if("ogcWms"===n.data?.type||"imageStatic"===n.data?.type){const e=document.createElement("tr");a(n.data.layerPath,e),a(n.layerStatus,e),a(n.data.legend,e),s.appendChild(e)}else{const t=(e,t,l)=>{const n=document.createElement("tr");a(e,n),a(t,n),a(l,n),s.appendChild(n)};n.data?.legend&&Object.keys(n.data.legend).forEach((l=>{if(l)if("uniqueValue"===n.data.styleConfig[l].styleType){n.data.legend[l].defaultCanvas&&t(e,n.data.styleConfig[l].defaultLabel,n.data.legend[l].defaultCanvas);for(let a=0;a<n.data.legend[l].arrayOfCanvas.length;a++)t(e,n.data.styleConfig[l].uniqueValueStyleInfo[a].label,n.data.legend[l].arrayOfCanvas[a])}else if("classBreaks"===n.data.styleConfig[l].styleType){n.data.legend[l].defaultCanvas&&t(e,n.data.styleConfig[l].defaultLabel,n.data.legend[l].defaultCanvas);for(let a=0;a<n.data.legend[l].arrayOfCanvas.length;a++)t(e,n.data.styleConfig[l].classBreakStyleInfo[a].label,n.data.legend[l].arrayOfCanvas[a])}else"simple"===n.data.styleConfig[l].styleType&&t(e,n.data.styleConfig[l].label,n.data.legend[l].defaultCanvas)}))}else{const t=document.createElement("tr");a(e,t);let l="";void 0===n.data&&(l="(waiting for legend)"),null===n.data&&(l="(legend fetch error)"),n.data&&!n.data.legend&&"loaded"===n.layerStatus&&(l="(no legend)"),a(n.layerStatus,t),a(l,t),s.appendChild(t)}}))}