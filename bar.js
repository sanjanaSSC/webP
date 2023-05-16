const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");

dark.addEventListener("click", ()=>{
    sidebar.className ="sidebar";
    activeListener ="list-item active"
})
night.addEventListener("click", ()=>{
    sidebar.className ="sidebar night";
    activeListener ="list-item active night"
})
light.addEventListener("click", ()=>{
    sidebar.className ="sidebar light";
    activeListener ="list-item active light"
})