const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o=null;function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n.style.backgroundColor=d(),o=setInterval((()=>{n.style.backgroundColor=d()}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.7f4c773c.js.map
