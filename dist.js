!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n,t){(function(){var e=t(5),r=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,a=function(e){return e?e.toString().replace(r,""):""};n.trim=a;var o=function(e){return null==e&&void 0===e?String(e):{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object"}[Object.prototype.toString.call(e)]};n.type=o;n.assertArray=function(e){if("array"!==o(e))throw"not array";return e};var i=function(e){if("object"!==o(e))throw"not object";return e};n.assertObject=i;var u=function(e,n,t){var r,a;return t||(t=[]),i(e),function(){var n;for(r in n=[],e)a=e[r],n.push([r,a]);return n}().reduce(n,t)};n.reduceMap=u;n.identity=function(e){return e};var c=function(){return Array.prototype.slice.call(arguments)};n.argsArray=c;n.mergeLists=function(){var n;return n=function(n,t){var r,a,o;for(r in a=e(!0,n),t)o=t[r],a[r]=(a[r]||[]).concat(o);return a},c.apply(null,arguments).reduce(n,{})};n.absoluteUrl=function(e,n){return n.match(/https?:\/\/./)?n:e+"/"+n};n.relativeUrl=function(e,n){return n.slice(n,e.length+1)===e+"/"?n.slice(e.length+1):n},n.resourceIdToUrl=function(e,n,t){return n=n.replace(/\/$/,""),(e=e.replace(/^\//,"")).indexOf("/")<0?n+"/"+t+"/"+e:0!==e.indexOf(n)?n+"/"+e:e};var s=function(e,n,t,r){var a;switch(o(t)){case"array":return n(t.map((function(n){return e(n,[t,r])})),r);case"object":return a=function(n,a){var o,i;return o=a[0],i=a[1],n[o]=e(i,[t].concat(r)),n},n(u(t,a,{}),r);default:return n(t,r)}};n.walk=s;var l=function(e,n,t){return n?s(l(e),e,n,t):function(n,t){return l(e,n,t)}};n.postwalk=l}).call(this)},function(e,n,t){(function(){var e=t(0),r=function(e){return e.and=function(n){return r((t=e,a=n,function(e){return t(a(e))}));var t,a},e.end=function(n){return e(n)},e};n.$$Simple=function(e){return function(n){return function(t){return n(e(t))}}};n.$$Attr=function(n,t){return r((function(r){return function(a){var o=null;return o="function"==e.type(t)?t(a):t,r(null==o&&null==o?a:function(e,n,t){for(var r=n.split("."),a=e,o=0;o<r.length-1;o++){var i=r[o];(a=e[i])||(a={},e[i]=a)}return a[r[r.length-1]]=t,e}(a,n,o))}}))};var a=function(e,n){return r((function(t){return function(r){return r[e]=n(r),t(r)}}))};n.Middleware=r,n.Attribute=a,n.Method=function(e){return a("method",(n=e,function(){return n}));var n}}).call(this)},function(e,n,t){var r=t(3)({baseUrl:"https://9y4sehz2j3.execute-api.us-east-2.amazonaws.com/fhir",headers:{"x-api-key":"in1RRKDFmp8vMZT9LmsKx5Gv2eBhprQF96YEvmIG",accept:"*/*"}});function a(e){let n="";return e.name&&e.name.length>0&&(e.name[0].given&&e.name[0].given.length>0&&(n+=e.name[0].given[0]+" "),e.name[0].family&&(n+=e.name[0].family)),n}window.patientDetails=function(e=4){const n=document.querySelector("#patientModalTitle"),t=document.querySelector("#patientModalBody");r.read({type:"Patient",patient:e}).then(e=>{n.innerHTML=a(e.data),t.innerHTML="<pre>"+JSON.stringify(e.data,null,"   ")+"</pre>",$("#patientModal").modal("show")})},window.getPatients=function(e=1,n=25){const t=document.querySelector("#pagination"),o=document.querySelector("#patients");var i=document.querySelector("#search").value;""===i&&(i=" "),r.search({type:"Patient",query:{_count:n*e,"name:contains":i}}).then(r=>{const i=r.data,u=(e-1)*n;var c=0;for(o.innerHTML='      <thead><tr><th scope="col">Name</th><th scope="col">Gender</th><th scope="col">DOB</th></tr></thead>\t\t  ',i.total>0&&i.entry.forEach(e=>{c++;const n=a(e.resource),t=e.resource.gender,r=e.resource.birthDate,i=e.resource.id,s=document.createElement("tr");n.length>0&&c>u&&(s.innerHTML='<td><a href="#" onclick="patientDetails(id='+i+')">'+n+"</a> </td><td> "+t+"</td><td>"+r,o.appendChild(s))}),numPages=Math.ceil(i.total/n),pagesHTML="",p=1;p<numPages;p++)p===e?activePage=" active":activePage="",pagesHTML=pagesHTML+'\n<li class="page-item"><a class="page-link'+activePage+'" href="#" onClick="getPatients(page='+p+')">'+p+"</a></li>";t.innerHTML=' <nav aria-label="Page navigation example"><ul class="pagination">'+pagesHTML+"</ul></nav>Total:"+i.total}).catch(e=>{o.innerHTML="",t.innerHTML="Error",e.status&&(console.log(e),console.log("Error",e.status)),e.data&&e.data&&console.log("Error",e.data)})}},function(e,n,t){var r=t(4);function a(e){return e.text().then((function(e){return e.length>0?JSON.parse(e):""}))}function o(e){return new Promise((function(n,t){(e.status<200||e.status>399)&&t(e),n(e)}))}var i=function(){var e={};return e.promise=new Promise((function(n,t){e.resolve=n,e.reject=t})),e},u={defer:i,http:function(e){var n=e.url,t=e.debug,r=e;return r.credentials=e.credentials||"",""===r.credentials&&delete r.credentials,!["GET","HEAD"].includes(r.method)&&r.data&&(r.body=r.data),t&&console.log("DEBUG[native](fetchOptions)",r),new Promise((function(i,u){var c={};fetch(n,r).then((function(n){return t&&console.log("DEBUG[native](response)",n),Object.assign(c,{status:n.status,headers:n.headers,config:e}),n})).then(o).then(a).then((function(e){Object.assign(c,{data:e}),t&&console.log("DEBUG[native]: (success response)",c),i(c)})).catch((function(e){Object.assign(c,{error:e}),t&&console.log("DEBUG[native]: rejecting fetch promise"),u(c)}))}))}},c=function(e){return r(e,u)};c.defer=i,e.exports=c},function(e,n,t){(function(){t(0);var n=t(1),r=t(7),a=t(8),o=t(10),i=t(11),u=t(12),c=t(13),s=t(14),l=t(15),d=t(16),f=t(17);e.exports=function(e,t){var p=n.Middleware,h=n.$$Attr,v=function(e){return h("method",e)},m=function(e,n){return h("headers."+e,n)},g=p(i),y=p(u(e,t)).and(g).and(a.$Basic).and(a.$Bearer).and(a.$Credentials).and(o.$JsonData).and(m("Accept",e.headers&&e.headers.Accept?e.headers.Accept:"application/json")).and(m("Content-Type",e.headers&&e.headers["Content-Type"]?e.headers["Content-Type"]:"application/json")),b=y.and(v("GET")),$=y.and(v("POST")),j=y.and(v("PUT")),P=y.and(v("DELETE")),w=y.and(v("PATCH")),O=o.Http(e,t),x=d.Path,E=x(e.baseUrl),S=E.slash(":type || :resource.resourceType"),A=S.slash("_history"),M=S.slash(":id || :resource.id"),T=M.slash("_history"),_=M.slash(":versionId || :resource.meta.versionId"),D=E.slash(":target.resourceType || :target.type").slash(":target.id").slash(":target.versionId"),U=m("Prefer","return=representation"),C=p(r.$Paging);return f({conformance:b.and(E.slash("metadata")).end(O),document:$.and(E.slash("Document")).end(O),profile:b.and(E.slash("Profile").slash(":type")).end(O),transaction:$.and(E).end(O),history:b.and(E.slash("_history")).and(C).end(O),typeHistory:b.and(A).and(C).end(O),resourceHistory:b.and(T).and(C).end(O),read:b.and(s.$WithPatient).and(M).end(O),vread:b.and(_).end(O),delete:P.and(M).and(U).end(O),create:$.and(S).and(U).end(O),validate:$.and(S.slash("_validate")).end(O),meta:{add:$.and(D.slash("$meta-add")).end(O),delete:$.and(D.slash("$meta-delete")).end(O),read:b.and(D.slash("$meta")).end(O)},search:b.and(S).and(s.$WithPatient).and(r.$SearchParams).and(C).end(O),update:j.and(M).and(U).end(O),conditionalUpdate:j.and(S).and(r.$SearchParams).and(U).end(O),conditionalDelete:P.and(S).and(r.$SearchParams).and(U).end(O),nextPage:b.and(c.$$BundleLinkUrl("next")).end(O),prevPage:b.and(c.$$BundleLinkUrl("previous")).and(c.$$BundleLinkUrl("prev")).end(O),getBundleByUrl:b.and(x(":url")).end(O),resolve:b.and(l.resolve).end(O),patch:w.and(M).and(m("Content-Type","application/json-patch+json")).end(O)},t)}}).call(this)},function(e,n,t){(function(e){!function(n){var t=function(e){return a(!0===e,!1,arguments)};function r(e,n){if("object"!==o(e))return n;for(var t in n)"object"===o(e[t])&&"object"===o(n[t])?e[t]=r(e[t],n[t]):e[t]=n[t];return e}function a(e,n,a){var i=a[0],u=a.length;(e||"object"!==o(i))&&(i={});for(var c=0;c<u;++c){var s=a[c];if("object"===o(s))for(var l in s)if("__proto__"!==l){var d=e?t.clone(s[l]):s[l];i[l]=n?r(i[l],d):d}}return i}function o(e){return{}.toString.call(e).slice(8,-1).toLowerCase()}t.recursive=function(e){return a(!0===e,!0,arguments)},t.clone=function(e){var n,r,a=e,i=o(e);if("array"===i)for(a=[],r=e.length,n=0;n<r;++n)a[n]=t.clone(e[n]);else if("object"===i)for(n in a={},e)a[n]=t.clone(e[n]);return a},n?e.exports=t:window.merge=t}(e&&"object"==typeof e.exports&&e.exports)}).call(this,t(6)(e))},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,t){(function(){var e=t(0),r=e.type,a=e.assertArray,o=(e.assertObject,e.reduceMap),i=e.identity,u={$gt:"gt",$lt:"lt",$lte:"lte",$gte:"gte",$ge:"ge",$le:"le"},c={$asc:":asc",$desc:":desc",$exact:":exact",$missing:":missing",$null:":missing",$text:":text"},s=function(e,n){if("$sort"===e)return function(e){var n,t,o,i;for(a(e),o=[],n=0,t=e.length;n<t;n++)switch(i=e[n],r(i)){case"array":o.push({param:"_sort",value:i[0],modifier:":"+i[1]});break;case"string":o.push({param:"_sort",value:i});break;default:o.push(void 0)}return o}(n);if("$has"===e)return o(n,(function(e,n){var t,a;return t=n[0],a=n[1],e.concat(function(){switch(r(a)){case"array":return a.map((function(e){return{param:"_has",value:t+"="+e}}));case"string":return[{param:"_has",value:t+"="+a}]}}())}));if("$include"===e||"$revInclude"===e)return function(e,n){return o(e,(function(e,t){var a,o;return a=t[0],o=t[1],e.concat(function(){switch(r(o)){case"array":return o.map((function(e){return{param:"$include"===n?"_include":"_revinclude",value:a+":"+e}}));case"string":return[{param:"$include"===n?"_include":"_revinclude",value:a+":"+o}]}}())}))}(n,e);switch(r(n)){case"object":return function(e,n){return o(n,(function(t,o){var i,l,d,f;return i=o[0],f=o[1],t.concat("$and"===i?a(f).reduce((function(n,t){return n.concat(s(e,t))}),[]):"$type"===i?[]:function(e){return 0===e.indexOf("$")}(i)?(l={param:e},"$or"===i?l.value=f:(u[i]&&(l.operator=u[i]),c[i]&&(l.modifier=c[i]),"object"===r(f)&&f.$or?l.value=f.$or:l.value=[f]),[l]):(n.$type&&(d=":"+n.$type),s(""+e+(d||"")+"."+i,f)))}))}(e,n);case"string":case"number":return[{param:e,value:[n]}];case"array":return[{param:e,value:[n.join("|")]}];default:throw"could not linearizeParams "+r(n)}},l=function(e){return o(e,(function(e,n){var t,r;return t=n[0],r=n[1],e.concat(s(t,r))}))},d=function(e){var n,t,r=["_include","_revinclude","_has"];return function(){var a,o,u,c;for(c=[],a=0,o=(u=l(e)).length;a<o;a++)n=u[a],t=-1===r.indexOf(n.param)?encodeURIComponent(n.value):n.value,c.push([n.param,n.modifier,"_has"==n.param?":":"=",n.operator,t].filter(i).join(""));return c}().join("&")};n._query=l,n.query=d;var f=t(1);n.$SearchParams=f.$$Attr("url",(function(e){var n=e.url;return e.query?n+"?"+d(e.query):n})),n.$Paging=function(e){return function(n){var t=n.params||{};return n.since&&(t._since=n.since),n.count&&(t._count=n.count),n.params=t,e(n)}}}).call(this)},function(e,n,t){(function(){var e,r=t(1),a=t(9).btoa;n.$Basic=r.$$Attr("headers.Authorization",(function(e){if(e.auth&&e.auth.user&&e.auth.pass)return"Basic "+a(e.auth.user+":"+e.auth.pass)})),n.$Bearer=r.$$Attr("headers.Authorization",(function(e){if(e.auth&&e.auth.bearer)return"Bearer "+e.auth.bearer})),n.$Credentials=r.Middleware(r.$$Attr("credentials",(function(n){return e=n.credentials,""}))).and(r.$$Attr("credentials",(function(n){if(["same-origin","include"].indexOf(e)>-1)return e})))}).call(this)},function(e,n,t){!function(){var e=n,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function r(e){this.message=e}r.prototype=new Error,r.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var n,a,o=String(e),i=0,u=t,c="";o.charAt(0|i)||(u="=",i%1);c+=u.charAt(63&n>>8-i%1*8)){if((a=o.charCodeAt(i+=3/4))>255)throw new r("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n=n<<8|a}return c}),e.atob||(e.atob=function(e){var n=String(e).replace(/=+$/,"");if(n.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var a,o,i=0,u=0,c="";o=n.charAt(u++);~o&&(a=i%4?64*a+o:o,i++%4)?c+=String.fromCharCode(255&a>>(-2*i&6)):0)o=t.indexOf(o);return c})}()},function(e,n,t){(function(){var e=t(0);n.Http=function(e,n){return function(t){t.debug&&console.log("\nDEBUG (request):",t.method,t.url,t);var r=(t.http||n.http||e.http)(t);return t.debug&&r&&r.then&&r.then((function(e){console.log("\nDEBUG: (responce)",e)})),r}};n.$JsonData=function(n){return function(t){var r,a=t.bundle||t.data||t.resource;return a&&(t.data=(r=a,"object"==e.type(r)||"array"==e.type(r)?JSON.stringify(r):r)),n(t)}}}).call(this)},function(e,n){e.exports=function(e){return function(n){try{return e(n)}catch(e){if(n.debug&&(console.log("\nDEBUG: (ERROR in middleware)"),console.log(e.message),console.log(e.stack)),!n.defer)throw console.log("\nDEBUG: (ERROR in middleware)"),console.log(e.message),console.log(e.stack),new Error("I need adapter.defer");var t=n.defer();return t.reject(e),t.promise}}}},function(e,n){(function(){var n=function(e,n,t){var r=e[t];return r&&!n[t]&&(n[t]=r),e};e.exports=function(e,t){return function(r){return function(a){return n(e,a,"baseUrl"),n(e,a,"cache"),n(e,a,"auth"),n(e,a,"patient"),n(e,a,"debug"),n(e,a,"credentials"),n(e,a,"headers"),n(e,a,"agentOptions"),n(t,a,"defer"),n(t,a,"http"),r(a)}}}}).call(this)},function(e,n){n.$$BundleLinkUrl=function(e){return function(n){return function(t){var r=t.bundle&&(t.bundle.link||[]).filter((function(n){return n.relation&&n.relation===e}))[0];return r&&r.url&&(t.url=r.url,t.data=null),n(t)}}}},function(e,n,t){(function(){var e=t(1),r=["Account","AllergyIntolerance","BodySite","CarePlan","Claim","ClinicalImpression","Communication","CommunicationRequest","Composition","Condition","Contract","DetectedIssue","Device","DeviceUseRequest","DeviceUseStatement","DiagnosticOrder","DiagnosticReport","DocumentManifest","DocumentReference","Encounter","EnrollmentRequest","EpisodeOfCare","FamilyMemberHistory","Flag","Goal","ImagingObjectSelection","ImagingStudy","Immunization","ImmunizationRecommendation","List","Media","MedicationAdministration","MedicationDispense","MedicationOrder","MedicationStatement","NutritionOrder","Observation","Order","Procedure","ProcedureRequest","QuestionnaireResponse","ReferralRequest","RelatedPerson","RiskAssessment","Specimen","SupplyDelivery","SupplyRequest","VisionPrescription"];n.$WithPatient=e.$$Simple((function(e){var n=e.type;return e.patient&&("Patient"===n?(e.query=e.query||{},e.query._id=e.patient,e.id=e.patient):r.indexOf(n)>=0&&(e.query=e.query||{},e.query.patient=e.patient)),e}))}).call(this)},function(e,n,t){(function(){var n=t(0),r=/^#(.*)/,a=function(e){var t=e.cache,a=e.reference,o=e.bundle,i=a;if(!i.reference)return null;if(i.reference.match(r))return function(e,n){var t=e.match(r)[1],a=(n.contained||[]).filter((function(e){return(e.id||e._id)==t}))[0];return a&&{content:a}||null}(i.reference,e.resource);var u=n.absoluteUrl(e.baseUrl,i.reference);return(o&&o.entry||[]).filter((function(e){return e.id===u}))[0]||(null!=t?t[u]:void 0)||null};e.exports.sync=a,e.exports.resolve=function(e){return function(t){var o=a(t),i=t.reference,u=t.defer();if(o){if(!t.defer)throw new Error("I need promise constructor 'adapter.defer' in adapter");return u.resolve(o),u.promise}if(!i)throw new Error("No reference found");if(i&&i.reference.match(r))throw new Error("Contained resource not found");return t.url=n.absoluteUrl(t.baseUrl,i.reference),t.data=null,e(t)}}}).call(this)},function(e,n,t){(function(){t(0);var e=t(1),r=function(n,t){var a=function(e){return t&&n.includes("target.versionId")&&!e.target.versionId?t(e):(t&&t(e)+"/"||"")+function(e,n){var t=function(e,n){return 0==e.indexOf(":")?function(e,n){for(var t,r=e.split("||").map((function(e){return e.trim().substring(1)})),a=0;a<r.length;a++){var o=(t=n,r[a].split(".").reduce((function(e,n){return"versionId"===n&&e[n]?"_history/"+e[n]:null==e||null==e?null:e[n]}),t));if(o)return o}return null}(e,n):e}(e.trim(),n);if((null==t||void 0===t)&&0==e.includes("target.versionId"))throw new Error("Parameter "+e+" is required: "+JSON.stringify(n));return t}(n,e)},o=e.Attribute("url",a);return o.slash=function(e){return r(e,a)},o};n.Path=r}).call(this)},function(e,n){(function(){var n,t;function r(e,r,a,o){t.defer();n.search(e).then((function(e){(function e(r,a){var o,i=r.data.entry||[],u=[];for(o=0;o<i.length;o++)u.push(i[o].resource);a(u);var c=t.defer();return n.nextPage({bundle:r.data}).then((function(n){e(n,a).then((function(e){c.resolve()}))}),(function(e){c.resolve()})),c.promise})(e,r).then((function(){a()}),(function(e){o(e)}))}),(function(e){o(e)}))}function a(e){var n=t.defer(),a=[];return r(e,(function(e){e.forEach((function(e){a.push(e)}))}),(function(){n.resolve(a)}),(function(e){n.reject(e)})),n.promise}function o(e,r){var a=t.defer();return n.search(e).then((function(e){var t={},o=[function(){a.resolve(e,t)}];function i(e,r,a){o.push((function(){!function(e,r,a){var o=a.reference;n.resolve({bundle:e,resource:r,reference:a}).then((function(e){var n=e.data||e.content;t[o]=n,u()}))}(e,r,a)}))}function u(){o.pop()()}var c=e.data;c.entry&&c.entry.forEach((function(e){var n=e.resource,a=n.resourceType;r&&r.forEach((function(e){var r=e.split("."),o=r[0],u=r[1],s=n[u];if(a===o&&s){var l=s.reference;t[l]||i(c,n,s)}}))})),u()}),(function(){a.reject("Could not fetch search results")})),a.promise}e.exports=function(e,i){return n=e,t=i,e.drain=r,e.fetchAll=a,e.fetchAllWithReferences=o,e}}).call(this)}]);