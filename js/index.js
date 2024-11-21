const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");
    let menuVisible = false;

    menuToggle.addEventListener("click", () => {
        menuVisible = !menuVisible;
        dropdownMenu.className = menuVisible ? "menu-open absolute top-16 left-4 bg-white rounded-lg shadow-lg w-64 p-4 z-10" : "menu-closed";
    });