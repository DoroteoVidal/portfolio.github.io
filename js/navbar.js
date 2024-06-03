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
        if(event.target.matches("#hello")) {
            push(event, ".navbar-item", "selected", "#content");

        } else if(event.target.matches("#projects")) {
            push(event, ".navbar-item", "selected", "#content");
            showFirst("html/projects.html", "html/projects/scooters.html", "eCommerce", "#project-content");

        } else if(event.target.matches("#about")) {
            push(event, ".navbar-item", "selected", "#content");
            showFirst("html/about.html", "html/biography.html", "biography", "#about-content");

        } else if(event.target.matches("#biography, #experience, #education, #skills")) {
            push(event, ".aside-item", "aside-selected", "#about-content");
        }
    });

    function showFirst(path, htmlFile, id, container) {
        fetch(path).then(response => {
            if(!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.text();
            
        }).then(() => {
            selectTab(id, ".aside-item", "aside-selected");
            showHtml(htmlFile, container);
        });
       
        
    }

});