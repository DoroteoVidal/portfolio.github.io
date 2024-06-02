
const items = Array.from({ length: 100 }, (_, i) => `${i + 1}`);

function renderItems() {
    const container = document.getElementById("p-container");
    if (!container) return;
    
    container.innerHTML = '';

    // 108 es la sumatoria del alto del toolbar, navbar, footer 
    // y padding de .about-content-section section
    const screenHeight = window.innerHeight - 108; 
    const itemHeight = 24;
    const itemsPerColumn = Math.floor(screenHeight / itemHeight);
    const itemsToShow = items.slice(0, itemsPerColumn);

    itemsToShow.forEach(item => {
        const p = document.createElement('p');
        if(item > 5) {
            p.className = "p-border";
            p.textContent = item;
            container.appendChild(p);
        } else {
            p.className = "p-no-border";
            p.textContent = item;
            container.appendChild(p);
        }
    });
}

function observeDOM() {
    const observer = new MutationObserver((mutations, obs) => {
        if (document.getElementById("p-container")) {
            renderItems();
            obs.disconnect();
            window.addEventListener('resize', renderItems);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

