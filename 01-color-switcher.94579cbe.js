!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n.style.backgroundColor=r(),o=setInterval((function(){n.style.backgroundColor=r()}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.94579cbe.js.map