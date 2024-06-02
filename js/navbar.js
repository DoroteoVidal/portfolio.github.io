"use strict"

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#hello").classList.add("selected");
    showHtml("html/hello.html", "#content");

    function selectTab(id, element, cssClass) {
        document    
            .querySelectorAll(element)
            .forEach((item) => item.classList.remove(cssClass));   

        document    
            .querySelectorAll("#" + id) 
            .forEach((item) => item.classList.add(cssClass)); 
    }

    function push(event, element, cssClass, container) {
        let id = event.target.id;
        selectTab(id, element, cssClass);
        showHtml(`html/${id}.html`, container);
    }

    document.body.addEventListener("click", function(event) {
        if(event.target.matches("#hello, #projects")) {
            push(event, ".navbar-item", "selected", "#content");

        } else if(event.target.matches("#about")) {
            push(event, ".navbar-item", "selected", "#content");
            observeDOM();
        } else if(event.target.matches("#biography, #experience, #education, #skills")) {
            push(event, ".aside-about-item", "aside-about-selected", "#about-content");
        }
    });

});