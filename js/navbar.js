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

    function push(event, element, cssClass, path, container) {
        let id = event.target.id;
        selectTab(id, element, cssClass);
        showHtml(path, container);
    }

    document.body.addEventListener("click", function(event) {

        // ----Nav-bar----
        if(event.target.matches("#hello")) {
            push(event, ".navbar-item", "selected", "html/hello.html", "#content");

        } else if(event.target.matches("#projects")) {
            push(event, ".navbar-item", "selected", "html/projects.html", "#content");
            showFirst("html/projects.html", "html/projects/eCommerce.html", "eCommerce", "#project-content");

        } else if(event.target.matches("#about")) {
            push(event, ".navbar-item", "selected", "html/about.html", "#content");
            showFirst("html/about.html", "html/about/biography.html", "biography", "#about-content");

        // ----About-sidebar----
        } else if(event.target.matches("#biography, #experience, #education")) {
            push(event, ".aside-item", "aside-selected", `html/about/${event.target.id}.html`, "#about-content");

        // ----Skills-sidebar----
        } else if(event.target.matches("#skills")) {
            showFirst("html/about.html", "html/skills/technologies.html", "technologies", "#about-content");
            addClass("#skills", "#skills-items");
        
        } else if(event.target.matches("#technologies, #softSkills")) {
            push(event, ".aside-item", "aside-selected", `html/skills/${event.target.id}.html`, "#about-content");
        
        // ----Extras-sidebar----
        } else if(event.target.matches("#extras")) {
            showFirst("html/about.html", "html/extras/certificates.html", "certificates", "#about-content");
            addClass("#extras", "#extras-items");
        
        } else if(event.target.matches("#certificates, #hobbies, #languages")) {
            push(event, ".aside-item", "aside-selected", `html/extras/${event.target.id}.html`, "#about-content");

        // -----Project-sidebar-----
        } else if(event.target.matches("#eCommerce, #scooters, #diary, #exams")) {
            push(event, ".aside-item", "aside-selected", `html/projects/${event.target.id}.html`, "#project-content");
        }
    });

    function addClass(elementId, listItems) {
        document.querySelector(elementId).firstElementChild.classList.add("drop-down");
        document.querySelector(listItems).classList.add("show");
    }

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