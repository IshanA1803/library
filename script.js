//Fix the heights of header,content and footer.
const header=document.querySelector("header");
const content=document.querySelector(".content");
const footer=document.querySelector("footer");
const body=document.querySelector("body");
const contentHeight=(body.offsetHeight-(header.offsetHeight+footer.offsetHeight))+"px";
content.style.height=contentHeight;//Don't use setAttribute as it doesn't work on block elements.