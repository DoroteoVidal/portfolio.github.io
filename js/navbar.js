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
        if(event.target.matches("#hello, #about, #projects")) {
            push(event, ".navbar-item", "selected", "#content");
        } else if(event.target.matches("#biography, #experience, #education, #skills")) {
            push(event, ".aside-about-item", "aside-about-selected", "#about-content");
        }
    });

    /*function addListeners() {
        const hello = document.querySelector("#hello");
        const about = document.querySelector("#about");
        const projects = document.querySelector("#projects");
        const biography = document.querySelector("#biography");
        const experience = document.querySelector("#experience");
        const education = document.querySelector("#education");
        const skills = document.querySelector("#skills");

        if(hello) hello.addEventListener("click", (event) => push(event, "#content"));
        if(about) about.addEventListener("click", (event) => push(event, "#content"));
        if(projects) projects.addEventListener("click", (event) => push(event, "#content"));
        if(biography) biography.addEventListener("click", (event) => push(event, "#about-content"));
        if(experience) experience.addEventListener("click", (event) => push(event, "#about-content"));
        if(education) education.addEventListener("click", (event) => push(event, "#about-content"));
        if(skills) skills.addEventListener("click", (event) => push(event, "#about-content"));
    }

    addListeners();

    const observer = new MutationObserver((mutations) => {
        for(let mutation of mutations) {
            if(mutation.type === "childList") {
                addListeners();
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });*/

});