(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),o=(t(13),t(1));t(15);function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"WordCount"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"About"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function i(e){var a=Object(n.useState)("Enter the text here"),t=Object(o.a)(a,2),r=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"light"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){c(e.target.value)},style:{backgroundColor:"light"===e.mode?"black":"white",color:"light"===e.mode?"white":"black"},id:"mybox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var e=r.toUpperCase();c(e)}},"Convert To UpperCase"),l.a.createElement("button",{className:"btn btn-primary mx-2 ",onClick:function(){var e=r.toLowerCase();c(e)}},"Convert To LowerCase"),l.a.createElement("button",{className:"btn btn-primary mx-2 ",onClick:function(){c(" ")}},"Clear Text")),l.a.createElement("div",{className:"container  my-3",style:{color:"light"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,l.a.createElement("b",null,r.split(" ").length," words and ",r.length," characters")),l.a.createElement("p",null,.008*r.split(" ").length," Minutes Read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something in the textbox to Preview")))}var s=function(){var e=Object(n.useState)("dark"),a=Object(o.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{mode:t,toggleMode:function(){"light"===t?(r("dark"),document.body.style.backgroundColor="white"):(r("light"),document.body.style.backgroundColor="black")}}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(i,{heading:"Enter Your Text To Analyze",mode:t})))},u=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,18)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null))),u()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.0ba3a388.chunk.js.map