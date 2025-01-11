function openTab(tabName) {
    const tabs = document.querySelectorAll(".tabcontent");
    tabs.forEach(function(tab) {
        tab.classList.remove("active");
    });

    const activeTab = document.getElementById(tabName);
    activeTab.classList.add("active");
}


function scrollToSection(sectionId) {
    openTab(sectionId);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


window.addEventListener("load", function() {
    openTab("home");
});
