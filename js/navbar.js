"use strict"

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#hello").classList.add("selected");
    showHtml("html/hello.html");

    function selectTab(id) {
        document    
            .querySelectorAll('.navbar-item')
            .forEach((item) => item.classList.remove("selected"));
        document    
            .querySelectorAll('#' + id) 
            .forEach((item) => item.classList.add("selected")); 
    }

    function push(event) {
        let id = event.target.id;
        selectTab(id);
        document.tittle = id;
        showHtml(`html/${id}.html`);
    }

    window.onload = (event) => {
        document.querySelector("#hello").addEventListener("click", (event) => push(event));
        document.querySelector("#about").addEventListener("click", (event) => push(event));
        document.querySelector("#projects").addEventListener("click", (event) => push(event));
    }

    
});