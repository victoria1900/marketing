function filterSelection(e){var s,t=document.getElementsByClassName("filterDiv");for("all"==e&&(e=""),s=0;s<t.length;s++)w3RemoveClass(t[s],"show"),-1<t[s].className.indexOf(e)&&w3AddClass(t[s],"show")}function w3AddClass(e,s){for(var t=e.className.split(" "),a=s.split(" "),n=0;n<a.length;n++)-1==t.indexOf(a[n])&&(e.className+=" "+a[n])}function w3RemoveClass(e,s){for(var t=e.className.split(" "),a=s.split(" "),n=0;n<a.length;n++)for(;-1<t.indexOf(a[n]);)t.splice(t.indexOf(a[n]),1);e.className=t.join(" ")}filterSelection("all");for(var btnContainer=document.getElementById("myBtnContainer"),btns=btnContainer.getElementsByClassName("btn"),i=0;i<btns.length;i++)btns[i].addEventListener("click",function(){var e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"});
//# sourceMappingURL=filter.js.map